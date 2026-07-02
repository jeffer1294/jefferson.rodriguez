// Edit this file to update site-wide content: bio, highlights, publications,
// contact links, and the category descriptions used on the home page.

export const site: {
  name: string;
  tagline: string;
  email: string;
  linkedin: string;
  cv: string;
  photo: string;
  photoAbout?: string; // Optional: different photo for My Story page
} = {
  name: "Jefferson Rodriguez-Najera",
  tagline:
    "Research & Policy Analyst working at the intersection of development economics, impact evaluation, and public governance in Latin America.",
  email: "jeffersonrodriguez12@gmail.com",
  linkedin: "https://www.linkedin.com/in/jefferson-rodriguez-najera/",
  cv: "/cv/Jefferson_Rodriguez_CV.pdf", // drop the PDF here in /public/cv/
  // Hero photo (home page)
  photo: "/images/profile-about.JPG",
  // About / My Story photo — drop a second image in /public/images/ and set the path here.
  // If omitted, falls back to photo above.
  photoAbout: "/images/profile.JPG",
};

export const highlights = [
  "Fulbright Scholar",
  "MPP, University of Virginia",
  "4 academic publications",
  "Costa Rica · Argentina · Colombia · Guatemala",
];

export const categories = {
  research: {
    label: "Research",
    blurb:
      "Building causal evidence on development and public policy — from impact evaluation to applied econometrics.",
  },
  policy: {
    label: "Policy",
    blurb:
      "Leading reform inside the public sector — open data, access to justice, and institutional redesign.",
  },
  innovation: {
    label: "Innovation",
    blurb:
      "Co-designing public solutions through participatory and design-thinking methods.",
  },
};

// About / My story (home + about page). Plain paragraphs.
export const about = [
"I'm from a rural town in Costa Rica, and I was the first person in my family, and one of the first in my community, to go to university. Growing up, I saw firsthand how development tends to stop at the city limits, how the State so often doesn't reach rural places. But I also grew up watching my parents fill that absence with their own hands, devoting themselves to community work where public institutions fell short. That contrast, between the help that never arrived and the people who showed up anyway, is the reason I do what I do.",
"It set me on a path that runs from implementation to evidence. I began inside the public sector, managing and redesigning the institutions meant to serve communities like mine, and learned that good intentions aren't enough; you have to understand how people actually experience a service. So I learned to co-create solutions alongside them, through participatory and design-thinking methods, sitting with the communities and public servants on the front lines. But sitting in those rooms raised a harder question: of everything we try, what actually works? That question pushed me toward rigorous quantitative evidence, causal inference and impact evaluation, to separate what genuinely improves people's lives from what only sounds good on paper. Today I work across all three: I can manage the reform, co-design it with the people it affects, and measure whether it truly worked.",
"That trajectory is also my toolkit. Managing and rebuilding public institutions taught me project and research coordination, leading multidisciplinary teams across multi-site initiatives. Co-creating with communities gave me qualitative and participatory research: design thinking, workshops, stakeholder co-design. Asking what works drove me to quantitative research and impact evaluation: Stata, difference-in-differences, administrative and microdata, robustness testing. And throughout, the need to move evidence into decisions sharpened two things: policy analysis and strategic thinking (cost-benefit analysis, evaluating alternatives), and research communication for both technical and non-technical audiences (policy briefs, working papers, data visualization).",
"Concretely, that's meant a Fulbright Scholarship and a Master of Public Policy from the University of Virginia's Frank Batten School; a full-cycle impact evaluation of a nationwide judicial-access program in Costa Rica (difference-in-differences on administrative panel data in Stata); and work as a Research Assistant on development-economics projects estimating the effects of electricity subsidies and public investment on firm and development outcomes in Argentina and Colombia. Before graduate school, I spent six years in Costa Rica as a Senior Policy Analyst at the Judicial Branch (open government, open data, access to justice), as a senior project manager and researcher at the University of Costa Rica, and as co-founder of the country's first public innovation lab, now Innovaap.",
"I'm now seeking pre-doctoral research positions and policy-analyst roles, and preparing for PhD programs in economics and public policy, still working on the same question I grew up with: how to make development reach the places and people it has always skipped.",
"Let's connect if you work on development economics, impact evaluation, or evidence-based policy in Latin America"
];

export const publications: {
  cite: string;
  note?: string;
  url?: string; // DOI, journal page, or PDF link
}[] = [
  {
    cite:
      "Rodríguez-Nájera, J. (2026). From Invisibility to Evidence: Reflections on Inclusive Participatory Data Collection in the Costa Rican Judiciary. Revista del CLAD Reforma y Democracia, (95).",
    note: "Accepted — pending publication",
    // url: "https://doi.org/...",
  },
  {
    cite:
      "Rodríguez Nájera, J.; Barquero Gamboa, C.; Hernández Cruz, O. (2021). Strategic linking of cultural public policies: case analysis of the cantons of Belén, Santa Ana and Escazú. Compilación Administrar lo Público, 9th Ed., Vol. 1(1), pp. 70–82. ISBN 978-9968-932-41-7. CC BY 4.0.",
    note: "Peer-reviewed",
    // url: "https://...",
  },
  {
    cite:
      "Rodríguez Nájera, J.; Barrantes Herrera, A.; Hurtado Herrera, A. (2020). Cultural public policy implementation: a compared study of the management models of Santa Ana, Escazú, and Belén. University of Costa Rica, Faculty of Economic Sciences.",
    note: "Bachelor's Thesis",
    // url: "https://...",
  },
  {
    cite:
      "Rodríguez, J.; Fernández, C.; Calderón, C.; Calderón, J.; Umaña, J. (2018). Collaboration networks for local innovation. Organization of American States (OAS), Trust for the Americas & Innovaap UCR.",
    // url: "https://...",
  },
];

// Talks, conference presentations, panels, and events.
// type: "talk" | "presentation" | "panel" | "workshop" | "conference"
export const events: {
  title: string;
  event: string;
  location: string;
  date: string;
  type: string;
  note?: string;
  url?: string;
  image?: string;
}[] = [
  {
    title: "Voices from the Global South",
    event: "Batten Latinx Network Conference",
    location: "University of Virginia, Charlottesville, VA",
    date: "2026",
    type: "conference",
    note: "Organized as Graduate Relations Representative of the Batten Latinx Network.",
    image: "/images/projects/s4.jpeg",
  },
  {
    title: "U.S.–Costa Rica Relations",
    event: "Fulbright Central Virginia Chapter",
    location: "Charlottesville, VA",
    date: "2025",
    type: "talk",
    image: "/images/projects/s5.JPG",
  },
  {
    title: "State of Open Data in the Costa Rican Government",
    event: "\"El Poder de los Datos\" — MIDEPLAN & Global Partnership for Sustainable Development Data",
    location: "Costa Rica",
    date: "2024",
    type: "panel",
    image: "/images/projects/s6.jpg",
  },
  {
    title:
      "Including gender identity and sexual orientation variables in the Judicial Branch's administrative systems",
    event: "Abrelatam & ConDatos 2023",
    location: "Uruguay",
    date: "2023",
    type: "talk",
    note: "Presented jointly with activist organizations from Costa Rica and Guatemala.",
    image: "/images/projects/s2.jpg",
  },
  {
    title: "Open Data in the Judicial Branch: Innovation in Access to Public Information",
    event: "Escuela Judicial (Judicial School of Costa Rica)",
    location: "Costa Rica",
    date: "2022",
    type: "talk",
    image: "/images/projects/s3.jpg",
  },
  {
    title: "State of Open Justice in Costa Rica",
    event: "Abrelatam & ConDatos 2021",
    location: "Virtual",
    date: "2021",
    type: "presentation",
    image: "/images/projects/s1.jpg",
  },
];

// Teaching page. Each entry is one role. "points" are short bullet lines.
export const teaching: {
  role: string;
  org: string;
  location: string;
  period: string;
  points: string[];
}[] = [
  {
    role: "Teaching Assistant, “Leadership in the Public Arena”",
    org: "Frank Batten School of Leadership & Public Policy, University of Virginia",
    location: "Charlottesville, VA",
    period: "January to May 2026",
    points: [
      "Supported a graduate course built on Ronald Heifetz's Adaptive Leadership framework and the case-in-point method, where the classroom itself becomes the material students learn from.",
      "Planned class sessions with the instructor, held office hours, and worked one on one with students to make dense leadership theory click for people coming from very different backgrounds.",
      "Practiced the core skill of the course every week: reading the room, naming what is happening in it, and helping a group stay with hard questions instead of rushing past them.",
    ],
  },
  {
    role: "Junior Lecturer, School of Public Administration",
    org: "University of Costa Rica",
    location: "San José, Costa Rica",
    period: "March 2020 to July 2024",
    points: [
      "Taught undergraduate classes on leadership and ethics, strategic communication, rural and local development, and models and trends in public governance, always tying the theory back to how it plays out in a real public office.",
      "Advised five final thesis projects on local development, public policy, and budget analysis, and served as research adviser on several other student projects.",
      "Worked as a researcher and international project coordinator for the School, designing research proposals and community engagement projects to widen its reach beyond Costa Rica.",
    ],
  },
];

// "Beyond the work" page. Grouped content for the subtabs.
export const honors: { title: string; detail: string; year: string }[] = [
  {
    title: "Fulbright Scholarship",
    detail:
      "Full funding for graduate study in the United States, covering tuition, living expenses, airfare, and relocation, for a total value of roughly USD 185,000.",
    year: "2025",
  },
  {
    title: "Batten Family Bicentennial Scholars Fellowship",
    detail: "University of Virginia. Valued at roughly USD 80,000.",
    year: "2025",
  },
  {
    title: "Graduation with Honorific Mention, Licentiate in Public Administration",
    detail: "University of Costa Rica. GPA 9.45 out of 10.",
    year: "2020",
  },
  {
    title: "Graduation with Honorific Mention, Bachelor of Arts in Public Administration",
    detail: "University of Costa Rica. GPA 9.03 out of 10.",
    year: "2018",
  },
  {
    title: "First Place, Student Debate on Municipal Public Policy Evaluation",
    detail:
      "XI Congress of Red-e-Mun, Universidad Autónoma de Tamaulipas, México. Also invited as an international speaker at the same congress.",
    year: "2017",
  },
  {
    title: "International Studies Office Scholarship (two awards)",
    detail: "University of Los Andes, Bogotá, Colombia, for a study abroad semester.",
    year: "2018",
  },
];

// Other admissions and scholarship offers, shown as a short note under Awards.
export const offers: string[] = [
  "University of Chicago, Harris School of Public Policy, MPP, admitted with a partial scholarship of USD 70,000.",
  "Carnegie Mellon University, Heinz College, MS in Public Policy and Management, admitted with the Heinz College Strategic Partner Scholarship covering 50% of tuition.",
  "University of Texas at Austin, LBJ School of Public Affairs, Master of Public Affairs, admitted with a partial scholarship.",
  "Türkiye Scholarships, full scholarship for a Master's in Public Administration at Hacettepe University, declined upon accepting the Fulbright Program.",
];

export const leadership: {
  role: string;
  org: string;
  period: string;
  points: string[];
}[] = [
  {
    role: "Graduate Relations Representative",
    org: "Batten Latinx Network, University of Virginia",
    period: "2026",
    points: [
      "Organized the \"Voices from the Global South\" conference, connecting Latinx graduate students with speakers and issues from the Global South.",
    ],
  },
  {
    role: "Municipal Council Candidate",
    org: "Acción Ciudadana Party, Coronado",
    period: "2019 to 2020",
    points: [
      "Ran as the youth representative on the ruling party's formula for the Municipal Council in the 2020 elections, working with local representatives and designing a development plan for the local government.",
      "Served on the party's national team for Economy and State Reform and led local campaign work.",
    ],
  },
  {
    role: "International Fundraising & Awards Coordinator",
    org: "APO FU Foundation, Malawi and San José",
    period: "2019 to 2021",
    points: [
      "Led the international fundraising process, designing proposals, strategies, and alliances to fund projects.",
      "Built a new business model and operating strategy for the foundation's education and fundraising work in Costa Rica.",
    ],
  },
  {
    role: "Student Leadership, University of Costa Rica",
    org: "Association of Students of Public Administration and related bodies",
    period: "2014 to 2018",
    points: [
      "President of the Association of Students of Public Administration and Deputy Coordinator of the Council of Students of Economic Sciences (2017).",
      "Student representative in the 2018 curriculum redesign of the Public Administration major, and in the School and Faculty Assemblies.",
      "Member of the Open Government and Innovation Commission of the UCR Student Federation, and moderator of public innovation workshops at Abrelatam Costa Rica.",
    ],
  },
  {
    role: "Community & Civic Engagement",
    org: "Various municipalities and national programs",
    period: "2015",
    points: [
      "Member of the Local Management Team of the Municipality of Vázquez de Coronado, contributing to the Cantonal Plan for Local Human Development and the Municipal Strategic Plan.",
      "Moderated participatory workshops for DINADECO's National Community Development Plan and for the MEP and UNESCO Education Policy for Sustainable Development.",
    ],
  },
];

export const education: {
  degree: string;
  org: string;
  period: string;
  points: string[];
}[] = [
  {
    degree: "Master of Public Policy, concentration in Leadership and Public Policy",
    org: "Frank Batten School of Leadership & Public Policy, University of Virginia",
    period: "May 2026",
    points: [
      "GPA 3.80 out of 4.00. Fulbright Scholar and Batten Family Bicentennial Scholars Fellow.",
      "Trained in the Adaptive Leadership framework (Ronald Heifetz).",
      "Coursework in impact evaluation, economics of public policy, regional economic modeling, poverty reduction and aid policy, and applied policy projects.",
    ],
  },
  {
    degree: "Licentiate and Bachelor of Arts in Public Administration",
    org: "University of Costa Rica",
    period: "2018 to 2020",
    points: [
      "Licentiate (2020), GPA 9.45 out of 10, graduation with honorific mention, specialization in Public Budgeting and Finance.",
      "Bachelor of Arts (2018), GPA 9.03 out of 10, graduation with honorific mention.",
    ],
  },
  {
    degree: "Study Abroad Semester, School of Government and Public Affairs",
    org: "University of Los Andes, Bogotá, Colombia",
    period: "January to June 2018",
    points: [
      "International Studies Office Scholarship recipient (two awards).",
      "Coursework in policy analysis, the right to the city, and public management practice.",
    ],
  },
];

export const certifications: string[] = [
  "Power BI Course (2022)",
  "Python Fundamentals Course (2022)",
  "Creative Coding Course, CIID Copenhagen (2021)",
  "Project Management Professional (PMP) Preparatory Course, PMI (2021)",
  "Public Budget Specialist, CICAP (2020)",
  "Certified in Behavioral Economics, IDB INDES (2020)",
  "Central American Course on Formulation and Design of Public Policies, ICAP (2019)",
  "Certified in SCRUM Fundamentals (2017)",
  "Certificate in Public Management, University of Costa Rica (2014)",
  "Member, Colegio de Ciencias Económicas de Costa Rica, Associate No. 046725",
];
