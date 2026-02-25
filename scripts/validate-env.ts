/**
 * Environment Variable Validation Script
 * Run this during deployment to ensure all required config is present
 */

const requiredEnvVars = [
  {
    name: 'GROQ_API_KEY',
    description: 'Groq API key for LLM access',
    required: true,
  },
  {
    name: 'CONTACT_EMAIL',
    description: 'Contact email shown to users',
    required: false,
    default: 'mitanshug2004@gmail.com',
  },
  {
    name: 'SENTRY_DSN',
    description: 'Sentry DSN for error tracking',
    required: false,
  },
]

export function validateEnvironment(): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  // Check Node.js version
  const nodeVersion = process.version
  const majorVersion = parseInt(nodeVersion.split('.')[0].slice(1))
  if (majorVersion < 18) {
    errors.push(`Node.js 18+ required, found ${nodeVersion}`)
  }

  // Check required environment variables
  for (const envVar of requiredEnvVars) {
    const value = process.env[envVar.name]

    if (envVar.required && !value) {
      errors.push(`Missing required env var: ${envVar.name}`)
    }

    if (value) {
      // Validate specific variables
      if (envVar.name === 'GROQ_API_KEY') {
        if (!value.startsWith('gsk_')) {
          errors.push(`Invalid GROQ_API_KEY format (should start with 'gsk_')`)
        }
        if (value.length < 30) {
          errors.push(`GROQ_API_KEY seems too short`)
        }
      }

      if (envVar.name === 'SENTRY_DSN' && value) {
        if (!value.startsWith('https://')) {
          errors.push(`Invalid SENTRY_DSN format (should start with 'https://')`)
        }
      }

      if (envVar.name === 'CONTACT_EMAIL' && value) {
        if (!value.includes('@')) {
          errors.push(`Invalid CONTACT_EMAIL format`)
        }
      }
    }

    // Set default values
    if (!value && envVar.default) {
      process.env[envVar.name] = envVar.default
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

/**
 * Print validation report
 */
export function printValidationReport(): void {
  console.log('\n=== Environment Validation Report ===\n')

  const validation = validateEnvironment()

  for (const envVar of requiredEnvVars) {
    const value = process.env[envVar.name]
    const status = value ? '✓' : '✗'
    const type = envVar.required ? '[REQUIRED]' : '[OPTIONAL]'

    console.log(`${status} ${envVar.name} ${type}`)
    console.log(`  ├─ Description: ${envVar.description}`)

    if (value) {
      // Mask sensitive values
      if (envVar.name.includes('KEY') || envVar.name.includes('DSN')) {
        const masked = value.substring(0, 10) + '*'.repeat(Math.max(0, value.length - 10))
        console.log(`  ├─ Value: ${masked}`)
      } else {
        console.log(`  ├─ Value: ${value}`)
      }
    } else if (envVar.default) {
      console.log(`  ├─ Using default: ${envVar.default}`)
    }

    console.log('')
  }

  if (validation.errors.length > 0) {
    console.log('❌ Validation Failed:\n')
    validation.errors.forEach((error) => {
      console.log(`   • ${error}`)
    })
    console.log('')
    process.exit(1)
  } else {
    console.log('✓ All environment variables are valid!\n')
  }
}

// Run if executed directly
if (require.main === module) {
  printValidationReport()
}
