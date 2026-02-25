// lib/schema.ts
// All JSON-LD structured data for Mitanshu Goel's portfolio

export const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://mitanshugoel.dev/#person',
    name: 'Mitanshu Goel',
    givenName: 'Mitanshu',
    familyName: 'Goel',
    email: 'mailto:mitanshug2004@gmail.com',
    url: 'https://mitanshugoel.dev',
    image: 'https://mitanshugoel.dev/og-image.png',
    jobTitle: 'AI & Robotics Engineer',
    description:
        'AI and robotics systems engineer specializing in edge-deployed inference, robot perception, and embedded AI systems.',
    knowsAbout: [
        'Robot Operating System (ROS/ROS2)',
        'Machine Learning',
        'Computer Vision',
        'YOLOv8',
        'Edge Inference',
        'Embedded Systems',
        'PyTorch',
        'Stable Diffusion',
        'Retrieval-Augmented Generation',
        'Inverse Kinematics',
    ],
    alumniOf: {
        '@type': 'CollegeOrUniversity',
        '@id': 'https://www.mait.ac.in',
        name: 'Maharaja Agrasen Institute of Technology',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Delhi',
            addressCountry: 'IN',
        },
    },
    hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'Bachelor of Technology in Electronics & Communication Engineering',
        recognizedBy: {
            '@type': 'CollegeOrUniversity',
            name: 'Maharaja Agrasen Institute of Technology',
        },
    },
    worksFor: {
        '@type': 'Organization',
        name: 'A.T.O.M Robotics Club',
        memberOf: {
            '@type': 'CollegeOrUniversity',
            name: 'Maharaja Agrasen Institute of Technology',
        },
    },
    sameAs: [
        'https://github.com/mitanshu-2004',
        'https://linkedin.com/in/mitanshugoel',
    ],
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Delhi',
        addressCountry: 'IN',
    },
}

export const projectListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Projects by Mitanshu Goel',
    author: { '@id': 'https://mitanshugoel.dev/#person' },
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            item: {
                '@type': 'SoftwareApplication',
                '@id': 'https://mitanshugoel.dev/#darwin-studio',
                name: 'Darwin Studio',
                description:
                    'Evolutionary image generation engine using SDXL latent tensor manipulation with custom SLERP interpolation for geometric consistency in latent space crossover operations.',
                applicationCategory: 'AI / Generative Image System',
                creator: { '@id': 'https://mitanshugoel.dev/#person' },
                programmingLanguage: ['Python', 'PyTorch'],
                codeRepository: 'https://github.com/mitanshu-2004/darwin-studio',
            },
        },
        {
            '@type': 'ListItem',
            position: 2,
            item: {
                '@type': 'SoftwareApplication',
                '@id': 'https://mitanshugoel.dev/#hexapod',
                name: 'HEXAPOD',
                description:
                    'Multi-legged locomotion system with ROS2-based control stack deployed on Raspberry Pi via Docker. Inverse kinematics computed geometrically for deterministic real-time execution.',
                applicationCategory: 'Robotics / Locomotion System',
                creator: { '@id': 'https://mitanshugoel.dev/#person' },
                programmingLanguage: ['Python', 'C++'],
                codeRepository: 'https://github.com/mitanshu-2004/hexapod',
            },
        },
        {
            '@type': 'ListItem',
            position: 3,
            item: {
                '@type': 'SoftwareApplication',
                '@id': 'https://mitanshugoel.dev/#memory-assistant',
                name: 'Memory Assistant — Local RAG Pipeline',
                description:
                    'Privacy-first retrieval-augmented generation pipeline running entirely offline using Phi-3 (4-bit quantized) via llama.cpp with hybrid dense-vector and keyword retrieval.',
                applicationCategory: 'AI / Natural Language Processing',
                creator: { '@id': 'https://mitanshugoel.dev/#person' },
                programmingLanguage: ['Python', 'TypeScript'],
                codeRepository: 'https://github.com/mitanshu-2004/memory-assistant',
            },
        },
        {
            '@type': 'ListItem',
            position: 4,
            item: {
                '@type': 'SoftwareApplication',
                '@id': 'https://mitanshugoel.dev/#sentinel',
                name: 'SENTINEL',
                description:
                    'Offline mesh emergency communication system using ESP-NOW protocol across ESP32 nodes with embedded fall detection and gas hazard sensing — zero internet dependency.',
                applicationCategory: 'Embedded Systems / IoT',
                creator: { '@id': 'https://mitanshugoel.dev/#person' },
                programmingLanguage: ['C++', 'Python'],
                codeRepository: 'https://github.com/mitanshu-2004/sentinel',
            },
        },
    ],
}

export const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Who is Mitanshu Goel?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Mitanshu Goel is an AI and robotics engineer based in Delhi, India, currently completing a B.Tech in Electronics & Communication Engineering with a minor in AI/ML at Maharaja Agrasen Institute of Technology. He specializes in edge-deployed inference systems, robot perception, and embedded AI, with internship experience at SarthakAI and Nextup Robotics.',
            },
        },
        {
            '@type': 'Question',
            name: 'What projects has Mitanshu Goel built?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Mitanshu Goel has built four primary projects: Darwin Studio (an evolutionary image generation engine using SDXL latent manipulation with custom SLERP), HEXAPOD (a multi-legged robot with ROS2 control deployed on Raspberry Pi), Memory Assistant (a local-first RAG pipeline using Phi-3 and llama.cpp with hybrid retrieval), and SENTINEL (an offline ESP-NOW mesh emergency communication system with embedded fall detection).',
            },
        },
        {
            '@type': 'Question',
            name: "What is Mitanshu Goel's technical specialization?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Mitanshu Goel specializes in building AI systems under hardware constraints — from ESP32 embedded firmware and ROS2 robotics to SDXL latent space optimization and CPU-only LLM inference. His work spans robot perception (YOLOv8, ROS2, MoveIt), generative AI (SDXL, LoRA, diffusion models), and local inference systems (llama.cpp, ChromaDB, RAG pipelines).',
            },
        },
        {
            '@type': 'Question',
            name: 'Is Mitanshu Goel available for internship or full-time roles?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Mitanshu Goel is open to research engineering, ML engineering, and robotics software engineering roles — full-time or internship. He can be contacted at mitanshug2004@gmail.com.',
            },
        },
    ],
}

export const workExperienceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Work Experience of Mitanshu Goel',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            item: {
                '@type': 'OrganizationRole',
                roleName: 'AI & Robotics Intern',
                startDate: '2025-06',
                endDate: '2025-08',
                worksFor: {
                    '@type': 'Organization',
                    name: 'SarthakAI',
                    address: { '@type': 'PostalAddress', addressLocality: 'Delhi', addressCountry: 'IN' },
                },
                description: 'Real-time voice pipeline with NVIDIA NeMo STT, YOLOv8 deployment for physical robot tasks, fault-tolerant robot-AI interface architecture, ESP32/Raspberry Pi hardware telemetry workstation.',
            },
        },
        {
            '@type': 'ListItem',
            position: 2,
            item: {
                '@type': 'OrganizationRole',
                roleName: 'Robotics Intern',
                startDate: '2024-07',
                endDate: '2024-09',
                worksFor: {
                    '@type': 'Organization',
                    name: 'Nextup Robotics',
                    address: { '@type': 'PostalAddress', addressLocality: 'Delhi', addressCountry: 'IN' },
                },
                description: '6-DOF robotic arm configuration in ROS/Gazebo, MoveIt inverse kinematics and collision-aware trajectory planning in C++, 50% execution time reduction via shortest-path algorithm selection.',
            },
        },
    ],
}
