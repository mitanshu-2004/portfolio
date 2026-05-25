export const KNOWLEDGE = `
## SNAPSHOT

Mitanshu Goel. ECE graduate from MAIT Delhi (2026). He works across three intersecting threads at the same time. Real-time robotics control on industrial arms, continued-pretraining of foundation language models, and production web systems. Currently building a bimanual VR teleoperation rig at Variety Innovation / Enferent.ai. The system already drives an Elite Robots CS66 pair and is being extended to a Franka Research 3 so it covers both arm families. Looking for full-time roles in Robotics SWE, Research Engineering, ML Engineering, or Applied and Foundation-Model AI. Based in Delhi. Open to relocation.

---

## CURRENT FOCUS & ASK

- **Building right now:** bimanual VR teleoperation rig. Meta Quest 3 drives an Elite Robots CS66 pair, and the same control loop is being extended to a Franka Research 3 so the system covers both arm families. Runs on a real-time Linux scheduler (SCHED_FIFO, CPU pinning, mlockall). The same rig records an imitation-learning dataset on the side, for downstream policy training. The company's main business is shipping multi-robot teleop datasets at scale. Policies are trained on top of the collected data.
- **Target roles:** Robotics SWE, Research Engineer, ML Engineer, Applied AI Engineer, or Foundation-Model Engineer. Open to junior or new-grad level.
- **Locations:** based in Delhi, India. Open to relocation for the right opportunity (US, EU, Singapore, Tokyo, Toronto). Remote-from-India is also fine.
- **Start date:** available now.
- **Comp expectations:** discussed directly. Recruiters can reach mitanshug2004@gmail.com.

---

## ENGINEERING PHILOSOPHY

Three habits that show up across his code:

1. **Design from the deployment end first.** What runs on a Raspberry Pi. What fits in 16 GB VRAM. What survives a sensor dropout. He picks model size, retrieval depth, scheduler priority, and batch size from the hardware backwards, not from the paper forwards.
2. **Intellectual honesty over inflated metrics.** He removes covariates that leak the survival time in his Cox model with inline comments explaining why. He acknowledged a flawed evaluation in MiniRag-Reranker rather than quietly shipping the inflated number. He published a failed-prediction post-mortem on a trading model that "scored 63% accuracy" but caught only 2 of 44 loss days. None of these were forced by reviewers. He found them himself.
3. **Production hygiene at the right layer.** Multi-key Groq circuit breaker with 3-strike + round-robin + 8 s AbortController on his own portfolio. CSP and HSTS preload. Pydantic structural anti-hallucination guards in his RAG work. RotatingFileHandler-backed logging in his trading-bot CLI. Hub-checkpoint strategy on every CPT run, so a Lightning session interruption does not lose progress.

---

## RARE CREDENTIALS

Things most ECE new-grads do not have:

- **Six training runs** on a self-scraped Reddit corpus. Mistral 7B v0.3 (r=128), Mistral 7B v0.3 (r=256), Qwen 2.5 7B (r=128 on A100), Qwen 2.5 3B (r=16), Qwen 2.5 1.5B (structured-format QLoRA), and a Karpathy-style nanoGPT trained from scratch (~50 M params, 8 layers, 8 heads, 512 embd). Real CPT configs with deliberate choices (embedding LR 5 to 10 times smaller than main LR, lm_head and embed_tokens trained, rsLoRA at high ranks), not tutorial defaults. Artefacts kept private.
- **Real-time C++ control on industrial arms.** SCHED_FIFO scheduling, mlockall, CPU pinning, 125 Hz bimanual VR teleop loop. Few candidates at any level have shipped real-time robot code.
- **Sole-authored a 305-line ros2_control hardware interface** for an 18-DoF hexapod, plus the URDF xacro (533 lines) and Gazebo Classic to Ignition Fortress migration. Most students touch ROS only at the application layer.
- **Self-built training datasets on Hugging Face Hub.** A raw Reddit text corpus, and a pre-tokenized and packed variant for max_seq_length=2048.
- **A failed-prediction post-mortem published in the repo.** Not buried.

---

## TIMELINE

| When | Where | What |
|---|---|---|
| School years | Self-employed | Freelance dev work. First paid coding gigs while still in school. |
| 2022 to 2026 | MAIT Delhi | B.Tech, Electronics & Communication Engineering, minor in AI/ML. |
| 2023 to present | A.T.O.M Robotics Lab, MAIT | Core technical member. Owns hexapod URDF, ros2_control, and the Fortress migration. |
| Jul to Sep 2024 | Nextup Robotics | 6-DOF arm in ROS/Gazebo. Resolved sim-to-real URDF mismatches. Cut trajectory execution time by roughly 50% after switching MoveIt planners. |
| Jun to Aug 2025 | SarthakAI | NVIDIA NeMo (FastConformer-Transducer) STT, custom wake-word, YOLOv8 vision, and ESP32 telemetry on a UBTech Yanshee humanoid. |
| Aug 2025 to present | Variety Innovation / Enferent.ai | Bimanual VR teleop on Elite CS66 arms, now being extended to a Franka Research 3. Imitation-learning dataset recorder built alongside the control loop. |

Trajectory note: the through-line from hardware to AI-on-robots to foundation-model training is deliberate, not accidental. He has been heading toward Physical AI since 2023. The CPT/SFT work is the parallel "make the AI side as deep as the robotics side" investment.

---

## EXPERIENCE

### Variety Innovation / Enferent.ai, Robotics Software Engineer Intern (current)

- Building a bimanual VR teleoperation rig from scratch. Meta Quest 3 drives an Elite Robots CS66 pair, and the same control loop is being extended to a Franka Research 3 so the system covers both arm families. Runs on a real-time Linux scheduler (SCHED_FIFO, CPU pinning, mlockall).
- Implemented damped-Jacobian inverse kinematics via Pinocchio with manipulability-adaptive damping and null-space regularisation. It ships with three named singularity guards on the joint and TCP rotation axes.
- Wrote an imitation-learning dataset recorder that synchronously captures left and right arm states, headset pose, and TCP poses for downstream policy training. The company's main goal is to ship multi-robot teleop datasets at scale, and we train policies on top of what we collect.
- Stack: C++, ROS 2 Humble, Pinocchio, Elite Robots CS SDK (RTSI, EliteDriver), Franka libfranka, OpenVR, ALVR, real-time Linux, Docker (NVIDIA runtime + CycloneDDS).

### SarthakAI, AI & Robotics Intern (Jun to Aug 2025)

- Real-time voice pipeline using NVIDIA NeMo FastConformer-Transducer with custom wake-word detection, integrated into a UBTech Yanshee humanoid.
- Trained and deployed three YOLOv8 models for separate production tasks. Human tracking, package classification, and gesture-based control. Each had its own training regime, augmentation strategy, and inference latency budget.
- Designed a polling-based fault-tolerant interface between robot hardware and an AI inference agent, so the system survived intermittent hardware response.
- ESP32 and Raspberry Pi telemetry workstation bridging embedded firmware with Python analytics.

### Nextup Robotics, Robotics Intern (Jul to Sep 2024)

- Configured a 6-DOF robotic arm in ROS and Gazebo. Debugged URDF kinematic configurations and resolved sim-to-real discrepancies that were blocking stable trajectory execution.
- Integrated MoveIt for inverse kinematics and collision-aware trajectory planning in C++. Cut execution time by roughly 50% after switching planners and tuning parameters.

### A.T.O.M Robotics Lab, MAIT, Core Technical Member (Oct 2023 to present)

- Sole author of the 18-DoF hexapod's URDF xacro (533 / 569 lines), the complete ros2_control hardware interface (305 / 305 lines), the Dockerised runtime with NVIDIA runtime, X11, and CycloneDDS, and the Gazebo Classic to Ignition Fortress migration.
- Analytic IK and gait engine were written by collaborator AkshatSharma05. Mitanshu owns the description, hardware-interface, infrastructure, and platform-migration layers.

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

- **Real-time control.** SCHED_FIFO scheduling, mlockall, CPU pinning, 125 Hz control loops in C++ on industrial arms.
- **ROS 2 stack.** Humble, ros2_control, MoveIt, RViz, URDF and xacro authoring, Ignition Gazebo Fortress, CycloneDDS configuration.
- **Robotics math.** Closed-form analytic IK (hexapod), damped-Jacobian numerical IK with manipulability-adaptive damping and null-space regularisation (industrial arm), three named singularity guards on joint and TCP rotation axes.
- **Embedded.** ESP32 (Arduino and ESP-IDF), Raspberry Pi, ESP-NOW peer-to-peer mesh, MPU6050 IMU, MFRC522 RFID, MQ-x gas sensors, C++ firmware.
- **VR and teleop.** Meta Quest 3, OpenVR, ALVR.
- **Industrial-arm SDKs.** Elite Robots CS SDK (RTSI, EliteDriver, Primary), Franka libfranka. URScript when relevant.

---

## FOUNDATION-MODEL & APPLIED-AI DEPTH

- **Continued-pretraining workflows.** Unsloth, TRL, PEFT and LoRA, rank-stabilised LoRA (rsLoRA), embedding-LR scheduling, lm_head and embed_tokens training.
- **Inference on consumer hardware.** Phi-3 mini 4-bit GGUF via llama.cpp on CPU, FastConformer-Transducer for STT.
- **Diffusion internals.** A manual scheduler, CFG, and VAE-decode loop in Darwin Studio. Custom moment-preserving SLERP for latent crossover. Spherical interpolation, then z-score normalisation and restoration of the weighted target mean and std.
- **RAG with structural guards.** Pydantic cross-field validators that refuse to parse "Fully Answered" responses with empty citations (model-validator, not field-validator, so it is order-safe in Pydantic v2). Auto-confidence-clamp on Unanswerable. V3 prompt with explicit constraint extraction, an exception hierarchy, and a retry-with-error-feedback loop.
- **Retrieval evaluation done honestly.** Held-out test set, NDCG@k, MRR, Recall@k, and a cross-encoder baseline (ms-marco-MiniLM-L-6-v2) as a non-trained reference. He flagged that the original MiniRag-Reranker eval was on the training set and re-engineered it.

---

## DATA-SCIENCE DEPTH

- **Survival analysis.** Cox proportional hazards via lifelines, likelihood-ratio χ² for nested model comparison, hazard ratios with 95% CIs, and explicit handling of survival-time leakage in covariates.
- **Statistical rigor.** F-tests, Fisher z-transform confidence intervals for Pearson, Spearman, and Kendall correlations, 5-fold cross-validation, and honest reporting when only 1 of 25 tested pairs reaches significance.
- **LLM-as-feature-extractor.** Groq Llama 4 Scout extracting six structured risk signals from review text into a Cox covariate matrix.
- **Failure-mode awareness.** Published a failed-prediction post-mortem on a discontinued trading model. The model "scored 63% accuracy" but caught only 2 of 44 actual loss days. A follow-on volatility regressor returned R² = -0.385.

---

## WEB / EDGE-SYSTEMS DEPTH

- **Multi-key API failover.** 3-strike circuit breaker, round-robin, and 8 s AbortController per request, with a graceful degradation path that surfaces a contact email rather than crashing.
- **Real-time multiplayer sync.** Firestore onSnapshot and a monotonic version-counter for idempotent dedup. Presence heartbeats (5 s write, 15 s liveness window). Throttled timer writes. Optimistic UI rollback. Server-authoritative game-over with client-side fallback so a crash mid-move does not strand the game.
- **Security hygiene.** Full Content-Security-Policy and HSTS preload, validated input on the chat endpoint, env-var loading for secrets, and no hardcoded webhooks.

---

## PROJECTS (detailed)

Every project below has been independently code-audited. Metrics in this section are defensible from the published code.

### Hexapod (atom-robotics-lab), robotics flagship
Stack: ROS 2 Humble, Ignition Gazebo Fortress, ros2_control, Docker (NVIDIA runtime + CycloneDDS), C++, Python.
What he owns: URDF xacro robot model (533 / 569 lines), complete ros2_control hardware interface (305 / 305 lines), Dockerised runtime with NVIDIA + X11 + CycloneDDS, and the Gazebo Classic to Ignition Fortress migration. IK math and gait engine written by collaborator Akshat. 1000 Hz Ignition physics under a 5 Hz JointTrajectory publisher.
GitHub: https://github.com/atom-robotics-lab/Hexapod

### RAG-assistant, evaluation-rigorous RAG
Stack: Llama 3.3 70B via Groq, ChromaDB, Sentence-Transformers, Pydantic.
What is defensible: a Pydantic cross-field model-validator that refuses to parse "Fully Answered" with empty citations. Auto-clamps confidence to 0 on Unanswerable. V3 prompt does explicit constraint extraction with an exception hierarchy ("defective overrides discount", "state overrides time"). A retry-with-error-feedback loop pushes Pydantic parse failures back into the model. Audited 9-question eval: 6 PASS, 1 PARTIAL, 2 FAIL, 8/9 answerability correct, 0 hallucinations.
GitHub: https://github.com/mitanshu-2004/RAG-assistant

### MiniRag-Reranker, retrieval evaluation, repaired
Stack: Sentence-Transformers (MiniLM), BM25, a 6-feature logistic-regression reranker, a cross-encoder baseline (ms-marco-MiniLM-L-6-v2), and NDCG / MRR / Recall@k.
Honest history: the original release reported scores on the same questions used for training labels. The headline number was the LR classifier's self-confidence on its training data, not retrieval quality. He surfaced the flaw in the README and rebuilt the evaluation around 10 held-out questions, a cross-encoder baseline, and proper IR metrics. New numbers on held-out: learned NDCG@5 0.701 vs baseline 0.589, cross-encoder Recall@5 0.85.
GitHub: https://github.com/mitanshu-2004/MiniRag-Reranker

### memory-assistant, hybrid retrieval + local RAG endpoint
Stack: FastAPI, ChromaDB, Sentence-Transformers, Phi-3 4-bit GGUF via llama.cpp, SQLAlchemy, React.
Honest framing: not RAG at the main /search endpoint. The local Phi-3 runs only at ingest time for title, tags, category, and summary metadata. Search is hybrid dense and keyword retrieval with no LLM generation. A new /api/v1/ask endpoint is the real RAG path. Retrieve, format cited context, Phi-3 generate, return a source-grounded answer with [Source N] citations and a _sanitize guard that strips Phi-3 chat-control tokens before they enter the prompt template.
GitHub: https://github.com/mitanshu-2004/memory-assistant

### Darwin Studio, SDXL latent-tensor laboratory
Stack: PyTorch, SDXL Lightning, Diffusers, custom moment-preserving SLERP.
What is interesting: treats SDXL latents as DNA. Mutation and crossover operations across generations. Custom moment-preserving SLERP does spherical interpolation, then restores the weighted target mean and std. That keeps each child on the unit-norm noise manifold without the variance collapse plain LERP produces. Manual diffusion loop (own CFG, scheduler step, VAE decode with scaling_factor round-trip) so latents from mutate or breed can be fed in directly.
Honest framing: an earlier "23% LERP improvement" claim was vibes, not backed by any benchmark. He removed it. A runnable benchmark_slerp.py is staged in the repo for the CLIP-similarity and variance-ratio comparison when GPU access is available.
GitHub: https://github.com/mitanshu-2004/Darwin-Studio

### RetainIQ / llm-survival-churn, LLM-augmented survival modelling
Stack: Cox PH (lifelines), Groq Llama 4 Scout, instructor and Pydantic, scikit-learn, held-out 80/20 eval.
What is defensible: hold-out C-index 0.874 (behavioural + six LLM signals) vs 0.640 (behavioural only). Leakage audit: polarity features (sentiment, frustration, and so on) explain most of the headline +0.26 lift because they rephrase the recommend label written at the same time as the event. Non-polarity behaviours alone add roughly +0.14 C-index. That is the honest forward-looking share. Ablation: frozen SBERT (PCA-64) reaches 0.832 hold-out vs LLM 0.874 on the same split. TF-IDF+SBERT stacked hits 0.905. Adding bag-of-words on top buys ~0.002.
Intellectual-honesty signal: repo renamed to llm-survival-churn. It documents PH violations, McAuley outcome-definition limits (event = 1−recommend is not true churn), a chi-squared tail underflow fix, and batch-alignment guards in the LLM extractor.
GitHub: https://github.com/mitanshu-2004/llm-survival-churn

### Primetrade-Analysis, failed-prediction post-mortem
Stack: KMeans, pandas, scikit-learn, Fear & Greed Index, regression diagnostics.
The headline of this repo is the post-mortem, not the dashboard. A binary profit classifier "scored 63% accuracy" but caught only 2 of 44 actual loss days. A 95% miss rate on the signal that matters. A follow-on volatility regressor returned R² = -0.385 (worse than predicting the mean) with MAE $7,838. Both were discontinued. The README documents the class-imbalance and personality-vs-price root cause, and the decision to stop rather than tune.
GitHub: https://github.com/mitanshu-2004/Primetrade-Analysis

### Chess Platform (Chesstra), real-time multiplayer
Stack: React 19, Firebase Firestore, FastAPI, Stockfish, Vite.
What is defensible: Firestore onSnapshot listeners and a monotonic version counter for idempotent dedup. Presence heartbeats (5 s write, 15 s liveness window). Throttled timer writes (every 3 s) to keep document writes low. Optimistic UI rollback on Firestore failure. Server-authoritative game-over with client fallback. If the moving player crashes before writing the end-state, the opponent's client detects it locally via chess.js and writes the resolution back. Stockfish engine deployed independently as a FastAPI service. The client wakes the dyno with /api/health on mount before issuing /api/bestmove.
Live: https://chesstra.vercel.app. GitHub: https://github.com/mitanshu-2004/chess

### Stock-Influence Platform, deployed full-stack with stats rigor
Stack: FastAPI, React, pandas, SciPy, yfinance, Chart.js.
Three correlation methods (Pearson, Spearman, Kendall) returned with proper 95% Fisher z-transform confidence intervals computed via SciPy. The math is implemented in code and verifiable. Synchronised Chart.js heatmap and time-series overlay with shared time-axis scrubbing.
Live: https://stock-influence.vercel.app. GitHub: https://github.com/mitanshu-2004/Stock-Influence

### StockMetrics Pipeline, narrow honest result
Stack: pandas, scikit-learn, F-test, 20 years × Big 5 Indian IT firms.
Tested 25 company-variable pairs for predictive power on annual stock returns via linear regression. One pair reached statistical significance. Wipro EBITDA margin change (p = 0.029, coefficient 0.34). 24 others non-significant. With 17 annual observations per firm, the analysis is power-limited. The README frames the null result as the actual finding, not a failure.
GitHub: https://github.com/mitanshu-2004/StockMetrics

### Store-Performance-Dashboard, retail forecasting
Stack: XGBoost, K-Means, pandas, scikit-learn.
An XGBoost regressor with two-month lag features and one-hot Store and Branch features for one-month-ahead Attach-Percentage forecasting across 163 retail stores. K-Means (k = 4) on (mean_attach_pct, std_attach_pct) for a performance and stability tag per store. The README reports the runtime RMSE from the actual run rather than a stale headline number. It flags the five-months-per-store data thinness as the binding limitation.
GitHub: https://github.com/mitanshu-2004/Store-Performance-Dashboard

---

## INTELLECTUAL-HONESTY ARTIFACTS

Concrete moments where he caught and surfaced a problem in his own work rather than burying it. Worth knowing because they are the rarest signal in a student portfolio.

- **Churn / RetainIQ:** removed log_duration and playtime_2wk_ratio covariates because they leak the survival time. Inline code comments explain why. The README adds a separate honesty section noting the LLM-may-be-reading-the-label residual concern.
- **MiniRag-Reranker:** discovered the original evaluation trained the reranker on the same 8 questions used in the comparison table. The 0.41 to 0.69 headline was the LR's self-confidence on its training data, not retrieval quality. He rebuilt the eval around 10 held-out questions, a cross-encoder baseline, and NDCG/MRR/Recall@k. He surfaced the original flaw in the README rather than quietly replacing the number.
- **Darwin-Studio:** an earlier "23% LERP-vs-SLERP improvement" claim had no benchmark backing it. He killed the claim and staged a real benchmark_slerp.py harness for when GPU access is available.
- **Primetrade-Analysis:** the failed-prediction post-mortem is the headline of the repo. He did not hide the failed binary classifier or the negative-R² volatility regressor.
- **RAG-assistant:** his Pydantic cross-field validator was silently broken because of Pydantic v2 field-ordering semantics. He found and fixed it by switching to model_validator(mode="after"). The README claim "validators refuse to parse 'Fully Answered' with empty citations" is now actually enforced.

---

## STACK SUMMARY

**Robotics + embedded:** ROS, ROS 2 Humble, MoveIt, Pinocchio, Ignition Gazebo Fortress, RViz, ros2_control, URDF, Elite Robots CS SDK (RTSI, EliteDriver), Franka libfranka, Meta Quest 3 + ALVR + OpenVR, ESP32 (Arduino + ESP-IDF), Raspberry Pi, MFRC522, ESP-NOW, real-time Linux (SCHED_FIFO, mlockall, CPU pinning).

**AI / ML:** PyTorch, Unsloth + TRL + PEFT / LoRA (rsLoRA), continued-pretraining workflows, Hugging Face Hub, YOLOv8, NVIDIA NeMo (FastConformer-Transducer), SDXL Lightning + Diffusers, Phi-3 4-bit GGUF via llama.cpp, Sentence-Transformers, ChromaDB, hybrid retrieval, scikit-learn, lifelines (Cox PH), XGBoost, K-Means, Pydantic structured output, Instructor.

**Backend + systems:** FastAPI, Uvicorn, SQLAlchemy, SQLite FTS5 / BM25, Docker (NVIDIA runtime + CycloneDDS), Linux, Firebase Firestore, Next.js 15, Vercel Edge Runtime, TypeScript strict.

**Languages:** Python, C++, TypeScript, JavaScript, SQL, Bash, URScript.

---

## EDUCATION

- B.Tech, Electronics & Communication Engineering. Maharaja Agrasen Institute of Technology (MAIT), Delhi.
- Minor: Artificial Intelligence & Machine Learning.
- 2022 to 2026.

---

## HONEST LIMITS

Things he has not done yet. Surfacing these proactively because pretending they do not exist is worse than acknowledging them.

- **No big-tech employment yet.** Three startup internships, none at FAANG or equivalent. The work signal is in the projects and the current Variety / Enferent role. The brand-name signal is not.
- **MAIT is a Tier-3 college** in the Indian engineering hierarchy. He is aware credential bias exists.
- **No published paper.** Reading and implementing is where the time has gone. Submitting to ICRA, NeurIPS, or EMNLP has not.
- **No accepted OSS pull request landed yet** in major repos (LeRobot, IsaacLab, vLLM, LangChain), though the work he does is the kind that would merge there with a polish pass.
- **No local GPU.** He has been training on Colab T4, Lightning AI L4, and rented A100s. The benchmark scripts for Darwin and the full retrieval evals are staged but cannot run on his current laptop.
- **Hexapod analytic IK was written by collaborator Akshat**, not him. He owns the description, hardware-interface, infrastructure, and platform-migration layers.

He does not claim things he has not done. Asking him a direct question about a technology will get a direct answer, including "haven't used it" when that is the truth.

---

## AVAILABILITY & LOGISTICS

- Available for full-time roles.
- Location: Delhi, India. Open to relocation.
- Public links: github.com/mitanshu-2004, linkedin.com/in/mitanshugoel.

---

## FAQ, likely recruiter questions and how to think about them

- **"What's his strongest project?"** Depends on the lane. For Physical AI / Robotics, the current Variety / Enferent VR teleop work. Real-time C++ on Elite CS66 arms and a Franka Research 3, with the sole-authored ros2_control interface in the Hexapod repo as a second pillar. For Foundation Models / LLM, the six training runs on a self-scraped Reddit corpus (Mistral 7B, Qwen 2.5, nanoGPT, four hardware tiers). Artefacts kept private. For evaluation-rigor / RAG, the RAG-assistant with its Pydantic structural anti-hallucination guards. For intellectual-honesty signal, the Primetrade failed-prediction post-mortem.
- **"What's he NOT good at yet?"** He has not yet shipped at FAANG-scale, has not published a paper, and does not have a major OSS PR landed. His current GPU access is rented. Benchmarks that need more than 24 GB VRAM are staged but not run.
- **"How much does he want?"** Specific compensation expectations are not listed here. Reach him directly at mitanshug2004@gmail.com.
- **"Can he start now?"** Yes.
- **"Will he relocate?"** Yes, for the right opportunity. He has also worked remote-from-India before and can do that.
- **"What's the catch?"** Tier-3 college (MAIT) and no big-tech name yet. The portfolio, the open-source repos he can show, and the live deployed sites are intended to compensate for that credential gap.
- **"Why should I trust the numbers?"** Every metric on this page is either traceable to a JSON file in the corresponding repo (Churn's experiment_results.json, RAG-assistant's eval/results.json, MiniRag-Reranker's eval/results.json) or has been explicitly removed from the README because it was not defensible (the "23% LERP" claim in Darwin Studio).

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
