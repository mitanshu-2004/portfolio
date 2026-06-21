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
    jobTitle: 'Robotics & Physical AI Engineer',
    description:
        'Robotics and Physical AI engineer. Building a bimanual VR teleoperation rig and a robot-learning data pipeline on industrial arms at nFerent.ai, plus continued-pretraining runs on a self-scraped Reddit corpus. ECE graduate from MAIT Delhi (2026).',
    knowsAbout: [
        'Robot Operating System (ROS 2)',
        'Real-time C++ control loops',
        'VR teleoperation',
        'Robot-learning data pipelines',
        'Imitation learning',
        'Inverse kinematics',
        'Continued pretraining (CPT)',
        'LoRA / rsLoRA / PEFT',
        'Retrieval-Augmented Generation',
        'Machine Learning',
        'Computer Vision',
        'YOLOv8',
        'PyTorch',
        'Stable Diffusion / SDXL',
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
        name: 'nFerent.ai',
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
                '@id': 'https://mitanshu.me/#nferent-teleop',
                name: 'Bimanual VR Teleoperation',
                description:
                    'A real-time C++ teleoperation stack at nFerent.ai. A Meta Quest 3 drives two Elite Robots CS66 arms by Cartesian servoing, extended to a Franka Research 3, with One-Euro filtering, SE(3) smoothing, and singularity and step-cap safety guards. Records a dual RGB-D and robot-state imitation-learning dataset. Company work, no public repo.',
                applicationCategory: 'Robotics / Physical AI',
                creator: { '@id': 'https://mitanshu.me/#person' },
                programmingLanguage: ['C++', 'Python'],
            },
        },
        {
            '@type': 'ListItem',
            position: 2,
            item: {
                '@type': 'SoftwareApplication',
                '@id': 'https://mitanshu.me/#reddit-cpt',
                name: 'Continued pretraining on a Reddit corpus',
                description:
                    'Continued pretraining on a self-scraped Reddit corpus across three setups: a LoRA adapter on Mistral 7B, a QLoRA adapter on Qwen 2.5 through a hand-written accelerate DDP loop with token-offset sharding and resume-by-token-count, and a from-scratch nanoGPT (~50 M params). Proof-of-concept runs, stopped early, no eval yet. Artefacts kept private.',
                applicationCategory: 'AI / Foundation Model Training',
                creator: { '@id': 'https://mitanshu.me/#person' },
                programmingLanguage: ['Python', 'PyTorch'],
            },
        },
        {
            '@type': 'ListItem',
            position: 3,
            item: {
                '@type': 'SoftwareApplication',
                '@id': 'https://mitanshu.me/#hexapod',
                name: 'Hexapod',
                description:
                    'An 18-DoF hexapod built with ROS 2, run in simulation and on hardware. Worked on the control side: the tripod-gait and analytic inverse-kinematics node, the ros2_control hardware interface, and the launch wiring. The URDF model is CAD-exported. A.T.O.M. Robotics team project.',
                applicationCategory: 'Robotics / Locomotion System',
                creator: { '@id': 'https://mitanshu.me/#person' },
                programmingLanguage: ['Python', 'C++'],
                codeRepository: 'https://github.com/atom-robotics-lab/Hexapod',
            },
        },
        {
            '@type': 'ListItem',
            position: 4,
            item: {
                '@type': 'SoftwareApplication',
                '@id': 'https://mitanshu.me/#rag-assistant',
                name: 'RAG-assistant',
                description:
                    'A grounded policy Q&A system on Llama 3.3 70B (Groq) where a Pydantic model-validator rejects "Fully Answered" responses with empty citations at parse time. On a 9-question held-out rubric it returned 0 hallucinations with 8 of 9 answerability calls correct.',
                applicationCategory: 'AI / Natural Language Processing',
                creator: { '@id': 'https://mitanshu.me/#person' },
                programmingLanguage: ['Python'],
                codeRepository: 'https://github.com/mitanshu-2004/RAG-assistant',
            },
        },
        {
            '@type': 'ListItem',
            position: 5,
            item: {
                '@type': 'SoftwareApplication',
                '@id': 'https://mitanshu.me/#churn-survival',
                name: 'Churn Survival Model',
                description:
                    'A Cox proportional-hazards churn model on ~10,000 Steam reviews with LLM-extracted risk signals. The contribution is a leakage decomposition: most of the headline C-index lift re-encoded the label, leaving a defensible forward-looking gain of roughly +0.14, guarded by a contract test.',
                applicationCategory: 'Data Science / Survival Analysis',
                creator: { '@id': 'https://mitanshu.me/#person' },
                programmingLanguage: ['Python'],
                codeRepository: 'https://github.com/mitanshu-2004/llm-survival-churn',
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
                text: 'Mitanshu Goel is a robotics and Physical AI engineer based in Delhi, India. He completed a B.Tech in Electronics & Communication Engineering with a minor in AI/ML at MAIT in 2026. He is currently building a bimanual VR teleoperation rig and robot-learning data pipeline at nFerent.ai, and has run three continued-pretraining setups on a self-scraped Reddit corpus: a LoRA adapter on Mistral 7B, a QLoRA adapter on Qwen 2.5, and a from-scratch nanoGPT.',
            },
        },
        {
            '@type': 'Question',
            name: "What are Mitanshu Goel's strongest projects?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For Physical AI and Robotics, the current bimanual VR teleoperation rig at nFerent.ai: real-time C++ on Elite Robots CS66 and Franka Research 3 arms, with a multi-sensor capture tool feeding an imitation-learning dataset. Then the gait and inverse-kinematics control node and ros2_control integration on the A.T.O.M. Robotics Hexapod (a team project). For foundation models and LLMs, three continued-pretraining setups on a self-scraped Reddit corpus (Mistral 7B LoRA, Qwen 2.5 QLoRA via a hand-written distributed loop, and a from-scratch nanoGPT), artefacts kept private. For RAG, the RAG-assistant with Pydantic structural anti-hallucination guards.',
            },
        },
        {
            '@type': 'Question',
            name: "What is Mitanshu Goel's technical specialization?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Mitanshu works on real-time robotics control (C++, SCHED_FIFO, mlockall on industrial arms), VR teleoperation and robot-learning data pipelines, ROS 2 systems (ros2_control, MoveIt, Ignition Fortress), and foundation-model adaptation (Unsloth, TRL, PEFT/LoRA, rsLoRA). He also builds evaluation-rigorous RAG systems and runs inference under hardware constraints, such as Phi-3 on CPU via llama.cpp and YOLOv8 for vision.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is Mitanshu Goel available for full-time roles?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Available for full-time roles now. Looking for Physical AI, Robotics SWE, ML Engineering, or Research Engineering roles. Based in Delhi, open to roles across India and India-friendly remote. Contact mitanshug2004@gmail.com.',
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
                roleName: 'Robotics SWE & Physical AI Intern',
                startDate: '2026-03',
                worksFor: {
                    '@type': 'Organization',
                    name: 'nFerent.ai',
                    address: { '@type': 'PostalAddress', addressLocality: 'Gurugram', addressCountry: 'IN' },
                },
                description: 'Built a bimanual VR teleoperation stack. A Meta Quest 3 drives two Elite Robots CS66 arms by Cartesian servoing, extended to a Franka Research 3, on a real-time Linux scheduler (SCHED_FIFO, CPU pinning, mlockall) with One-Euro filtering, SE(3) smoothing, and singularity and step-cap guards. Diagnosed and patched a real-hardware URScript crash, and built a multi-sensor capture tool (MANUS gloves and RealSense cameras) feeding an imitation-learning dataset.',
            },
        },
        {
            '@type': 'ListItem',
            position: 2,
            item: {
                '@type': 'OrganizationRole',
                roleName: 'AI Intern',
                startDate: '2025-06',
                endDate: '2025-08',
                worksFor: {
                    '@type': 'Organization',
                    name: 'SarthakAI',
                    address: { '@type': 'PostalAddress', addressLocality: 'Delhi', addressCountry: 'IN' },
                },
                description: 'Built the PC-side system that turned a UBTech Yanshee humanoid into a voice and vision assistant: a custom-trained YOLOv8 package detector over the robot MJPEG stream and a NeMo ASR wake-word and command pipeline, with resilient camera reconnection. Also built a sensor-network workstation and a vision-driven sorting line on a robotic arm and conveyor.',
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
                    address: { '@type': 'PostalAddress', addressLocality: 'Ghaziabad', addressCountry: 'IN' },
                },
                description: 'Built MoveIt motion planning for a 6-DOF arm, validated first in simulation and then on the real hardware, focused on Cartesian-space planning for pick-and-place. Tracked down the URDF kinematic mismatches between sim and hardware that were blocking stable trajectory execution.',
            },
        },
        {
            '@type': 'ListItem',
            position: 4,
            item: {
                '@type': 'OrganizationRole',
                roleName: 'Core Member',
                startDate: '2023-10',
                worksFor: {
                    '@type': 'Organization',
                    name: 'A.T.O.M. Robotics, MAIT',
                    address: { '@type': 'PostalAddress', addressLocality: 'Delhi', addressCountry: 'IN' },
                },
                description: 'Core member of MAIT\'s student robotics society. On the team hexapod, worked on the gait and inverse-kinematics control node and the ros2_control integration, and built a web-controlled robotic arm (rosbridge with a live camera feed). Represents the society at robotics competitions and hackathons.',
            },
        },
    ],
}
