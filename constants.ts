import { Experience, Education, Project, Publication, SkillCategory } from './types';

export const CONTACT_INFO = {
  name: "Yixin Zhao",
  location: "Oakville, Ontario, Canada",
  phone: "(365) 996-0028",
  email: "y685zhao@uwaterloo.ca",
  linkedin: "https://www.linkedin.com/in/yixin-zhao-646164212/",
  bio: "I am a Master of Mathematics candidate in Statistics at the University of Waterloo, with a strong background in Biostatistics, Computational Mathematics, and Computer Science. My expertise lies in data analysis, machine learning modeling, and statistical research. I have industry experience delivering high-impact solutions in data science, insurance analytics, and AI network research."
};

export const EDUCATION_DATA: Education[] = [
  {
    id: "edu-1",
    institution: "University of Waterloo",
    location: "ON",
    degree: "Master of Mathematics, Statistics",
    period: "Sep 2025 – Aug 2026 (Expected)",
    details: []
  },
  {
    id: "edu-2",
    institution: "University of Waterloo",
    location: "ON",
    degree: "Bachelor of Mathematics Honors, Co-operative Program",
    period: "Sep 2020 – Apr 2025",
    details: [
      "GPA: 3.9/4.0 | Major GPA: 3.9/4.0",
      "Graduated with Dean's Honors",
      "Major: Biostatistics (Statistics) & Computational Mathematics",
      "Minor: Computer Science"
    ]
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    id: "work-1",
    role: "Data Scientist",
    company: "Omnium",
    location: "ON",
    period: "Jan – Apr 2024",
    points: [
      "Built regression machine learning models to estimate new-product sell-through by retailer and category with model accuracy higher than 80%; translated results into launch-timing and allocation guidance for clients.",
      "Built dashboards to monitor clients’ sales data on distribution, pricing, and promotions; delivered recommendations for managing controllable levers to improve revenue."
    ]
  },
  {
    id: "work-2",
    role: "Data Analyst",
    company: "RBC Insurance",
    location: "ON",
    period: "May – Aug 2023",
    points: [
      "Shipped the next-best insurance recommendation system using collaborative filtering and sequential modelling with machine learning and deep learning, achieving a model score of over 85%.",
      "Developed a churn-risk model (LightGBM) to score customer attrition risk with model accuracy over 95%; used SHAP to explain drivers and partnered with business stakeholders to interpret key drivers and plan retention actions.",
      "Built an NLP/ETL pipeline to extract questionnaire data from JSON and images; implemented text normalization, entity extraction, and quality checks, reducing manual review time."
    ]
  },
  {
    id: "work-3",
    role: "AI Network Researcher",
    company: "Huawei Canada",
    location: "ON",
    period: "May – Dec 2022",
    points: [
      "Improved users experience by optimizing first frame delay by 70% for low-latency applications, such as live-streaming or short video apps (e.g., TikTok), by constructing causal analysis algorithms.",
      "Identified bottleneck event by analyzing large-scale network logs using machine learning models and AI techniques, such as random forests, to improve model performance by 50%.",
      "Deployed root cause analysis tools that detected bottleneck causes with accuracy exceeding 90% on labeled incidents."
    ]
  },
  {
    id: "work-4",
    role: "Software Engineer",
    company: "Chinese Academy of Sciences",
    location: "Beijing, China",
    period: "May – Aug, 2021",
    points: [
      "Developed a network security monitoring system for the Scientific Data Center to track vulnerabilities and service health.",
      "Implemented remote web-vulnerability scanning via REST APIs, achieving detection accuracy above 80%."
    ]
  }
];

export const RESEARCH_EXPERIENCE: Experience[] = [
  {
    id: "res-1",
    role: "Research Assistant",
    company: "University of Waterloo",
    location: "ON",
    period: "May 2024 – Present",
    points: [
      "Model impulsive optimal control for mosquito population management (e.g., Wolbachia releases), deriving feasibility/stability conditions and benchmarking against continuous control via numerical solvers.",
      "Implement reproducible simulations (Python, NumPy/SciPy, Matplotlib) with versioned experiment configs."
    ]
  },
  {
    id: "res-2",
    role: "Research Assistant",
    company: "University of Waterloo",
    location: "ON",
    period: "Sep – Dec 2023",
    points: [
      "Evaluated computational methods for fitting a bivariate model for aggregate data meta-analysis (ADMA) on sensitivity and specificity in diagnostic reviews using both real data and simulated data.",
      "Published a first-author paper accepted by BMC Medical Research Methodology 24 (IF: 4.612) and presented a poster at the 2024 Joint Research Conference on Statistics in Quality, Industry and Technology."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Multi-class Classification on Protein Folding",
    techStack: "Python",
    description: [
      "Trained a Feed Forward Neural Network to classify the degree of structural closeness between an amino acid sequence and its corresponding residue in the native structure.",
      "Improved generalization with PCA for dimensionality reduction, class weighting for imbalance, and Ray Tune for hyperparameter search; used early stopping and learning-rate scheduling to improve generalization; achieving ~70% accuracy."
    ]
  },
  {
    id: "proj-2",
    title: "Credit Card Fraud Detection",
    techStack: "Python",
    description: [
      "Built an XGBoost fraud classifier with stratified CV, class weighting, and feature engineering on transaction-level features to identify fraudulent activity and support proactive fraud prevention.",
      "Addressed class imbalance with sampling/weights and reported accuracy ≈0.97 with F1 ≈0.70, while recommending threshold tuning for higher recall at low false-positive rates."
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-1",
    citation: "Yixin Zhao, Bilal Khan & Zelalem F. Negeri. “An evaluation of computational methods for aggregate data meta-analyses of diagnostic test accuracy studies”. BMC Medical Research Methodology volume 24, 111 (2024).",
    link: "https://doi.org/10.1186/s12874-024-02217-2"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "R", "SQL", "SAS", "Java", "C/C++", "Matlab", "Racket"]
  },
  {
    category: "Data Analysis & Modelling",
    skills: ["Pandas", "NumPy", "Jupyter", "Excel", "Scikit-learn", "PyTorch", "TensorFlow", "Tableau", "DB2"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Linux", "Git", "MySQL", "PySpark", "DB2", "Docker", "Adobe Photoshop", "Latex"]
  }
];