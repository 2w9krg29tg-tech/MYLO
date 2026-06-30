/* ===================================================================
   MYLO — i18n dictionary
   Supported languages: it, en, es, fr, de, ar, zh, hi, ru, ja
   "ar" renders right-to-left (see RTL_LANGS + the [dir="rtl"] rules
   in style.css).
=================================================================== */

const SUPPORTED_LANGS = ["it", "en", "es", "fr", "de", "ar", "zh", "hi", "ru", "ja"];
const RTL_LANGS = ["ar"];

const translations = {

  it: {
    nav: { about: "Chi siamo", tokenomics: "Tokenomics", roadmap: "Roadmap", faq: "FAQ" },
    launch: "Apri l'App",
    ticker: "ASSET DIGITALE",
    heroTitle: ["Costruito con intelligenza.", "Pensato per il futuro."],
    heroSubtitle: "MYLO è un token Web3 di nuova generazione, pensato per utilità, design e community.",
    cta: "Compra MYLO",
    aboutTitle: "Chi è MYLO",
    aboutText: "MYLO è un ecosistema digitale che unisce branding, tecnologia e finanza decentralizzata.",
    tokenomicsTitle: "Tokenomics",
    cardSupplyLabel: "Offerta Totale",
    cardTaxLabel: "Tassa di Trading",
    cardLiquidityLabel: "Liquidità",
    cardLiquidityValue: "Bloccata",
    cardGovernanceLabel: "Governance",
    cardGovernanceValue: "Community",
    roadmapTitle: "Roadmap",
    roadmap: [
      { phase: "Fase 1", text: "Branding e sito web" },
      { phase: "Fase 2", text: "Distribuzione del token" },
      { phase: "Fase 3", text: "Crescita della community" },
      { phase: "Fase 4", text: "Quotazione sugli exchange" }
    ],
    faqTitle: "FAQ",
    faq: [
      { q: "Cos'è MYLO?", a: "Un asset digitale Web3 e il suo ecosistema." },
      { q: "MYLO è sicuro?", a: "La sicurezza dipende dagli audit del contratto e dal blocco della liquidità." }
    ],
    footer: "© 2026 MYLO Ecosystem",
    disclaimer: "SITO IN FASE DI TEST — NESSUN TOKEN REALE DISPONIBILE",
    modalTitle: "In arrivo",
    modalText: "L'app e il contratto del token sono ancora in fase di sviluppo. Iscriviti ai canali della community per essere avvisato al lancio.",
    navToggleLabel: "Apri il menu",
    modalCloseLabel: "Chiudi",
    langLabel: "Lingua"
  },

  en: {
    nav: { about: "About", tokenomics: "Tokenomics", roadmap: "Roadmap", faq: "FAQ" },
    launch: "Launch App",
    ticker: "DIGITAL ASSET",
    heroTitle: ["Built with intelligence.", "Designed for the future."],
    heroSubtitle: "MYLO is a next-generation Web3 token focused on utility, design and community.",
    cta: "Buy MYLO",
    aboutTitle: "About MYLO",
    aboutText: "MYLO is a digital ecosystem combining branding, technology and decentralized finance.",
    tokenomicsTitle: "Tokenomics",
    cardSupplyLabel: "Total Supply",
    cardTaxLabel: "Trading Tax",
    cardLiquidityLabel: "Liquidity",
    cardLiquidityValue: "Locked",
    cardGovernanceLabel: "Governance",
    cardGovernanceValue: "Community",
    roadmapTitle: "Roadmap",
    roadmap: [
      { phase: "Phase 1", text: "Branding & Website" },
      { phase: "Phase 2", text: "Token Deployment" },
      { phase: "Phase 3", text: "Community Growth" },
      { phase: "Phase 4", text: "Exchange Listings" }
    ],
    faqTitle: "FAQ",
    faq: [
      { q: "What is MYLO?", a: "A Web3 digital asset and its ecosystem." },
      { q: "Is MYLO safe?", a: "Security depends on smart contract audits and liquidity locking." }
    ],
    footer: "© 2026 MYLO Ecosystem",
    disclaimer: "SITE IN TEST PHASE — NO REAL TOKEN AVAILABLE YET",
    modalTitle: "Coming soon",
    modalText: "The app and the token contract are still in development. Join the community channels to be notified at launch.",
    navToggleLabel: "Open menu",
    modalCloseLabel: "Close",
    langLabel: "Language"
  },

  es: {
    nav: { about: "Sobre nosotros", tokenomics: "Tokenómica", roadmap: "Hoja de ruta", faq: "Preguntas frecuentes" },
    launch: "Abrir la app",
    ticker: "ACTIVO DIGITAL",
    heroTitle: ["Construido con inteligencia.", "Diseñado para el futuro."],
    heroSubtitle: "MYLO es un token Web3 de nueva generación centrado en la utilidad, el diseño y la comunidad.",
    cta: "Comprar MYLO",
    aboutTitle: "Sobre MYLO",
    aboutText: "MYLO es un ecosistema digital que combina branding, tecnología y finanzas descentralizadas.",
    tokenomicsTitle: "Tokenómica",
    cardSupplyLabel: "Suministro Total",
    cardTaxLabel: "Impuesto de Trading",
    cardLiquidityLabel: "Liquidez",
    cardLiquidityValue: "Bloqueada",
    cardGovernanceLabel: "Gobernanza",
    cardGovernanceValue: "Comunidad",
    roadmapTitle: "Hoja de ruta",
    roadmap: [
      { phase: "Fase 1", text: "Branding y sitio web" },
      { phase: "Fase 2", text: "Lanzamiento del token" },
      { phase: "Fase 3", text: "Crecimiento de la comunidad" },
      { phase: "Fase 4", text: "Listados en exchanges" }
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Qué es MYLO?", a: "Un activo digital Web3 y su ecosistema." },
      { q: "¿Es seguro MYLO?", a: "La seguridad depende de las auditorías del contrato y del bloqueo de liquidez." }
    ],
    footer: "© 2026 MYLO Ecosystem",
    disclaimer: "SITIO EN FASE DE PRUEBA — AÚN NO HAY NINGÚN TOKEN REAL DISPONIBLE",
    modalTitle: "Próximamente",
    modalText: "La app y el contrato del token todavía están en desarrollo. Únete a los canales de la comunidad para recibir el aviso de lanzamiento.",
    navToggleLabel: "Abrir el menú",
    modalCloseLabel: "Cerrar",
    langLabel: "Idioma"
  },

  fr: {
    nav: { about: "À propos", tokenomics: "Tokenomics", roadmap: "Feuille de route", faq: "FAQ" },
    launch: "Ouvrir l'app",
    ticker: "ACTIF NUMÉRIQUE",
    heroTitle: ["Conçu avec intelligence.", "Pensé pour l'avenir."],
    heroSubtitle: "MYLO est un token Web3 nouvelle génération axé sur l'utilité, le design et la communauté.",
    cta: "Acheter MYLO",
    aboutTitle: "À propos de MYLO",
    aboutText: "MYLO est un écosystème numérique combinant branding, technologie et finance décentralisée.",
    tokenomicsTitle: "Tokenomics",
    cardSupplyLabel: "Offre Totale",
    cardTaxLabel: "Taxe de Trading",
    cardLiquidityLabel: "Liquidité",
    cardLiquidityValue: "Verrouillée",
    cardGovernanceLabel: "Gouvernance",
    cardGovernanceValue: "Communauté",
    roadmapTitle: "Feuille de route",
    roadmap: [
      { phase: "Phase 1", text: "Branding et site web" },
      { phase: "Phase 2", text: "Déploiement du token" },
      { phase: "Phase 3", text: "Croissance de la communauté" },
      { phase: "Phase 4", text: "Cotations sur les exchanges" }
    ],
    faqTitle: "FAQ",
    faq: [
      { q: "Qu'est-ce que MYLO ?", a: "Un actif numérique Web3 et son écosystème." },
      { q: "MYLO est-il sûr ?", a: "La sécurité dépend des audits du contrat et du verrouillage de la liquidité." }
    ],
    footer: "© 2026 MYLO Ecosystem",
    disclaimer: "SITE EN PHASE DE TEST — AUCUN TOKEN RÉEL DISPONIBLE POUR LE MOMENT",
    modalTitle: "Bientôt disponible",
    modalText: "L'application et le contrat du token sont encore en développement. Rejoignez les canaux de la communauté pour être averti du lancement.",
    navToggleLabel: "Ouvrir le menu",
    modalCloseLabel: "Fermer",
    langLabel: "Langue"
  },

  de: {
    nav: { about: "Über uns", tokenomics: "Tokenomics", roadmap: "Roadmap", faq: "FAQ" },
    launch: "App öffnen",
    ticker: "DIGITALES ASSET",
    heroTitle: ["Mit Intelligenz gebaut.", "Für die Zukunft entworfen."],
    heroSubtitle: "MYLO ist ein Web3-Token der nächsten Generation mit Fokus auf Nutzen, Design und Community.",
    cta: "MYLO kaufen",
    aboutTitle: "Über MYLO",
    aboutText: "MYLO ist ein digitales Ökosystem aus Branding, Technologie und dezentraler Finanzierung.",
    tokenomicsTitle: "Tokenomics",
    cardSupplyLabel: "Gesamtangebot",
    cardTaxLabel: "Handelssteuer",
    cardLiquidityLabel: "Liquidität",
    cardLiquidityValue: "Gesperrt",
    cardGovernanceLabel: "Governance",
    cardGovernanceValue: "Community",
    roadmapTitle: "Roadmap",
    roadmap: [
      { phase: "Phase 1", text: "Branding und Website" },
      { phase: "Phase 2", text: "Token-Einführung" },
      { phase: "Phase 3", text: "Community-Wachstum" },
      { phase: "Phase 4", text: "Exchange-Listings" }
    ],
    faqTitle: "FAQ",
    faq: [
      { q: "Was ist MYLO?", a: "Ein digitales Web3-Asset und sein Ökosystem." },
      { q: "Ist MYLO sicher?", a: "Die Sicherheit hängt von Vertrags-Audits und der Sperrung der Liquidität ab." }
    ],
    footer: "© 2026 MYLO Ecosystem",
    disclaimer: "WEBSITE IN DER TESTPHASE — NOCH KEIN ECHTES TOKEN VERFÜGBAR",
    modalTitle: "Demnächst verfügbar",
    modalText: "Die App und der Token-Vertrag befinden sich noch in der Entwicklung. Tritt den Community-Kanälen bei, um beim Start informiert zu werden.",
    navToggleLabel: "Menü öffnen",
    modalCloseLabel: "Schließen",
    langLabel: "Sprache"
  },

  ar: {
    nav: { about: "حول", tokenomics: "اقتصاد التوكن", roadmap: "خارطة الطريق", faq: "الأسئلة الشائعة" },
    launch: "فتح التطبيق",
    ticker: "أصل رقمي",
    heroTitle: ["بُني بذكاء.", "صُمم من أجل المستقبل."],
    heroSubtitle: "مايلو هو توكن Web3 من الجيل الجديد يركّز على الفائدة والتصميم والمجتمع.",
    cta: "شراء MYLO",
    aboutTitle: "عن مايلو",
    aboutText: "مايلو نظام رقمي متكامل يجمع بين الهوية البصرية والتقنية والتمويل اللامركزي.",
    tokenomicsTitle: "اقتصاد التوكن",
    cardSupplyLabel: "العرض الكلي",
    cardTaxLabel: "ضريبة التداول",
    cardLiquidityLabel: "السيولة",
    cardLiquidityValue: "مقفلة",
    cardGovernanceLabel: "الحوكمة",
    cardGovernanceValue: "المجتمع",
    roadmapTitle: "خارطة الطريق",
    roadmap: [
      { phase: "المرحلة 1", text: "الهوية البصرية والموقع" },
      { phase: "المرحلة 2", text: "إطلاق التوكن" },
      { phase: "المرحلة 3", text: "نمو المجتمع" },
      { phase: "المرحلة 4", text: "الإدراج في البورصات" }
    ],
    faqTitle: "الأسئلة الشائعة",
    faq: [
      { q: "ما هو مايلو؟", a: "أصل رقمي من نوع Web3 ونظامه المتكامل." },
      { q: "هل مايلو آمن؟", a: "يعتمد الأمان على تدقيق العقد الذكي وقفل السيولة." }
    ],
    footer: "© 2026 MYLO Ecosystem",
    disclaimer: "الموقع في مرحلة تجريبية — لا يوجد توكن حقيقي متاح حتى الآن",
    modalTitle: "قريباً",
    modalText: "التطبيق وعقد التوكن لا يزالان قيد التطوير. انضم إلى قنوات المجتمع لتصلك إشعار عند الإطلاق.",
    navToggleLabel: "فتح القائمة",
    modalCloseLabel: "إغلاق",
    langLabel: "اللغة"
  },

  zh: {
    nav: { about: "关于", tokenomics: "代币经济", roadmap: "路线图", faq: "常见问题" },
    launch: "打开应用",
    ticker: "数字资产",
    heroTitle: ["以智能构建。", "为未来而设计。"],
    heroSubtitle: "MYLO 是新一代 Web3 代币，专注于实用性、设计和社区。",
    cta: "购买 MYLO",
    aboutTitle: "关于 MYLO",
    aboutText: "MYLO 是一个融合品牌、技术与去中心化金融的数字生态系统。",
    tokenomicsTitle: "代币经济",
    cardSupplyLabel: "总供应量",
    cardTaxLabel: "交易税",
    cardLiquidityLabel: "流动性",
    cardLiquidityValue: "已锁定",
    cardGovernanceLabel: "治理",
    cardGovernanceValue: "社区",
    roadmapTitle: "路线图",
    roadmap: [
      { phase: "第一阶段", text: "品牌与官网建设" },
      { phase: "第二阶段", text: "代币发行" },
      { phase: "第三阶段", text: "社区增长" },
      { phase: "第四阶段", text: "交易所上线" }
    ],
    faqTitle: "常见问题",
    faq: [
      { q: "MYLO 是什么？", a: "一种 Web3 数字资产及其生态系统。" },
      { q: "MYLO 安全吗？", a: "安全性取决于智能合约审计和流动性锁定。" }
    ],
    footer: "© 2026 MYLO Ecosystem",
    disclaimer: "网站处于测试阶段 — 目前尚无真实代币",
    modalTitle: "即将推出",
    modalText: "应用程序和代币合约仍在开发中。加入社区频道，以便在上线时收到通知。",
    navToggleLabel: "打开菜单",
    modalCloseLabel: "关闭",
    langLabel: "语言"
  },

  hi: {
    nav: { about: "परिचय", tokenomics: "टोकनॉमिक्स", roadmap: "रोडमैप", faq: "सामान्य प्रश्न" },
    launch: "ऐप खोलें",
    ticker: "डिजिटल एसेट",
    heroTitle: ["बुद्धिमत्ता से निर्मित।", "भविष्य के लिए डिज़ाइन किया गया।"],
    heroSubtitle: "MYLO एक नई पीढ़ी का Web3 टोकन है, जो उपयोगिता, डिज़ाइन और समुदाय पर केंद्रित है।",
    cta: "MYLO खरीदें",
    aboutTitle: "MYLO के बारे में",
    aboutText: "MYLO एक डिजिटल इकोसिस्टम है जो ब्रांडिंग, तकनीक और विकेंद्रीकृत वित्त को जोड़ता है।",
    tokenomicsTitle: "टोकनॉमिक्स",
    cardSupplyLabel: "कुल सप्लाई",
    cardTaxLabel: "ट्रेडिंग टैक्स",
    cardLiquidityLabel: "लिक्विडिटी",
    cardLiquidityValue: "लॉक्ड",
    cardGovernanceLabel: "गवर्नेंस",
    cardGovernanceValue: "कम्युनिटी",
    roadmapTitle: "रोडमैप",
    roadmap: [
      { phase: "फ़ेज़ 1", text: "ब्रांडिंग और वेबसाइट" },
      { phase: "फ़ेज़ 2", text: "टोकन लॉन्च" },
      { phase: "फ़ेज़ 3", text: "कम्युनिटी ग्रोथ" },
      { phase: "फ़ेज़ 4", text: "एक्सचेंज लिस्टिंग" }
    ],
    faqTitle: "सामान्य प्रश्न",
    faq: [
      { q: "MYLO क्या है?", a: "एक Web3 डिजिटल एसेट और उसका इकोसिस्टम।" },
      { q: "क्या MYLO सुरक्षित है?", a: "सुरक्षा स्मार्ट कॉन्ट्रैक्ट ऑडिट और लिक्विडिटी लॉक पर निर्भर करती है।" }
    ],
    footer: "© 2026 MYLO Ecosystem",
    disclaimer: "साइट परीक्षण चरण में है — अभी तक कोई वास्तविक टोकन उपलब्ध नहीं है",
    modalTitle: "जल्द आ रहा है",
    modalText: "ऐप और टोकन कॉन्ट्रैक्ट अभी भी विकास के चरण में हैं। लॉन्च की सूचना पाने के लिए कम्युनिटी चैनल से जुड़ें।",
    navToggleLabel: "मेनू खोलें",
    modalCloseLabel: "बंद करें",
    langLabel: "भाषा"
  },

  ru: {
    nav: { about: "О проекте", tokenomics: "Токеномика", roadmap: "Дорожная карта", faq: "Вопросы и ответы" },
    launch: "Открыть приложение",
    ticker: "ЦИФРОВОЙ АКТИВ",
    heroTitle: ["Создано с интеллектом.", "Спроектировано для будущего."],
    heroSubtitle: "MYLO — это токен Web3 нового поколения, ориентированный на полезность, дизайн и сообщество.",
    cta: "Купить MYLO",
    aboutTitle: "О MYLO",
    aboutText: "MYLO — цифровая экосистема, объединяющая брендинг, технологии и децентрализованные финансы.",
    tokenomicsTitle: "Токеномика",
    cardSupplyLabel: "Общее предложение",
    cardTaxLabel: "Торговый налог",
    cardLiquidityLabel: "Ликвидность",
    cardLiquidityValue: "Заблокирована",
    cardGovernanceLabel: "Управление",
    cardGovernanceValue: "Сообщество",
    roadmapTitle: "Дорожная карта",
    roadmap: [
      { phase: "Этап 1", text: "Брендинг и сайт" },
      { phase: "Этап 2", text: "Запуск токена" },
      { phase: "Этап 3", text: "Рост сообщества" },
      { phase: "Этап 4", text: "Листинг на биржах" }
    ],
    faqTitle: "Вопросы и ответы",
    faq: [
      { q: "Что такое MYLO?", a: "Цифровой актив Web3 и его экосистема." },
      { q: "Безопасен ли MYLO?", a: "Безопасность зависит от аудита смарт-контракта и блокировки ликвидности." }
    ],
    footer: "© 2026 MYLO Ecosystem",
    disclaimer: "САЙТ НА ЭТАПЕ ТЕСТИРОВАНИЯ — РЕАЛЬНОГО ТОКЕНА ЕЩЁ НЕТ",
    modalTitle: "Скоро",
    modalText: "Приложение и контракт токена пока находятся в разработке. Присоединяйтесь к каналам сообщества, чтобы узнать о запуске.",
    navToggleLabel: "Открыть меню",
    modalCloseLabel: "Закрыть",
    langLabel: "Язык"
  },

  ja: {
    nav: { about: "概要", tokenomics: "トケノミクス", roadmap: "ロードマップ", faq: "よくある質問" },
    launch: "アプリを開く",
    ticker: "デジタルアセット",
    heroTitle: ["知性によって構築。", "未来のために設計。"],
    heroSubtitle: "MYLOは、実用性・デザイン・コミュニティに重点を置いた次世代のWeb3トークンです。",
    cta: "MYLOを購入",
    aboutTitle: "MYLOについて",
    aboutText: "MYLOは、ブランディング、テクノロジー、分散型金融を融合したデジタルエコシステムです。",
    tokenomicsTitle: "トケノミクス",
    cardSupplyLabel: "総供給量",
    cardTaxLabel: "取引税",
    cardLiquidityLabel: "リクイディティ",
    cardLiquidityValue: "ロック済み",
    cardGovernanceLabel: "ガバナンス",
    cardGovernanceValue: "コミュニティ",
    roadmapTitle: "ロードマップ",
    roadmap: [
      { phase: "フェーズ1", text: "ブランディングとウェブサイト" },
      { phase: "フェーズ2", text: "トークン発行" },
      { phase: "フェーズ3", text: "コミュニティの拡大" },
      { phase: "フェーズ4", text: "取引所への上場" }
    ],
    faqTitle: "よくある質問",
    faq: [
      { q: "MYLOとは?", a: "Web3のデジタルアセットとそのエコシステムです。" },
      { q: "MYLOは安全ですか?", a: "安全性はスマートコントラクトの監査とリクイディティのロックに依存します。" }
    ],
    footer: "© 2026 MYLO Ecosystem",
    disclaimer: "サイトはテスト段階です — 実際のトークンはまだありません",
    modalTitle: "近日公開",
    modalText: "アプリとトークンのコントラクトはまだ開発中です。ローンチ時に通知を受け取るには、コミュニティチャンネルに参加してください。",
    navToggleLabel: "メニューを開く",
    modalCloseLabel: "閉じる",
    langLabel: "言語"
  }

};
