
/* =========================================================
   PORTFOLIO DE PENDA DIALLO : script.js
   1. Textes en français et en anglais
   2. Changer de langue
   3. Changer de thème (clair / sombre)
   4. Lien du CV selon la langue
   5. Menu : section active
   6. Copier l'email
   7. Captures d'écran manquantes
   8. Petits détails
   ========================================================= */


/* ---------- 1. Textes en français et en anglais ----------
   Chaque clé correspond à un attribut data-i18n dans index.html.
   Pour modifier un texte, change-le ici (FR et EN). */
const translations = {
  fr: {
    nav_projects: "Projets",
    nav_about: "Parcours",
    nav_skills: "Compétences",
    nav_contact: "Contact",

    hero_role: "Étudiante en Informatique",
    hero_intro: "Je développe des applications web pour la santé, l'administration et la sécurité routière.",
    cta_cv: "Télécharger mon CV",
    cta_contact: "Me contacter",

    projects_h: "Projets",
    shot_empty: "Capture d'écran à ajouter",
    badge_wip: "en cours",
    link_code: "Voir le code",
    link_demo: "Voir la démo",

    p1_sub: "Système de gestion des activités des Impôts et Domaines",
    p1_desc: "Cheffe de groupe. Application qui permet d'assigner des tâches, de suivre les activités, de faire des signalements et d'envoyer des notifications entre agents et responsables. Projet du cours de Bases de Données, évalué à 17/20.",
    p2_sub: "Système de gestion hospitalière",
    p2_desc: "Cheffe de groupe. Application avec cinq rôles (administrateur, réceptionniste, médecin, patient, pharmacien) : dossiers patients, rendez-vous, consultations, téléconsultations et disponibilités des médecins.",
    p3_sub: "Suivi des infractions routières",
    p3_desc: "Projet personnel. Plateforme qui améliore la transparence et la coordination entre les postes de contrôle routiers : suivi des infractions et des amendes, partage d'informations en temps réel, accès au code de la route. Elle vise à réduire les erreurs administratives et à lutter contre la corruption grâce à une meilleure traçabilité.",
    p4_sub: "Plateforme collaborative d'assistance médicale intelligente",
    p4_desc: "Plateforme pour les professionnels de santé et les patients : les médecins échangent sur des cas complexes, les patients reçoivent des informations adaptées et des conseils de prévention, et un assistant intelligent analyse les antécédents médicaux et simule l'impact d'un traitement.",

    about_h: "Parcours",
    about_p1: "Étudiante en Informatique à l'Université Iba Der Thiam de Thiès (UFR SET), je m'intéresse au développement web et aux nouvelles technologies. Sérieuse, motivée et curieuse, j'aime apprendre vite et relever des défis.",
    about_p2: "Je m'intéresse aussi à la cybersécurité, au slam et à la manière dont la technologie et la culture se rencontrent.",
    s1_t: "Présidente de la Commission Communication et Relations Extérieures",
    s1_d: "AE-SET, Amicale des Étudiants de l'UFR SET. Élue à l'unanimité.",
    s2_t: "Déléguée de classe",
    s2_d: "Réélue par mes camarades.",
    s3_t: "Cheffe de groupe sur mes projets académiques",
    s3_d: "TERRAFISC et LE TROPICAL : organiser l'équipe, répartir le travail, livrer.",
    s4_t: "Fondatrice d'une entreprise de pâtisserie",
    s4_d: "J'ai monté et géré mon activité moi-même.",

    skills_h: "Compétences",
    skills_tech: "Technologies",
    skills_lang: "Langues",
    l_fr: "Français",
    l_en: "Anglais",
    l_es: "Espagnol",
    l_pu: "Poular",

    contact_h: "Contact",
    contact_p: "Un stage, un projet, une question ? Écris-moi, je réponds vite.",
    copy_email: "Copier l'email",
    copied: "Copié !"
  },

  en: {
    nav_projects: "Projects",
    nav_about: "Background",
    nav_skills: "Skills",
    nav_contact: "Contact",

    hero_role: "Computer Science Student",
    hero_intro: "I build web applications for healthcare, public administration and road safety.",
    cta_cv: "Download my CV",
    cta_contact: "Contact me",

    projects_h: "Projects",
    shot_empty: "Screenshot to add",
    badge_wip: "in progress",
    link_code: "View the code",
    link_demo: "View the demo",

    p1_sub: "Tax and State Property Activity Management System",
    p1_desc: "Team leader. Application to assign tasks, track activities, report issues and send notifications between agents and supervisors. Databases course project, graded 17/20.",
    p2_sub: "Hospital Management System",
    p2_desc: "Team leader. Application with five roles (administrator, receptionist, doctor, patient, pharmacist): patient records, appointments, consultations, teleconsultations and doctor availability.",
    p3_sub: "Road offence tracking",
    p3_desc: "Personal project. Platform that improves transparency and coordination between road checkpoints: offence and fine tracking, real-time information sharing, access to traffic rules. It aims to reduce administrative errors and fight corruption through better traceability.",
    p4_sub: "Collaborative and Intelligent Medical Assistance Platform",
    p4_desc: "Platform for healthcare professionals and patients: doctors discuss complex cases, patients get tailored information and prevention advice, and an intelligent assistant analyzes medical history and simulates the impact of a treatment.",

    about_h: "Background",
    about_p1: "I am a Computer Science student at Université Iba Der Thiam de Thiès (UFR SET) with an interest in web development and new technologies. Serious, motivated and curious, I learn fast and enjoy a challenge.",
    about_p2: "I am also interested in cybersecurity, slam poetry and the way technology and culture meet.",
    s1_t: "President, Communication and External Relations Committee",
    s1_d: "AE-SET, the UFR SET student association. Elected unanimously.",
    s2_t: "Class representative",
    s2_d: "Re-elected by my classmates.",
    s3_t: "Team leader on my academic projects",
    s3_d: "TERRAFISC and LE TROPICAL: organizing the team, sharing the work, delivering.",
    s4_t: "Founder of a pastry business",
    s4_d: "I started and ran my own business.",

    skills_h: "Skills",
    skills_tech: "Technologies",
    skills_lang: "Languages",
    l_fr: "French",
    l_en: "English",
    l_es: "Spanish",
    l_pu: "Pulaar",

    contact_h: "Contact",
    contact_p: "An internship, a project, a question? Write to me, I reply quickly.",
    copy_email: "Copy email",
    copied: "Copied!"
  }
};

/* Chemins des CV (mets tes PDF dans le dossier assets/) */
const cvFiles = {
  fr: "assets/CV_Penda_Diallo_FR.pdf",
  en: "assets/CV_Penda_Diallo_EN.pdf"
};

/* Petite fonction pour lire/écrire dans le navigateur sans planter s'il refuse */
function saveSetting(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* pas grave */ }
}
function readSetting(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

let currentLang = "fr";


/* ---------- 2. Changer de langue ---------- */
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Remplace le texte de chaque élément qui a data-i18n
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Met à jour les boutons FR / EN
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });

  // Le lien du CV suit la langue
  document.getElementById("cvLink").setAttribute("href", cvFiles[lang]);

  saveSetting("lang", lang);
}

document.querySelectorAll(".lang-btn").forEach(function (btn) {
  btn.addEventListener("click", function () { setLang(btn.dataset.lang); });
});


/* ---------- 3. Changer de thème (clair / sombre) ---------- */
const root = document.documentElement;

function currentTheme() {
  const forced = root.getAttribute("data-theme");
  if (forced) return forced;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

document.getElementById("themeBtn").addEventListener("click", function () {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  saveSetting("theme", next);
});


/* ---------- 5. Menu : section active ----------
   Souligne dans le menu la section que la personne est en train de lire. */
const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("main .block");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (link) {
          link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach(function (section) { observer.observe(section); });
}


/* ---------- 6. Copier l'email ---------- */
const copyBtn = document.getElementById("copyBtn");
const mailLink = document.getElementById("mailLink");

copyBtn.addEventListener("click", function () {
  const email = mailLink.textContent.trim();

  // Le bouton confirme l'action, puis reprend son texte normal
  function confirmCopy() {
    copyBtn.textContent = translations[currentLang].copied;
    setTimeout(function () {
      copyBtn.textContent = translations[currentLang].copy_email;
    }, 1800);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(confirmCopy).catch(function () {
      window.location.href = "mailto:" + email;
    });
  } else {
    window.location.href = "mailto:" + email;
  }
});


/* ---------- 7. Captures d'écran manquantes ----------
   Si une image n'existe pas encore, on affiche le cadre "capture à ajouter". */
document.querySelectorAll(".shot img").forEach(function (img) {
  function markEmpty() { img.parentElement.classList.add("empty"); }

  img.addEventListener("error", markEmpty);
  if (img.complete && img.naturalWidth === 0) { markEmpty(); }
});


/* ---------- 8. Petits détails ---------- */
document.getElementById("year").textContent = new Date().getFullYear();


/* ---------- Démarrage : on retrouve les choix de la personne ---------- */
const savedTheme = readSetting("theme");
if (savedTheme === "dark" || savedTheme === "light") {
  root.setAttribute("data-theme", savedTheme);
}

const savedLang = readSetting("lang");
setLang(savedLang === "en" ? "en" : "fr");