// lib/schema.ts
// All JSON-LD structured data for Mitanshu Goel's portfolio

export const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://mitanshu.me/#person',
    name: 'Mitanshu Goel',
    givenName: 'Mitanshu',
    familyName: 'Goel',
    email: 'mailto:mitanshug2004@gmail.com',
    url: 'https://mitanshu.me',
    image: 'https://mitanshu.me/og-image.png',
    jobTitle: 'Robotics & AI Engineer',
    description:
        'Robotics software engineer and AI/ML engineer. Building a bimanual VR teleoperation rig at Variety Innovation / Enferent.ai, and conducting continued-pretraining runs on self-scraped Reddit corpora. ECE graduate from MAIT Delhi (2026).',
    knowsAbout: [
        'Robot Operating System (ROS 2)',
        'Real-time C++ control loops',
        'Continued pretraining (CPT)',
        'LoRA / rsLoRA / PEFT',
        'Machine Learning',
        'Computer Vision',
        'YOLOv8',
        'Edge Inference',
        'Embedded Systems',
        'PyTorch',
        'Stable Diffusion / SDXL',
        'Retrieval-Augmented Generation',
        'Inverse Kinematics',
        'Pinocchio',
        'Hugging Face',
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
        name: 'Variety Innovation / Enferent.ai',
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
    author: { '@id': 'https://mitanshu.me/#person' },
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            item: {
                '@type': 'SoftwareApplication',
                '@id': 'https://mitanshu.me/#reddit-cpt',
                name: 'Reddit CPT, 6 Training Runs',
                description:
                    'Six continued-pretraining runs on a self-scraped Reddit corpus. Mistral 7B (r=128, r=256), Qwen 2.5 (7B r=128, 3B r=16, 1.5B structured), and a from-scratch nanoGPT (~50 M params). Full data pipeline and inference test in one repo. Three adapters public on Hugging Face.',
                applicationCategory: 'AI / Foundation Model Training',
                creator: { '@id': 'https://mitanshu.me/#person' },
                programmingLanguage: ['Python', 'PyTorch'],
                codeRepository: 'https://github.com/mitanshu-2004/reddit-cpt-training-scripts',
            },
        },
        {
            '@type': 'ListItem',
            position: 2,
            item: {
                '@type': 'SoftwareApplication',
                '@id': 'https://mitanshu.me/#hexapod',
                name: 'HEXAPOD (atom-robotics-lab)',
                description:
                    'Sole-authored the 18-DoF hexapod ROS 2 stack. URDF xacro (533/569 lines), ros2_control hardware interface (305 lines), a Dockerised runtime with NVIDIA + CycloneDDS, and the Gazebo Classic to Ignition Fortress migration.',
                applicationCategory: 'Robotics / Locomotion System',
                creator: { '@id': 'https://mitanshu.me/#person' },
                programmingLanguage: ['Python', 'C++'],
                codeRepository: 'https://github.com/atom-robotics-lab/Hexapod',
            },
        },
        {
            '@type': 'ListItem',
            position: 3,
            item: {
                '@type': 'SoftwareApplication',
                '@id': 'https://mitanshu.me/#memory-assistant',
                name: 'Memory Assistant, Hybrid Retrieval + Local RAG',
                description:
                    'Offline memory store with hybrid dense + keyword retrieval. /api/v1/ask is the real RAG path. Retrieve memories, format cited context, generate via local Phi-3 GGUF (llama.cpp), return a source-grounded answer with citations.',
                applicationCategory: 'AI / Natural Language Processing',
                creator: { '@id': 'https://mitanshu.me/#person' },
                programmingLanguage: ['Python', 'TypeScript'],
                codeRepository: 'https://github.com/mitanshu-2004/memory-assistant',
            },
        },
        {
            '@type': 'ListItem',
            position: 4,
            item: {
                '@type': 'SoftwareApplication',
                '@id': 'https://mitanshu.me/#sentinel',
                name: 'SENTINEL',
                description:
                    'Offline mesh emergency communication system using ESP-NOW across ESP32 nodes. No Wi-Fi or cellular infrastructure. Fall detection via MPU6050 + dual-axis threshold analysis. Gas hazard sensing in the same firmware layer.',
                applicationCategory: 'Embedded Systems / IoT',
                creator: { '@id': 'https://mitanshu.me/#person' },
                programmingLanguage: ['C++'],
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
                text: 'Mitanshu Goel is a robotics and AI/ML engineer based in Delhi, India. He completed a B.Tech in Electronics & Communication Engineering with a minor in AI/ML at MAIT in 2026. He is currently building a bimanual VR teleoperation rig at Variety Innovation / Enferent.ai, and has conducted six continued-pretraining runs on a self-scraped Reddit corpus across Mistral 7B, Qwen 2.5, and a from-scratch nanoGPT.',
            },
        },
        {
            '@type': 'Question',
            name: "What are Mitanshu Goel's strongest projects?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For Physical AI and Robotics, the current bimanual VR teleoperation rig at Variety Innovation / Enferent.ai. Real-time C++ on Elite Robots CS66 and Franka Research 3 arms. Then the sole-authored ros2_control hardware interface in the atom-robotics-lab Hexapod repo. For Foundation Models and LLMs, six training runs at github.com/mitanshu-2004/reddit-cpt-training-scripts. Three artefacts public on Hugging Face. For RAG, the RAG-assistant with Pydantic structural anti-hallucination guards.',
            },
        },
        {
            '@type': 'Question',
            name: "What is Mitanshu Goel's technical specialization?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Mitanshu specializes in real-time robotics control (C++, SCHED_FIFO, mlockall on industrial arms), ROS 2 systems (ros2_control, Ignition Fortress, Pinocchio), and foundation-model adaptation (Unsloth, TRL, PEFT/LoRA, rsLoRA). He also builds evaluation-rigorous RAG systems and deploys inference under hardware constraints. llama.cpp on CPU, YOLOv8 on edge, NeMo STT on humanoids.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is Mitanshu Goel available for internship or full-time roles?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Available for full-time roles. Looking for Robotics SWE, Research Engineering, ML Engineering, or Applied and Foundation-Model AI roles. Based in Delhi, open to relocation. Contact mitanshug2004@gmail.com.',
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
                roleName: 'Robotics Software Engineer Intern',
                startDate: '2025-08',
                worksFor: {
                    '@type': 'Organization',
                    name: 'Variety Innovation / Enferent.ai',
                },
                description: 'Building a bimanual VR teleoperation rig. Meta Quest 3 drives an Elite Robots CS66 pair, and the same loop is being extended to a Franka Research 3 so the system covers both arm families. Runs on a real-time Linux scheduler (SCHED_FIFO, CPU pinning, mlockall). Damped-Jacobian IK via Pinocchio. Imitation-learning dataset recorder for downstream policy training.',
            },
        },
        {
            '@type': 'ListItem',
            position: 2,
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
                description: 'Real-time voice pipeline with NVIDIA NeMo FastConformer-Transducer STT + wake-word detection. YOLOv8 deployment for three production tasks on a UBTech Yanshee humanoid. Fault-tolerant robot-AI interface. ESP32/Raspberry Pi hardware telemetry workstation.',
            },
        },
        {
            '@type': 'ListItem',
            position: 3,
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
                description: '6-DOF robotic arm configuration in ROS/Gazebo. MoveIt inverse kinematics and collision-aware trajectory planning in C++. ~50% execution time reduction via planner selection and parameter tuning.',
            },
        },
    ],
}
