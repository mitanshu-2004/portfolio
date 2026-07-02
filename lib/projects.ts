// lib/projects.ts
// Single source of truth for the visible project roster.
// Nav derives its count badge from here, so adding or removing a
// project updates the badge automatically.

export type Domain = 'ai' | 'ds'

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  domain: Domain
  title: string
  hook: string
  problem: string
  stack: string
  links: ProjectLink[]
}

export const GROUPS: { domain: Domain; label: string; projects: Project[] }[] = [
  {
    domain: 'ai',
    label: 'AI & ML',
    projects: [
      {
        id: 'cpt',
        domain: 'ai',
        title: 'Reddit LLM Training',
        hook: 'Three LLMs on a self-scraped corpus. The from-scratch GPT beats GPT-2 by a third.',
        problem:
          'Three language models trained on a Reddit corpus I scraped and built the pipeline for: a 51M-parameter GPT trained from scratch, a LoRA adapter on Mistral 7B, and a QLoRA adapter on Qwen 2.5 that runs through a distributed training loop I wrote by hand, with token-offset sharding and checkpointing that resumes from the exact token count after a dropped cloud session. The from-scratch model is the measured win: perplexity 16.85 on held-out Reddit text against 24.68 for GPT-2, at under half the parameters. The half-trained Mistral adapter came out slightly worse than its base, and the repo reports it that way.',
        stack: 'PyTorch, Unsloth, PEFT, QLoRA, accelerate, Hugging Face Hub',
        links: [
          { label: 'GitHub', href: 'https://github.com/mitanshu-2004/reddit-llm-training' },
          { label: 'Models', href: 'https://huggingface.co/mitanshugoel' },
        ],
      },
      {
        id: 'minirag',
        domain: 'ai',
        title: 'MiniRag-Reranker',
        hook: 'Hybrid retrieval where the real result was catching my own eval leak.',
        problem:
          'Hybrid retrieval over 20 industrial-safety PDFs: dense vectors plus BM25, a logistic-regression reranker, and a cross-encoder reference, on FastAPI. The real story is the evaluation. I caught that the original test set reused the training questions, so the headline number was the reranker grading its own homework. I rebuilt the eval around a disjoint held-out set with NDCG, MRR, and Recall@k, and once it was measured honestly the learned reranker did not clearly beat the plain hybrid baseline. The corrected eval is the result, not a leaderboard win.',
        stack: 'FastAPI, ChromaDB, BM25, Sentence-Transformers, scikit-learn',
        links: [
          { label: 'GitHub', href: 'https://github.com/mitanshu-2004/MiniRag-Reranker' },
        ],
      },
      {
        id: 'rag-assistant',
        domain: 'ai',
        title: 'RAG Assistant',
        hook: 'Hallucinations fail at parse time. 0 on a 9-question held-out rubric.',
        problem:
          'A RAG system where hallucinations are structurally hard. If the model says it fully answered something but cites nothing to back it up, a Pydantic model-validator rejects the response at parse time, before it reaches the user. A retry loop feeds the parse failure back to the model. On a 9-question held-out rubric it returned 0 hallucinations, with 8 of 9 answerability calls correct.',
        stack: 'Llama 3.3 70B, Groq, ChromaDB, Pydantic, FastAPI',
        links: [
          { label: 'GitHub', href: 'https://github.com/mitanshu-2004/RAG-assistant' },
        ],
      },
      {
        id: 'memory-assistant',
        domain: 'ai',
        title: 'Memory Assistant',
        hook: 'A local-first memory store with hybrid search, deployed and usable.',
        problem:
          'A personal memory store that runs with no cloud dependency. Notes go in, and a local 4-bit Phi-3 model generates title, tags, and summary metadata at ingest, with regex fallbacks for when the model fumbles. Search is hybrid: dense vectors and keyword matches merged by best score. An ask endpoint answers questions over your own notes with retrieval, and an input guard strips chat-control tokens so a pasted note cannot inject instructions into the model.',
        stack: 'FastAPI, ChromaDB, Phi-3 via llama.cpp, SQLAlchemy, React',
        links: [
          { label: 'GitHub', href: 'https://github.com/mitanshu-2004/memory-assistant' },
          { label: 'Live demo', href: 'https://memory-assistant-psi.vercel.app' },
        ],
      },
      {
        id: 'darwin',
        domain: 'ai',
        title: 'Darwin Studio',
        hook: 'Image generation treated like evolution, breeding SDXL latents.',
        problem:
          'Image generation treated like evolution. SDXL latent tensors are the genetic material: mutate them, cross two together, iterate across generations. A custom moment-preserving SLERP does the interpolation and restores the parent mean and variance, so a child latent stays on the noise manifold instead of decoding to grey mush. The diffusion loop is hand-written so bred latents can be fed straight in as initial noise.',
        stack: 'PyTorch, SDXL Lightning, Diffusers, custom SLERP',
        links: [
          { label: 'GitHub', href: 'https://github.com/mitanshu-2004/Darwin-Studio' },
        ],
      },
    ],
  },
  {
    domain: 'ds',
    label: 'Data Science',
    projects: [
      {
        id: 'churn',
        domain: 'ds',
        title: 'Churn Survival Model',
        hook: 'A Cox survival model. I cut my own headline number to the honest one.',
        problem:
          'A Cox proportional-hazards model for churn on about 10,000 Steam reviews, with risk signals pulled from the review text by an LLM. It reached a 0.874 hold-out C-index, but most of that lift came from features that quietly re-encode the outcome. So I decomposed it: separated the leaky polarity features from the forward-looking behaviour, kept the roughly +0.14 that actually predicts ahead of time, and added a contract test to block the leaky features from creeping back in. The smaller honest number is the one I report.',
        stack: 'Cox PH (lifelines), Groq Llama 4 Scout, scikit-learn, instructor',
        links: [
          { label: 'GitHub', href: 'https://github.com/mitanshu-2004/llm-survival-churn' },
        ],
      },
      {
        id: 'store-dashboard',
        domain: 'ds',
        title: 'Store Performance Dashboard',
        hook: 'A forecast judged against the boring baseline, and it says so.',
        problem:
          'Batch retail analytics over 163 stores and five months. An XGBoost model forecasts next-month attach rate and is judged against persistence, last month carried forward, on a temporal holdout. It wins by a hair, 0.158 versus 0.160 RMSE, and the write-up reports exactly that margin instead of hiding the baseline. An earlier random split had leaked store identity between train and test, so the honest thin margin replaced a flattering wrong one. K-Means store segmentation and per-store rankings ride on the same pipeline.',
        stack: 'pandas, scikit-learn, XGBoost, K-Means, seaborn',
        links: [
          { label: 'GitHub', href: 'https://github.com/mitanshu-2004/Store-Performance-Dashboard' },
        ],
      },
      {
        id: 'primetrade',
        domain: 'ds',
        title: 'Primetrade Analysis',
        hook: 'A trading-signal study I stopped after an honest post-mortem.',
        problem:
          'A trader-behaviour study on 211k trades against the Bitcoin Fear and Greed index, with KMeans segmentation into trader archetypes. The honest centre of the repo is the post-mortem. A next-day classifier landed right at the base rate and caught only 2 of 44 actual loss days, and a follow-on volatility regressor came back worse than predicting the mean. I wrote up why it failed and stopped, instead of tuning a dead signal.',
        stack: 'pandas, scikit-learn, KMeans, XGBoost, matplotlib',
        links: [
          { label: 'GitHub', href: 'https://github.com/mitanshu-2004/Primetrade-Analysis' },
        ],
      },
      {
        id: 'stockmetrics',
        domain: 'ds',
        title: 'StockMetrics',
        hook: 'An honest null result, with a positive control proving the method works.',
        problem:
          'Do fundamentals explain annual returns for the five big Indian IT firms across seventeen years? Multivariate regression with Benjamini-Hochberg correction, leave-one-out cross-validation, and permutation tests says mostly no: no predictor survives correction, and that null is reported as the finding. What makes the null credible is a positive control, the method recovers the strong co-movement between the firms (correlations 0.84 to 0.94), so it does find real effects where they exist. Auditing the pipeline also caught a ticker-to-company mapping bug, now pinned by a test.',
        stack: 'pandas, statsmodels, scikit-learn, SciPy',
        links: [
          { label: 'GitHub', href: 'https://github.com/mitanshu-2004/StockMetrics' },
        ],
      },
    ],
  },
]

export const PROJECT_COUNT = GROUPS.reduce((n, g) => n + g.projects.length, 0)
