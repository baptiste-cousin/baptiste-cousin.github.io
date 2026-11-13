// ===== Traductions =====
// Pour modifier un texte : changer la valeur dans chaque langue.
// Pour ajouter un texte : mettre data-i18n="cle" dans le HTML et ajouter "cle" ici.
const translations = {
  fr: {
    "meta.title": "Baptiste Cousin — Portfolio",
    "nav.projects": "Projets",
    "nav.cv": "CV",
    "nav.contact": "Contact",
    "hero.role": "Étudiant ingénieur · Robotique & mécatronique",
    "hero.intro": "Je conçois et construis des systèmes robotiques, de la mécanique à l'électronique en passant par le logiciel.",
    "projects.title": "Projets",
    "p1.title": "Bras robotique de recherche",
    "p1.desc": "Bras robot 6 axes basé sur le PAROL6, utilisé comme plateforme de tests et de recherche.",
    "p2.title": "Drones FPV",
    "p2.desc": "Conception, montage et réglage de drones FPV.",
    "p3.title": "Servomoteur à partir d'un moteur d'essuie-glace",
    "p3.desc": "Moteur d'essuie-glace de voiture transformé en servomoteur à fort couple.",
    "p4.title": "Système de convoyage automatisé",
    "p4.desc": "Convoyeur automatisé avec gestion du flux de pièces.",
    "p5.title": "Robot de beer pong",
    "p5.desc": "Robot capable de jouer au beer pong de façon autonome.",
    "badge.soon": "À venir",
    "cv.title": "CV",
    "cv.download": "Télécharger le CV (PDF)",
    "cv.education": "Formation",
    "cv.edu1": "Cycle ingénieur",
    "cv.experience": "Expériences",
    "cv.todo": "À compléter",
    "cv.skills": "Compétences",
    "skill.pcb": "Conception PCB",
    "skill.rt": "Systèmes temps réel",
    "skill.robotics": "Robotique",
    "skill.cad": "CAO",
    "cv.languages": "Langues",
    "lang.fr": "Français — langue maternelle",
    "lang.en": "Anglais",
    "lang.ja": "Japonais",
    "contact.title": "Contact",
    "contact.text": "Une question, une opportunité ? N'hésitez pas à me contacter."
  },

  en: {
    "meta.title": "Baptiste Cousin — Portfolio",
    "nav.projects": "Projects",
    "nav.cv": "Resume",
    "nav.contact": "Contact",
    "hero.role": "Engineering student · Robotics & mechatronics",
    "hero.intro": "I design and build robotic systems, from mechanics and electronics to software.",
    "projects.title": "Projects",
    "p1.title": "Research robotic arm",
    "p1.desc": "6-axis robotic arm based on the PAROL6, used as a testing and research platform.",
    "p2.title": "FPV drones",
    "p2.desc": "Design, building and tuning of FPV drones.",
    "p3.title": "Servo from a windshield wiper motor",
    "p3.desc": "Car windshield wiper motor converted into a high-torque servo.",
    "p4.title": "Automated conveyor system",
    "p4.desc": "Automated conveyor with part flow management.",
    "p5.title": "Beer pong robot",
    "p5.desc": "A robot that plays beer pong autonomously.",
    "badge.soon": "Coming soon",
    "cv.title": "Resume",
    "cv.download": "Download resume (PDF)",
    "cv.education": "Education",
    "cv.edu1": "Engineering degree",
    "cv.experience": "Experience",
    "cv.todo": "To be completed",
    "cv.skills": "Skills",
    "skill.pcb": "PCB design",
    "skill.rt": "Real-time systems",
    "skill.robotics": "Robotics",
    "skill.cad": "CAD",
    "cv.languages": "Languages",
    "lang.fr": "French — native",
    "lang.en": "English",
    "lang.ja": "Japanese",
    "contact.title": "Contact",
    "contact.text": "A question or an opportunity? Feel free to get in touch."
  },

  ja: {
    "meta.title": "Baptiste Cousin — ポートフォリオ",
    "nav.projects": "プロジェクト",
    "nav.cv": "履歴書",
    "nav.contact": "連絡先",
    "hero.role": "工学部学生 · ロボティクス & メカトロニクス",
    "hero.intro": "機械・電子回路・ソフトウェアまで、ロボットシステムを設計・製作しています。",
    "projects.title": "プロジェクト",
    "p1.title": "研究用ロボットアーム",
    "p1.desc": "PAROL6をベースにした6軸ロボットアーム。テストや研究のためのプラットフォームです。",
    "p2.title": "FPVドローン",
    "p2.desc": "FPVドローンの設計・組み立て・調整。",
    "p3.title": "ワイパーモーターのサーボ化",
    "p3.desc": "自動車のワイパーモーターを高トルクのサーボモーターに改造しました。",
    "p4.title": "自動搬送システム",
    "p4.desc": "部品の流れを管理する自動コンベヤシステム。",
    "p5.title": "ビアポンロボット",
    "p5.desc": "ビアポンを自動でプレイするロボット。",
    "badge.soon": "近日公開",
    "cv.title": "履歴書",
    "cv.download": "履歴書をダウンロード (PDF)",
    "cv.education": "学歴",
    "cv.edu1": "エンジニア課程",
    "cv.experience": "職歴",
    "cv.todo": "準備中",
    "cv.skills": "スキル",
    "skill.pcb": "PCB設計",
    "skill.rt": "リアルタイムシステム",
    "skill.robotics": "ロボティクス",
    "skill.cad": "CAD",
    "cv.languages": "言語",
    "lang.fr": "フランス語 — 母語",
    "lang.en": "英語",
    "lang.ja": "日本語",
    "contact.title": "連絡先",
    "contact.text": "ご質問やご提案がありましたら、お気軽にご連絡ください。"
  }
};

const SUPPORTED = Object.keys(translations);

function setLanguage(lang) {
  if (!SUPPORTED.includes(lang)) lang = "fr";
  const dict = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const text = dict[el.dataset.i18n];
    if (text !== undefined) el.textContent = text;
  });

  document.documentElement.lang = lang;
  document.title = dict["meta.title"];

  // Un PDF de CV par langue : cv/cv-fr.pdf, cv/cv-en.pdf, cv/cv-ja.pdf
  document.getElementById("cv-link").href = `cv/cv-${lang}.pdf`;

  document.querySelectorAll(".lang button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  try { localStorage.setItem("lang", lang); } catch (e) {}
}

// Langue de départ : choix précédent, sinon langue du navigateur, sinon français
function initialLanguage() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved) return saved;
  } catch (e) {}
  const nav = (navigator.language || "fr").slice(0, 2);
  return SUPPORTED.includes(nav) ? nav : "fr";
}

document.querySelectorAll(".lang button").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(initialLanguage());
