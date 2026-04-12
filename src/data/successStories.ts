import productAiAnalytics from "@/assets/product-ai-analytics.jpg";
import productAiChatbot from "@/assets/product-ai-chatbot.jpg";
import productAutomation from "@/assets/product-automation.jpg";
import productCloudSecurity from "@/assets/product-cloud-security.jpg";

export interface SuccessStory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  image: string;
  problem: string;
  solution: string;
  features: { icon: string; title: string; desc: string }[];
  techStack: string[];
  metrics: { value: string; label: string }[];
  testimonial?: { quote: string; author: string; role: string };
}

export const successStories: SuccessStory[] = [
  {
    id: "ai-predictive-analytics",
    title: "PredictIQ Analytics",
    tagline: "AI-Powered Predictive Intelligence for Enterprise",
    description: "Built a real-time predictive analytics platform that leverages machine learning to forecast market trends, customer behavior, and operational risks with 94% accuracy.",
    category: "AI Tool",
    image: productAiAnalytics,
    problem: "A Fortune 500 retail company struggled with inaccurate demand forecasting, leading to $12M in annual inventory waste and frequent stockouts during peak seasons.",
    solution: "We built PredictIQ Analytics - an AI-powered platform that ingests real-time sales data, weather patterns, social media sentiment, and economic indicators to deliver hyper-accurate demand forecasts at the SKU level.",
    features: [
      { icon: "Brain", title: "Neural Forecasting", desc: "Deep learning models trained on 5+ years of historical data for accurate predictions." },
      { icon: "BarChart3", title: "Real-Time Dashboards", desc: "Interactive visualization of trends, anomalies, and actionable insights." },
      { icon: "Zap", title: "Auto-Alerts", desc: "Intelligent alerting system that notifies stakeholders of significant pattern changes." },
      { icon: "Shield", title: "Data Security", desc: "Enterprise-grade encryption and GDPR-compliant data handling." },
    ],
    techStack: ["Python", "TensorFlow", "Apache Kafka", "React", "PostgreSQL", "AWS SageMaker"],
    metrics: [
      { value: "94%", label: "Forecast Accuracy" },
      { value: "$8.2M", label: "Cost Savings" },
      { value: "3x", label: "Faster Decisions" },
      { value: "60%", label: "Less Inventory Waste" },
    ],
    testimonial: {
      quote: "PredictIQ transformed how we approach demand planning. We went from reactive to proactive overnight.",
      author: "Sarah Chen",
      role: "VP of Operations, RetailCorp",
    },
  },
  {
    id: "ai-customer-assistant",
    title: "ConvoAI Assistant",
    tagline: "Intelligent Conversational AI for Customer Engagement",
    description: "Developed an enterprise-grade AI chatbot platform that handles 80% of customer queries autonomously, reducing support costs by 45% while improving satisfaction scores.",
    category: "AI Tool",
    image: productAiChatbot,
    problem: "A leading telecom provider was overwhelmed with 50,000+ daily customer support tickets, resulting in 48-hour average response times and declining customer satisfaction ratings.",
    solution: "We developed ConvoAI Assistant - a multi-lingual conversational AI platform powered by fine-tuned large language models that understands context, sentiment, and intent to provide instant, accurate support.",
    features: [
      { icon: "MessageSquare", title: "Natural Language Understanding", desc: "Advanced NLU engine supporting 12 languages with contextual awareness." },
      { icon: "GitBranch", title: "Smart Routing", desc: "Escalates complex issues to human agents with full conversation context." },
      { icon: "TrendingUp", title: "Learning Engine", desc: "Continuously improves from interactions and agent feedback loops." },
      { icon: "Database", title: "Knowledge Base", desc: "Integrates with existing CRM, documentation, and product databases." },
    ],
    techStack: ["Node.js", "GPT-4 Fine-tuned", "Redis", "React Native", "MongoDB", "Azure AI"],
    metrics: [
      { value: "80%", label: "Queries Automated" },
      { value: "45%", label: "Cost Reduction" },
      { value: "< 2s", label: "Response Time" },
      { value: "4.8/5", label: "Satisfaction Score" },
    ],
    testimonial: {
      quote: "ConvoAI handles 80% of our queries instantly. Our support team can finally focus on complex issues.",
      author: "James Rodriguez",
      role: "CTO, TeleConnect Inc.",
    },
  },
  {
    id: "smart-process-automation",
    title: "AutoFlow Engine",
    tagline: "Intelligent Process Automation at Scale",
    description: "Created an end-to-end intelligent automation platform that orchestrates complex business workflows using AI, reducing manual processing time by 75% across operations.",
    category: "Automation",
    image: productAutomation,
    problem: "A global logistics company relied on manual processes for shipment tracking, invoice matching, and compliance documentation - consuming 200+ person-hours weekly with a 12% error rate.",
    solution: "We built AutoFlow Engine - an intelligent automation platform combining RPA, computer vision, and process mining to automate end-to-end logistics workflows from order intake to final delivery.",
    features: [
      { icon: "Cog", title: "Process Mining", desc: "AI discovers and maps existing workflows to identify automation opportunities." },
      { icon: "Eye", title: "Document Intelligence", desc: "Computer vision extracts data from invoices, BOLs, and customs forms." },
      { icon: "Workflow", title: "Orchestration Engine", desc: "Coordinates bots, APIs, and human tasks in a unified workflow." },
      { icon: "LineChart", title: "Process Analytics", desc: "Real-time monitoring of automation performance and bottlenecks." },
    ],
    techStack: ["Python", "UiPath", "Azure Cognitive Services", "Apache Airflow", "React", "PostgreSQL"],
    metrics: [
      { value: "75%", label: "Time Saved" },
      { value: "99.2%", label: "Accuracy Rate" },
      { value: "150+", label: "Workflows Automated" },
      { value: "ROI 340%", label: "First Year Return" },
    ],
  },
  {
    id: "cloud-security-platform",
    title: "ShieldCloud Platform",
    tagline: "Zero-Trust Cloud Security for Modern Enterprises",
    description: "Engineered a comprehensive cloud security platform with AI-driven threat detection, achieving 99.97% threat identification rate and zero critical breaches since deployment.",
    category: "SaaS",
    image: productCloudSecurity,
    problem: "A healthcare SaaS company faced mounting cybersecurity threats with 10,000+ daily intrusion attempts while needing to maintain HIPAA compliance across multi-cloud infrastructure.",
    solution: "We engineered ShieldCloud Platform - a zero-trust cloud security solution with AI-powered threat detection, automated incident response, and continuous compliance monitoring across AWS, Azure, and GCP.",
    features: [
      { icon: "Shield", title: "AI Threat Detection", desc: "Machine learning models identify zero-day threats and anomalous behavior patterns." },
      { icon: "Lock", title: "Zero-Trust Architecture", desc: "Every request authenticated and authorized regardless of network location." },
      { icon: "Activity", title: "Real-Time SIEM", desc: "Security information and event management with sub-second alert processing." },
      { icon: "FileCheck", title: "Compliance Engine", desc: "Automated HIPAA, SOC2, and GDPR compliance monitoring and reporting." },
    ],
    techStack: ["Go", "Kubernetes", "Elasticsearch", "React", "Terraform", "AWS/Azure/GCP"],
    metrics: [
      { value: "99.97%", label: "Threat Detection" },
      { value: "0", label: "Critical Breaches" },
      { value: "< 30s", label: "Incident Response" },
      { value: "100%", label: "Compliance Score" },
    ],
    testimonial: {
      quote: "ShieldCloud gave us military-grade security without the complexity. Our compliance audits went from weeks to hours.",
      author: "Dr. Emily Watson",
      role: "CISO, HealthTech Solutions",
    },
  },
];

export const storyCategories = ["All", "AI Tool", "Automation", "SaaS"];
