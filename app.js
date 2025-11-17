// Resources Data
const resourcesData = {
  "Clinical Reference & Learning Tools": [
    {
      id: 101,
      name: "Pallium Palliative Pocketbook",
      type: "Clinical Reference Guide",
      description: "Peer-reviewed, fully-referenced pocket guide for bedside clinical decision-making in palliative care",
      format: ["Print", "eBook"],
      access: "Purchase on Pallium website",
      cost: "Print TBD, eBook $27.50 CAD",
      costType: "paid",
      features: [
        "Advance care planning section",
        "Delirium management protocols",
        "Updated medication dosages",
        "User-friendly clinical index"
      ],
      bestFor: "Clinical practitioners needing quick reference at bedside",
      audience: "Non-specialist physicians, nurses, pharmacists, social workers, medical students"
    },
    {
      id: 102,
      name: "Learner Journey App",
      type: "Professional Development Tool",
      description: "Free mobile app for tracking professional development and self-directed learning in palliative care",
      format: ["Mobile App"],
      access: "Free download from app stores",
      cost: "FREE",
      costType: "free",
      features: [
        "Track professional development activities",
        "Self-directed learning pathways",
        "Personalized learning tools and resources",
        "CPD management and documentation"
      ],
      bestFor: "Managing continuous professional development in palliative care",
      audience: "All healthcare providers"
    },
    {
      id: 103,
      name: "Culturally Sensitive Palliative Care for Chinese Community",
      type: "Educational Resource",
      description: "Expert-led educational session on providing culturally sensitive palliative care for Chinese communities",
      format: ["Video Recording", "Live Sessions"],
      access: "Available through ECHO Project",
      cost: "FREE",
      costType: "free",
      features: [
        "Expert presentation on cultural considerations",
        "Cultural framework for care delivery",
        "Practical communication strategies",
        "Case-based discussions and Q&A"
      ],
      bestFor: "Healthcare providers serving Chinese patients and families",
      audience: "All healthcare providers"
    }
  ],
  "Community & Caregiver Support": [
    {
      id: 201,
      name: "Atlas CareMap Toolkit",
      type: "Caregiver Support Tool",
      description: "Visual diagram tool showing all people involved in a person's care, helping map support networks",
      format: ["Digital Toolkit", "Templates", "Guides"],
      access: "Free registration on Pallium website",
      cost: "FREE",
      costType: "free",
      features: [
        "6 comprehensive caregiver resources",
        "Visual mapping templates and tools",
        "Implementation guides for individuals",
        "Support network mapping exercises"
      ],
      bestFor: "Family caregivers mapping their support networks",
      audience: "Caregivers, family members, support coordinators"
    },
    {
      id: 202,
      name: "Atlas CareMap Community Workshop Toolkit",
      type: "Community Education Tool",
      description: "Complete toolkit for running CareMap workshops in community settings",
      format: ["Digital Toolkit", "Presentations", "Templates"],
      access: "Free registration on Pallium website",
      cost: "FREE",
      costType: "free",
      features: [
        "Comprehensive coordinator guide",
        "Ready-to-use slide presentations",
        "Workshop planning templates",
        "Funding request forms and resources"
      ],
      bestFor: "Community organizers hosting CareMap workshops",
      audience: "Community leaders, organizations, educators"
    },
    {
      id: 203,
      name: "LEAP Carers Free Course",
      type: "Online Learning Course",
      description: "Free interactive self-learning course designed specifically for family caregivers",
      format: ["Online Self-Paced"],
      access: "Free online access",
      cost: "FREE",
      costType: "free",
      features: [
        "3 comprehensive self-paced modules",
        "Practical guidance for caregiving",
        "Resource library and references",
        "Certificate of completion"
      ],
      bestFor: "Family caregivers supporting loved ones with serious illness",
      audience: "Caregivers, family members, friends"
    },
    {
      id: 204,
      name: "Social Connections in Palliative Care Module",
      type: "Educational Resource",
      description: "Free educational module for health professionals on the importance of social connections in patient care",
      format: ["Online Module"],
      access: "Free online access",
      cost: "FREE",
      costType: "free",
      features: [
        "Evidence on social connections and health",
        "CareMap tool integration strategies",
        "Patient outcome improvement focus",
        "Practical implementation guidance"
      ],
      bestFor: "Understanding social determinants in palliative care",
      audience: "Health professionals, social workers"
    }
  ],
  "Community Building & Implementation": [
    {
      id: 301,
      name: "Compassionate Community Startup Toolkit",
      type: "Community Implementation Tool",
      description: "Comprehensive resources for community champions to create and launch compassionate communities",
      format: ["Digital Toolkit", "Templates", "Presentations"],
      access: "Free download from Pallium website",
      cost: "FREE (English & French)",
      costType: "free",
      features: [
        "Compassionate communities framework overview",
        "Customizable presentation templates",
        "Step-by-step implementation guides",
        "Community engagement and recruitment tools"
      ],
      bestFor: "Starting new compassionate community initiatives",
      audience: "Community champions, grassroots organizers"
    },
    {
      id: 302,
      name: "Compassionate Communities Sustainability Guide",
      type: "Implementation & Growth Tool",
      description: "Strategic guide for scaling and sustaining compassionate community initiatives over time",
      format: ["Digital Guide"],
      access: "Free download from Pallium website",
      cost: "FREE",
      costType: "free",
      features: [
        "Growth and expansion strategies",
        "Long-term sustainability planning",
        "Best practices from established communities",
        "Long-term vision development tools"
      ],
      bestFor: "Scaling established compassionate community initiatives",
      audience: "Compassionate community leaders, coordinators"
    },
    {
      id: 303,
      name: "Compassionate Communities Evaluation Guide",
      type: "Evaluation Tool",
      description: "Framework and tools for measuring impact and effectiveness of compassionate community initiatives",
      format: ["Digital Guide", "Templates"],
      access: "Free download from Pallium website",
      cost: "FREE",
      costType: "free",
      features: [
        "Comprehensive impact measurement framework",
        "Evaluation templates and worksheets",
        "Results sharing and reporting tools",
        "Evidence-based assessment methodology"
      ],
      bestFor: "Evaluating compassionate community program impact",
      audience: "Program evaluators, community leaders"
    },
    {
      id: 304,
      name: "Faith Community Toolkit",
      type: "Community Implementation Tool",
      description: "Specialized resources for faith communities supporting compassionate end-of-life care",
      format: ["Digital Toolkit", "Templates"],
      access: "Free download from Pallium website",
      cost: "FREE",
      costType: "free",
      features: [
        "Spiritual care framework integration",
        "Parish and congregation engagement guides",
        "Faith-based education templates",
        "Religious and spiritual resources"
      ],
      bestFor: "Catholic parishes and faith-based communities",
      audience: "Faith community leaders, pastoral care teams"
    }
  ],
  "Professional Communities & Networks": [
    {
      id: 401,
      name: "Palliative Care ECHO Project",
      type: "Continuing Professional Development",
      description: "National hub-and-spoke community of practice network for continuous learning and peer support",
      format: ["Virtual Sessions", "In-Person Options"],
      access: "Register for specific community on website",
      cost: "FREE (typically)",
      costType: "free",
      features: [
        "Expert-led educational sessions",
        "Interactive case discussions and presentations",
        "Peer learning and knowledge exchange",
        "Multiple specialty communities available",
        "National network of healthcare providers"
      ],
      bestFor: "Continuous professional development in palliative care",
      audience: "All healthcare providers across disciplines"
    },
    {
      id: 402,
      name: "Paramedic Community of Practice",
      type: "Professional Community",
      description: "Dedicated network connecting paramedics across Canada for knowledge exchange in palliative care",
      format: ["Virtual Sessions", "In-Person Events"],
      access: "Through ECHO Project registration",
      cost: "FREE",
      costType: "free",
      features: [
        "Paramedic-specific topics and cases",
        "National paramedic network connection",
        "Expert collaboration and mentorship",
        "Peer support and problem-solving"
      ],
      bestFor: "Paramedics and EMS professionals in palliative care",
      audience: "Paramedics, EMS staff, emergency responders"
    },
    {
      id: 403,
      name: "Interprofessional Palliative Care Community of Practice",
      type: "Professional Community",
      description: "Multidisciplinary network for enhancing palliative care practice across professions",
      format: ["Virtual Sessions"],
      access: "Through ECHO Project registration",
      cost: "FREE",
      costType: "free",
      features: [
        "Multidisciplinary focus and collaboration",
        "Deep-dive topic discussions",
        "Practice strengthening strategies",
        "Collaborative learning environment"
      ],
      bestFor: "Interprofessional palliative care teams",
      audience: "All healthcare disciplines working in palliative care"
    },
    {
      id: 404,
      name: "Lung Health Community of Practice",
      type: "Professional Community",
      description: "New community of practice with Lung Health Foundation for advanced lung disease care",
      format: ["Virtual Sessions"],
      access: "Through ECHO Project registration",
      cost: "FREE",
      costType: "free",
      features: [
        "Lung disease-specific content and cases",
        "Evidence-based practice discussions",
        "Peer support network for respiratory care",
        "Specialty expertise from lung health experts"
      ],
      bestFor: "Healthcare providers specializing in lung disease",
      audience: "Pulmonologists, respirologists, respiratory therapists"
    }
  ],
  "Organizational Solutions": [
    {
      id: 501,
      name: "LEAP Licensing Solutions",
      type: "Organizational Training Program",
      description: "Turnkey licensing options for organizations to deliver LEAP courses at scale within their systems",
      format: ["Customized Delivery"],
      access: "Contact Pallium sales team",
      cost: "Custom pricing based on organizational scale",
      costType: "paid",
      features: [
        "Flexible content use and customization",
        "Comprehensive implementation support",
        "Facilitator training programs",
        "Data reporting and analytics",
        "Cost certainty for large-scale training"
      ],
      bestFor: "Health systems and large organizations",
      audience: "Health authorities, hospitals, health systems, care networks"
    },
    {
      id: 502,
      name: "Compassionate Workplace Campaign",
      type: "Organizational Initiative",
      description: "Support program for creating employee-friendly policies around caregiving and grief in the workplace",
      format: ["Program Framework", "Policy Templates"],
      access: "Contact Pallium for consultation",
      cost: "Custom pricing",
      costType: "paid",
      features: [
        "HR policy development and templates",
        "Employee support program frameworks",
        "Leadership training on compassionate management",
        "Organizational culture change tools"
      ],
      bestFor: "Corporate employers supporting caregiving employees",
      audience: "HR departments, corporate leaders, people managers"
    }
  ]
};

const resourceCategoryIcons = {
  "Clinical Reference & Learning Tools": "📘",
  "Community & Caregiver Support": "🤝",
  "Community Building & Implementation": "🏘️",
  "Professional Communities & Networks": "👥",
  "Organizational Solutions": "🏢"
};

const resourceCategoryClasses = {
  "Clinical Reference & Learning Tools": "clinical",
  "Community & Caregiver Support": "community",
  "Community Building & Implementation": "building",
  "Professional Communities & Networks": "professional",
  "Organizational Solutions": "organizational"
};

// Course Data
const coursesData = {
  "General Palliative Care Courses": [
    {
      name: "LEAP Core",
      target_audience: "Physicians, nurses, pharmacists, social workers, and other health care professionals",
      description: "Award-winning, interprofessional comprehensive palliative care course providing in-depth learning on essential skills and competencies",
      duration: "17 self-paced modules (~8 hours) + 6 hours facilitated workshop (online/hybrid) OR 14 hours in-person (2 days)",
      format: ["Online", "Hybrid", "In-Person"],
      pricing: "Online/Hybrid: $365-425 physicians, $235-295 non-physicians, $115-175 PSWs; In-Person varies",
      accreditation: "24-28 Mainpro+ credits; 12 hours Royal College",
      topics: ["Being aware", "Taking ownership", "Decision-making", "Pain", "GI symptoms", "Hydration/nutrition", "Advance care planning", "Delirium", "Respiratory symptoms", "Psychosocial/spiritual care", "Grief", "Essential conversations", "Last days/hours", "Request to hasten death", "Palliative sedation"],
      prerequisite: null
    },
    {
      name: "LEAP Mini",
      target_audience: "Physicians, nurses, pharmacists, social workers, and health care professionals",
      description: "Condensed one-day version of LEAP Core offering essential palliative care skills in a Top Ten Tips format",
      duration: "8.5 hours (one day)",
      format: ["In-Person"],
      pricing: "$250 physicians, $165 non-physicians, $80 PSWs",
      accreditation: "16.5 Mainpro+ credits; 8.25 hours Royal College",
      topics: ["Condensed version of LEAP Core topics"],
      prerequisite: null
    },
    {
      name: "LEAP In-Depth",
      target_audience: "Health care professionals who have completed LEAP Core or equivalent",
      description: "Advanced course for deepening knowledge in managing complex palliative care cases",
      duration: "6 sessions × 4 hours = 24 hours total",
      format: ["Online"],
      pricing: "$495 for all professions",
      accreditation: "TBD",
      topics: ["Complex symptom management across various disease conditions and care settings"],
      prerequisite: "LEAP Core or equivalent"
    }
  ],
  "Setting-Focused Courses": [
    {
      name: "LEAP Long-Term Care",
      target_audience: "Physicians, nurses, pharmacists, social workers, PSWs, care aides in LTC and nursing homes",
      description: "Palliative care training tailored to long-term care and nursing home settings",
      duration: "17 self-paced modules (~8 hours) + 6 hours facilitated workshop OR 14 hours in-person (2 days)",
      format: ["Online", "Hybrid", "In-Person"],
      pricing: "Online: $425 physicians, $295 non-physicians, $175 PSWs; Hybrid: $365/$235/$115; In-Person: $295/$195/$80",
      accreditation: "26.5 Mainpro+ credits",
      topics: ["Palliative approach in LTC with contextualized case studies"],
      prerequisite: null
    },
    {
      name: "LEAP Home Care",
      target_audience: "Health care professionals, PSWs, care aides working in home care",
      description: "Two learning streams: home care professional stream and PSW stream, focused on home care context",
      duration: "17 modules for professionals (~8 hours) OR 16 modules for PSWs (~8 hours) + 6 hours workshop",
      format: ["Online", "Hybrid"],
      pricing: "Online: $425 physicians, $295 non-physicians, $175 PSWs; Hybrid: $365/$235/$115",
      accreditation: "TBD",
      topics: ["Essential palliative care skills tailored to home care setting"],
      prerequisite: null
    },
    {
      name: "LEAP Hospital",
      target_audience: "Physicians, nurses, pharmacists, social workers in hospital settings",
      description: "Palliative care training contextualized to hospital inpatient and outpatient settings",
      duration: "TBD",
      format: ["Online", "Hybrid"],
      pricing: "TBD",
      accreditation: "TBD",
      topics: ["Hospital-specific palliative care approach"],
      prerequisite: null
    },
    {
      name: "LEAP Emergency Department",
      target_audience: "Physicians, nurses, pharmacists, social workers in emergency departments",
      description: "Palliative care skills for emergency medicine and medical crisis units (in development)",
      duration: "TBD",
      format: ["TBD"],
      pricing: "TBD",
      accreditation: "TBD",
      topics: ["Pain", "Delirium", "End-of-life care in emergency settings"],
      prerequisite: null
    },
    {
      name: "LEAP Under/Post-Graduate",
      target_audience: "Medical students, residents, nursing/pharmacy/social work students",
      description: "Modular selection from LEAP courses for undergraduate and postgraduate health professional education",
      duration: "Variable (educators select modules)",
      format: ["Variable"],
      pricing: "TBD",
      accreditation: "Variable",
      topics: ["Selected modules from various LEAP courses"],
      prerequisite: null
    }
  ],
  "Specialty-Focused Courses": [
    {
      name: "LEAP Renal",
      target_audience: "Nephrologists, internists, nurses, pharmacists, social workers in renal care",
      description: "Palliative care for patients with advanced kidney diseases in dialysis units",
      duration: "17 self-paced modules (~8 hours) + 6 hours workshop",
      format: ["Online", "Hybrid"],
      pricing: "Online: $425 physicians, $295 non-physicians, $175 PSWs; Hybrid: $365/$235/$115",
      accreditation: "15.5 hours Royal College",
      topics: ["Renal-specific palliative care approach"],
      prerequisite: null
    },
    {
      name: "LEAP Heart",
      target_audience: "Cardiologists, internists, nurses, pharmacists, social workers caring for patients with advanced heart disease",
      description: "Palliative care for cardiology teams in outpatient clinics, hospitals, and coronary care units",
      duration: "TBD",
      format: ["Online", "Hybrid"],
      pricing: "TBD",
      accreditation: "TBD",
      topics: ["Managing symptoms", "Psychosocial distress", "Medical devices in advanced heart conditions"],
      prerequisite: null
    },
    {
      name: "LEAP Oncology",
      target_audience: "Oncologists, nurses, pharmacists, social workers, radiation therapists in cancer care",
      description: "Palliative care training contextualized to cancer care settings",
      duration: "17 self-paced modules (~8 hours) + 6 hours workshop",
      format: ["Online", "Hybrid"],
      pricing: "Online: $425 physicians, $295 non-physicians, $175 PSWs; Hybrid: $365/$235/$115",
      accreditation: "29 Mainpro+ credits; 14.5 hours Royal College",
      topics: ["Palliative care approach for cancer patients"],
      prerequisite: null
    },
    {
      name: "LEAP Lung",
      target_audience: "Pulmonologists, internists, nurses, pharmacists, social workers caring for patients with advanced lung disease",
      description: "Palliative care for health care professionals working with advanced lung diseases",
      duration: "TBD",
      format: ["TBD"],
      pricing: "TBD",
      accreditation: "TBD",
      topics: ["Lung disease-specific palliative care"],
      prerequisite: null
    },
    {
      name: "LEAP Paediatric",
      target_audience: "Pediatricians, pediatric nurses, child life specialists, social workers",
      description: "Comprehensive palliative care for infants, children, and young people",
      duration: "8 self-paced modules (~8 hours) + 8 hours facilitated workshop",
      format: ["Online", "Hybrid"],
      pricing: "Online: $425 physicians, $295 non-physicians, $175 PSWs; Hybrid: $365/$235/$115",
      accreditation: "15 hours Royal College",
      topics: ["Pediatric-specific palliative care approach"],
      prerequisite: null
    }
  ],
  "Profession-Focused Courses": [
    {
      name: "LEAP Paramedic",
      target_audience: "Paramedics and Emergency Medical Service professionals",
      description: "Specialized palliative care training for paramedics and EMS professionals",
      duration: "11 self-paced modules (~8 hours) + 6 hours facilitated workshop",
      format: ["Online", "Hybrid"],
      pricing: "$105 for paramedics",
      accreditation: "TBD",
      topics: ["On-site palliative care approach", "Transitions of care", "Quality improvement"],
      prerequisite: null
    },
    {
      name: "LEAP Personal Support Worker",
      target_audience: "Personal support workers, care aides, health care assistants in LTC, home care, nursing homes, acute care",
      description: "Self-paced online palliative care training specifically for PSWs",
      duration: "Self-paced modules (~8-10 hours) with quizzes",
      format: ["Online"],
      pricing: "$50 for personal care aides",
      accreditation: "Certificate of completion",
      topics: ["Advocacy skills", "Communication with patients and families", "Palliative care essentials for PSWs"],
      prerequisite: null
    },
    {
      name: "LEAP Leaders",
      target_audience: "Health care leaders, administrators, policymakers at all levels",
      description: "Leadership course providing knowledge and resources to integrate palliative care into services",
      duration: "Two parts: Part 1 (5 modules + 1.5 hour webinar) and Part 2 (5 modules + 1.5 hour webinar), completed over 6 months",
      format: ["Online"],
      pricing: "TBD",
      accreditation: "Health Leadership Specialty (HLS) option from Canadian College of Health Leaders",
      topics: ["What is palliative care", "Impact on patients/system", "Service organization", "Staffing", "LEADS framework integration"],
      prerequisite: null
    }
  ],
  "Other Specialized Courses": [
    {
      name: "LEAP Carers",
      target_audience: "Family caregivers, friends, community members caring for someone with serious illness",
      description: "Free online course for caregivers providing practical training and resources",
      duration: "3 self-paced modules",
      format: ["Online"],
      pricing: "FREE",
      accreditation: "Certificate of completion",
      topics: ["Communication", "Advance care planning", "Personal care", "Medication management", "End-of-life care", "Self-care strategies"],
      prerequisite: null
    },
    {
      name: "Psychosocial Spiritual Care",
      target_audience: "Primary care providers, nurses, social workers caring for patients with life-limiting illnesses",
      description: "Course for providing whole-person, compassionate, trauma-informed palliative care",
      duration: "8 self-paced modules (~8 hours) with quizzes",
      format: ["Online"],
      pricing: "$150 (25% anniversary discount from $200)",
      accreditation: "Certificate of completion",
      topics: ["Psychosocial and spiritual care competencies"],
      prerequisite: "LEAP Core or equivalent"
    },
    {
      name: "Canadian Serious Illness Conversations (CSIC)",
      target_audience: "Primary care providers, nurses, social workers",
      description: "Training on using the Serious Illness Conversation Guide for meaningful conversations with patients and families",
      duration: "2-part self-learning module (~1.5-2 hours) + 1.5-2 hour facilitated workshop",
      format: ["Online", "In-Person"],
      pricing: "TBD (often free through regional health authorities)",
      accreditation: "3 Mainpro+ credits",
      topics: ["Serious Illness Conversation Guide", "Communication skills", "Role-playing exercises"],
      prerequisite: null
    }
  ]
};

const categoryIcons = {
  "General Palliative Care Courses": "🏥",
  "Setting-Focused Courses": "🏠",
  "Specialty-Focused Courses": "💉",
  "Profession-Focused Courses": "👨‍⚕️",
  "Other Specialized Courses": "📚"
};

const categoryClasses = {
  "General Palliative Care Courses": "general",
  "Setting-Focused Courses": "setting",
  "Specialty-Focused Courses": "specialty",
  "Profession-Focused Courses": "profession",
  "Other Specialized Courses": "other"
};

// State management
let currentTab = 'all';
let currentView = 'allCourses';
let currentCategory = null;
let selectedCourses = [];
let activeFilters = {
  format: [],
  type: [],
  cost: [],
  search: ''
};
let allCourses = [];
let allResources = [];
let collapsedCategories = new Set();

// Initialize app
function init() {
  // Flatten all courses into a single array
  allCourses = [];
  Object.keys(coursesData).forEach(category => {
    coursesData[category].forEach(course => {
      allCourses.push({ ...course, category, itemType: 'course' });
    });
  });
  
  // Flatten all resources into a single array
  allResources = [];
  Object.keys(resourcesData).forEach(category => {
    resourcesData[category].forEach(resource => {
      allResources.push({ ...resource, category, itemType: 'resource' });
    });
  });
  
  console.log('Total courses loaded:', allCourses.length);
  console.log('Total resources loaded:', allResources.length);
  
  renderCategories();
  renderAllContent();
  setupEventListeners();
  updateBreadcrumb();
}

// Render all content (courses and resources)
function renderAllContent() {
  renderCoursesSections();
  renderResourcesSections();
  updateSearchResults();
}

// Update search results display
function updateSearchResults() {
  const searchResults = document.getElementById('searchResults');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  
  // Show/hide clear search button
  if (activeFilters.search) {
    clearSearchBtn.style.display = 'flex';
  } else {
    clearSearchBtn.style.display = 'none';
  }
  
  // Count filtered items
  let filteredCourses = filterItems(allCourses);
  let filteredResources = filterItems(allResources);
  let totalFiltered = filteredCourses.length + filteredResources.length;
  
  // Update search results text
  if (activeFilters.search) {
    searchResults.textContent = `Found ${totalFiltered} result${totalFiltered !== 1 ? 's' : ''} matching "${activeFilters.search}" (${filteredCourses.length} courses, ${filteredResources.length} resources)`;
    searchResults.style.fontWeight = 'var(--font-weight-medium)';
    searchResults.style.color = 'var(--color-text)';
  } else if (activeFilters.format.length > 0 || activeFilters.type.length > 0 || activeFilters.cost.length > 0) {
    searchResults.textContent = `Found ${totalFiltered} result${totalFiltered !== 1 ? 's' : ''} with selected filters (${filteredCourses.length} courses, ${filteredResources.length} resources)`;
    searchResults.style.fontWeight = 'var(--font-weight-medium)';
    searchResults.style.color = 'var(--color-text)';
  } else {
    searchResults.textContent = `Showing all ${allCourses.length} courses and ${allResources.length} resources`;
    searchResults.style.fontWeight = 'var(--font-weight-normal)';
    searchResults.style.color = 'var(--color-text-secondary)';
  }
}

// Render courses sections
function renderCoursesSections() {
  const container = document.getElementById('categorySectionsContainer');
  container.innerHTML = '';

  // Group courses by category and apply filters
  const categorizedCourses = {};

  Object.keys(coursesData).forEach(category => {
    let courses = coursesData[category].map(course => ({...course, category, itemType: 'course'}));
    courses = filterItems(courses);
    
    if (courses.length > 0) {
      categorizedCourses[category] = courses;
    }
  });

  // Render each category section
  Object.keys(categorizedCourses).forEach(category => {
    const categorySection = createCategorySection(category, categorizedCourses[category]);
    container.appendChild(categorySection);
  });
}

// Render resources sections
function renderResourcesSections() {
  const container = document.getElementById('resourceCategoriesContainer');
  container.innerHTML = '';
  
  // Group resources by category and apply filters
  const categorizedResources = {};
  
  Object.keys(resourcesData).forEach(category => {
    let resources = resourcesData[category].map(resource => ({...resource, category, itemType: 'resource'}));
    resources = filterItems(resources);
    
    if (resources.length > 0) {
      categorizedResources[category] = resources;
    }
  });
  
  // Render each category section
  Object.keys(categorizedResources).forEach(category => {
    const categorySection = createResourceCategorySection(category, categorizedResources[category]);
    container.appendChild(categorySection);
  });
}

// Create a resource category section
function createResourceCategorySection(category, resources) {
  const section = document.createElement('div');
  section.className = 'category-section';
  section.dataset.category = category;
  
  const categoryClass = resourceCategoryClasses[category];
  const categoryIcon = resourceCategoryIcons[category];
  const categoryDescriptions = {
    "Clinical Reference & Learning Tools": "Tools for clinical practice and professional development",
    "Community & Caregiver Support": "Free resources for caregivers and communities",
    "Community Building & Implementation": "Toolkits for creating compassionate communities",
    "Professional Communities & Networks": "Learning communities and continuous professional development",
    "Organizational Solutions": "Solutions for health systems and organizations"
  };
  
  const isExpanded = !collapsedCategories.has(category);
  
  const header = document.createElement('div');
  header.className = 'category-section-header';
  header.innerHTML = `
    <div class="category-section-title">
      <div class="category-section-icon ${categoryClass}">${categoryIcon}</div>
      <div>
        <h2>${category}</h2>
        <p class="category-section-description">${categoryDescriptions[category]}</p>
      </div>
    </div>
    <div class="category-section-meta">
      <span class="category-course-count">${resources.length} ${resources.length === 1 ? 'resource' : 'resources'}</span>
      <button class="category-toggle-btn" aria-label="${isExpanded ? 'Collapse' : 'Expand'} ${category}">
        <span class="toggle-icon">${isExpanded ? '−' : '+'}</span>
      </button>
    </div>
  `;
  
  const resourcesContainer = document.createElement('div');
  resourcesContainer.className = `category-courses ${isExpanded ? 'expanded' : 'collapsed'}`;
  
  const resourcesGrid = document.createElement('div');
  resourcesGrid.className = 'courses-grid';
  
  resources.forEach(resource => {
    renderResourceCard(resourcesGrid, resource);
  });
  
  resourcesContainer.appendChild(resourcesGrid);
  section.appendChild(header);
  section.appendChild(resourcesContainer);
  
  // Toggle expand/collapse
  const toggleBtn = header.querySelector('.category-toggle-btn');
  toggleBtn.addEventListener('click', () => {
    const isCurrentlyExpanded = !resourcesContainer.classList.contains('collapsed');
    
    if (isCurrentlyExpanded) {
      resourcesContainer.classList.remove('expanded');
      resourcesContainer.classList.add('collapsed');
      toggleBtn.querySelector('.toggle-icon').textContent = '+';
      toggleBtn.setAttribute('aria-label', `Expand ${category}`);
      collapsedCategories.add(category);
    } else {
      resourcesContainer.classList.remove('collapsed');
      resourcesContainer.classList.add('expanded');
      toggleBtn.querySelector('.toggle-icon').textContent = '−';
      toggleBtn.setAttribute('aria-label', `Collapse ${category}`);
      collapsedCategories.delete(category);
    }
  });
  
  return section;
}

// Render a resource card
function renderResourceCard(grid, resource) {
  const card = document.createElement('div');
  card.className = 'resource-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `View details for ${resource.name}`);
  
  const truncatedDesc = resource.description.length > 120 
    ? resource.description.substring(0, 120) + '...' 
    : resource.description;
  
  const categoryClass = resourceCategoryClasses[resource.category];
  const categoryColors = {
    'clinical': 'var(--color-bg-1)',
    'community': 'var(--color-bg-3)',
    'building': 'var(--color-bg-5)',
    'professional': 'var(--color-bg-2)',
    'organizational': 'var(--color-bg-8)'
  };
  
  const costBadgeClass = resource.costType === 'free' ? 'free' : 'paid';
  const costDisplay = resource.costType === 'free' ? 'FREE' : resource.cost;
  
  card.innerHTML = `
    <div style="display: flex; gap: var(--space-8); margin-bottom: var(--space-12); flex-wrap: wrap;">
      <div style="display: inline-block; padding: var(--space-4) var(--space-8); border-radius: var(--radius-sm); font-size: var(--font-size-xs); font-weight: var(--font-weight-medium); background-color: ${categoryColors[categoryClass]};">${resource.type}</div>
      <div class="resource-cost ${costBadgeClass}">${costDisplay}</div>
    </div>
    <h4>${resource.name}</h4>
    <p class="resource-description">${truncatedDesc}</p>
    <div class="resource-meta">
      <div class="resource-meta-item">
        <span class="resource-meta-label">Format:</span>
        <span>${resource.format.join(', ')}</span>
      </div>
      <div class="resource-meta-item">
        <span class="resource-meta-label">Access:</span>
        <span>${resource.access}</span>
      </div>
    </div>
  `;
  
  card.addEventListener('click', () => {
    showResourceDetails(resource);
  });
  
  card.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showResourceDetails(resource);
    }
  });
  
  grid.appendChild(card);
}

// Show resource details modal
function showResourceDetails(resource) {
  const modal = document.getElementById('courseModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  
  title.textContent = resource.name;
  
  const featuresList = resource.features.map(f => `<li>${f}</li>`).join('');
  const formatList = resource.format.join(', ');
  
  body.innerHTML = `
    <div class="detail-section">
      <div class="detail-label">Type</div>
      <div class="detail-content">${resource.type}</div>
    </div>
    
    <div class="detail-section">
      <div class="detail-label">Description</div>
      <div class="detail-content">${resource.description}</div>
    </div>
    
    <div class="detail-section">
      <div class="detail-label">Format</div>
      <div class="detail-content">${formatList}</div>
    </div>
    
    <div class="detail-section">
      <div class="detail-label">Access Method</div>
      <div class="detail-content">${resource.access}</div>
    </div>
    
    <div class="detail-section">
      <div class="detail-label">Cost</div>
      <div class="detail-content">${resource.cost}</div>
    </div>
    
    <div class="detail-section">
      <div class="detail-label">Key Features</div>
      <div class="detail-content">
        <ul>${featuresList}</ul>
      </div>
    </div>
    
    <div class="detail-section">
      <div class="detail-label">Best For</div>
      <div class="detail-content">${resource.bestFor}</div>
    </div>
    
    <div class="detail-section">
      <div class="detail-label">Target Audience</div>
      <div class="detail-content">${resource.audience}</div>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Filter items (courses or resources) based on active filters
function filterItems(items) {
  let filtered = items;
  
  // Type filter (course vs resource)
  if (activeFilters.type.length > 0) {
    filtered = filtered.filter(item => activeFilters.type.includes(item.itemType));
  }
  
  // Search filter - search across all fields
  if (activeFilters.search) {
    const searchTerm = activeFilters.search.toLowerCase().trim();
    
    filtered = filtered.filter(item => {
      // Search in name
      if (item.name.toLowerCase().includes(searchTerm)) return true;
      
      // Search in description
      if (item.description.toLowerCase().includes(searchTerm)) return true;
      
      // Search in format
      if (item.format.some(f => f.toLowerCase().includes(searchTerm))) return true;
      
      // Search in category
      if (item.category.toLowerCase().includes(searchTerm)) return true;
      
      // For courses, search additional fields
      if (item.itemType === 'course') {
        if (item.target_audience && item.target_audience.toLowerCase().includes(searchTerm)) return true;
        if (item.topics && item.topics.some(topic => topic.toLowerCase().includes(searchTerm))) return true;
        if (item.duration && item.duration.toLowerCase().includes(searchTerm)) return true;
      }
      
      // For resources, search additional fields
      if (item.itemType === 'resource') {
        if (item.type && item.type.toLowerCase().includes(searchTerm)) return true;
        if (item.access && item.access.toLowerCase().includes(searchTerm)) return true;
        if (item.audience && item.audience.toLowerCase().includes(searchTerm)) return true;
        if (item.features && item.features.some(f => f.toLowerCase().includes(searchTerm))) return true;
      }
      
      return false;
    });
  }
  
  // Format filter
  if (activeFilters.format.length > 0) {
    filtered = filtered.filter(item => 
      activeFilters.format.some(f => 
        item.format.some(cf => cf.toLowerCase().includes(f))
      )
    );
  }
  
  // Cost filter
  if (activeFilters.cost.length > 0) {
    filtered = filtered.filter(item => {
      return activeFilters.cost.some(c => {
        if (c === 'free') {
          if (item.itemType === 'course') {
            return item.pricing && item.pricing.toLowerCase().includes('free');
          } else {
            return item.costType === 'free';
          }
        }
        if (c === 'paid') {
          if (item.itemType === 'course') {
            return item.pricing && !item.pricing.toLowerCase().includes('free');
          } else {
            return item.costType === 'paid';
          }
        }
        return false;
      });
    });
  }
  
  return filtered;
}

// Create a category section with courses
function createCategorySection(category, courses) {
  const section = document.createElement('div');
  section.className = 'category-section';
  section.dataset.category = category;

  const categoryClass = categoryClasses[category];
  const categoryIcon = categoryIcons[category];
  const categoryDescriptions = {
    "General Palliative Care Courses": "Foundational and comprehensive palliative care training",
    "Setting-Focused Courses": "Palliative care tailored to specific care environments",
    "Specialty-Focused Courses": "Palliative care for specific medical specialties and conditions",
    "Profession-Focused Courses": "Palliative care training for specific professional roles",
    "Other Specialized Courses": "Additional specialized palliative care training and resources"
  };

  const isExpanded = !collapsedCategories.has(category);

  const header = document.createElement('div');
  header.className = 'category-section-header';
  header.innerHTML = `
    <div class="category-section-title">
      <div class="category-section-icon ${categoryClass}">${categoryIcon}</div>
      <div>
        <h2>${category}</h2>
        <p class="category-section-description">${categoryDescriptions[category]}</p>
      </div>
    </div>
    <div class="category-section-meta">
      <span class="category-course-count">${courses.length} ${courses.length === 1 ? 'course' : 'courses'}</span>
      <button class="category-toggle-btn" aria-label="${isExpanded ? 'Collapse' : 'Expand'} ${category}">
        <span class="toggle-icon">${isExpanded ? '−' : '+'}</span>
      </button>
    </div>
  `;

  const coursesContainer = document.createElement('div');
  coursesContainer.className = `category-courses ${isExpanded ? 'expanded' : 'collapsed'}`;

  const coursesGrid = document.createElement('div');
  coursesGrid.className = 'courses-grid';

  courses.forEach(course => {
    renderCourseCard(coursesGrid, course);
  });

  coursesContainer.appendChild(coursesGrid);
  section.appendChild(header);
  section.appendChild(coursesContainer);

  // Toggle expand/collapse
  const toggleBtn = header.querySelector('.category-toggle-btn');
  toggleBtn.addEventListener('click', () => {
    const isCurrentlyExpanded = !coursesContainer.classList.contains('collapsed');
    
    if (isCurrentlyExpanded) {
      coursesContainer.classList.remove('expanded');
      coursesContainer.classList.add('collapsed');
      toggleBtn.querySelector('.toggle-icon').textContent = '+';
      toggleBtn.setAttribute('aria-label', `Expand ${category}`);
      collapsedCategories.add(category);
    } else {
      coursesContainer.classList.remove('collapsed');
      coursesContainer.classList.add('expanded');
      toggleBtn.querySelector('.toggle-icon').textContent = '−';
      toggleBtn.setAttribute('aria-label', `Collapse ${category}`);
      collapsedCategories.delete(category);
    }
  });

  return section;
}

// Render a course card
function renderCourseCard(grid, course) {
  const card = document.createElement('div');
  card.className = 'course-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `View details for ${course.name}`);
  card.style.position = 'relative';

  const truncatedDesc = course.description.length > 120 
    ? course.description.substring(0, 120) + '...' 
    : course.description;

  const formatBadges = course.format.map(f => {
    const formatClass = f.toLowerCase().replace(/[^a-z]/g, '');
    return `<span class="format-badge format-${formatClass}">${f}</span>`;
  }).join('');

  // Get category badge
  const categoryClass = categoryClasses[course.category];
  const categoryColor = {
    'general': 'var(--color-bg-1)',
    'setting': 'var(--color-bg-3)',
    'specialty': 'var(--color-bg-5)',
    'profession': 'var(--color-bg-2)',
    'other': 'var(--color-bg-8)'
  }[categoryClass];

  const isSelected = selectedCourses.some(c => c.name === course.name);

  card.innerHTML = `
    <input type="checkbox" class="compare-checkbox" data-course="${course.name}" ${isSelected ? 'checked' : ''} aria-label="Select ${course.name} for comparison">
    <div style="display: inline-block; padding: var(--space-4) var(--space-8); border-radius: var(--radius-sm); font-size: var(--font-size-xs); font-weight: var(--font-weight-medium); background-color: ${categoryColor}; margin-bottom: var(--space-8);">${course.category}</div>
    <h4>${course.name}</h4>
    <p class="course-audience">${course.target_audience}</p>
    <p class="course-description">${truncatedDesc}</p>
    <div class="course-meta">
      ${formatBadges}
    </div>
  `;

  card.addEventListener('click', () => {
    showCourseDetails(course);
  });

  card.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showCourseDetails(course);
    }
  });

  grid.appendChild(card);
}

function renderCategories() {
  // No longer needed with new tab design
}







// Show course details modal
function showCourseDetails(course) {
  const modal = document.getElementById('courseModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');

  title.textContent = course.name;

  const formatBadges = course.format.map(f => {
    const formatClass = f.toLowerCase().replace(/[^a-z]/g, '');
    return `<span class="format-badge format-${formatClass}">${f}</span>`;
  }).join('');

  const topicsList = course.topics.map(t => `<li>${t}</li>`).join('');

  body.innerHTML = `
    <div class="detail-section">
      <div class="detail-label">Target Audience</div>
      <div class="detail-content">${course.target_audience}</div>
    </div>

    <div class="detail-section">
      <div class="detail-label">Description</div>
      <div class="detail-content">${course.description}</div>
    </div>

    <div class="detail-section">
      <div class="detail-label">Duration</div>
      <div class="detail-content">${course.duration}</div>
    </div>

    <div class="detail-section">
      <div class="detail-label">Format</div>
      <div class="format-tags">${formatBadges}</div>
    </div>

    <div class="detail-section">
      <div class="detail-label">Pricing</div>
      <div class="detail-content">${course.pricing}</div>
    </div>

    <div class="detail-section">
      <div class="detail-label">Accreditation</div>
      <div class="detail-content">${course.accreditation}</div>
    </div>

    ${course.prerequisite ? `
      <div class="detail-section">
        <div class="detail-label">Prerequisite</div>
        <div class="detail-content">${course.prerequisite}</div>
      </div>
    ` : ''}

    <div class="detail-section">
      <div class="detail-label">Topics Covered</div>
      <div class="detail-content">
        <ul>${topicsList}</ul>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  const modal = document.getElementById('courseModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}











// Update breadcrumb navigation
function updateBreadcrumb() {
  const breadcrumb = document.getElementById('breadcrumb');
  breadcrumb.innerHTML = '';
}



// Clear filters
function clearFilters() {
  activeFilters = {
    format: [],
    type: [],
    cost: [],
    search: ''
  };

  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.filter-btn.active').forEach(btn => {
    if (!btn.classList.contains('tab-btn')) {
      btn.classList.remove('active');
    }
  });

  renderAllContent();
}



// Handle tab switching
function switchTab(tab) {
  currentTab = tab;
  
  const coursesSection = document.getElementById('coursesSection');
  const resourcesSection = document.getElementById('resourcesSection');
  
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.tab === tab) {
      btn.classList.add('active');
    }
  });
  
  // Show/hide sections
  if (tab === 'all') {
    coursesSection.classList.remove('hidden');
    resourcesSection.classList.remove('hidden');
  } else if (tab === 'courses') {
    coursesSection.classList.remove('hidden');
    resourcesSection.classList.add('hidden');
  } else if (tab === 'resources') {
    coursesSection.classList.add('hidden');
    resourcesSection.classList.remove('hidden');
  }
  
  updateSearchResults();
}

// Setup event listeners
function setupEventListeners() {
  // Tab navigation
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });
  
  // Search input with debouncing for performance
  const searchInput = document.getElementById('searchInput');
  let searchTimeout;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    const searchValue = e.target.value;
    
    searchTimeout = setTimeout(() => {
      activeFilters.search = searchValue;
      renderAllContent();
    }, 150);
  });

  // Clear search button
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    activeFilters.search = '';
    clearSearchBtn.style.display = 'none';
    renderAllContent();
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      const value = btn.dataset.value;

      const filterArray = activeFilters[filter];
      const index = filterArray.indexOf(value);

      if (index > -1) {
        filterArray.splice(index, 1);
        btn.classList.remove('active');
      } else {
        filterArray.push(value);
        btn.classList.add('active');
      }

      renderAllContent();
    });
  });

  // Clear filters button
  document.getElementById('clearFilters').addEventListener('click', clearFilters);

  // Modal close
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('courseModal').addEventListener('click', (e) => {
    if (e.target.id === 'courseModal') {
      closeModal();
    }
  });



  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('courseModal');
      if (modal.classList.contains('active')) {
        closeModal();
      }
    }
  });

  // Compare checkbox handlers
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('compare-checkbox')) {
      e.stopPropagation();
      const courseName = e.target.dataset.course;
      
      if (e.target.checked) {
        const course = allCourses.find(c => c.name === courseName);
        if (course && !selectedCourses.some(c => c.name === courseName)) {
          selectedCourses.push(course);
        }
      } else {
        selectedCourses = selectedCourses.filter(c => c.name !== courseName);
      }
      
      updateCompareBar();
    }
  });

  // Stop checkbox clicks from opening modal
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('compare-checkbox')) {
      e.stopPropagation();
    }
  });

  // Compare button
  document.getElementById('compareBtn').addEventListener('click', () => {
    if (selectedCourses.length >= 2) {
      showComparison();
    }
  });

  // Clear compare button
  document.getElementById('clearCompareBtn').addEventListener('click', () => {
    selectedCourses = [];
    document.querySelectorAll('.compare-checkbox').forEach(cb => {
      cb.checked = false;
    });
    updateCompareBar();
  });
}

// Update compare bar
function updateCompareBar() {
  const compareBar = document.getElementById('compareBar');
  const compareInfo = document.getElementById('compareInfo');
  const compareBtn = document.getElementById('compareBtn');
  
  if (selectedCourses.length > 0) {
    compareBar.classList.add('active');
    compareInfo.textContent = `${selectedCourses.length} course${selectedCourses.length !== 1 ? 's' : ''} selected for comparison`;
    
    if (selectedCourses.length >= 2) {
      compareBtn.disabled = false;
      compareBtn.style.opacity = '1';
    } else {
      compareBtn.disabled = true;
      compareBtn.style.opacity = '0.5';
    }
  } else {
    compareBar.classList.remove('active');
  }
}

// Show comparison modal
function showComparison() {
  const modal = document.getElementById('courseModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  
  title.textContent = 'Course Comparison';
  
  let comparisonHTML = '<div class="compare-grid">';
  
  selectedCourses.forEach(course => {
    const formatBadges = course.format.map(f => {
      const formatClass = f.toLowerCase().replace(/[^a-z]/g, '');
      return `<span class="format-badge format-${formatClass}">${f}</span>`;
    }).join('');
    
    comparisonHTML += `
      <div class="compare-card">
        <h3>${course.name}</h3>
        <div class="detail-section">
          <div class="detail-label">Target Audience</div>
          <div class="detail-content">${course.target_audience}</div>
        </div>
        <div class="detail-section">
          <div class="detail-label">Duration</div>
          <div class="detail-content">${course.duration}</div>
        </div>
        <div class="detail-section">
          <div class="detail-label">Format</div>
          <div class="format-tags">${formatBadges}</div>
        </div>
        <div class="detail-section">
          <div class="detail-label">Pricing</div>
          <div class="detail-content">${course.pricing}</div>
        </div>
        <div class="detail-section">
          <div class="detail-label">Accreditation</div>
          <div class="detail-content">${course.accreditation}</div>
        </div>
      </div>
    `;
  });
  
  comparisonHTML += '</div>';
  
  body.innerHTML = comparisonHTML;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Initialize app when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}