// =============================================================
//  PROJECTS DATA  —  edit this file to add or update projects.
//  Order here = display order on the site (newest first).
//
// ── FIELDS ────────────────────────────────────────────────────
//  id        Unique slug (no spaces). Used internally.
//  title     Card + detail page heading.
//  period    Date string shown in detail view (e.g. 'Jan 2026').
//  summary   One-sentence description shown on the card.
//  tags      Array of short labels shown as chips.
//  github    Repo URL, or null if private / not applicable.
//  liveUrl   Optional deployed site URL; shows a "Live Demo" button.
//  image     Card thumbnail + detail hero. null = placeholder.
//            Put images in the images/ folder.
//
// ── OVERVIEW ──────────────────────────────────────────────────
//  overview  Plain string. Use \n\n for paragraph breaks.
//            **bold** supported. Raw HTML blocks (e.g. <figure>)
//            pass through unchanged.
//
// ── SECTIONS ──────────────────────────────────────────────────
//  sections  Array of per-project writeup sections. Each object:
//              {
//                label:   'Section Title',
//                type:    'prose' | 'list',
//                content: 'prose string'  (for type: 'prose')
//                       | ['item', ...]   (for type: 'list')
//              }
//
//  type: 'prose'
//    → formatProse: splits on \n\n, wraps in <p>; **bold** OK;
//      raw HTML blocks (e.g. <figure>) passed through unchanged.
//
//  type: 'list'
//    → renderMixedList: string items → numbered <ol>;
//      items starting with '<' (e.g. <figure>) appended as
//      raw HTML after the list.
//
//  Inline images (both types):
//    <figure class="writeup-figure">
//      <img src="images/my-chart.png" alt="Description" />
//      <figcaption>Caption text.</figcaption>
//    </figure>
//
// ── TOOLS ─────────────────────────────────────────────────────
//  tools     Array of tool/library names shown as tags.
// =============================================================

const PROJECTS = [

  // ── 1 ──────────────────────────────────────────────────────
  {
    id: 'cloud-code',
    title: 'Cloud Code — Hack&Roll 2026',
    period: 'January 2026',
    summary: 'Open-source LeetCode-style platform for learning cloud architecture through interactive challenges, built in 24 hours at Hack&Roll 2026.',
    tags: ['Cloud Architecture', 'Node.js', 'React 18', 'Firebase', 'OpenAI GPT-4'],
    github: 'https://github.com/awpbash/hacknroll26',
    liveUrl: 'https://hnr2026-fe.vercel.app/',
    image: 'images/cloud-code/cover_image.jpg',

    overview: `Cloud Code is an open-source, LeetCode-style platform for learning cloud architecture through hands-on interactive challenges. Users architect solutions on a visual canvas, submit for rule-based assessment & GPT-4 evaluation, and receive targeted feedback — bridging the gap between abstract documentation and real-world architectural judgement.

The platform also includes a structured learning mode for exploring cloud services across AWS, GCP, Azure, RunPod, and MongoDB side-by-side, with pricing data and category filters.

Built as a 24-hour project for **Hack&Roll 2026**, NUS's annual student hackathon.`,

    sections: [
      {
        label: 'Motivations',
        type: 'prose',
        content: `Cloud architecture is hard to learn without real-world exposure — whitepapers are too abstract, tutorials too prescriptive, online courses often required costs, and professional experiences are hard to access as a student. We wanted a platform where learners could practice by facing real problems and must architect solutions themselves, with on-demand feedback. Cloud solutions are afterall, an important part of the modern software landscape, and learning them is a critical step for anyone in the tech field.

<figure class="writeup-figure">
  <img src="images/cloud-code/motivation.jpg" alt="Comic strip: LeetCode didn't prepare you for cloud architecture design" />
  <figcaption>The motivation: LeetCode trains algorithm thinking, but cloud architecture judgement — which services to use, how to connect them, what they cost — requires a different kind of practice.</figcaption>
</figure>

Our goals: (1) a **challenge system** where users build solutions on an interactive canvas validated against explicit constraints (service requirements, budget limits); (2) a structured **overview mode** with multi-provider comparisons across five cloud platforms; (3) a module based **learn mode** for users to learn cloud concepts in a guided, structured way; (4) a production-ready deployment within the 24-hour hackathon window.`,
      },
      {
        label: 'Tech Stack & Implementation',
        type: 'list',
        content: [
          '**React 18 frontend** — challenge browser, interactive React Flow canvas for architecture design, and the learning mode catalogue.',
          '**Node.js / Express backend** — REST API handling challenge logic, user sessions, and proxying requests to OpenAI.',
          '**Firebase / Firestore** — real-time database for challenges, user progress, and leaderboard; Firebase Auth for user management.',
          '**JWT authentication** — stateless session tokens for secure, scalable API access.',
          '**OpenAI GPT-4 integration** — evaluates submitted architecture diagrams; provides targeted feedback on constraint violations; generates step-by-step explanations in learning mode.',
          '**Vercel deployment** — frontend and serverless functions deployed for zero-config continuous deployment.',
        ],
      },
      {
        label: 'Key Features',
        type: 'prose',
        content: `<figure class="writeup-figure">
  <img src="images/cloud-code/main_interface.jpg" alt="CloudCode home screen showing Quest mode, 30 Days Challenge, and Learn Cloud Services" />
  <figcaption>Platform home: Quest mode, a 30-day challenge track, and the Learn Cloud Services library — accessible from a single interface with topic filtering by service category.</figcaption>
</figure>

**1. Challenges** — real-world architecture design problems with explicit requirements (service integrations, performance SLAs) and hard constraints (e.g. a $120/month budget). Users drag-and-drop cloud services onto a React Flow canvas and submit for GPT-4 evaluation and targeted feedback.

<figure class="writeup-figure">
  <img src="images/cloud-code/challenge_interface.jpg" alt="CloudCode challenge interface showing an AWS architecture problem with a service palette and interactive canvas" />
  <figcaption>Challenge interface: "Add AI Image Recognition to Photo App" — concrete requirements, a $120/month budget constraint, and an interactive canvas for selecting and connecting AWS services.</figcaption>
</figure>

**2. Overview** — filterable catalogue of cloud services across five providers (AWS, GCP, Azure, RunPod, MongoDB), browsable by category (compute, serverless, database, storage, AI/ML, security). Each service card shows pricing and typical use cases.

<figure class="writeup-figure">
  <img src="images/cloud-code/overview_interface.jpg" alt="CloudCode overview mode showing cloud services catalogue with provider filters and category tabs" />
  <figcaption>Cloud Services page: compare services across providers, filtered by category. Each entry includes pricing and a use-case description.</figcaption>
</figure>

**3. Learn mode** — module-based course building a foundational understanding of cloud services and architecture from scratch.

<figure class="writeup-figure">
  <img src="images/cloud-code/learn_interface.jpg" alt="CloudCode learning mode with module based lessons" />
  <figcaption>Learn Cloud Services: structured modules covering service selection, architecture patterns, and best practices.</figcaption>
</figure>`,
      },
      {
        label: 'Challenges Faced',
        type: 'prose',
        content: `The 24-hour constraint required aggressive scope cuts. Several challenge types and the full provider comparison module were descoped in the first few hours once feasibility was clear.

GPT-4 integration required more prompt engineering than expected. Getting structured, actionable feedback rather than generic commentary on user-submitted architecture diagrams took several iterations even within the hackathon window.`,
      },
      {
        label: 'Reflections',
        type: 'prose',
        content: `The time crunch demonstrated how much a team can ship under pressure when stack decisions are made upfront and scope is cut ruthlessly. The concept has real potential beyond the hackathon — a more complete version would include a challenge authoring system, user-submitted challenges, and a fully structured learning course with possible certification.
        
As my first hackathon project, the experience was invaluable for learning how to rapidly prototype a full-stack application, integrate third-party APIs, deploy under tight deadlines, and pitch a concept to others.`,
      },
    ],

    tools: ['Node.js', 'Express', 'React 18', 'React Flow', 'Firebase / Firestore', 'Firebase Auth', 'JWT', 'OpenAI GPT-4 API', 'Vercel'],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    id: 'character-llm',
    title: 'Character-level Transformer',
    period: 'Sep – Dec 2025',
    summary: 'Small transformer model built from scratch in JAX/Flax while on strict compute budgets, optimised through systematic ablation studies and Bayesian hyperparameter search.',
    tags: ['Python', 'JAX', 'Flax', 'Deep Learning', 'Transformer', 'LLM Research', 'NLP'],
    github: 'https://github.com/robbiechia/character_LLM',
    liveUrl: null,
    image: 'images/character-llm/cover_image.png',

    overview: `A character-level transformer built from scratch in JAX/Flax, trained on the Text8 corpus (cleaned Wikipedia text). The model learns to generate text character-by-character, capturing long-range dependencies without word-level tokenisation.

The primary goal was to understand transformer design at a component level and optimise performance under real compute constraints (GPU budget and deadlines).`,

    sections: [
      {
        label: 'Workflow',
        type: 'prose',
        content: `The project was structured as a four-phase pipeline: **baseline → ablation → hyperparameter tuning → final training**, which we adopted after doing research on transformers on HuggingFace. This sequence makes every architectural decision independently testable before allocating more compute to tuning.

**JAX/Flax** was chosen over PyTorch for its XLA compilation and functional programming model, which enforces clean separation between model definition and training state and ensures reproducible experiments. To manage compute budget, we implemented a **token throughput (tokens/s)** measurement system defining a fixed step budget per ablation trial, and **Pickle-based checkpointing** for crash recovery.

**Optuna with Tree-structured Parzen Estimator (TPE)** was used for hyperparameter search. TPE models the distribution of high-performing configurations and samples from promising regions rather than searching uniformly — significantly more efficient than grid or random search when trial count is limited.`,
      },
      {
        label: 'Results',
        type: 'list',
        content: [
          '**Baseline model** — standard transformer with multi-head self-attention, LayerNorm, feed-forward blocks, and sinusoidal positional encodings. Trained on Text8 character sequences with cross-entropy loss and achieved Final Validation Accuracy of ~60%.',
          '**Ablation studies** — we conducted single-variable experiments over: loss function types (cross-entropy at every position vs last char), optimizer types (Adam/AdamW/SGD), positional encodings (sinusoidal/learned/rotary/ALiBi), attention mechanisms (MHA/MQA/GQA), no. of transformer layers, attention heads, embedding dimensionality, context length, dropout rate. Only some changes had big differences, but most were largely marginal improvements. Key findings: **context length scaling** (128 → 256) produced the largest validation loss improvement; more attention heads did not consistently improve performance at this scale.',
          `<figure class="writeup-figure">
  <img src="images/character-llm/ablations_experiment_results.jpg" alt="Ablation study results: validation loss curves" />
  <figcaption>Ablation results: each curve isolates one architectural change. Context length 256 (purple) and Rotary encoding (orange) showed the most consistent improvements over baseline (red). More layers alone (blue) provided only marginal gains.</figcaption>
</figure>`,
          '**Bayesian hyperparameter search** — TPE over learning rate and weight decay. Found optimal region around **LR 2–3×10⁻³ with near-zero weight decay** — a configuration standard grid search over common values (1e-4, 1e-3, 1e-2) would likely miss.',
`<figure class="writeup-figure">
  <img src="images/character-llm/hyperparam_results1.png" alt="Contour plot of Bayesian hyperparameter search over learning rate and weight decay" />
  <figcaption>Bayesian search: objective value across the LR × weight decay space. Optimal region (darkest blue, ~0.98) clusters around LR 2–3×10⁻³ with near-zero weight decay.</figcaption>
</figure>`,
          '**Final model** — using the final best configuration trained to convergence on validation perplexity with Pickle checkpointing, we obtained test accuracy of ~70%.',
        ],
      },
      {
        label: 'Challenges Faced',
        type: 'prose',
        content: `Compute was the binding constraint throughout. Each ablation trial had to be capped at a fixed step budget, introducing noise into comparisons. We also had poor budget allocation — too much compute spent in early phases, limiting our ability to observe whether long-term validation loss trends would continue to improve after budget exhaustion.
        
Additionally, we realised our models converged rather early on. We could have either saved compute by introducing stopping mechanisms or scaled up the model size to better utilise the budget and observe more significant differences between configurations. The latter would have been more informative for understanding transformer design at scale, but we were limited by the compute available to us.`,
      },
      {
        label: 'Reflections',
        type: 'prose',
        content: `Several intuitions about transformer design didn't hold at character level and small scale — more attention heads didn't consistently improve performance, and lesser variations in training loss were observed than expected. The ablation methodology surfaced these clearly rather than leaving them as implicit assumptions.

The Bayesian search found configurations that manual tuning would not have explored. Setting up Optuna to run reproducible, comparable trials given training stochasticity was the most technically demanding part of the project.`,
      },
    ],

    tools: ['Python', 'JAX', 'Flax', 'NumPy', 'Optuna (TPE Bayesian search)', 'Pickle', 'Matplotlib'],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    id: 'ecommerce-optimisation',
    title: 'E-Commerce Operations Optimisation',
    period: 'Sep – Dec 2024',
    summary: 'Supply chain data science pipeline for a hypothetical e-commerce operator: demand forecasting, inventory management, dynamic pricing, route optimisation, and a real-time Power BI dashboard.',
    tags: ['Python', 'Scikit-learn', 'Power BI', 'Docker', 'SQLite', 'Optimisation', 'Logistics'],
    github: null,  // Private repository
    liveUrl: null,
    image: 'images/e-commerce-optimisation/cover_image.jpg',

    overview: `A data science solution for the hypothetical e-commerce operator **Bao Tao**, covering the interconnected supply chain challenges of demand forecasting, inventory management, dynamic pricing, and delivery optimisation. My subgroup focused exclusively on **supply chain operations.** The other subgroup handled customer analytics (RFM segmentation, CLV, sentiment analysis); we were involved only in small-scale cross-group discussion on each other's work.

Two real-world datasets: the **DataCo** supply chain dataset (order-level) and the **Brazilian Olist** dataset (customer behaviour, reviews). Synthetic data generated via **Synthetic Data Vault** for missing variables (discount rates, stock levels, product weights). Data was stored in **SQLite** and our pipelines were containerised with **Docker**.`,

    sections: [
      {
        label: 'Workflow & Scoping Decisions',
        type: 'prose',
        content: `Upfront scoping was critical — the problem space spanned customer behaviour, demand, inventory, fulfilment, and pricing. As datasets had coverage gaps near their endpoints (likely data collection artefacts), so analysis was restricted to periods with consistent coverage. Both datasets contained inconsistencies requiring significant cleaning & preprocessing before modelling — understanding the data structure deeply at the start avoided downstream failures, especially since we were working with synthetic data that required careful validation for the sake of the project context.

Domain knowledge shaped implementation: understanding the practical implications of stockouts informed EOQ/ROP parameterisation, and delivery logistics context shaped the priority scoring for route optimisation.`,
      },
      {
        label: 'Key Features',
        type: 'prose',
        content: `**Demand forecasting (GBR; RMSE 31.01)** — **Gradient Boosting Regressor** trained on cyclical month encoding, t−1 lag features, and one-hot encoded product IDs. Uses **EWMA**-smoothed prior observations as inputs to rolling year-on-year predictions — forecasting iteratively over 12 months while adapting to recent trends. GBR outperformed Random Forest and Linear Regression by capturing non-linear demand patterns through sequential error correction.

**Inventory management** — **EOQ** and **ROP** formulas parameterised per supplier using demand volatility from the GBR output and synthetic safety stock buffers. Achieved a **0.0% stockout rate**; primary cost driver shifted to holding costs (466K YTD), identifying inventory reduction as the next optimisation target.

**Dynamic pricing** — two **Decision Tree** models: single-product (high-value SKUs) and category-level (broad market). Features: monthly **Price Elasticity of Demand (PED)**, competitor pricing proxies, and seasonal indicators.

**Delivery route optimisation** — orders ranked by a weighted urgency score (delivery deadline, zone density, warehouse proximity). **Haversine distances** calculated between customer coordinates and generated city centroids. **Simulated annealing** local search starts from a random route and iteratively accepts improving swaps to minimise total distance.

<figure class="writeup-figure">
  <img src="images/e-commerce-optimisation/priority_weights.jpg" alt="Delivery priority score algorithm" />
  <figcaption>Priority score weights: values normalised before score calculation.</figcaption>
</figure>

<figure class="writeup-figure">
  <img src="images/e-commerce-optimisation/priority_formula.jpg" alt="Delivery priority score formula" />
  <figcaption>Priority score formula: higher score = more urgent delivery.</figcaption>
</figure>

<figure class="writeup-figure">
  <img src="images/e-commerce-optimisation/route_optimisation.jpg" alt="US map showing delivery route optimisation paths" />
  <figcaption>Route visualisation: optimised paths from a Kansas City hub to customer clusters, grouped by zone density and warehouse proximity.</figcaption>
</figure>

**Power BI dashboard** — two-page interactive dashboard for non-technical stakeholders with drill-through filters (date, shipping mode, supplier). E.g overall on-time delivery rate: **45.2%** across 171,962 deliveries. Counterintuitive finding: Same Day shipping had the worst on-time rate, directly informing fulfilment recommendations.

<figure class="writeup-figure">
  <img src="images/e-commerce-optimisation/dashboard1.jpg" alt="Supplier Performance Power BI dashboard" />
  <figcaption>Supplier Performance page: on-time delivery rates by shipping mode. Second Class: 76.6% on-time; Same Day: consistently late.</figcaption>
</figure>

<figure class="writeup-figure">
  <img src="images/e-commerce-optimisation/dashboard2.jpg" alt="Inventory Management Power BI dashboard" />
  <figcaption>Inventory Management page: predicted demand (red line) guides restocking. 0.0% stockout rate; stock turnover 0.17 — holding cost reduction identified as the primary further optimisation target.</figcaption>
</figure>`,
      },
      {
        label: 'Challenges Faced',
        type: 'prose',
        content: `Real operational data is messy in ways academic datasets are not — inconsistent timestamps, duplicate records, and business logic embedded in undocumented column encodings. Data validation and cleaning consumed a disproportionate share of project time.

Generating realistic synthetic data required domain judgement. Discount rates were mirrored from DataCo's distribution (with a Black Friday adjustment) using Synthetic Data Vault; product weights and manufacturing times used rule-based generation from product names and categories, avoiding manual assignment across thousands of SKUs.

Rolling predictions compound errors over the forecast horizon — using forecasts as future inputs is realistic for deployment but limits reliable prediction range past a few months. We also left out other possible factors for pricing (e.g. competitor pricing, macroeconomic indicators) and route optimisation (e.g. traffic patterns, driver schedules) due to data limitations, which would be important for a production system.

Lastly, our group was slightly unsure on the deliverables of the project. While we focused on producing a pipeline, dashboard and analytical reports for stakeholders, we could have also produced a deployable prototype of the dynamic pricing system or route optimisation algorithm. With more time, we would have liked to build these out as well to demonstrate end-to-end impact from data to deployment.`,
      },
      {
        label: 'Reflections',
        type: 'prose',
        content: `The Power BI dashboard was the highest-impact deliverable — regardless of model rigour, findings need an accessible interface to drive decisions. Designing for a non-technical audience rather than optimising for technical completeness was the most important shift in this project.

In retrospect, more advanced forecasting models (ARIMA, Prophet) and stronger optimisation algorithms (reinforcement learning for dynamic pricing, full VRP solvers for routing) could improve results. Given scope and timeline, we prioritised pipeline integration and stakeholder accessibility over pushing individual model performance.`,
      },
    ],

    tools: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'SQLite', 'Power BI', 'Docker', 'Synthetic Data Vault', 'Matplotlib', 'Seaborn', 'Bash', 'GeoPy'],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    id: 'rna-sequencing',
    title: 'RNA Sequencing Analysis Pipeline',
    period: 'May – Dec 2024',
    summary: 'Bioinformatics analysis pipeline for gene expression data in a biotech research context, incorporating differential expression analysis, pathway enrichment, and network visualisation.',
    tags: ['Python', 'R', 'Bioinformatics', 'Statistical Analysis'],
    github: null,  // Confidential — not publicly available
    liveUrl: null,
    image: 'images/rnaseq/cover_image.jpg',

    overview: `This project was completed during my internship at **Auristone Pte Ltd**, a biotech research company. Due to **confidentiality agreements**, specific details of the pipeline design, data, and implementation cannot be shared publicly. This writeup covers my thought process, methods explored, and key learnings.

The work involved building an RNA-seq analysis pipeline for hypothesis-driven analysis of gene expression data, with the goal of identifying biologically meaningful patterns to inform downstream research decisions. Outputs had to be interpretable by biological scientists / doctors, not necessarily with a strong quantitative background.`,

    sections: [
      {
        label: 'Thought Process',
        type: 'prose',
        content: `The guiding principle was hypothesis-driven analysis: every step was framed around a specific biological question rather than applied as a generic pipeline. This shaped both method selection and how results were communicated.

Gene expression data are high-dimensional and computationally demanding, so trade-offs between analytical depth and runtime had to be made deliberately. Usability for non-technical collaborators was a first-class concern — a pipeline that produces results no one can interpret generates no value.

Sourcing and validating gene expression and clinical data from large public and proprietary databases required rigorous QC work upfront. Errors introduced early compound in high-dimensional data and become difficult to trace downstream.`,
      },
      {
        label: 'Methods Explored',
        type: 'list',
        content: [
          '**Data sourcing & QC** — sourced gene expression and clinical data from public and proprietary databases (E.g Gene Ontology, Gene Card) for validation & interpretation; ensured QC checks for flag low-quality samples before downstream analysis.',
          '**Differential expression analysis (DEA)** — identified statistically significant differences in gene expression across conditions. **Volcano plots** used to combine p-value significance with fold-change magnitude for biologically meaningful thresholding, **MA plots** for visualising mean expression vs log fold change.',
          '**Expression heatmaps** — visualised co-expression patterns across samples and conditions to guide hypothesis generation for downstream experiments.',
          '**Dimensionality reduction** — Principle Component Analysis (PCA) applied to visualise sample clustering, detect batch effects, and surface confounders in the high-dimensional expression space before hypothesis testing. ',
          '**Gene Set Enrichment Analysis (GSEA)** — identified biological pathways and gene ontology (GO) terms enriched among differentially expressed genes, connecting statistical findings to biological mechanism.',      
          '**Cytoscape network visualisation** — gene interaction networks constructed to map relationships between key genes and identify hub genes driving pathway activity.',
          '**Protein-protein interaction (PPI) analysis** — integrated PPI data to contextualise gene expression changes within known interaction networks, identifying potential drug targets or biomarkers.',
        ],
      },
      {
        label: 'Challenges Faced',
        type: 'prose',
        content: `I did not have sufficient domain knowledge prior to the internship, so there was a steep learning curve in understanding the biological context and how to interpret results meaningfully. I had to learn how to read scientific papers, understand biological terminology, and translate between quantitative findings and biological relevance.
        
Translating between quantitative and biological domains was the central challenge. Statistical significance does not map directly to biological relevance — a gene can be highly significant without being a priority target. Deciding what to surface required close collaboration with domain experts and ongoing context about the research hypotheses.

Computational efficiency was a persistent concern when processing large expression matrices. Pipeline optimisation and cross-environment reproducibility added overhead not typical in standard ML workflows.`,
      },
      {
        label: 'Reflections',
        type: 'prose',
        content: `Domain knowledge isn't optional background context in applied data science — it's a prerequisite for interpreting results correctly. Without close collaboration with biologists, statistically interesting findings can be analytically irrelevant to the actual research question.

This project also honed my technical skills in applying statistical concepts to the datasets, and pipelining and sharpened my ability to design & scope an analysis workflow around a specific research question, as well as communicate methodology at an appropriate level of abstraction — a transferable skill applicable well beyond bioinformatics.`,
      },
    ],

    tools: ['Python', 'R', 'Bioconductor libraries', 'Cytoscape', 'GSEA', 'Matplotlib', 'Seaborn'],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    id: 'fraud-detection',
    title: 'Fraud Detection in Utility Consumption',
    period: 'Sep – Dec 2024',
    summary: 'Multi-model ML pipeline to detect fraudulent electricity and gas consumption, with per-fold SMOTE resampling, Optuna hyperparameter tuning, and a Bidirectional LSTM as the best-performing model.',
    tags: ['Python', 'Scikit-learn', 'TensorFlow', 'Optuna', 'Classification'],
    github: 'https://github.com/bernisschow/CS3244-Fraud-Detection-in-Electricity-and-Gas-Consumption',
    liveUrl: null,
    image: 'images/fraud-detection/cover_image.jpg',

    overview: `Fraudulent tampering with electricity and gas meters costs utility companies significant revenue and poses safety risks. This project builds an ML pipeline to classify consumption records as fraudulent or legitimate based on patterns in usage history.

The dataset (Kaggle) contains client-level data (static attributes: meter code, status) and invoice-level data (time series of consumption readings per client). **5.58% of clients were fraudulent** — severe class imbalance that makes naive accuracy misleading and demands explicit intervention.

Six classifier families were systematically compared, culminating in a **Bidirectional LSTM** treating invoice history as a sequential signal, achieving **Fraud Recall 0.67**.`,

    sections: [
      {
        label: 'Objectives',
        type: 'list',
        content: [
          'Build a fraud detection classifier on severely imbalanced utility data (5.58% fraud rate)',
          'Apply SMOTE correctly within cross-validation folds to prevent leakage into validation sets',
          'Systematically compare six ML model families: lazy learning, tree-based, kernel, linear, probabilistic, and neural',
          'Use Optuna for principled hyperparameter tuning across all model families',
          'Identify the architecture that best captures the sequential nature of consumption fraud patterns',
        ],
      },
      {
        label: 'Considerations',
        type: 'prose',
        content: `Class imbalance was the central challenge upfront — 94.42% legitimate vs. 5.58% fraudulent. Raw accuracy becomes misleading (predicting all-legitimate achieves 94%), so **fraud recall** was treated as the primary metric.

A critical design decision was where to apply SMOTE. Applying it to the full dataset before cross-validation leaks synthetic minority examples into validation folds, inflating performance estimates. **Per-fold SMOTE** applied only to each fold's training split required a custom pipeline but produces honest evaluation metrics.

The invoice history is inherently sequential — consumption patterns over months encode the fraud signal better than static per-client aggregates. This motivated the **Bidirectional LSTM**: reading the time series in both directions captures anomalies at any point in a client's history.`,
      },
      {
        label: 'Methods Explored & Results',
        type: 'list',
        content: [
          '**EDA & preprocessing** — confirmed 5.58% fraud rate; flagged index discrepancies between meter readings (encoded as boolean feature `is_index_discrepancy`); removed collinear features. I led the EDA and preprocessing stages.',
          '**Feature engineering** — one-hot encoding for categorical variables; per-client summary statistics (min, max, mean consumption); unique occurrence counts per meter attribute; `is_index_discrepancy` boolean from billing index irregularities.',
          '**Per-fold SMOTE** — synthetic minority oversampling applied exclusively to each fold\'s training split. Weighted random sampling used for LSTM mini-batch construction.',
          '**Classical model comparison** — SVM (PCA, LightGBM feature importance, RFECV), KNN, Decision Tree (bagging, Random Forest, AdaBoost, XGBoost, LightGBM), Logistic Regression (RFE, PCA, threshold adjustment), Naive Bayes, MLP. Hyperparameter tunings were conducted with Optuna.',
          '**Bidirectional LSTM (best model)** — two-branch architecture: BiLSTM branch processes the invoice time series (sequential consumption, both temporal directions); FC branch processes static client features. **Xavier initialisation** for stable gradient flow. Results: **Fraud Recall: 0.67 | Precision: 0.10 | Accuracy: 64%**.',
        ],
      },
      {
        label: 'Challenges Faced',
        type: 'prose',
        content: `Constructing fraud-relevant features from raw meter readings required domain intuition. Consumption alone is insufficient as context such as historical patterns, meter index continuity, and seasonal baselines all matter. Without domain experts, these signals had to be approximated from the data itself.

The precision-recall trade-off is fundamental. A recall of 0.67 captures two-thirds of actual fraud but generates many false positives (precision: 0.10). In deployment, the optimal decision threshold depends on the relative cost of missed fraud vs. false investigations which will depend on the business decision.`,
      },
      {
        label: 'Reflections',
        type: 'prose',
        content: `The Bidirectional LSTM outperformed all classical models but only marginally on recall — and at significant cost in precision. Sequential modelling captures a signal that tabular aggregates miss, but the underlying signal is noisy enough that fraud remains genuinely hard to discriminate from legitimate anomalies.

Per-fold SMOTE discipline was an important methodological takeaway. In subsequent projects, data transformations using label information are always applied inside CV folds, not before or the evaluation cannot be trusted.`,
      },
    ],

    tools: ['Python', 'Scikit-learn', 'TensorFlow / Keras', 'imbalanced-learning (SMOTE)', 'Optuna', 'XGBoost', 'LightGBM', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    id: 'sentiment-analysis',
    title: 'Twitter Sentiment Analysis',
    period: 'Mar – Apr 2023',
    summary: 'Binary sentiment classifier for 100K tweets comparing Naive Bayes (F1: 0.757), Logistic Regression (F1: 0.779), and LSTM (F1: 0.752), with a custom text preprocessing pipeline.',
    tags: ['Python', 'NLP', 'TensorFlow', 'NLTK', 'Scikit-learn'],
    github: 'https://github.com/robbiechia/sentiment-analysis',
    liveUrl: null,
    image: 'images/sentiment-analysis/cover_image.jpg',

    overview: `Binary sentiment classifier for 100,000 labelled tweets from **Twitter text data**, predicting positive or negative sentiment. Three model families implemented and compared: **Multinomial Naive Bayes**, **Logistic Regression**, and **LSTM**.

A core focus was developing a preprocessing pipeline tuned for the informal, noisy language characteristic of tweets, and try to produce a model with strong performance on both F1 and AUC metrics.`,

    sections: [
      {
        label: 'Objectives',
        type: 'list',
        content: [
          'Build a text preprocessing pipeline suited to informal, noisy Twitter language',
          'Implement and compare classical (Naive Bayes, Logistic Regression) and neural (LSTM) sentiment classifiers',    
          'Evaluate models on F1 and AUC rather than raw accuracy',
        ],
      },
      {
        label: 'Workflow',
        type: 'prose',
        content: `**Preprocessing pipeline**: lowercased text; stripped URLs, @mentions, punctuation, digits; replaced 3+ repeated characters ("soooo" → "soo"); applied **Porter stemming**. Augmented NLTK English stopwords with Twitter-specific noise terms, but *retained* all negation words ("not", "don't", "isn't") — critical for sentiment direction. **TF-IDF with unigram + bigram features**: bigrams capture short negation phrases ("not good", "don't like") that unigrams miss.

Three classifiers compared: **Multinomial Naive Bayes** (fast interpretable TF-IDF baseline), **Logistic Regression** (LinearSVC-style, C=2), and **LSTM** (embedding 128-dim → LSTM 64-unit → sigmoid, tokenised sequences max-length 125, 5 epochs, Adam optimiser).`,
      },
      {
        label: 'Results',
        type: 'list',
        content: [
          '**Naive Bayes** — Multinomial NB on TF-IDF features. F1: 0.757 | AUC: 0.84',
          '**Logistic Regression** — LinearSVC-style (C=2) on TF-IDF features. Best overall. F1: 0.779 | AUC: 0.86',
          '**LSTM** — embedding (128) → LSTM (64) → sigmoid. F1: 0.752 | AUC: 0.83',
        ],
      },
      {
        label: 'Challenges Faced',
        type: 'prose',
        content: `Label noise was an instructive finding. Misclassification analysis repeatedly revealed tweets our models predicted correctly but recorded as errors due to incorrect ground-truth labels — a ceiling no model can overcome regardless of architecture.

LSTM training on 70,000 sequences was computationally intensive. Apple M2 Metal GPU reduced training time significantly, but each epoch still took ~70 seconds.`,
      },
      {
        label: 'Reflections',
        type: 'prose',
        content: `Logistic Regression outperformed the LSTM on every metric despite being orders of magnitude simpler. For short-text classification on noisy social media data, strong feature engineering (TF-IDF + bigrams + targeted stopword handling) can outperform a recurrent architecture that lacks domain-specific preprocessing.

Systematically tracing misclassifications back to incorrect ground-truth labels was the most analytically valuable part of the project — and reinforced a principle that's held in every subsequent project: data quality constraints set a ceiling that model complexity cannot overcome.`,
      },
    ],

    tools: ['Python', 'NLTK', 'Scikit-learn', 'TensorFlow / Keras', 'NumPy', 'Pandas', 'Matplotlib', 'WordCloud'],
  },

];
