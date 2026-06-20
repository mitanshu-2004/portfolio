export const KNOWLEDGE = `
## SNAPSHOT

Mitanshu Goel. ECE graduate from MAIT Delhi (2026). He works across three intersecting threads at the same time. Real-time robotics control on industrial arms, continued-pretraining of foundation language models, and production web systems. Currently building a bimanual VR teleoperation rig at nFerent.ai. The system already drives an Elite Robots CS66 pair and is being extended to a Franka Research 3 so it covers both arm families. Looking for full-time roles in Physical AI, Robotics SWE, ML Engineering, or Research Engineering. Based in Delhi. Open to relocation.

---

## CURRENT FOCUS & ASK

- **Building right now:** a bimanual VR teleoperation rig. A Meta Quest 3 drives an Elite Robots CS66 pair, and the same control loop is being extended to a Franka Research 3 so the system covers both arm families. It runs on a real-time Linux scheduler (SCHED_FIFO, CPU pinning, mlockall). The same rig records an imitation-learning dataset on the side, for downstream policy training. The company's main business is shipping multi-robot teleop datasets at scale, and policies are trained on top of the collected data.
- **Target roles:** Physical AI, Robotics SWE, ML Engineer, Applied AI Engineer, or Research Engineer. Open to junior or new-grad level.
- **Locations:** based in Delhi, India. Open to relocation for the right opportunity (US, EU, Singapore, Tokyo, Toronto). Remote-from-India is also fine.
- **Start date:** available now.
- **Comp expectations:** discussed directly. Recruiters can reach mitanshug2004@gmail.com.

---

## ENGINEERING PHILOSOPHY

Three habits that show up across his code:

1. **Design from the deployment end first.** What runs on a Raspberry Pi. What fits in 16 GB VRAM. What survives a sensor dropout. He picks model size, retrieval depth, scheduler priority, and batch size from the hardware backwards, not from the paper forwards.
2. **Intellectual honesty over inflated metrics.** He removes covariates that leak the survival time in his Cox model, with inline comments explaining why. He caught a flawed evaluation in MiniRag-Reranker and rebuilt it rather than shipping the inflated number. He published a failed-prediction post-mortem on a trading model that "scored 63% accuracy" but caught only 2 of 44 loss days. None of these were forced by reviewers. He found them himself.
3. **Production hygiene at the right layer.** A multi-key Groq circuit breaker with 3-strike round-robin and an 8 s AbortController on his own portfolio. CSP and HSTS preload. Pydantic structural anti-hallucination guards in his RAG work. RotatingFileHandler-backed logging in his trading-bot CLI. A hub-checkpoint strategy on every CPT run, so a cloud-session interruption does not lose progress.

---

## RARE CREDENTIALS

Things most ECE new-grads do not have:

- **Six training runs** on a self-scraped Reddit corpus. Mistral 7B v0.3 (r=128), Mistral 7B v0.3 (r=256), Qwen 2.5 7B (r=128 on A100), Qwen 2.5 3B (r=16), Qwen 2.5 1.5B (structured-format QLoRA), and a Karpathy-style nanoGPT trained from scratch (~50 M params, 8 layers, 8 heads, 512 embd). Real CPT configs with deliberate choices (embedding LR 5 to 10 times smaller than the main LR, lm_head and embed_tokens trained, rsLoRA at high ranks), not tutorial defaults. Artefacts kept private.
- **Real-time C++ control on industrial arms.** SCHED_FIFO scheduling, mlockall, CPU pinning, a real-time bimanual VR teleop loop. Few candidates at any level have shipped real-time robot code.
- **Sole-authored a 305-line ros2_control hardware interface** for an 18-DoF hexapod, plus the URDF xacro (533 lines). Most students touch ROS only at the application layer.
- **Self-built training datasets on Hugging Face Hub.** A raw Reddit text corpus, and a pre-tokenized and packed variant for max_seq_length=2048.
- **A failed-prediction post-mortem published in the repo.** Not buried.

---

## TIMELINE

| When | Where | What |
|---|---|---|
| 2022 to 2026 | MAIT Delhi | B.Tech, Electronics & Communication Engineering, minor in AI/ML. CGPA 8.01/10. |
| 2023 to present | A.T.O.M. Robotics, MAIT | Core member of the student robotics society. Owns the hexapod URDF and ros2_control hardware interface, and built a web-controlled robotic arm. |
| Jul to Sep 2024 | Nextup Robotics | 6-DOF arm in ROS and Gazebo. MoveIt motion planning, validated in simulation then on hardware. Resolved sim-to-real URDF mismatches. |
| Jun to Aug 2025 | SarthakAI | A custom YOLOv8 detector and a NeMo ASR wake-word and command pipeline on a UBTech Yanshee humanoid, plus a sensor-network workstation. |
| Mar 2026 to present | nFerent.ai, Gurugram, On-site | Bimanual VR teleop on Elite CS66 arms, extended to a Franka Research 3. An imitation-learning dataset recorder and a multi-sensor capture tool built alongside the control loop. |

Trajectory note: the through-line from hardware to AI-on-robots to foundation-model training is deliberate, not accidental. He has been heading toward Physical AI since 2023. The CPT and SFT work is the parallel "make the AI side as deep as the robotics side" investment.

---

## EXPERIENCE

### nFerent.ai, Robotics SWE & Physical AI Intern (Mar 2026 – Present · Gurugram, On-site)

- Built a bimanual VR teleoperation stack. A Meta Quest 3 controller streams pose over UDP to a per-arm real-time C++ control loop that drives two Elite Robots CS66 arms by Cartesian servoing, with One-Euro input filtering, SE(3) command smoothing, and singularity and step-cap safety guards. An anchor-and-clutch model lets the operator release and re-grip without the arm jumping.
- Extended the same teleoperation to a Franka Research 3 with DROID-style anchor-and-delta control and a layered safety stack (frame-jump rejection, a position and orientation leash, slew-rate limiting). Collected a multi-episode dual RGB-D and robot-state dataset for imitation learning.
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

- MAIT's student robotics society. Sole author of the 18-DoF hexapod's URDF xacro and the complete ros2_control hardware interface. The gait engine and analytic IK were written by collaborator AkshatSharma05.
- Also built a web-controlled robotic arm: a browser interface over rosbridge with the arm's live camera feed streamed into the UI.
- Represents the society at robotics competitions and hackathons.

---

## FOUNDATION-MODEL WORK

Self-scraped Reddit corpus. Six training runs across four base architectures plus a from-scratch baseline. Full data pipeline: libtorrent Pushshift download, zstandard decompression, thread joining and filter, Wilson-score ranking, Qwen tokenisation and packing. All artefacts kept private.

| Run | Base | Method | Hardware |
|---|---|---|---|
| 01 | Mistral 7B v0.3 (4-bit Unsloth) | LoRA r=128, rsLoRA, attn + MLP + lm_head + embed_tokens | Colab T4 + Kaggle 2× T4 via torchrun |
| 02 | Mistral 7B v0.3 (4-bit Unsloth) | LoRA r=256, rsLoRA, same targets | Lightning AI L4 + Kaggle 2× T4 |
| 03 | Qwen 2.5 7B (4-bit Unsloth) | LoRA r=128, rsLoRA, same targets | A100 80 GB |
| 04 | Qwen 2.5 3B (4-bit BitsAndBytesConfig) | LoRA r=16, plain LoRA, attn + MLP only | Kaggle T4×2 DDP via accelerate launch |
| 05 | Qwen 2.5 1.5B (4-bit) | Small-r QLoRA, structured "Subreddit / Title / Body" format | Kaggle T4×2 |
| 06 | Random init (Karpathy nanoGPT) | From scratch, ~50 M params, 8 layers, 8 heads, 512 embd | Kaggle T4×2 |

**Choices that show up across the scripts and are not tutorial defaults:**
- embedding_learning_rate 5 to 10 times smaller than the main LoRA learning rate. Embedding gradients are noisy on a new corpus. This keeps CPT stable.
- lm_head + embed_tokens in target_modules (not attention-only LoRA). Required for domain vocabulary adaptation.
- use_rslora=True at high ranks. Rank-stabilised LoRA scales by 1/sqrt(r) instead of 1/r. That prevents learning-rate collapse at r=128 and r=256.
- adamw_8bit for optimiser-state quantisation.
- HF Hub hub_strategy="checkpoint" or a custom HFCheckpointCallback that pushes every 200 steps. Survivability through cloud-session interruption.
- attn_implementation="flash_attention_2" on T4.

**Honest framing of run 02:** the r=256 Lightning L4 attempt failed mid-cell because the pre-tokenized dataset snapshot was empty at the moment Lightning pulled it. It is a recovered experiment-infrastructure artifact, not a completed model. The repo frames it that way explicitly.

---

## ROBOTICS DEPTH

- **Real-time control.** SCHED_FIFO scheduling, mlockall, CPU pinning, real-time control loops in C++ on industrial arms.
- **ROS 2 stack.** Humble, ros2_control, MoveIt, RViz, URDF and xacro authoring, Ignition Gazebo Fortress.
- **Teleoperation control laws.** Cartesian servoing in the tool frame, One-Euro input filtering, SE(3) command smoothing, an anchor-and-clutch re-grip model, DROID-style anchor-and-delta on the Franka, and a layered safety stack (frame-jump rejection, position and orientation leash, slew-rate limiting, singularity and step-cap guards). On the hexapod, closed-form analytic IK.
- **Embedded.** ESP32 (Arduino and ESP-IDF), Raspberry Pi, C++ firmware, gas and environmental sensor integration.
- **VR and teleop.** Meta Quest 3, OpenVR.
- **Industrial-arm SDKs.** Elite Robots CS SDK (RTSI, EliteDriver, Primary), Franka libfranka. URScript when relevant.

---

## FOUNDATION-MODEL & APPLIED-AI DEPTH

- **Continued-pretraining workflows.** Unsloth, TRL, PEFT and LoRA, rank-stabilised LoRA (rsLoRA), embedding-LR scheduling, lm_head and embed_tokens training.
- **Inference on consumer hardware.** Phi-3 mini 4-bit GGUF via llama.cpp on CPU, FastConformer-Transducer for STT.
- **Diffusion internals.** A manual scheduler, CFG, and VAE-decode loop in Darwin Studio. Custom moment-preserving SLERP for latent crossover. Spherical interpolation, then z-score normalisation and restoration of the weighted target mean and std.
- **RAG with structural guards.** Pydantic cross-field validators that refuse to parse "Fully Answered" responses with empty citations (a model-validator, not a field-validator, so it is order-safe in Pydantic v2). Auto-confidence-clamp on Unanswerable. A V3 prompt with explicit constraint extraction, an exception hierarchy, and a retry-with-error-feedback loop.
- **Retrieval evaluation done honestly.** A held-out test set, NDCG@k, MRR, Recall@k, and a cross-encoder baseline (ms-marco-MiniLM-L-6-v2) as a non-trained reference. He flagged that the original MiniRag-Reranker eval was on the training set and re-engineered it.

---

## DATA-SCIENCE DEPTH

- **Survival analysis.** Cox proportional hazards via lifelines, likelihood-ratio χ² for nested model comparison, hazard ratios with 95% CIs, and explicit handling of survival-time leakage in covariates.
- **Statistical rigor.** F-tests, Fisher z-transform confidence intervals for Pearson correlations, cross-validation, and honest reporting when only 1 of 25 tested pairs reaches significance.
- **LLM-as-feature-extractor.** Groq Llama 4 Scout extracting six structured risk signals from review text into a Cox covariate matrix.
- **Failure-mode awareness.** Published a failed-prediction post-mortem on a discontinued trading model. The model "scored 63% accuracy" but caught only 2 of 44 actual loss days. A follow-on volatility regressor returned R² = -0.385.

---

## WEB / EDGE-SYSTEMS DEPTH

- **Multi-key API failover.** A 3-strike circuit breaker, round-robin, and an 8 s AbortController per request, with a graceful degradation path that surfaces a contact email rather than crashing.
- **Real-time multiplayer sync.** Firestore onSnapshot listeners. Presence heartbeats (5 s write, 15 s liveness window). Throttled timer writes. Optimistic UI rollback. Server-authoritative game-over with client-side fallback so a crash mid-move does not strand the game.
- **Security hygiene.** Full Content-Security-Policy and HSTS preload, validated input on the chat endpoint, env-var loading for secrets, and no hardcoded webhooks.

---

## PROJECTS (detailed)

Every project below has been independently code-audited. Metrics in this section are defensible from the published code.

### nFerent.ai teleoperation, the robotics flagship
Three pieces under his current role. (1) Dual-arm Elite CS66 teleop: Quest 3 pose over UDP to a per-arm real-time C++ control loop, Cartesian servoing, One-Euro filtering, SE(3) smoothing, singularity and step-cap guards, anchor-and-clutch re-grip. (2) Franka Research 3 teleop with DROID-style anchor-and-delta and a layered safety stack, recording a dual RGB-D and robot-state imitation-learning dataset. (3) A multi-sensor capture tool (two MANUS gloves, three RealSense cameras) on one hardware clock with a frame-uniqueness watchdog. This is company work, no public repo.

### Hexapod, robotics
Stack: ROS 2 Humble, Ignition Gazebo Fortress, ros2_control, Docker (NVIDIA runtime), C++, Python.
What he owns: the URDF xacro robot model (533 lines), the complete ros2_control hardware interface (305 lines), and the Dockerised runtime with NVIDIA and X11. The gait engine and analytic IK were written by collaborator Akshat. The simulation runs Ignition physics with a JointTrajectory publisher driving the gait.
GitHub: https://github.com/atom-robotics-lab/Hexapod

### Robotic-Arm Web Control, robotics
A browser interface to drive a robotic arm over the web. The page talks to the arm's ROS stack through a rosbridge WebSocket and streams the arm's live camera feed into the UI. The web side is deliberately simple. The value is the ROS integration, the remote-control path, and the live feed. A.T.O.M. Robotics project, no public repo.

### RAG-assistant, evaluation-rigorous RAG
Stack: Llama 3.3 70B via Groq, ChromaDB, Sentence-Transformers, Pydantic.
What is defensible: a Pydantic cross-field model-validator that refuses to parse "Fully Answered" with empty citations, a hard schema constraint, not a runtime check. If the model claims it answered something but has no citations, the response is rejected before it reaches the user. It auto-clamps confidence to 0 on Unanswerable. A retry loop feeds parse failures back into the model. The audited 9-question eval: 6 PASS, 1 PARTIAL, 2 FAIL, 8 of 9 answerability correct, 0 hallucinations.
GitHub: https://github.com/mitanshu-2004/RAG-assistant

### MiniRag-Reranker, retrieval evaluation, repaired
Stack: Sentence-Transformers (MiniLM), BM25, a 6-feature logistic-regression reranker, a cross-encoder baseline (ms-marco-MiniLM-L-6-v2), and NDCG / MRR / Recall@k.
Honest history: the original release reported scores on the same questions used for training labels. The headline number was the classifier's self-confidence on its training data, not retrieval quality. He surfaced the flaw in the README and rebuilt the evaluation around 10 held-out questions, a cross-encoder baseline, and proper IR metrics. The honest read of the repaired eval is that the learned reranker does not clearly beat the hybrid baseline once it is measured properly. The value of the project is the corrected evaluation, not a headline win.
GitHub: https://github.com/mitanshu-2004/MiniRag-Reranker

### memory-assistant, local-first knowledge store
Stack: FastAPI, ChromaDB, Sentence-Transformers, Phi-3 4-bit GGUF via llama.cpp, SQLAlchemy, React.
Honest framing: it is local-first and runs with no cloud. The Phi-3 model runs at ingest time for title, tags, category, and summary metadata. Search is hybrid dense and keyword retrieval, with no LLM generation in the loop. A retrieval-augmented answer endpoint exists in the code but is not wired into the UI yet, so the shipped, working surface is the local ingest plus hybrid search.
GitHub: https://github.com/mitanshu-2004/memory-assistant

### Darwin Studio, SDXL latent-tensor laboratory
Stack: PyTorch, SDXL Lightning, Diffusers, custom moment-preserving SLERP.
What is interesting: it treats SDXL latents as DNA, with mutation and crossover across generations. The custom moment-preserving SLERP does spherical interpolation, then restores the weighted target mean and std, which keeps each child on the unit-norm noise manifold without the variance collapse plain LERP produces. A manual diffusion loop (own CFG, scheduler step, VAE decode with scaling_factor round-trip) lets latents from mutate or breed be fed in directly.
Honest framing: an earlier "23% LERP improvement" claim was vibes, not backed by any benchmark. He removed it. A runnable benchmark_slerp.py is staged in the repo for the CLIP-similarity and variance-ratio comparison when GPU access is available.
GitHub: https://github.com/mitanshu-2004/Darwin-Studio

### Churn survival model (llm-survival-churn), LLM-augmented survival modelling
Stack: Cox PH (lifelines), Groq Llama 4 Scout, instructor and Pydantic, scikit-learn, held-out 80/20 eval.
What is defensible: the interesting part is not the 0.874 hold-out C-index, it is the leakage decomposition. Polarity features (sentiment, frustration, and so on) explain most of the headline +0.26 lift because they rephrase the recommend label written at the same time as the event. Non-polarity behaviours alone add roughly +0.14 C-index. That is the honest forward-looking share, and a contract test blocks the leaky features from re-entering the model. Ablation: frozen SBERT (PCA-64) reaches 0.832 hold-out vs the LLM's 0.874 on the same split.
Intellectual-honesty signal: the repo documents PH violations, McAuley outcome-definition limits (event = 1−recommend is not true churn), a chi-squared tail underflow fix, and batch-alignment guards in the LLM extractor.
GitHub: https://github.com/mitanshu-2004/llm-survival-churn

### Primetrade-Analysis, failed-prediction post-mortem
Stack: KMeans, pandas, scikit-learn, Fear & Greed Index, regression diagnostics.
The headline of this repo is the post-mortem, not the dashboard. A binary profit classifier "scored 63% accuracy" but caught only 2 of 44 actual loss days, a 95% miss rate on the signal that matters. A follow-on volatility regressor returned R² = -0.385 (worse than predicting the mean) with MAE $7,838. Both were discontinued. The README documents the class-imbalance and personality-versus-price root cause, and the decision to stop rather than tune.
GitHub: https://github.com/mitanshu-2004/Primetrade-Analysis

### Chesstra, real-time multiplayer chess
Stack: React 19, Firebase Firestore, FastAPI, Stockfish, Vite.
What is defensible: Firestore onSnapshot listeners for real-time sync, with a versioned write protocol so duplicate snapshots never double-apply. Presence heartbeats (5 s write, 15 s liveness window). Throttled timer writes. Optimistic UI rollback. Server-authoritative game-over with a client fallback. If the moving player crashes before writing the end-state, the opponent's client detects it locally via chess.js and writes the resolution back. Stockfish is deployed independently as a FastAPI service, woken by a /api/health ping on mount before the first move request.
Live: https://chesstra.vercel.app. GitHub: https://github.com/mitanshu-2004/chess

### Stock-Influence, deployed full-stack correlation explorer
Stack: FastAPI, React, pandas, SciPy, yfinance, Chart.js.
Upload any time series and see how it tracks a stock price. Three correlation methods (Pearson, Spearman, Kendall), with a synchronised Chart.js heatmap and time-series overlay on a shared time axis. The correlation math is implemented in code and verifiable.
Live: https://stock-influence.vercel.app. GitHub: https://github.com/mitanshu-2004/Stock-Influence

### StockMetrics, a clean null result
Stack: pandas, scikit-learn, F-test, 20 years × Big 5 Indian IT firms.
Tested 25 company-variable pairs for predictive power on annual stock returns via linear regression with F-tests. Almost nothing reached significance, and with seventeen annual observations per firm the analysis is power-limited by design. The README frames the null result as the finding, not a failure to hide.
GitHub: https://github.com/mitanshu-2004/StockMetrics

### Store-Performance-Dashboard, retail decisioning batch job
Stack: XGBoost, K-Means, pandas, scikit-learn.
An XGBoost regressor with two-month lag features and one-hot Store and Branch features for one-month-ahead Attach-Percentage estimates across 163 retail stores, plus K-Means (k = 4) on (mean_attach_pct, std_attach_pct) for a performance and stability tag per store. The README flags the five-months-per-store data thinness as the binding limitation, and treats the pipeline as a reproducible decisioning batch job rather than a validated forecast.
GitHub: https://github.com/mitanshu-2004/Store-Performance-Dashboard

---

## INTELLECTUAL-HONESTY ARTIFACTS

Concrete moments where he caught and surfaced a problem in his own work rather than burying it. Worth knowing because they are the rarest signal in a student portfolio.

- **Churn survival model:** removed log_duration and playtime_2wk_ratio covariates because they leak the survival time. Inline code comments explain why. He then decomposed the remaining lift and kept only the roughly +0.14 forward-looking share, with a contract test to stop the leak coming back.
- **MiniRag-Reranker:** discovered the original evaluation trained the reranker on the same questions used in the comparison table, so the headline was the classifier's self-confidence on its training data, not retrieval quality. He rebuilt the eval around held-out questions, a cross-encoder baseline, and NDCG/MRR/Recall@k, and surfaced the original flaw in the README rather than quietly replacing the number.
- **Darwin Studio:** an earlier "23% LERP-vs-SLERP improvement" claim had no benchmark behind it. He killed the claim and staged a real benchmark_slerp.py harness for when GPU access is available.
- **Primetrade-Analysis:** the failed-prediction post-mortem is the headline of the repo. He did not hide the failed binary classifier or the negative-R² volatility regressor.
- **RAG-assistant:** his Pydantic cross-field validator was silently broken because of Pydantic v2 field-ordering semantics. He found and fixed it by switching to model_validator(mode="after"), so the README claim is now actually enforced.

---

## STACK SUMMARY

**Robotics + embedded:** ROS, ROS 2 Humble, MoveIt, Ignition Gazebo Fortress, RViz, ros2_control, URDF and xacro, Elite Robots CS SDK (RTSI, EliteDriver), Franka libfranka, Meta Quest 3 + OpenVR, RealSense RGB-D, multi-camera sync, ESP32 (Arduino + ESP-IDF), Raspberry Pi, real-time Linux (SCHED_FIFO, mlockall, CPU pinning).

**AI / ML:** PyTorch, Unsloth + TRL + PEFT / LoRA (rsLoRA), continued-pretraining workflows, Hugging Face Hub, YOLOv8, NVIDIA NeMo (FastConformer-Transducer), SDXL Lightning + Diffusers, Phi-3 4-bit GGUF via llama.cpp, Sentence-Transformers, ChromaDB, hybrid retrieval, scikit-learn, lifelines (Cox PH), XGBoost, K-Means, Pydantic structured output, Instructor.

**Backend + systems:** FastAPI, Uvicorn, SQLAlchemy, SQLite FTS5 / BM25, Docker (NVIDIA runtime), Linux, Firebase Firestore, Next.js 15, Vercel Edge Runtime, TypeScript strict.

**Languages:** Python, C++, TypeScript, JavaScript, SQL, Bash, URScript.

---

## EDUCATION

- B.Tech, Electronics & Communication Engineering. Maharaja Agrasen Institute of Technology (MAIT), Delhi.
- Minor: Artificial Intelligence & Machine Learning.
- 2022 to 2026. CGPA 8.01/10.

---

## HONEST LIMITS

Things he has not done yet. Surfacing these proactively because pretending they do not exist is worse than acknowledging them.

- **No big-tech employment yet.** Three startup internships, none at FAANG or equivalent. The work signal is in the projects and the current nFerent role. The brand-name signal is not.
- **MAIT is a Tier-3 college** in the Indian engineering hierarchy. He is aware credential bias exists.
- **No published paper.** Reading and implementing is where the time has gone. Submitting to ICRA, NeurIPS, or EMNLP has not.
- **No accepted OSS pull request landed yet** in major repos (LeRobot, IsaacLab, vLLM, LangChain), though the work he does is the kind that would merge there with a polish pass.
- **No local GPU.** He has been training on Colab T4, Lightning AI L4, and rented A100s. The benchmark scripts for Darwin and the full retrieval evals are staged but cannot run on his current laptop.
- **Hexapod analytic IK and gait were written by collaborator Akshat**, not him. He owns the description, hardware-interface, and infrastructure layers.

He does not claim things he has not done. Asking him a direct question about a technology will get a direct answer, including "haven't used it" when that is the truth.

---

## AVAILABILITY & LOGISTICS

- Available for full-time roles, starting now.
- Location: Delhi, India. Open to relocation.
- Public links: github.com/mitanshu-2004, linkedin.com/in/mitanshugoel.

---

## FAQ, likely recruiter questions and how to think about them

- **"What's his strongest project?"** Depends on the role. For Physical AI and Robotics, the current nFerent VR teleop work: real-time C++ on Elite CS66 arms and a Franka Research 3, with the sole-authored ros2_control interface in the Hexapod repo as a second pillar. For foundation models and LLMs, the six training runs on a self-scraped Reddit corpus (Mistral 7B, Qwen 2.5, nanoGPT, four hardware tiers). For evaluation rigor and RAG, the RAG-assistant with its Pydantic structural anti-hallucination guards. For intellectual-honesty signal, the Primetrade failed-prediction post-mortem.
- **"What's he NOT good at yet?"** He has not shipped at FAANG scale, has not published a paper, and does not have a major OSS PR landed. His current GPU access is rented. Benchmarks that need more than 24 GB VRAM are staged but not run.
- **"How much does he want?"** Specific compensation expectations are not listed here. Reach him directly at mitanshug2004@gmail.com.
- **"Can he start now?"** Yes.
- **"Will he relocate?"** Yes, for the right opportunity. He has also worked remote-from-India before and can do that.
- **"What's the catch?"** Tier-3 college (MAIT) and no big-tech name yet. The portfolio, the open-source repos he can show, and the live deployed sites are intended to compensate for that credential gap.
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
