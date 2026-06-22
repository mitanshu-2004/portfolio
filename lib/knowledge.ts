export const KNOWLEDGE = `
## SNAPSHOT

Mitanshu Goel. ECE graduate from MAIT Delhi (2026), minor in AI/ML. He works across three intersecting threads: real-time robotics control on industrial arms, robot-learning data pipelines, and continued-pretraining of language models, with applied ML and data-science work alongside. Currently building a bimanual VR teleoperation rig and its data pipeline at Nferent AI. The system drives an Elite Robots CS66 pair and a Franka Research 3 over a real-time C++ control loop. Looking for full-time roles in Physical AI, Robotics SWE, ML Engineering, or Research Engineering. Based in Delhi. Open to roles anywhere in India and to India-reachable remote.

---

## CURRENT FOCUS & ASK

- **Building right now:** a bimanual VR teleoperation rig and the data pipeline around it. A Meta Quest 3 drives an Elite Robots CS66 pair, and the same control loop extends to a Franka Research 3 so the system covers both arm families. It runs at real-time priority on Linux (SCHED_FIFO, memory locked with mlockall, threads pinned to dedicated cores). The rig records its sessions as imitation-learning data, and a separate capture tool puts two MANUS gloves and three RealSense cameras on one hardware clock. The work centres on real-time teleoperation and the multi-robot data it produces, which downstream policies train on.
- **Target roles:** Physical AI, Robotics SWE, ML Engineer, Applied AI Engineer, or Research Engineer. New-grad or junior level.
- **Locations:** based in Delhi, India. Open to relocating anywhere in India, and to remote roles that work with India hours (india-friendly, APAC, or global-anywhere). Not looking for onsite roles abroad.
- **Start date:** available now.
- **Comp expectations:** discussed directly. Recruiters can reach mitanshug2004@gmail.com.

---

## ENGINEERING PHILOSOPHY

Three habits that show up across his code:

1. **Design from the deployment end first.** What runs on CPU with no GPU. What fits in a free-tier T4's VRAM. What survives a sensor dropout. He picks model size, retrieval depth, scheduler priority, and batch size from the hardware backwards, not from the paper forwards.
2. **Intellectual honesty over inflated metrics.** He removes covariates that leak the survival time in his Cox model, with inline comments explaining why. He caught a flawed evaluation in MiniRag-Reranker and rebuilt it rather than shipping the inflated number. He published a failed-prediction post-mortem on a trading model that landed at the base rate but caught only 2 of 44 loss days. None of these were forced by reviewers. He found them himself.
3. **Production hygiene at the right layer.** A multi-key Groq circuit breaker with 3-strike round-robin and an 8 s AbortController on his own portfolio. Pydantic structural anti-hallucination guards in his RAG work. A hub-checkpoint strategy on every CPT run, so a cloud-session interruption does not lose progress.

---

## RARE CREDENTIALS

Things most ECE new-grads do not have:

- **Real-time C++ control on industrial arms.** SCHED_FIFO scheduling, mlockall, CPU pinning, and a real-time bimanual VR teleop loop on Elite CS66 and Franka FR3 arms. Few candidates at any level have shipped real-time robot control code.
- **A robot-learning data pipeline on real hardware.** Multi-camera RGB-D plus full robot-state recording for imitation learning, and a separate capture tool that syncs two MANUS gloves and three RealSense cameras on one hardware clock, with a frame-uniqueness watchdog for silent camera faults.
- **Continued-pretraining built from the ground up.** A self-scraped Reddit corpus and three CPT setups, including a hand-written distributed (accelerate DDP) training loop with token-offset sharding and resume-by-token-count across free cloud sessions.
- **A repaired evaluation and a published failure.** He caught train/test leakage in his own retrieval eval and rebuilt it, and he kept a failed-prediction post-mortem in the repo instead of deleting it.

---

## TIMELINE

| When | Where | What |
|---|---|---|
| 2022 to 2026 | MAIT Delhi | B.Tech, Electronics & Communication Engineering, minor in AI/ML. CGPA 8.01/10. |
| 2023 to present | A.T.O.M. Robotics, MAIT | Core member of the student robotics society. Worked on the hexapod's gait and IK control node and the ros2_control integration, and built a web-controlled robotic arm. |
| Jul to Sep 2024 | Nextup Robotics | 6-DOF arm in ROS and Gazebo. MoveIt motion planning, validated in simulation then on hardware. Resolved sim-to-real URDF mismatches. |
| Jun to Aug 2025 | SarthakAI | A custom YOLOv8 detector and a NeMo ASR wake-word and command pipeline on a UBTech Yanshee humanoid, plus a sensor-network workstation. |
| Mar 2026 to present | Nferent AI, Gurugram, On-site | Bimanual VR teleop on Elite CS66 arms, extended to a Franka Research 3. An imitation-learning dataset recorder and a multi-sensor capture tool built alongside the control loop. |

Trajectory note: the through-line from hardware to AI-on-robots to foundation-model training is deliberate. He has been heading toward Physical AI since 2023. The CPT work is the parallel investment to make the AI side as deep as the robotics side.

---

## EXPERIENCE

### Nferent AI, Robotics SWE & Physical AI Intern (Mar 2026 – Present · Gurugram, On-site)

- Built a bimanual VR teleoperation stack. A Meta Quest 3 controller streams pose over UDP to a per-arm real-time C++ control loop that drives two Elite Robots CS66 arms by Cartesian servoing, with One-Euro input filtering, SE(3) command smoothing, and singularity and step-cap safety guards. The loop runs at real-time priority (SCHED_FIFO, mlockall, CPU pinning). An anchor-and-clutch model lets the operator release and re-grip without the arm jumping.
- Extended the same teleoperation to a Franka Research 3 with DROID-style anchor-and-delta control and a layered safety stack (frame-jump rejection, a position and orientation leash, slew-rate limiting). Built the recorder that writes a dual RGB-D and robot-state dataset for imitation learning, on a CPU-pinned writer thread that sheds a whole tick rather than desync the data.
- Diagnosed and patched a real-hardware crash in the robot's URScript (a null handle on headless restart) that had been breaking teleop bring-up.
- Built a multi-sensor capture tool, two MANUS gloves and three RealSense cameras, that synchronises every stream on one hardware clock, with a frame-uniqueness watchdog that catches silent camera repeat-frame faults under USB load.
- Brought up and tested incoming commercial robots before dispatch: arms (Franka, Flexiv, Elite, Elephant Robotics), grippers (Robotiq, Tesollo, DH Robotics), and a Unitree quadruped. Testing and evaluation only.
- Stack: C++, ROS 2, Elite Robots CS SDK (RTSI, EliteDriver), Franka libfranka, Meta Quest 3, OpenVR, RealSense RGB-D, real-time Linux.

### SarthakAI, AI Intern (Jun to Aug 2025)

- Built the PC-side system that turned a UBTech Yanshee humanoid into a voice and vision assistant for a logistics demo. A custom-trained YOLOv8 package detector ran over the robot's MJPEG stream, and a NeMo ASR pipeline routed wake-word and commands to a chat service or a QR scanner.
- Designed resilient camera reconnection (exponential backoff and placeholder frames) so the web view never went blank when the stream dropped.
- Handled wake-word detection cheaply by matching ASR transcripts against about twenty phonetic spellings of the trigger phrase, instead of adding a separate wake-word engine.
- Built a sensor-network workstation that collected environmental data and ran predictive analysis on it to infer the state of the monitored equipment.
- Built a vision-driven detection and sorting line on a robotic arm and conveyor belt.

### Nextup Robotics, Robotics Intern (Jul to Sep 2024 · Ghaziabad)

- Built MoveIt motion planning for a 6-DOF arm, validated first in simulation and then on the real hardware, focused on Cartesian-space planning for pick-and-place.
- Tracked down the URDF kinematic mismatches between simulation and hardware that were blocking stable trajectory execution.

### A.T.O.M. Robotics, Core Member (Oct 2023 – Present · MAIT, Delhi)

- MAIT's student robotics society. On the team hexapod (ROS 2, run in simulation and on hardware), he worked on the control side: the tripod-gait and analytic-IK node, the ros2_control hardware interface, and the launch wiring. The URDF model is CAD-exported. It is a team project.
- Also built a web-controlled robotic arm: a browser interface over rosbridge with the arm's live camera feed streamed into the UI.
- Represents the society at robotics competitions and hackathons.

---

## FOUNDATION-MODEL WORK

A self-scraped Reddit corpus and three continued-pretraining setups. The data pipeline streams raw Pushshift-style dumps through decompression, thread joining and filtering, ranking and bucketing, then tokenisation and packing into fixed-length sequences. All artefacts are kept private (no public repo).

| Run | Base | Method | Notes |
|---|---|---|---|
| 1 | Mistral 7B v0.3 (4-bit, Unsloth) | LoRA r=128, rsLoRA, trains attention + MLP + lm_head + embed_tokens | embedding LR set ~10x smaller for CPT stability |
| 2 | Qwen 2.5 3B (4-bit) | QLoRA r=16 via a hand-written accelerate DDP loop | per-rank token-offset sharding, resume by token count |
| 3 | Random init (Karpathy nanoGPT) | GPT from scratch, ~50M params, 8 layers, 8 heads, 512 embd | tiktoken GPT-2 encoding, 20-minute Hub checkpoint pusher |

**Honest status:** all three runs are real but stopped early (Mistral about 20% of one epoch, Qwen about 11% of its token target, nanoGPT about 45% of planned iterations). There is no held-out eval or perplexity comparison yet. These are proof-of-concept runs. The value is the data pipeline and the training infrastructure, especially the custom Qwen DDP loop.

**Choices that are not tutorial defaults:**
- embedding_learning_rate set about 10x smaller than the main LoRA learning rate. Embedding gradients are noisy on a new corpus, so this keeps CPT stable.
- lm_head and embed_tokens included in the LoRA targets on the Mistral run (not attention-only), for domain vocabulary adaptation.
- use_rslora=True at high rank. Rank-stabilised LoRA scales by 1/sqrt(r), which prevents the update collapsing at r=128.
- A hand-written distributed (accelerate DDP) loop for the Qwen run, because resume-by-token-budget across free Kaggle sessions is not something the stock HF Trainer expresses. It shards the corpus per rank by token offset and broadcasts resume state across GPUs.
- A documented subprocess workaround for bitsandbytes failing to initialise inside a forked CUDA context.
- Hub checkpointing on every run, so a killed cloud session loses minimal progress.

---

## ROBOTICS DEPTH

- **Real-time control.** SCHED_FIFO scheduling, mlockall, CPU pinning, real-time control loops in C++ on industrial arms.
- **ROS 2 stack.** Humble, ros2_control, MoveIt, RViz, URDF and xacro integration, Ignition Gazebo Fortress.
- **Teleoperation control laws.** Cartesian servoing in the tool frame, One-Euro input filtering, SE(3) command smoothing, an anchor-and-clutch re-grip model, DROID-style anchor-and-delta on the Franka, and a layered safety stack (frame-jump rejection, position and orientation leash, slew-rate limiting, singularity and step-cap guards). On the hexapod, closed-form analytic IK.
- **Robot-learning data.** Multi-camera RGB-D plus robot-state recording for imitation learning, multi-sensor sync on one hardware clock, a load-shedding CPU-pinned writer, and a frame-uniqueness watchdog.
- **VR and teleop hardware.** Meta Quest 3, OpenVR.
- **Industrial-arm SDKs.** Elite Robots CS SDK (RTSI, EliteDriver, Primary), Franka libfranka. URScript when relevant.

---

## FOUNDATION-MODEL & APPLIED-AI DEPTH

- **Continued-pretraining workflows.** Unsloth, TRL, PEFT and LoRA, rank-stabilised LoRA (rsLoRA), embedding-LR scheduling, lm_head and embed_tokens training, and a hand-written accelerate DDP loop.
- **Inference on consumer hardware.** Phi-3 mini 4-bit GGUF via llama.cpp on CPU, FastConformer-Transducer for STT.
- **Diffusion internals.** A manual scheduler, CFG, and VAE-decode loop in Darwin Studio. Custom moment-preserving SLERP for latent crossover: spherical interpolation, then z-score normalisation and restoration of the weighted target mean and std.
- **RAG with structural guards.** Pydantic cross-field validators that refuse to parse a "fully answered" response with empty citations (a model-validator, order-safe in Pydantic v2). Auto-confidence-clamp on Unanswerable. A retry-with-error-feedback loop.
- **Retrieval evaluation done honestly.** A disjoint held-out test set, NDCG@k, MRR, Recall@k, and a cross-encoder baseline (ms-marco-MiniLM-L-6-v2) as a non-trained reference. He flagged that the original MiniRag-Reranker eval reused the training questions and rebuilt it. The honest read of the repaired eval is that the learned reranker does not clearly beat the hybrid baseline.

---

## DATA-SCIENCE DEPTH

- **Survival analysis.** Cox proportional hazards via lifelines, likelihood-ratio chi-squared for nested model comparison, hazard ratios with confidence intervals, and explicit handling of survival-time leakage in covariates.
- **Honest reporting.** A leakage decomposition that cut a headline +0.26 C-index gain to a defensible +0.14, a null result reported plainly as the finding when almost nothing reached significance, and a published failed-prediction post-mortem.
- **LLM-as-feature-extractor.** Groq Llama 4 Scout extracting six structured risk signals from review text into a Cox covariate matrix, with Pydantic validation.
- **Failure-mode awareness.** The trading model landed at the base rate but caught only 2 of 44 actual loss days, and a follow-on volatility regressor returned an R-squared of -0.385. He stopped and wrote up why.

---

## WEB / EDGE-SYSTEMS DEPTH

- **Multi-key API failover.** A 3-strike circuit breaker, round-robin, and an 8 s AbortController per request, with a graceful degradation path that surfaces a contact email rather than crashing.
- **Real-time multiplayer sync.** Firestore onSnapshot listeners. Presence heartbeats (5 s write, 15 s liveness window). Throttled timer writes. Optimistic UI rollback. Server-authoritative game-over with a client-side fallback so a crash mid-move does not strand the game.
- **Security hygiene.** Content-Security-Policy and HSTS, validated input on the chat endpoint, env-var loading for secrets, and no hardcoded webhooks.

---

## PROJECTS (detailed)

Every project below has been independently code-audited. Metrics in this section are defensible from the published code, with caveats stated where they exist.

### Nferent AI teleoperation and data pipeline, the robotics flagship
Three pieces under his current role. (1) Dual-arm Elite CS66 teleop: Quest 3 pose over UDP to a per-arm real-time C++ control loop, Cartesian servoing, One-Euro filtering, SE(3) smoothing, singularity and step-cap guards, anchor-and-clutch re-grip, running at real-time priority (SCHED_FIFO, mlockall, CPU pinning). (2) Franka Research 3 teleop with DROID-style anchor-and-delta and a layered safety stack, plus the recorder that writes a dual RGB-D and robot-state dataset for imitation learning on a load-shedding CPU-pinned writer thread. (3) A multi-sensor capture tool (two MANUS gloves, three RealSense cameras) on one hardware clock with a frame-uniqueness watchdog. This is company work, no public repo.

### Hexapod, robotics (A.T.O.M. team project)
Stack: ROS 2 Humble, Ignition Gazebo Fortress, ros2_control, Python.
An 18-DoF hexapod built with ROS 2, run in Gazebo simulation and on hardware. A /cmd_vel teleop maps into a tripod gait, and each leg is solved with closed-form analytic inverse kinematics, published through ros2_control. His part was the control side: the gait and IK control node, the ros2_control hardware interface, and the launch wiring. The URDF model is CAD-exported, not hand-written. It is a team project.
GitHub: https://github.com/atom-robotics-lab/Hexapod

### Robotic-Arm Web Control, robotics
A browser interface to drive a robotic arm over the web. The page talks to the arm's ROS stack through a rosbridge WebSocket and streams the arm's live camera feed into the UI. The web side is deliberately simple. The value is the ROS integration, the remote-control path, and the live feed. A.T.O.M. Robotics project, no public repo.

### RAG-assistant, evaluation-rigorous RAG
Stack: Llama 3.3 70B via Groq, ChromaDB, Sentence-Transformers, Pydantic.
A Pydantic cross-field model-validator refuses to parse a "fully answered" response with empty citations, a hard schema constraint, not a runtime check. If the model claims it answered something but has no citations, the response is rejected before it reaches the user. It auto-clamps confidence on Unanswerable. A retry loop feeds parse failures back into the model. The audited 9-question eval: 6 PASS, 1 PARTIAL, 2 FAIL, 8 of 9 answerability correct, 0 hallucinations.
GitHub: https://github.com/mitanshu-2004/RAG-assistant

### MiniRag-Reranker, retrieval evaluation, repaired
Stack: Sentence-Transformers (MiniLM), BM25, a logistic-regression reranker, a cross-encoder baseline (ms-marco-MiniLM-L-6-v2), and NDCG / MRR / Recall@k.
Honest history: the original release reported scores on the same questions used for training labels, so the headline number was the reranker grading its own homework, not retrieval quality. He surfaced the flaw in the README and rebuilt the evaluation around a disjoint held-out set, a cross-encoder baseline, and proper IR metrics. Measured honestly, the learned reranker does not clearly beat the plain hybrid baseline. The value of the project is the corrected evaluation, not a headline win.
GitHub: https://github.com/mitanshu-2004/MiniRag-Reranker

### Darwin Studio, SDXL latent-tensor laboratory
Stack: PyTorch, SDXL Lightning, Diffusers, custom moment-preserving SLERP.
It treats SDXL latents as DNA, with mutation and crossover across generations. The custom moment-preserving SLERP does spherical interpolation, then restores the weighted target mean and std, which keeps each child on the unit-norm noise manifold without the variance collapse plain LERP produces. A hand-written diffusion loop (own CFG, scheduler step, VAE decode with scaling_factor round-trip) lets latents from mutate or breed be fed in directly.
Honest framing: an earlier "23% LERP improvement" claim had no benchmark behind it and was removed. A runnable benchmark is staged in the repo for the CLIP-similarity and variance comparison when GPU access is available.
GitHub: https://github.com/mitanshu-2004/Darwin-Studio

### Churn survival model (llm-survival-churn), LLM-augmented survival modelling
Stack: Cox PH (lifelines), Groq Llama 4 Scout, instructor and Pydantic, scikit-learn, held-out 80/20 eval.
It reached a 0.874 hold-out C-index, but the contribution is the leakage decomposition. Polarity features (sentiment, frustration, and so on) explain most of the headline +0.26 lift because they rephrase the recommend label written at the same time as the event. Non-polarity behaviour alone adds roughly +0.14 C-index, which is the honest forward-looking share, and a contract test blocks the leaky features from re-entering the model. Ablation: frozen SBERT (PCA-64) reaches 0.832 hold-out vs the LLM's 0.874 on the same split.
Intellectual-honesty signal: the repo documents PH violations, the McAuley outcome-definition limit (event = 1 minus recommend is not true churn), a chi-squared tail underflow fix, and batch-alignment guards in the LLM extractor.
GitHub: https://github.com/mitanshu-2004/llm-survival-churn

### Primetrade-Analysis, failed-prediction post-mortem
Stack: KMeans, pandas, scikit-learn, Fear and Greed Index, regression diagnostics.
The headline of this repo is the post-mortem, not the dashboard. A next-day profit classifier landed at the base rate but caught only 2 of 44 actual loss days, a 95% miss rate on the signal that matters. A follow-on volatility regressor returned an R-squared of -0.385 (worse than predicting the mean). Both were discontinued. The README documents the class-imbalance and personality-versus-price root cause, and the decision to stop rather than tune.
GitHub: https://github.com/mitanshu-2004/Primetrade-Analysis

### Stock-Influence, deployed full-stack correlation explorer
Stack: FastAPI, React, pandas, SciPy, yfinance, Chart.js.
Upload any time series and see how it tracks a stock price. Three correlation methods (Pearson, Spearman, Kendall), with a synchronised Chart.js heatmap and time-series overlay on a shared time axis. The correlation math is implemented in code and verifiable. It is a correlation explorer: it reports associations, not proof of cause, and does not apply a multiple-comparison correction.
Live: https://stock-influence.vercel.app. GitHub: https://github.com/mitanshu-2004/Stock-Influence

### memory-assistant, local-first knowledge store
Stack: FastAPI, ChromaDB, Sentence-Transformers, Phi-3 4-bit GGUF via llama.cpp, SQLAlchemy, React.
Honest framing: it is local-first and runs with no cloud. The Phi-3 model runs at ingest time for title, tags, category, and summary metadata. Search is hybrid dense and keyword retrieval. A retrieval-augmented answer endpoint exists in the code but is not wired into the UI, so the working surface is the local ingest plus hybrid search. This is a working skeleton, weaker proof than the projects above.
GitHub: https://github.com/mitanshu-2004/memory-assistant

### StockMetrics, a power-limited study with a data-validation catch
Stack: pandas, scikit-learn, F-test, 20 years across the Big 5 Indian IT firms.
Tested fundamental-versus-return variable pairs for predictive power on annual stock returns via linear regression with F-tests. Almost nothing reached significance, and with seventeen annual observations per firm the analysis is power-limited by design. While auditing it he found a ticker-to-company mapping bug that had paired some firms' returns with another firm's fundamentals, which invalidates several of the per-firm results. It is kept as a lesson in data validation, not as a headline result.
GitHub: https://github.com/mitanshu-2004/StockMetrics

---

## INTELLECTUAL-HONESTY ARTIFACTS

Concrete moments where he caught and surfaced a problem in his own work rather than burying it. Worth knowing because they are the rarest signal in a student portfolio.

- **Churn survival model:** removed covariates that leak the survival time, with inline comments explaining why, then decomposed the remaining lift and kept only the roughly +0.14 forward-looking share, with a contract test to stop the leak coming back.
- **MiniRag-Reranker:** discovered the original evaluation trained the reranker on the same questions used in the comparison table, so the headline was self-confidence on training data, not retrieval quality. He rebuilt the eval around held-out questions, a cross-encoder baseline, and NDCG/MRR/Recall@k, and surfaced the original flaw in the README rather than quietly replacing the number.
- **Darwin Studio:** an earlier "23% LERP-vs-SLERP improvement" claim had no benchmark behind it. He killed the claim and staged a real benchmark for when GPU access is available.
- **Primetrade-Analysis:** the failed-prediction post-mortem is the headline of the repo. He did not hide the failed classifier or the negative-R-squared volatility regressor.
- **StockMetrics:** he found a ticker-to-company mapping bug in his own analysis that invalidated several results, and kept the project as a data-validation lesson.
- **RAG-assistant:** his Pydantic cross-field validator was silently broken because of Pydantic v2 field-ordering. He found and fixed it by switching to model_validator(mode="after"), so the README claim is now actually enforced.

---

## STACK SUMMARY

**Robotics + systems:** ROS, ROS 2 Humble, MoveIt, Ignition Gazebo Fortress, RViz, ros2_control, URDF and xacro, Elite Robots CS SDK (RTSI, EliteDriver), Franka libfranka, Meta Quest 3 + OpenVR, RealSense RGB-D, multi-camera sync, real-time Linux (SCHED_FIFO, mlockall, CPU pinning).

**AI / ML:** PyTorch, Unsloth + TRL + PEFT / LoRA (rsLoRA), continued-pretraining workflows, accelerate DDP, Hugging Face Hub, YOLOv8, NVIDIA NeMo (FastConformer-Transducer), SDXL Lightning + Diffusers, Phi-3 4-bit GGUF via llama.cpp, Sentence-Transformers, ChromaDB, hybrid retrieval, scikit-learn, lifelines (Cox PH), XGBoost, K-Means, Pydantic structured output, Instructor.

**Backend + web:** FastAPI, Uvicorn, SQLAlchemy, SQLite FTS5 / BM25, Linux, Firebase Firestore, Next.js 15, React 19, TypeScript.

**Languages:** Python, C++, TypeScript, JavaScript, SQL, Bash, URScript.

---

## EDUCATION

- B.Tech, Electronics & Communication Engineering. Maharaja Agrasen Institute of Technology (MAIT), Delhi.
- Minor: Artificial Intelligence & Machine Learning.
- 2022 to 2026. CGPA 8.01/10.

---

## HONEST LIMITS

Things he has not done yet. Surfacing these proactively because pretending they do not exist is worse than acknowledging them.

- **No big-tech employment yet.** Three startup internships, none at FAANG or equivalent. The work signal is in the projects and the current Nferent AI role. The brand-name signal is not.
- **MAIT is a Tier-3 college** in the Indian engineering hierarchy. He is aware credential bias exists.
- **No published paper.** Reading and implementing is where the time has gone, not submitting to ICRA, NeurIPS, or EMNLP.
- **No accepted OSS pull request landed yet** in major repos (LeRobot, IsaacLab, vLLM, LangChain), though the work he does is the kind that would merge there with a polish pass.
- **No local GPU.** He has been training on free and rented cloud GPUs (Colab and Kaggle T4s, Lightning AI). The benchmark scripts for Darwin and the CPT runs are constrained by that, and the CPT runs are proof-of-concept, stopped early, with no eval yet.
- **The Hexapod is a team project.** The URDF is CAD-exported, not hand-written. His part is the gait/IK control node and the ros2_control integration; the exact split of work across the team is not separately documented.

He does not claim things he has not done. Asking him a direct question about a technology will get a direct answer, including "haven't used it" when that is the truth.

---

## AVAILABILITY & LOGISTICS

- Available for full-time roles, starting now.
- Location: Delhi, India. Open to roles anywhere in India and to India-reachable remote (india-friendly, APAC, global-anywhere). Not looking for onsite roles abroad.
- Public links: github.com/mitanshu-2004, linkedin.com/in/mitanshugoel.

---

## FAQ, likely recruiter questions and how to think about them

- **"What's his strongest project?"** Depends on the role. For Physical AI and Robotics, the current Nferent AI VR teleop work: real-time C++ on Elite CS66 arms and a Franka Research 3, plus the robot-learning data pipeline (the recorder and the MANUS-plus-RealSense capture tool). For foundation models and LLMs, the three continued-pretraining setups on a self-scraped Reddit corpus, including a hand-written distributed training loop. For evaluation rigor and RAG, the RAG-assistant with its Pydantic structural anti-hallucination guards. For intellectual-honesty signal, the Primetrade failed-prediction post-mortem.
- **"What's he NOT good at yet?"** He has not shipped at FAANG scale, has not published a paper, and does not have a major OSS PR landed. His GPU access is cloud-only, and his CPT runs are proof-of-concept, stopped early.
- **"How much does he want?"** Specific compensation expectations are not listed here. Reach him directly at mitanshug2004@gmail.com.
- **"Can he start now?"** Yes.
- **"Will he relocate?"** Anywhere within India, yes. He is also open to remote roles that work with India hours. He is not looking to relocate abroad for an onsite role.
- **"What's the catch?"** Tier-3 college (MAIT) and no big-tech name yet. The portfolio, the open-source repos he can show, and the live deployed sites are meant to compensate for that credential gap.
- **"Why should I trust the numbers?"** Every metric on this page is either traceable to a file in the corresponding repo or has been explicitly removed because it was not defensible (for example the "23% LERP" claim in Darwin Studio). Where a number has a known caveat, like the churn C-index, the caveat is stated alongside it.

---

## CONTACT

Email: mitanshug2004@gmail.com
Phone: +91 85956 57583
GitHub: https://github.com/mitanshu-2004
LinkedIn: https://linkedin.com/in/mitanshugoel
Portfolio: https://mitanshu.me
Location: Delhi, India

For roles, take-homes, references, or technical questions the chatbot cannot answer, email is the fastest path.
`
