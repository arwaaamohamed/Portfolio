// =====================
// Case Study JS (FR/EN + Theme)
// =====================

const YEAR = document.getElementById("year");
if (YEAR) YEAR.textContent = new Date().getFullYear();

// ---------- Theme ----------
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
  localStorage.setItem("site_theme", theme);
}

const savedTheme = localStorage.getItem("site_theme") || "dark";
applyTheme(savedTheme);

const themeBtn = document.getElementById("themeBtn");
if (themeBtn){
  themeBtn.addEventListener("click", () => {
    const current = localStorage.getItem("site_theme") || "dark";
    applyTheme(current === "dark" ? "light" : "dark");
  });
}

// ---------- Language ----------
const I18N = {
  fr: {
    back: "Retour",
    "nav.overview": "Overview",
    "nav.approach": "Approche",
    "nav.results": "Résultats",
    "nav.deliverables": "Livrables",

    "hero.badge": "Case Study • Data Quality • EDA • BI",
    "hero.univ": "Projet académique (Université)",
    "hero.title1": "Analyse de la performance énergétique",
    "hero.title2": "DPE (France)",
    "hero.subtitle": "Transformer une base open-data complexe en un dataset fiable + analyses décisionnelles (qualité, préparation, insights & livrables).",

    "kpi.rows": "enregistrements",
    "kpi.focus": "Qualité Data",
    "kpi.bi": "Dashboards",
    "kpi.dw": "Data Warehouse",

    "cta.view": "Voir les livrables",
    "cta.contact": "Me contacter",

    "side.summary": "Résumé",
    "side.summaryText": "Objectif : fiabiliser la donnée DPE (cohérence, manquants, outliers) et produire des analyses exploitables pour comprendre la performance énergétique.",
    "side.item1t": "Contrôles qualité",
    "side.item1d": "règles, anomalies, doublons, manquants",
    "side.item2t": "EDA & segmentation",
    "side.item2d": "patterns par type, zone climatique, isolation",
    "side.item3t": "Livrables décisionnels",
    "side.item3d": "dashboards + slides + synthèse",
    "side.links": "Liens",
    "side.deliv": "Livrables",
    "side.projects": "Tous les projets",

    "approach.title": "Approche",
    "approach.sub": "Une démarche orientée qualité → préparation → analyse, pour obtenir une donnée décisionnelle.",
    "approach.step1t": "1) Audit Data Quality",
    "approach.step1a": "Profiling : manquants, doublons, valeurs incohérentes",
    "approach.step1b": "Règles de cohérence (énergie, surfaces, étiquettes)",
    "approach.step1c": "Traitement outliers + harmonisation",
    "approach.step2t": "2) Pipeline de préparation",
    "approach.step2a": "Imputation (KNN / MICE selon le besoin)",
    "approach.step2b": "Normalisation (PowerTransform / Z-score)",
    "approach.step2c": "Encoding (Ordinal + OneHot)",
    "approach.step3t": "3) Analyse & restitution",
    "approach.step3a": "EDA : patterns par zone, type bâtiment, isolation",
    "approach.step3b": "Restitution : dashboards & slides",
    "approach.step3c": "Documentation claire (méthode + résultats)",

    "results.title": "Résultats",
    "results.sub": "Quelques insights clés + ce que cette étude démontre en compétences data.",
    "results.insightsT": "Insights (exemples)",
    "results.i1": "Comparaison consommation selon type de bâtiment",
    "results.i2": "Impact zone climatique / isolation sur la performance",
    "results.i3": "Priorisation des leviers travaux (chauffage, ventilation, etc.)",
    "results.note": "(Tu peux remplacer ces exemples par tes chiffres/graphes exacts quand tu veux.)",
    "results.skillsT": "Compétences démontrées",
    "results.quote": "Good analytics starts with reliable data.",

    "deliv.title": "Livrables",
    "deliv.sub": "Télécharge / consulte les rapports et la présentation (format propre portfolio).",
    "deliv.p1t": "Rapport — Data Study (Phase 1)",
    "deliv.p1d": "Contexte, structure des données, premiers constats qualité.",
    "deliv.p2t": "Rapport — Data Preparation (Phase 2)",
    "deliv.p2d": "Manquants, encodage, scaling, feature selection.",
    "deliv.p4t": "Rapport — Besoins & Insights (Phase 4)",
    "deliv.p4d": "Visuels clés et analyse orientée décision.",
    "deliv.slidest": "Slides",
    "deliv.slidesd": "Présentation (version clean portfolio).",

    "footer.t": "Envie d’aller plus loin ?",
    "footer.d": "Je peux partager des éléments complémentaires sur demande.",
    "footer.cta": "Contact"
  },

  en: {
    back: "Back",
    "nav.overview": "Overview",
    "nav.approach": "Approach",
    "nav.results": "Results",
    "nav.deliverables": "Deliverables",

    "hero.badge": "Case Study • Data Quality • EDA • BI",
    "hero.univ": "Academic project (University)",
    "hero.title1": "Energy Performance Analytics",
    "hero.title2": "DPE (France)",
    "hero.subtitle": "Turning complex open-data into a reliable dataset + decision-ready insights (quality, preparation, analysis & deliverables).",

    "kpi.rows": "records",
    "kpi.focus": "Data Quality",
    "kpi.bi": "Dashboards",
    "kpi.dw": "Data Warehouse",

    "cta.view": "View deliverables",
    "cta.contact": "Contact",

    "side.summary": "Summary",
    "side.summaryText": "Goal: make DPE data reliable (consistency, missing values, outliers) and produce actionable analysis on energy performance.",
    "side.item1t": "Quality checks",
    "side.item1d": "rules, anomalies, duplicates, missing values",
    "side.item2t": "EDA & segmentation",
    "side.item2d": "patterns by building type, climate zone, insulation",
    "side.item3t": "Decision deliverables",
    "side.item3d": "dashboards + slides + summary",
    "side.links": "Links",
    "side.deliv": "Deliverables",
    "side.projects": "All projects",

    "approach.title": "Approach",
    "approach.sub": "Quality-first workflow → preparation → analysis, to deliver decision-ready data.",
    "approach.step1t": "1) Data Quality audit",
    "approach.step1a": "Profiling: missing, duplicates, inconsistencies",
    "approach.step1b": "Consistency rules (energy, surfaces, labels)",
    "approach.step1c": "Outliers handling + harmonization",
    "approach.step2t": "2) Preparation pipeline",
    "approach.step2a": "Imputation (KNN / MICE depending on need)",
    "approach.step2b": "Scaling (PowerTransform / Z-score)",
    "approach.step2c": "Encoding (Ordinal + OneHot)",
    "approach.step3t": "3) Analysis & delivery",
    "approach.step3a": "EDA: patterns by region, building type, insulation",
    "approach.step3b": "Delivery: dashboards & slides",
    "approach.step3c": "Clear documentation (method + outcomes)",

    "results.title": "Results",
    "results.sub": "A few key insights + the skills this project demonstrates.",
    "results.insightsT": "Insights (examples)",
    "results.i1": "Consumption comparison by building type",
    "results.i2": "Climate zone / insulation impact on performance",
    "results.i3": "Renovation levers prioritization (heating, ventilation, etc.)",
    "results.note": "(Replace these examples with your exact charts/metrics anytime.)",
    "results.skillsT": "Skills demonstrated",
    "results.quote": "Good analytics starts with reliable data.",

    "deliv.title": "Deliverables",
    "deliv.sub": "Download / view the reports and presentation (portfolio-friendly).",
    "deliv.p1t": "Report — Data Study (Phase 1)",
    "deliv.p1d": "Context, dataset structure, first quality findings.",
    "deliv.p2t": "Report — Data Preparation (Phase 2)",
    "deliv.p2d": "Missing values, encoding, scaling, feature selection.",
    "deliv.p4t": "Report — Needs & Insights (Phase 4)",
    "deliv.p4d": "Key visuals and decisions-oriented analysis.",
    "deliv.slidest": "Slides",
    "deliv.slidesd": "Presentation deck (clean portfolio version).",

    "footer.t": "Want the full details?",
    "footer.d": "I can share additional materials on request.",
    "footer.cta": "Contact"
  }
};

function applyLang(lang){
  document.documentElement.lang = lang;
  localStorage.setItem("site_lang", lang);

  const flag = document.getElementById("langFlag");
  const code = document.getElementById("langCode");
  if (flag && code){
    if (lang === "en"){ flag.textContent = "🇬🇧"; code.textContent = "EN"; }
    else { flag.textContent = "🇫🇷"; code.textContent = "FR"; }
  }

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = I18N[lang]?.[key];
    if (value) el.textContent = value;
  });
}

const savedLang = localStorage.getItem("site_lang") || "fr";
applyLang(savedLang);

const langBtn = document.getElementById("langBtn");
if (langBtn){
  langBtn.addEventListener("click", () => {
    const current = localStorage.getItem("site_lang") || "fr";
    applyLang(current === "fr" ? "en" : "fr");
  });
}

// ---------- Burger ----------
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

if (burger && navLinks){
  burger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });

  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}