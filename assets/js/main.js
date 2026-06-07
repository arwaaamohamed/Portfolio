// ===============================
// Helpers
// ===============================
function getByPath(obj, path){
  return path.split(".").reduce((acc, k) => (acc && acc[k] != null ? acc[k] : null), obj);
}

const STORAGE = {
  lang: "site_lang",
  theme: "site_theme"
};

// ===============================
// i18n dictionary (INDEX PAGE)
// ===============================
const I18N = {
  fr: {
    nav: { about:"À propos", projects:"Projets", experience:"Expériences", skills:"Compétences", contact:"Contact" },
    hero: {
      chip:"Data Analyst • Qualité des données • Préparation",
      title1:"Des données brutes",
      title2:'à des <span class="gradient">insights fiables</span>.',
      subtitle:"Étudiante en Master Data Science (University de Tours). J’adore nettoyer, structurer, valider et analyser la donnée pour produire des résultats clairs, exploitables, et robustes.",
      ctaProjects:"Voir mes projets",
      ctaContact:"Me contacter",
      badge1:"SQL • Oracle • PostgreSQL",
      badge2:"EDA • Qualité • Pipelines",
      badge3:"Python • KNIME",
      location:"Tours, France"
    },
    strip: { title:"Ils font partie de mon parcours" },

    about: { 
      title:"À propos", 
      desc:"Mon focus : rendre la donnée propre, cohérente et digne de confiance avant toute décision.", 
      likeTitle:"Ce que j’aime faire", 
      like1:"Data cleaning & structuration", 
      like2:"Contrôles qualité & validation", 
      like3:"Analyse exploratoire (EDA)", 
      like4:"Pipelines et logique de traitement", 
      profileTitle:"Formation", 
      kpi1:{value:"Master", 
      label:"Data Science (2025–2027)"}, 
      kpi2:{value:"Licence", 
      label:"Informatique (2021–2025)"}, 
      kpi3:{value:"Baccalauréat", 
      label:"Baccalauréat STI2D, spécialité Architecture & Construction, mention bien."}, 
      quote:"Good ML starts with clean data."
    },

    projects:{ 
      title:"Projets", 
      desc:"Des projets orientés qualité, nettoyage, structuration et analyse.", 
      tag1:"Data Quality", 
      tag2:"Oracle • Sécurité", 
      tag3:"Software", 
      case:"Case Study", 
      openCase:"Open case study", 
      openPage:"Voir la page", 
      p1:{ 
        title:"Energy Performance Data (DPE)", 
      desc:"Profiling, cleaning, intégration de datasets, EDA et feature engineering sur des données DPE." }, 
      p2:{ 
        title:"Oracle DBA • Sécurité & Data", 
        desc:"TDE/AES-256, Data Pump, validation, procédures de sauvegarde/restauration et tests de sécurité." }, 
      p3:{ 
        title:"Apps & Web Dev", 
      desc:"Applications Java/MySQL + web (React/Node) + modélisation UML." }},

    exp:{
      title:"Expériences",
      desc:"Un parcours orienté tech et fiabilité des données.",
      e1:{ title:"Administratrice de bases de données — Econocom", date:"Avr 2025 – Juin 2025", b1:"Chiffrement Oracle (TDE, AES-256)", b2:"Import/validation via Data Pump", b3:"Tests de sécurité, sauvegarde et recovery" },
      e2:{ title:"Assistante centre d’appels — Kisio", date:"Mai 2023 – Juil 2023", b1:"Support aux usagers du transport", b2:"Gestion des réservations et planification des chauffeurs" },
      e3:{ title:"Technicienne de maintenance IT — Econocom", date:"Juin 2022 – Août 2022", b1:"Préparation et déploiement de postes", b2:"Suivi matériel, étiquetage et gestion des équipements" },
      e4:{
        title:"Projet indépendant — E-commerce papeterie & lecture",
        date:"Depuis juin 2025",
        desc:"J’ai créé et développé une petite activité e-commerce spécialisée dans la papeterie, les produits liés à la lecture et des accessoires soigneusement conçus. Je gère l’ensemble du processus : sélection des produits, branding, préparation des commandes, relation client, logistique et organisation des workflows afin d’assurer une expérience fluide et fiable."
      }
    },

    skills:{
      title:"Compétences",
      desc:"Stack technique + méthodologie.",
      s1:{ title:"Data", a:"Data Cleaning", b:"Data Quality", c:"Validation", d:"EDA", e:"Feature Engineering" },
      s2:{ title:"Databases" },
      s3:{ title:"Tools" }
    },

    contact:{
      title:"Contact",
      desc:"Tu peux me contacter directement.",
      email:"etu.arwa@gmail.com",
      phone:"+33 7 83 70 14 48",
      linkedin:"LinkedIn"
    },

    footer:"Built with love & data ✨",

    contactBox:{
      title:"Envie d’en discuter ?",
      desc:"Je peux détailler la démarche, les tests et les choix techniques.",
      cta1:"Me contacter",
      cta2:"Retour aux projets"
    },

    languages:{
      title:"Langues",
      fr:{ name:"Français", level:"Bilingue" },
      ar:{ name:"Arabe", level:"Bilingue" },
      en:{ name:"Anglais", level:"B1 / B2" }
    },

    oracle: { 
      page: { 
        title: "Sécurité Oracle Database (TDE) — Arwa Mohamed", 
        desc: "Étude de cas — Oracle 19c, TDE (AES-256), Data Pump, tests de sauvegarde/restauration (POC)." }, 
      nav: { 
        back: "← Retour", 
        contact: "Contact" }, 
      hero: { 
        chip: "Oracle 19c • TDE • Sécurité des données • POC", 
        title: "Chiffrement transparent des données Oracle (AES-256)",
        subtitle: "Projet réalisé lors de mon stage chez Econocom (équipe DBA). Mise en place d’un POC de chiffrement au repos (TDE), import via Data Pump, et conception d’une stratégie de sauvegarde/restauration validée par des tests de résilience.", 
        note: "Note : environnement POC, aucune donnée sensible n’a été consultée." }, 
      meta: { 
        company: "Econocom (Stage)", 
        context: "AEP • POC / simulation", 
        period: "Avr–Juin 2025" }, 
      cta: { 
        pdf: "PDF (rapport)" }, 
        overview: { 
          title: "Vue d’ensemble", 
          desc: "Objectif : chiffrer les données au repos avec TDE, sécuriser le keystore, valider la solution par des tests, et définir une stratégie de sauvegarde/restauration compatible." }, 
      context: { 
        title: "Contexte", 
        li1: "Oracle Database 19c, importation d’une base existante via Data Pump", 
        li2: "Choix de TDE (Oracle Advanced Security) pour le chiffrement au repos", 
        li3: "Contrainte : schéma volumineux → chiffrement par tablespace privilégié" }, 
      role: { 
        title: "Mon rôle", 
        c1: "Oracle DBA (POC)", 
        c2: "Sécurité / durcissement", 
        c3: "Sauvegarde & restauration", 
        c4: "Documentation technique", 
        quote: "La sécurité des données commence par un stockage sécurisé… et un keystore correctement sauvegardé." }, 
      steps: { 
        title: "Approche", 
        desc: "Une démarche en 4 étapes : import, chiffrement TDE, tests, puis plan de maintenance.", 
        s1: { 
          title: "1) Importation & préparation", 
          pill: "Data Pump", 
          li1: "Restauration / importation de schémas via expdp/impdp", 
          li2: "Gestion des contraintes d’espace disque (VM) et relance de l’import" }, 
        s2: { title: "2) Chiffrement TDE (AES-256)", 
          pill: "Chiffrement tablespace", 
          li1: "Création / gestion du wallet (keystore) et de la clé maître", 
          li2: "Chiffrement par tablespace (plus adapté qu’un chiffrement par colonne sur un schéma volumineux)", 
          li3: "Algorithme AES-256 pour assurer la confidentialité des données au repos" }, 
        s3: { 
          title: "3) Tests de résilience", 
          pill: "ORA-28365", 
          li1: "Simulation d’un wallet fermé → accès impossible (ORA-28365)", 
          li2: "Perte / restauration du wallet depuis une sauvegarde → données récupérées", 
          li3: "Vérification des conditions d’accès selon les privilèges et l’état d’ouverture du keystore" }, 
        s4: { title: "4) Plan de maintenance", 
          pill: "Backup / Restore", 
          li1: "Sauvegarde logique via Data Pump", 
          li2: "Sauvegarde indispensable du wallet / keystore (sinon les données deviennent indéchiffrables)", 
          li3: "Documentation technique réutilisable pour l’équipe" } }, 
      stack: { 
        title: "Stack", 
        desc: "Technologies et outils utilisés.", 
        db: "Base de données", 
        security: "Sécurité", 
        ops: "Exploitation" }, 
      end: { 
        title: "Envie d’en discuter ?", 
        desc: "Je peux détailler la démarche, les tests et les choix techniques.", 
        mail: "Me contacter", 
        back: "Retour aux projets" }, 
      footer: { 
        line: "Built with love & data " }},
  },

  en: {
    nav: { about:"About", projects:"Projects", experience:"Experience", skills:"Skills", contact:"Contact" },
    hero: {
      chip:"Data Analyst • Data Quality • Data Preparation",
      title1:"From raw data",
      title2:'to <span class="gradient">reliable insights</span>.',
      subtitle:"Master’s student in Data Science (University of Tours). I love cleaning, structuring, validating, and exploring data to produce clear, actionable, and robust results.",
      ctaProjects:"View projects",
      ctaContact:"Contact me",
      badge1:"SQL • Oracle • PostgreSQL",
      badge2:"EDA • Quality • Pipelines",
      badge3:"Python • KNIME",
      location:"Tours, France"
    },
    strip: { title:"Part of my journey" },

    about: {
      title:"About",
      desc:"My focus: making data clean, consistent, and trustworthy before any decision.",
      likeTitle:"What I enjoy",
      like1:"Data cleaning & structuring",
      like2:"Quality checks & validation",
      like3:"Exploratory data analysis (EDA)",
      like4:"Pipelines and processing logic",
      profileTitle:"Education",
      kpi1:{value:"Master's degree", label:"Data Science (2025–2027)"},
      kpi2:{value:"Bachelor's degree", label:"Computer Science (2021–2025)"},
      kpi3:{value:"High school diploma", label:"High school diploma in Science and Technology for Industry and Sustainable Development, specialising in Architecture and Construction, with honours."},
      quote:"Good ML starts with clean data."
    },

    projects:{
      title:"Projects",
      desc:"Quality-focused projects in cleaning, structuring, and analysis.",
      tag1:"Data Quality",
      tag2:"Oracle • Security",
      tag3:"Software",
      case:"Case Study",
      openCase:"Open case study",
      openPage:"View page",
      p1:{ title:"Energy Performance Data (DPE)", desc:"Profiling, cleaning, dataset integration, EDA, and feature engineering on DPE data." },
      p2:{ title:"Oracle DBA • Security & Data", desc:"TDE/AES-256, Data Pump, validation, backup/restore procedures, and security testing." },
      p3:{ title:"Apps & Web Dev", desc:"Java/MySQL applications + web (React/Node) + UML modeling." }
    },

    exp:{
      title:"Experience",
      desc:"A path focused on tech and data reliability.",
      e1:{ title:"Database Administrator — Econocom", date:"Apr 2025 – Jun 2025", b1:"Oracle encryption (TDE, AES-256)", b2:"Import/validation via Data Pump", b3:"Security testing, backup, and recovery" },
      e2:{ title:"Call Center Assistant — Kisio", date:"May 2023 – Jul 2023", b1:"Public transport user support", b2:"Reservation management and driver scheduling" },
      e3:{ title:"IT Maintenance Technician — Econocom", date:"Jun 2022 – Aug 2022", b1:"Workstation preparation and deployment", b2:"Asset tracking, labeling, and equipment management" },
      e4:{
        title:"Independent Project — Stationery & Reading E-commerce",
        date:"Since Jun 2025",
        desc:"I created and developed a small e-commerce business focused on stationery, reading-related products, and thoughtfully designed accessories. I manage the full process: product sourcing, branding, order preparation, customer communication, logistics, and workflow organization to ensure a smooth and reliable experience."
      }
    },

    skills:{
      title:"Skills",
      desc:"Technical stack + methodology.",
      s1:{ title:"Data", a:"Data Cleaning", b:"Data Quality", c:"Validation", d:"EDA", e:"Feature Engineering" },
      s2:{ title:"Databases" },
      s3:{ title:"Tools" }
    },

    contact:{
      title:"Contact",
      desc:"You can reach me directly.",
      email:"etu.arwa@gmail.com",
      phone:"+33 7 83 70 14 48",
      linkedin:"LinkedIn"
    },

    footer:"Built with love & data ✨",

    contactBox:{
      title:"Interested in discussing this further?",
      desc:"I can walk you through the methodology, testing process, and technical decisions.",
      cta1:"Contact me",
      cta2:"Back to projects"
    },

    languages:{
      title:"Languages",
      fr:{ name:"French", level:"Bilingual" },
      ar:{ name:"Arabic", level:"Bilingual" },
      en:{ name:"English", level:"B1 / B2" }
    },

    oracle: {
    page: {
      title: "Oracle Database Security (TDE) — Arwa Mohamed",
      desc: "Case study — Oracle 19c, TDE (AES-256), Data Pump, backup/restore testing (POC)."
    },
    nav: {
      back: "← Back",
      contact: "Contact"
    },
    hero: {
      chip: "Oracle 19c • TDE • Data Security • POC",
      title: "Transparent Data Encryption (AES-256)",
      subtitle: "Project completed during my internship at Econocom (DBA team). I delivered a proof of concept for encryption at rest (TDE), Data Pump import, and a backup/restore strategy validated through resilience testing.",
      note: "Note: POC environment — no sensitive data was accessed."
    },
    meta: {
      company: "Econocom (Internship)",
      context: "AEP • POC / simulation",
      period: "Apr–Jun 2025"
    },
    cta: {
      pdf: "PDF (report)"
    },
    overview: {
      title: "Overview",
      desc: "Goal: encrypt data at rest with TDE, secure the keystore, validate the setup through testing, and define a compatible backup/restore strategy."
    },
    context: {
      title: "Context",
      li1: "Oracle Database 19c, import of an existing database using Data Pump",
      li2: "TDE (Oracle Advanced Security) selected for encryption at rest",
      li3: "Constraint: large schema → tablespace encryption preferred"
    },
    role: {
      title: "My role",
      c1: "Oracle DBA (POC)",
      c2: "Security / hardening",
      c3: "Backup & restore",
      c4: "Technical documentation",
      quote: "Data security starts with secure storage… and a properly backed-up keystore."
    },
    steps: {
      title: "Approach",
      desc: "A 4-step workflow: import, TDE encryption, testing, and maintenance planning.",
      s1: {
        title: "1) Import & preparation",
        pill: "Data Pump",
        li1: "Schema restore / import using expdp/impdp",
        li2: "Handled VM disk space constraints and re-ran the import"
      },
      s2: {
        title: "2) TDE encryption (AES-256)",
        pill: "Tablespace encryption",
        li1: "Wallet (keystore) setup / management and master key creation",
        li2: "Tablespace encryption (more suitable than column-level encryption for a large schema)",
        li3: "AES-256 used to ensure confidentiality of data at rest"
      },
      s3: {
        title: "3) Resilience testing",
        pill: "ORA-28365",
        li1: "Simulated closed wallet → access blocked (ORA-28365)",
        li2: "Wallet loss / restore from backup → data successfully recovered",
        li3: "Verified access conditions depending on privileges and keystore state"
      },
      s4: {
        title: "4) Maintenance plan",
        pill: "Backup / Restore",
        li1: "Logical backup using Data Pump",
        li2: "Mandatory wallet / keystore backup (otherwise the data becomes unreadable)",
        li3: "Reusable technical documentation for the team"
      }
    },
    stack: {
      title: "Stack",
      desc: "Technologies and tools used.",
      db: "Database",
      security: "Security",
      ops: "Operations"
    },
    end: {
      title: "Want to discuss this project?",
      desc: "I can walk you through the approach, the tests, and the technical decisions.",
      mail: "Contact me",
      back: "Back to projects"
    },
    footer: {
      line: "Built with love & data ✨"
    }
  },
    
  }
};

// ===============================
// Apply Language
// ===============================
function applyLang(lang){
  const dict = I18N[lang] || I18N.en;

  const allowHtmlKeys = new Set([
    "hero.title2",
  ]);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = getByPath(dict, key);
    if (val == null) return;

    if (allowHtmlKeys.has(key)) el.innerHTML = val;
    else el.textContent = val;
  });

  // button UI
  const flag = document.getElementById("langFlag");
  const code = document.getElementById("langCode");
  if (flag && code){
    if (lang === "fr"){ flag.textContent = "🇫🇷"; code.textContent = "FR"; }
    else { flag.textContent = "🇬🇧"; code.textContent = "EN"; }
  }

  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem(STORAGE.lang, lang);
}

// ===============================
// Apply Theme (persist everywhere)
// ===============================
function applyTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);

  const ico = document.getElementById("themeIco");
  const code = document.getElementById("themeCode");
  if (ico && code){
    if (theme === "light"){
      ico.textContent = "☀️";
      code.textContent = "LIGHT";
    } else {
      ico.textContent = "🌙";
      code.textContent = "DARK";
    }
  }

  localStorage.setItem(STORAGE.theme, theme);
}

// ===============================
// INIT
// ===============================
(function init(){
  // Year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Theme init
  const savedTheme = localStorage.getItem(STORAGE.theme) || "dark";
  applyTheme(savedTheme);

  // Lang init
  const savedLang = localStorage.getItem(STORAGE.lang) || "fr";
  applyLang(savedLang);

  // Theme toggle
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn){
    themeBtn.addEventListener("click", () => {
      const current = localStorage.getItem(STORAGE.theme) || "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  // Lang toggle
  const langBtn = document.getElementById("langBtn");
  if (langBtn){
    langBtn.addEventListener("click", () => {
      const current = localStorage.getItem(STORAGE.lang) || "fr";
      applyLang(current === "fr" ? "en" : "fr");
    });
  }

  // Scroll progress bar (if exists)
  const progress = document.getElementById("progress");
  if (progress){
    window.addEventListener("scroll", () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
      progress.style.width = `${Math.min(1, Math.max(0, scrolled)) * 100}%`;
    });
  }

  // Reveal on scroll
  const revealEls = Array.from(document.querySelectorAll(".reveal"));
  if (revealEls.length){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  }

  // Burger menu (if exists)
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");
  if (burger && navLinks){
    burger.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }
})();