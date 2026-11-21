// ===== Traductions =====
// Pour modifier un texte : changer la valeur dans chaque langue.
// Pour ajouter un texte : mettre data-i18n="cle" dans le HTML et ajouter "cle" ici.
const translations = {
  fr: {
    "meta.title": "Baptiste Cousin — Portfolio",
    "nav.projects": "Projets",
    "nav.cv": "CV",
    "nav.contact": "Contact",
    "hero.role": "Élève-ingénieur en mécatronique · ESME Lyon",
    "hero.intro": "Je conçois et construis des systèmes robotiques, de la mécanique à l'électronique en passant par le logiciel.",
    "hero.availability": "Je recherche un stage de fin d'études de 5 à 6 mois à partir d'avril 2027.",
    "projects.title": "Projets",
    "badge.current": "En cours",
    "meta.perso": "Projet personnel",
    "meta.p2": "2026 – 2027 · Projet d'études",
    "meta.p3": "2024 – 2025 · Équipe de 4",
    "meta.p4": "2025 – 2026 · Projet d'études · Équipe de 3",
    "p1.title": "Bras robotique de recherche",
    "p1.desc": "Bras robot 6 axes basé sur le PAROL6, que je construis et programme pour en faire une plateforme de tests et de recherche.",
    "p2.title": "Convoyeur modulaire à cellules delta",
    "p2.desc": "Suite de mon système de convoyage : des cellules delta modulaires qui déplacent les colis dans n'importe quelle direction.",
    "p3.title": "Robot de beer pong autonome",
    "p3.desc": "Robot qui localise les cibles, vise et lance des balles grâce à l'analyse d'image en temps réel.",
    "p4.title": "Convoyage automatisé pour la restauration",
    "p4.desc": "Système intelligent qui achemine les plats vers des tables déterminées via un chemin commun.",
    "p5.title": "Drones FPV",
    "p5.desc": "Construction, assemblage et pilotage de drones FPV.",
    "p6.title": "Servomoteur à partir d'un moteur d'essuie-glace",
    "p6.desc": "Moteur d'essuie-glace de voiture transformé en servomoteur à fort couple.",
    "tag.vision": "Vision",
    "tag.print": "Impression 3D",
    "tag.ui": "Interface utilisateur",
    "cv.title": "CV",
    "cv.download": "Télécharger le CV (PDF)",
    "cv.experience": "Expérience",
    "exp1.when": "Juin – sept. 2026 · Stage",
    "exp1.title": "Ingénieur R&D — Référent technique de plateforme",
    "exp1.desc": "Conception et évolution d'une plateforme robotisée d'automatisation pour un grand laboratoire biopharmaceutique : architecture globale, intégration mécanique, électrique et logicielle, système de sécurité, communication TCP/IP et RS-232.",
    "cv.education": "Formation",
    "edu1.title": "Diplôme d'ingénieur — spécialisation mécatronique",
    "edu2.when": "2ᵉ semestre 2025 · Japon",
    "edu2.title": "Échange universitaire",
    "edu3.title": "Classe préparatoire MPI",
    "edu3.where": "Lycée Claude-Fauriel",
    "cv.skills": "Compétences",
    "sk.prog": "Programmation",
    "sk.robotics": "Robotique & systèmes",
    "sk.motors": "Moteurs NEMA & servos",
    "sk.sensors": "Capteurs",
    "sk.elec": "Électronique & prototypage",
    "sk.pcb": "PCB (KiCad, EasyEDA)",
    "sk.solder": "Soudure",
    "sk.machining": "Usinage",
    "sk.cad": "CAO & création",
    "cv.languages": "Langues",
    "lang.fr": "Français — langue maternelle",
    "lang.en": "Anglais — courant (TOEIC 985/990)",
    "contact.title": "Contact",
    "contact.text": "Une question, une opportunité de stage ? N'hésitez pas à me contacter."
  },

  en: {
    "meta.title": "Baptiste Cousin — Portfolio",
    "nav.projects": "Projects",
    "nav.cv": "Resume",
    "nav.contact": "Contact",
    "hero.role": "Mechatronics engineering student · ESME Lyon",
    "hero.intro": "I design and build robotic systems, from mechanics and electronics to software.",
    "hero.availability": "I am looking for a 5 to 6-month end-of-studies internship starting April 2027.",
    "projects.title": "Projects",
    "badge.current": "In progress",
    "meta.perso": "Personal project",
    "meta.p2": "2026 – 2027 · School project",
    "meta.p3": "2024 – 2025 · Team of 4",
    "meta.p4": "2025 – 2026 · School project · Team of 3",
    "p1.title": "Research robotic arm",
    "p1.desc": "6-axis robotic arm based on the PAROL6, which I am building and programming as a testing and research platform.",
    "p2.title": "Modular delta-cell conveyor",
    "p2.desc": "The follow-up to my conveyor system: modular delta cells that move parcels in any direction.",
    "p3.title": "Autonomous beer pong robot",
    "p3.desc": "A robot that locates targets, aims and throws balls using real-time image analysis.",
    "p4.title": "Automated food delivery conveyor",
    "p4.desc": "A smart system that routes dishes to specific tables along a shared path.",
    "p5.title": "FPV drones",
    "p5.desc": "Building, assembling and flying FPV drones.",
    "p6.title": "Servo from a windshield wiper motor",
    "p6.desc": "Car windshield wiper motor converted into a high-torque servo.",
    "tag.vision": "Vision",
    "tag.print": "3D printing",
    "tag.ui": "User interface",
    "cv.title": "Resume",
    "cv.download": "Download resume (PDF)",
    "cv.experience": "Experience",
    "exp1.when": "June – Sept. 2026 · Internship",
    "exp1.title": "R&D Engineer — Platform Technical Lead",
    "exp1.desc": "Design and development of a robotic automation platform for a major biopharmaceutical laboratory: overall architecture, mechanical, electrical and software integration, safety system, TCP/IP and RS-232 communication.",
    "cv.education": "Education",
    "edu1.title": "Engineering degree — Mechatronics",
    "edu2.when": "Fall 2025 · Japan",
    "edu2.title": "University exchange",
    "edu3.title": "Preparatory classes (MPI)",
    "edu3.where": "Lycée Claude-Fauriel",
    "cv.skills": "Skills",
    "sk.prog": "Programming",
    "sk.robotics": "Robotics & systems",
    "sk.motors": "NEMA motors & servos",
    "sk.sensors": "Sensors",
    "sk.elec": "Electronics & prototyping",
    "sk.pcb": "PCB (KiCad, EasyEDA)",
    "sk.solder": "Soldering",
    "sk.machining": "Machining",
    "sk.cad": "CAD & creative",
    "cv.languages": "Languages",
    "lang.fr": "French — native",
    "lang.en": "English — fluent (TOEIC 985/990)",
    "contact.title": "Contact",
    "contact.text": "A question or an internship opportunity? Feel free to get in touch."
  },

  ja: {
    "meta.title": "Baptiste Cousin — ポートフォリオ",
    "nav.projects": "プロジェクト",
    "nav.cv": "履歴書",
    "nav.contact": "連絡先",
    "hero.role": "メカトロニクス専攻 エンジニア課程学生 · ESME リヨン校",
    "hero.intro": "機械・電子回路・ソフトウェアまで、ロボットシステムを設計・製作しています。",
    "hero.availability": "2027年4月から5〜6か月間の卒業インターンシップ先を探しています。",
    "projects.title": "プロジェクト",
    "badge.current": "進行中",
    "meta.perso": "個人プロジェクト",
    "meta.p2": "2026〜2027年 · 学業プロジェクト",
    "meta.p3": "2024〜2025年 · 4人チーム",
    "meta.p4": "2025〜2026年 · 学業プロジェクト · 3人チーム",
    "p1.title": "研究用ロボットアーム",
    "p1.desc": "PAROL6をベースにした6軸ロボットアーム。テスト・研究用プラットフォームとして製作・プログラミングしています。",
    "p2.title": "デルタセル式モジュール型コンベヤ",
    "p2.desc": "搬送システムの次のステップ。モジュール型のデルタセルで、荷物をあらゆる方向へ移動させます。",
    "p3.title": "自律型ビアポンロボット",
    "p3.desc": "リアルタイム画像解析で標的を検出し、照準を合わせてボールを投げるロボット。",
    "p4.title": "飲食店向け自動搬送システム",
    "p4.desc": "共通の経路を通って料理を指定のテーブルへ届けるスマートシステム。",
    "p5.title": "FPVドローン",
    "p5.desc": "FPVドローンの製作・組み立て・操縦。",
    "p6.title": "ワイパーモーターのサーボ化",
    "p6.desc": "自動車のワイパーモーターを高トルクのサーボモーターに改造しました。",
    "tag.vision": "画像処理",
    "tag.print": "3Dプリント",
    "tag.ui": "ユーザーインターフェース",
    "cv.title": "履歴書",
    "cv.download": "履歴書をダウンロード (PDF)",
    "cv.experience": "職歴",
    "exp1.when": "2026年6月〜9月 · インターンシップ",
    "exp1.title": "研究開発エンジニア／プラットフォーム技術責任者",
    "exp1.desc": "大手バイオ医薬品研究所向けロボット自動化プラットフォームの設計・改良。全体アーキテクチャ、機械・電気・ソフトウェアの統合、安全システム、TCP/IP・RS-232通信を担当。",
    "cv.education": "学歴",
    "edu1.title": "総合エンジニア学位（メカトロニクス専攻）",
    "edu2.when": "2025年 後期 · 日本",
    "edu2.title": "交換留学（山梨学院大学）",
    "edu3.title": "グランゼコール準備級（MPIコース）",
    "edu3.where": "クロード・フォリエル高校",
    "cv.skills": "スキル",
    "sk.prog": "プログラミング",
    "sk.robotics": "ロボティクス・システム",
    "sk.motors": "NEMAモーター・サーボ",
    "sk.sensors": "センサー",
    "sk.elec": "電子工学・試作",
    "sk.pcb": "PCB設計（KiCad、EasyEDA）",
    "sk.solder": "はんだ付け",
    "sk.machining": "機械加工",
    "sk.cad": "CAD・デジタル制作",
    "cv.languages": "語学",
    "lang.fr": "フランス語 — 母語",
    "lang.en": "英語 — 流暢（TOEIC 985/990）",
    "contact.title": "連絡先",
    "contact.text": "ご質問やインターンシップのご提案がありましたら、お気軽にご連絡ください。"
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
