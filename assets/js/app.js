(function () {
  const root = document.documentElement;

  // --- i18n dictionary (Apps page) ---
  const I18N = {
    fr: {
      nav: { back: "Retour aux projets" },
      hero: {
        chip: "Apps • Web Dev • Desktop • UX",
        title: "Applications & Impact",
        subtitle:
          "Au-delà de la donnée, j’aime construire des applications concrètes. Je m’intéresse particulièrement aux sujets santé / médical, car je ressens que la tech peut réellement aider les gens.",
        kpi1: { title: "3 projets", desc: "web, théorie des langages, app médicale" },
        kpi2: { title: "Stack", desc: "Java/Spring • C++/Qt • SQLite • HTML/CSS" }
      },
      blocks: {
        title: "Projets",
        subtitle: "Chaque bloc résume l’objectif, les technos et les fonctionnalités clés."
      },
      p1: {
        pill: "Web App",
        title: "Ebook Club — eBook Library en ligne",
        desc:
          "Application web interactive développée en Java avec Spring Boot. Objectif : proposer une expérience fluide de recherche, recommandation et lecture d’eBooks.",
        li1: "Recherche de livres par genre (romance, fantastique, dystopie…)",
        li2: "Recommandations personnalisées",
        li3: "Favoris, notes & avis utilisateurs",
        li4: "Fiche détaillée + téléchargement de l’eBook"
      },
      p2: {
        pill: "Theory → UI",
        title: "Traceur de courbes — Analyse lexicale & AST",
        desc:
          "Application permettant de saisir une fonction mathématique et d’afficher sa courbe. Le cœur : transformer une expression en arbre AST puis l’interpréter pour tracer.",
        s1: "Analyse lexicale — découper la fonction en “tokens”.",
        s2: "Analyse syntaxique — vérifier la structure et générer un AST.",
        s3: "Interprétation — évaluer l’AST pour tracer la courbe."
      },
      p3: {
        pill: "Medical",
        title: "UberMedoc — commander des médicaments",
        desc:
          "Application desktop (Qt) conçue pour faciliter l’accès aux médicaments. Une idée “impact” : aider les personnes qui ne peuvent pas se déplacer.",
        li1: "Catalogue + recherche / navigation",
        li2: "Panier / commande (prototype)",
        li3: "Stockage local via SQLite",
        li4: "Piste d’amélioration : lecture d’ordonnance via IA (future version)",
        note: "Projet académique : la notion d’ordonnance n’a pas été gérée dans cette version."
      },
      cta: { coming: "Lien à ajouter" }
    },

    en: {
      nav: { back: "Back to projects" },
      hero: {
        chip: "Apps • Web Dev • Desktop • UX",
        title: "Applications & Impact",
        subtitle:
          "Beyond data, I love building real, useful applications. I’m especially interested in healthcare topics because I feel tech can genuinely help people.",
        kpi1: { title: "3 projects", desc: "web, language theory, medical app" },
        kpi2: { title: "Stack", desc: "Java/Spring • C++/Qt • SQLite • HTML/CSS" }
      },
      blocks: {
        title: "Projects",
        subtitle: "Each block highlights the goal, tech stack, and key features."
      },
      p1: {
        pill: "Web App",
        title: "Ebook Club — Online eBook Library",
        desc:
          "Interactive web app built with Java + Spring Boot. Goal: a smooth experience for searching, recommending, and reading eBooks.",
        li1: "Book search by genre (romance, fantasy, dystopia…)",
        li2: "Personalized recommendations",
        li3: "Favorites, ratings & user reviews",
        li4: "Book details page + eBook download"
      },
      p2: {
        pill: "Theory → UI",
        title: "Function Plotter — Lexing & AST",
        desc:
          "App that lets users type a mathematical function and display its curve. Core idea: parse an expression into an AST and interpret it to plot.",
        s1: "Lexical analysis — tokenize the expression.",
        s2: "Syntax analysis — validate structure and build an AST.",
        s3: "Interpretation — evaluate the AST to plot the curve."
      },
      p3: {
        pill: "Medical",
        title: "UberMedoc — Order medicines",
        desc:
          "Desktop app (Qt) designed to improve access to medicines — especially for people who can’t travel easily.",
        li1: "Catalog + search / navigation",
        li2: "Cart / order flow (prototype)",
        li3: "Local storage with SQLite",
        li4: "Next step: AI prescription reading (future version)",
        note: "Academic project: prescription constraints were not handled in this version."
      },
      cta: { coming: "Add link later" }
    }
  };

  // --- helpers ---
  function getNested(obj, path) {
    return path.split(".").reduce((acc, k) => (acc && acc[k] != null ? acc[k] : null), obj);
  }

  function applyI18n(lang) {
    const dict = I18N[lang] || I18N.fr;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = getNested(dict, key);
      if (val == null) return;

      // allow HTML for the ordered list items
      if (el.tagName === "LI" && /<strong>/.test(val)) el.innerHTML = val;
      else el.textContent = val;
    });

    // update button display
    const langFlag = document.getElementById("langFlag");
    const langCode = document.getElementById("langCode");
    if (langFlag && langCode) {
      if (lang === "en") {
        langFlag.textContent = "🇬🇧";
        langCode.textContent = "EN";
      } else {
        langFlag.textContent = "🇫🇷";
        langCode.textContent = "FR";
      }
    }

    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "fr");
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    const themeIco = document.getElementById("themeIco");
    const themeCode = document.getElementById("themeCode");
    if (themeIco && themeCode) {
      if (theme === "light") {
        themeIco.textContent = "🌞";
        themeCode.textContent = "LIGHT";
      } else {
        themeIco.textContent = "🌙";
        themeCode.textContent = "DARK";
      }
    }
  }

  // --- init ---
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const savedTheme = localStorage.getItem("theme") || root.getAttribute("data-theme") || "dark";
  const savedLang = localStorage.getItem("lang") || root.getAttribute("data-lang") || "fr";

  root.setAttribute("data-lang", savedLang);
  applyTheme(savedTheme);
  applyI18n(savedLang);

  // --- events ---
  const langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const current = root.getAttribute("data-lang") || "fr";
      const next = current === "fr" ? "en" : "fr";
      root.setAttribute("data-lang", next);
      localStorage.setItem("lang", next);
      applyI18n(next);
    });
  }

  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      applyTheme(next);
    });
  }
})();

