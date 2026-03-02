// =============================================================
//  PROJECTS DATA
//  To add a new project: copy one of the objects below and
//  append it to the array. The order here = display order.
//
//  Text fields support **bold** for emphasis.
//  Use blank lines (two newlines in a template literal) for
//  paragraph breaks in prose fields.
//
// ── IMAGES ────────────────────────────────────────────────────
//
//  image: 'images/my-project.jpg'
//    → Shown as the card thumbnail AND as the hero banner at the
//      top of the project writeup. Set to null for no image.
//
//  To embed images INSIDE a writeup section, include an HTML
//  <figure> block directly in any prose string. Example:
//
//  overview: `First paragraph of text.
//
//  <figure class="writeup-figure">
//    <img src="images/my-chart.png" alt="Chart description" />
//    <figcaption>Caption for the image.</figcaption>
//  </figure>
//
//  Paragraph continuing after the image.`,
//
//  Place all image files in the images/ subfolder.
// =============================================================

const PROJECTS = [
  {
    id: 'customer-churn',
    title: 'Customer Churn Prediction',
    summary: 'Classification model using logistic regression and random forests to predict customer churn, achieving 89% accuracy and a ROC-AUC of 0.94.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning'],
    github: 'https://github.com/robbiechia',  // update to specific repo URL
    image: null,  // e.g. 'images/churn-cover.jpg'

    overview: `Customer churn — the rate at which customers stop doing business with a company — is a key metric for subscription-based businesses. This project builds a predictive model that flags at-risk customers before they leave, enabling targeted retention strategies.

The dataset comprised roughly 10,000 customer records from a telecommunications company, including usage patterns, contract details, billing information, and customer service interaction history.`,

    objectives: [
      'Identify the key drivers of customer churn through exploratory data analysis',
      'Build a reliable classification model to predict at-risk customers',
      'Evaluate multiple algorithms and select the best-performing one via cross-validation',
      'Produce interpretable outputs that could inform a business retention strategy',
    ],

    thoughtProcess: `I started by conducting exploratory data analysis to understand the distribution of features and the degree of class imbalance (roughly 15% churn rate). Visualisations of churn rate by contract type, tenure, and monthly charges quickly revealed which features were likely to be most predictive.

I chose logistic regression as a transparent baseline and random forest as the primary model — tree-based methods handle mixed feature types and non-linear interactions well without extensive preprocessing. I deliberately avoided more opaque models because interpretability for business stakeholders was a priority.`,

    howItWorks: [
      '**Data cleaning & encoding** — handled missing values, one-hot encoded nominal features, applied ordinal encoding where appropriate, and scaled numerical features for the logistic regression.',
      '**Exploratory analysis** — produced churn-rate breakdowns by contract type and tenure band, correlation heatmaps, and class-balance assessment.',
      '**Modelling** — trained a logistic regression baseline, then a random forest with GridSearchCV tuning (n_estimators, max_depth, min_samples_split) using 5-fold stratified cross-validation.',
      '**Evaluation** — compared models on accuracy, precision, recall, F1, and ROC-AUC. Computed SHAP values to explain individual predictions and global feature importance.',
    ],

    challenges: `The most significant challenge was class imbalance: only ~15% of customers churned, so a naive model that predicted "no churn" for everyone still achieved 85% accuracy. I addressed this with SMOTE oversampling on the training fold and shifted focus to recall and ROC-AUC as primary metrics.

Several features were also highly correlated (total charges and tenure, for instance), which inflated the logistic regression's coefficient variance. I handled this with feature selection using variance inflation factors before fitting the linear model.`,

    reflections: `This project reinforced that metric choice matters enormously — a high accuracy score can be deeply misleading with imbalanced classes. I also gained appreciation for model interpretability: SHAP values translated the random forest's predictions into language a non-technical stakeholder could act on.

If I revisited this project, I would experiment with gradient boosting (XGBoost, LightGBM) and compare cost-sensitive learning against oversampling as an alternative class-imbalance strategy.`,

    tools: ['Python 3.11', 'Pandas', 'NumPy', 'Scikit-learn', 'imbalanced-learn (SMOTE)', 'SHAP', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
  },

  {
    id: 'sales-forecasting',
    title: 'Sales Forecasting with Time Series',
    summary: 'ARIMA and Prophet-based forecasting pipeline for retail sales data, reducing forecast MAPE by 23% against a seasonal naive baseline.',
    tags: ['Python', 'Prophet', 'Statsmodels', 'Time Series'],
    github: 'https://github.com/robbiechia',  // update to specific repo URL
    image: null,  // e.g. 'images/sales-cover.jpg'

    overview: `Accurate sales forecasts help retailers optimise stock levels, staffing, and promotional planning. This project builds a time series forecasting pipeline for a multi-product retail dataset covering three years of weekly sales data across 45 stores.

The goal was to produce reliable 12-week-ahead forecasts and quantify uncertainty with prediction intervals, comparing a classical ARIMA approach against Facebook's Prophet library.`,

    objectives: [
      'Understand the trend, seasonal, and residual structure of the sales data',
      'Build and evaluate classical (ARIMA) and modern (Prophet) forecasting models',
      'Reduce forecast error relative to a seasonal naive baseline',
      'Produce prediction intervals to communicate forecast uncertainty to stakeholders',
    ],

    thoughtProcess: `I began with time series decomposition to separate trend, seasonality, and residuals. Weekly retail data typically exhibits strong annual seasonality and anomalies around public holidays. Knowing this shaped my model choices: ARIMA handles autocorrelation well, while Prophet was built specifically for business time series with multiple seasonality patterns and holiday effects.

I structured evaluation as a rolling-origin backtest: training on the first 2.5 years and testing on the final 6 months, which mimics the real conditions under which the model would be deployed.`,

    howItWorks: [
      '**Stationarity testing** — applied ADF and KPSS tests to determine whether differencing was required before fitting ARIMA.',
      '**Decomposition** — used STL decomposition to inspect trend and seasonal components and identify anomalous weeks visually.',
      '**ARIMA modelling** — examined ACF/PACF plots to identify candidate (p, d, q) parameters; used auto_arima for automated selection; ran residual diagnostics to validate white-noise assumptions.',
      '**Prophet modelling** — configured with yearly seasonality, public holiday regressors, and a logistic growth trend cap to prevent unbounded forecasts.',
      '**Evaluation** — rolling-origin cross-validation with MAPE, MAE, and RMSE measured across forecast horizons of 1, 4, 8, and 12 weeks ahead.',
    ],

    challenges: `Handling anomalous weeks — holiday spikes, promotional events — was the main challenge. Outliers caused ARIMA to fit poorly and produced wide, unreliable prediction intervals. I addressed this by flagging known anomalous periods in the data and passing them as explicit holiday regressors in Prophet.

Scaling the pipeline across 45 stores also required careful design: each store needed its own model fit, and I had to ensure there was no data leakage between training and testing splits during the rolling-origin evaluation.`,

    reflections: `Prophet outperformed ARIMA on every metric for this dataset, largely due to its native handling of multiple seasonalities and holiday effects. ARIMA was nonetheless valuable during the exploratory phase for understanding the autocorrelation structure of the data.

A natural extension would be hierarchical reconciliation — producing bottom-up forecasts at the product-store level and reconciling them to aggregate store and company-level forecasts using the MinT method.`,

    tools: ['Python 3.11', 'Pandas', 'Statsmodels', 'pmdarima (auto_arima)', 'Prophet', 'Matplotlib', 'Jupyter Notebook'],
  },

  {
    id: 'nlp-sentiment',
    title: 'NLP Sentiment Analysis',
    summary: 'Fine-tuned BERT for three-class sentiment classification on product reviews, achieving 92% F1-score — an 8 percentage-point improvement over a TF-IDF + SVM baseline.',
    tags: ['Python', 'HuggingFace', 'PyTorch', 'NLP'],
    github: 'https://github.com/robbiechia',  // update to specific repo URL
    image: 'images/nlp-cover.png',

    overview: `Online product reviews contain a wealth of customer opinion that businesses can use to improve products and monitor brand perception. This project builds a three-class sentiment classifier — positive, neutral, or negative — trained on a dataset of ~50,000 Amazon product reviews.

The project compares a classical NLP pipeline (TF-IDF + SVM) against a fine-tuned BERT model, quantifying the trade-off between interpretability, training cost, and predictive performance.`,

    objectives: [
      'Preprocess and explore a large real-world text dataset',
      'Build a strong classical NLP baseline using TF-IDF feature extraction and a linear SVM',
      'Fine-tune a pre-trained BERT model for three-class sentiment classification',
      'Quantify the performance gain from contextual embeddings over bag-of-words representations',
    ],

    thoughtProcess: `The case for BERT was motivated by its ability to capture word context — the phrase "not good" should be classified very differently from "good", a distinction TF-IDF cannot represent. However, BERT is significantly more expensive to train and serve, so I wanted to rigorously quantify whether the performance gain justified the cost.

I used bert-base-uncased as the backbone, adding a dropout layer and a linear classification head, then fine-tuning for three epochs on a GPU. The classical baseline used unigram and bigram TF-IDF features with a LinearSVC, which is a strong and fast baseline for text classification tasks.`,

    howItWorks: [
      '**Preprocessing** — lowercased text, stripped HTML tags and non-alphanumeric characters, truncated reviews to 512 tokens for BERT compatibility.',
      '**TF-IDF baseline** — extracted unigram + bigram TF-IDF features; tuned LinearSVC regularisation parameter C via 5-fold cross-validation.',
      '**BERT fine-tuning** — tokenised inputs with the bert-base-uncased tokeniser; trained with AdamW (lr = 2e-5), a linear warmup schedule over the first 10% of steps, batch size 32 for 3 epochs.',
      '**Evaluation** — reported macro F1, per-class precision and recall, and confusion matrices for both models. Conducted error analysis on systematic misclassifications.',
    ],

    challenges: `The class distribution was skewed — positive reviews comprised roughly 60% of the dataset. For the SVM, I applied class-weight balancing; for BERT, I used a weighted cross-entropy loss during fine-tuning.

GPU memory constraints required careful batch size tuning and gradient accumulation to fit BERT training within available hardware. Mixed-precision training (fp16) provided a useful speedup without degrading accuracy.`,

    reflections: `The 8 percentage-point F1 gain from BERT was meaningful, but came at a significant cost in training time and hardware requirements. For latency-sensitive production use, a distilled model (DistilBERT) would be a worthwhile middle ground.

Error analysis revealed that sarcasm and mixed-sentiment reviews were consistently misclassified by both models — a reminder that some linguistic nuance remains genuinely difficult even for large pre-trained transformers.`,

    tools: ['Python 3.11', 'HuggingFace Transformers', 'PyTorch', 'Scikit-learn', 'NLTK', 'Pandas', 'Matplotlib', 'Jupyter Notebook', 'CUDA (GPU)'],
  },

  {
    id: 'covid-dashboard',
    title: 'Interactive Data Dashboard',
    summary: 'Plotly Dash dashboard visualising COVID-19 global trends with animated choropleth maps, time-series charts, and customisable country/metric filters.',
    tags: ['Python', 'Dash', 'Plotly', 'Data Visualisation'],
    github: 'https://github.com/robbiechia',  // update to specific repo URL
    image: null,  // e.g. 'images/dashboard-cover.jpg'

    overview: `During the COVID-19 pandemic, reliable and accessible data visualisation was critical for public understanding. This project builds an interactive dashboard that lets users explore global case, death, and vaccination data across countries and time periods.

The dashboard is built with Plotly Dash — a Python framework for building analytical web apps — and uses the Our World in Data COVID-19 dataset, which is updated daily.`,

    objectives: [
      'Build an interactive, web-deployable data dashboard using only Python (no JavaScript)',
      'Enable intuitive exploration of multi-dimensional, time-varying COVID-19 data',
      'Create animated visualisations that communicate temporal trends clearly',
      'Practice building responsive, accessible data products for a general audience',
    ],

    thoughtProcess: `I chose Plotly Dash because it allows Python developers to build interactive web apps through a declarative callback system, without writing JavaScript. The main design challenge was creating an interface that is information-dense yet easy to navigate for a non-technical audience.

I mapped out the key questions a user might want to answer — How did cases evolve over time in a given country? How do vaccination rates correlate with death rates? Which regions were most severely affected at peak? — and used each question to drive a specific visualisation choice.`,

    howItWorks: [
      '**Animated choropleth map** — shows case counts (or deaths / vaccinations) per million by country, animated across time with a Play/Pause button and a date slider.',
      '**Time-series panel** — multi-country line chart for any selected metric, controlled by a country multi-select dropdown and a smoothing toggle (7-day rolling average).',
      '**Scatter plot** — vaccination rate vs. death rate per million, with continent colour coding and a log-scale toggle for readability across orders of magnitude.',
      '**Linked callbacks** — all four components are connected through Dash callbacks: changing the country selection or date range updates every chart simultaneously.',
    ],

    challenges: `Performance was the primary challenge. The full Our World in Data dataset contains millions of rows, and naively querying it on every user interaction caused unacceptable lag. I solved this by pre-filtering and caching the data using Dash's dcc.Store component, and by structuring callbacks with precise Input/Output declarations to minimise unnecessary re-computation.

Designing for mobile was also harder than expected: Plotly's default responsive behaviour required manual adjustments to figure margins and layout parameters to render correctly on small screens.`,

    reflections: `This project taught me as much about user-centred design as about data engineering. Several features I thought were useful confused test users, while simpler interactions were far more valuable. Iterating based on feedback was as important as the technical implementation.

A clear next step would be deploying the dashboard to a cloud platform (Render or Railway) and building a lightweight data-refresh pipeline so the dashboard always reflects the latest data automatically.`,

    tools: ['Python 3.11', 'Plotly Dash', 'Plotly Express', 'Pandas', 'NumPy', 'Our World in Data dataset', 'Jupyter Notebook'],
  },

];
