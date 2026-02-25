export const KNOWLEDGE = `
## EXPERIENCE

### SarthakAI — AI & Robotics Intern (June 2025 – August 2025) · Delhi, India
- Engineered a real-time voice pipeline using NVIDIA NeMo for speech-to-text with custom wake-word detection, integrated into a physical robot system. Latency requirements drove all architecture decisions.
- Built a polling-based interface layer between robot hardware and an AI agent for low-latency query processing and feedback; designed for fault tolerance under intermittent hardware responses.
- Trained and deployed custom YOLOv8 models for three distinct production tasks: human tracking, package classification, and gesture-based control — each with separate training regimes and inference pipelines.
- Developed a hardware telemetry workstation on ESP32/Raspberry Pi capturing environmental sensor data for predictive analytics, bridging embedded firmware with Python processing layers.

### Nextup Robotics — Robotics Intern (July 2024 – September 2024) · Delhi, India
- Configured a 6-DOF robotic arm in ROS/Gazebo, debugging URDF kinematic configurations and resolving simulation-to-real discrepancies blocking stable trajectory execution.
- Integrated MoveIt for inverse kinematics and collision-aware trajectory planning using C++; achieved 50% reduction in execution time through shortest-path algorithm selection and parameter tuning.

### A.T.O.M Robotics Club — Core Technical Member (October 2023 – Present) · MAIT, Delhi
- Represents the institute in robotics competitions and multiple hackathons.
- Organizes technical workshops, project demonstrations, and competitive events for the student community.
- Mentors junior students in robotics and AI integration.

---

## PROJECTS

### Darwin Studio
- Tech stack: PyTorch, SDXL, LoRA, Diffusers
- Evolutionary image generation engine that treats SDXL latent tensors (128×128) as genetic material for mutation and crossover operations.
- Implemented custom Spherical Linear Interpolation (SLERP) from scratch to ensure geometric consistency during latent space interpolation — avoids the muddy averaging of standard linear interpolation.
- Optimized SDXL Lightning inference on T4 GPUs (16GB VRAM) using VAE slicing, attention slicing, and aggressive garbage collection; achieves 1024px image generation in under 4 seconds.
- GitHub: https://github.com/mitanshu-2004/darwin-studio

### HEXAPOD
- Tech stack: ROS2, Gazebo, RViz, Raspberry Pi, Docker, Python, C++, Fusion 360, ROS2 Control
- Multi-legged locomotion system with full ROS2 control stack deployed on Raspberry Pi via Docker.
- Geometric inverse kinematics for deterministic real-time leg trajectory execution.
- Simulation-verified gaits in Gazebo/RViz transfer to hardware without modification.
- GitHub: https://github.com/mitanshu-2004/hexapod

### Memory Assistant — Local RAG Pipeline
- Tech stack: FastAPI, ChromaDB, Sentence-Transformers, Phi-3, llama.cpp, SQLAlchemy, React
- Privacy-first retrieval-augmented generation pipeline running entirely offline — zero external API dependency.
- Uses Phi-3 (4-bit quantized) via llama.cpp for CPU-only inference on consumer hardware.
- Hybrid retrieval: dense vector search (ChromaDB) + keyword pattern matching with weighted scoring to prioritize exact matches.
- Fault-tolerant processing with deterministic regex fallbacks for metadata extraction when LLM times out or hallucinates.
- Automated content extraction from PDFs, DOCX, images (OCR), and web pages.
- GitHub: https://github.com/mitanshu-2004/memory-assistant

### SENTINEL
- Tech stack: ESP32, ESP-NOW, C++, Python, Arduino IDE, MPU6050, Gas Sensors
- Offline mesh emergency communication system — no internet dependency at any layer.
- ESP-NOW protocol across multiple ESP32 nodes for low-latency mesh messaging.
- Embedded fall detection using MPU6050 IMU and gas hazard sensing.
- Autonomous alert transmission with hardware reliability testing in deployed environments.
- GitHub: https://github.com/mitanshu-2004/sentinel

### 6-DOF Robotic Arm
- Tech stack: ROS, MoveIt, Gazebo, Python, C++, JavaScript
- Motion planning, inverse kinematics, and trajectory execution using ROS and MoveIt.
- Web-based remote control interface with live video feedback for teleoperation.

### Retail Performance & Segmentation Engine
- Tech stack: XGBoost, K-Means, Pandas, Python
- Store performance forecasting using XGBoost Regressor with lag-based features to capture seasonal fulfillment trends.
- Achieved 35% reduction in RMSE vs. baseline moving averages by incorporating temporal dependencies and holiday effects.
- Segmented 50+ retail locations into 4 strategic clusters using K-Means on performance volatility for supply chain optimization.

### StockMetrics — Quantitative Analysis Pipeline
- Tech stack: Python, Pandas, SciPy, Statistical Modeling
- Multivariate regression analysis on 20 years of historical data for Big 5 IT firms.
- ETL pipeline aligning daily stock volatility with quarterly financial reports.
- Validated fundamental drivers using F-tests and p-value analysis; identified EBITDA Margin Change as statistically significant predictor (p = 0.029).

### Chess Platform
- Tech stack: React, Firebase, FastAPI
- Real-time multiplayer chess with Firebase Firestore synchronization and versioned state updates to prevent race conditions.
- Lobby system with dynamic room management, configurable time controls (Bullet/Blitz/Rapid), and heartbeat-based presence monitoring.
- Integrated Stockfish chess engine through FastAPI backend for deep position analysis without blocking the frontend.

### Stock Correlation Analysis Platform
- Tech stack: React, FastAPI, Pandas, SciPy, Chart.js
- Time-series alignment system handling timezone normalization and market calendar synchronization.
- Statistical validation using Fisher's z-transformation with confidence intervals and p-values across Pearson, Spearman, and Kendall methods.
- Interactive visualization dashboard with correlation heatmaps and synchronized time-series overlays.

---

## SKILLS & TOOLS

### Robotics & Embedded
ROS, ROS2, MoveIt, Gazebo, RViz, ROS2 Control, URDF, inverse kinematics, trajectory planning
ESP32, Raspberry Pi, Arduino IDE, ESP-NOW, C++ firmware, MPU6050, embedded sensors

### AI / ML & Computer Vision
PyTorch, YOLOv8, OpenCV, NVIDIA NeMo, SDXL, LoRA, Diffusers
Sentence-Transformers, llama.cpp, ChromaDB, RAG pipelines
scikit-learn, XGBoost, K-Means, time-series forecasting, regression analysis
4-bit quantization, edge inference, CPU-only LLM deployment

### Languages
Python, C++, TypeScript, JavaScript, SQL

### Infrastructure & Web
Docker, FastAPI, Linux, Git, SQLAlchemy, Firebase, React, REST APIs
Pandas, NumPy, Vite, Tailwind CSS, Chart.js, Express.js, Node.js

---

## EDUCATION

- Degree: Bachelor of Technology in Electronics & Communication Engineering
- Minor: Artificial Intelligence & Machine Learning
- Institution: Maharaja Agrasen Institute of Technology (MAIT), Delhi
- Duration: August 2022 – June 2026 (expected)
- Key coursework: Signals & Systems, Embedded Systems, Control Theory, Machine Learning, Digital Signal Processing

---

## AVAILABILITY & LOGISTICS

- Mitanshu is actively looking for opportunities right now.
- Open to: Research engineering, ML engineering, robotics software engineering — full-time or internship.
- Location: Delhi, India. Open to relocation for the right opportunity.
- Response time: Within 24 hours via email.
- Contact: mitanshug2004@gmail.com
- GitHub: https://github.com/mitanshu-2004
- LinkedIn: https://linkedin.com/in/mitanshugoel

---

## COMPENSATION

- Specific compensation expectations are not listed here.
- For internship or full-time compensation discussions, reach Mitanshu directly at mitanshug2004@gmail.com.

---

## PERSONAL

- Full name: Mitanshu Goel
- Based in Delhi, India
- Final-year ECE student graduating June 2026
- Works across the full hardware-to-software stack: from microcontroller firmware to deployed ML inference
- Core obsession: building systems that remain reliable when the hardware misbehaves
- Approach: designs for deployment constraints first — what runs on a Raspberry Pi, what fits in 16GB VRAM, what survives a sensor dropout
- Active member of A.T.O.M Robotics Club at MAIT — competes in robotics competitions and mentors juniors
`