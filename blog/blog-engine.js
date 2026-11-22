(function () {
  const SUPPORTED_LANGS = ["en", "es", "fr", "it", "pt", "ro"];

  const BLOG_DATA = {
    en: {
      pageTitle: "mariusmarAI | Editorial Journal",
      metaDesc: "Typographic executive notes on AI workflows, automation, operations, GEO, digital business, hybrid career skills, and policy shifts.",
      subtag: "Editorial Journal",
      home: "Home",
      cv: "CV",
      projects: "Projects",
      play: "Interactive Play",
      blog: "Blog",
      contact: "Contact",
      eyebrow: "Typographic Executive Journal · Zero Images",
      title: "AI Workflows, Operations, Business & Career Execution",
      sub: "Practical frameworks and field notes across four core pillars—designed for clear execution without visual clutter.",
      toc: "On This Page",
      nlTitle: "Subscribe to Editorial Dispatches",
      nlSub: "Concise notes on AI automation, operations, GEO, and career strategy. Protected by MailerLite Double Opt-In.",
      nlPlaceholder: "you@domain.com",
      nlBtn: "Subscribe",
      nlConsent: 'Double Opt-In required. By subscribing, you accept our <a href="../../privacy.html">Privacy Policy</a> and <a href="../../terms.html">Terms of Service</a>. Contact: <a href="mailto:hello@mariusmarai.com">hello@mariusmarai.com</a>.',
      nlInvalid: "Please enter a valid email address.",
      nlSent: "Subscription request ready. Please check your inbox to confirm via MailerLite Double Opt-In.",
      ftHome: "Home",
      ftPrivacy: "Privacy Policy",
      ftTerms: "Terms of Service",
      ftCopy: "© mariusmarAI. Global Operations, Commercial Leadership & AI-Driven Transformation.",
      categories: {
        all: "All Pillars",
        "ai-ops": "AI, Automation & Ops",
        "business-geo": "Business, GEO & FinTech",
        "career-remote": "Career, Remote & Hybrid Skills",
        "market-pulse": "Market & Policy Pulse"
      },
      impacts: [
        { num: "199h → 25m", label: "Reporting Compression", note: "Deterministic data pipelines paired with AI synthesis." },
        { num: "4 Pillars", label: "Zero Keyword Cannibalization", note: "Focused editorial architecture across 6 languages." },
        { num: "GEO-Ready", label: "Structured for AI & Search", note: "Direct answers, clear definitions, and comparative logic." }
      ],
      posts: [
        {
          id: "ai-workflows-deterministic-guardrails",
          cat: "ai-ops",
          format: "How-To Guide",
          date: "Nov 22, 2026",
          readTime: "4 min read",
          title: "How to Pair Deterministic Spreadsheets with AI Agents Without Losing Auditability",
          summary: "Keep calculations in deterministic tables (Excel, VBA, SQL) and use AI agents strictly for narrative synthesis, anomaly commentary, and executive formatting.",
          quote: "AI accelerates synthesis; deterministic business rules keep every number auditable.",
          body: "Operational teams lose trust in AI when language models are asked to perform arithmetic or reconcile raw exports. A resilient workflow separates calculation from narration: lock KPI formulas in structured tables first, validate edge cases, and pass only verified summaries to AI workflows."
        },
        {
          id: "geo-visibility-beyond-traditional-seo",
          cat: "business-geo",
          format: "Framework",
          date: "Nov 22, 2026",
          readTime: "5 min read",
          title: "GEO in Practice: Structuring B2B Content So AI Search Engines Cite Your Work",
          summary: "Place direct, self-contained answers immediately beneath clear headings, use explicit entity definitions, and organize comparisons into scannable structures.",
          quote: "Generative engines extract clarity, provenance, and structured comparisons—not filler introductions.",
          body: "Generative Engine Optimization (GEO) rewards precision over word count. Lead every section with a concise factual statement, back claims with concrete operational metrics, and avoid vague marketing adjectives that AI summarizers strip out."
        },
        {
          id: "hybrid-skills-remote-leverage",
          cat: "career-remote",
          format: "Actionable Checklist",
          date: "Nov 22, 2026",
          readTime: "4 min read",
          title: "Hybrid Skills That Compound in Remote Leadership Roles",
          summary: "Combining commercial P&L ownership with hands-on data literacy and workflow automation creates rare leverage in distributed organizations.",
          quote: "Leaders who understand both the P&L and the underlying data pipeline move twice as fast.",
          body: "Remote execution exposes ambiguous processes immediately. Professionals who pair domain judgment with structured reporting, clear asynchronous documentation, and lightweight automation eliminate bottlenecks across time zones."
        },
        {
          id: "eu-ai-act-privacy-practical-impact",
          cat: "market-pulse",
          format: "Policy Brief",
          date: "Nov 22, 2026",
          readTime: "4 min read",
          title: "EU AI Act & Privacy Governance: What Practical Operators Should Standardize Now",
          summary: "Map where personal data enters AI prompts, enforce vendor data-processing boundaries, and document human-in-the-loop review for high-impact decisions.",
          quote: "Good governance is an operational accelerator when built into workflows from day one.",
          body: "Rather than treating regulatory compliance as a one-off legal audit, high-performing teams maintain a simple inventory of AI tools, data classifications, and review checkpoints—protecting customer trust across EU and global markets."
        }
      ]
    },

    es: {
      pageTitle: "mariusmarAI | Diario Editorial",
      metaDesc: "Notas ejecutivas tipográficas sobre flujos de IA, automatización, operaciones, GEO, negocios digitales, carrera híbrida y regulación.",
      subtag: "Diario Editorial",
      home: "Inicio",
      cv: "CV",
      projects: "Proyectos",
      play: "Interactive Play",
      blog: "Blog",
      contact: "Contacto",
      eyebrow: "Diario Ejecutivo Tipográfico · Sin Imágenes",
      title: "Flujos de IA, Operaciones, Negocio y Ejecución Profesional",
      sub: "Marcos prácticos y notas de campo en cuatro pilares clave—diseñados para una lectura clara y sin ruido visual.",
      toc: "En Esta Página",
      nlTitle: "Suscríbete a las Notas Editoriales",
      nlSub: "Análisis concisos sobre automatización con IA, operaciones, GEO y estrategia profesional. Protegido con Double Opt-In de MailerLite.",
      nlPlaceholder: "tu@dominio.com",
      nlBtn: "Suscribirme",
      nlConsent: 'Se requiere Double Opt-In. Al suscribirte, aceptas la <a href="../../privacy.html">Política de Privacidad</a> y los <a href="../../terms.html">Términos de Servicio</a>. Contacto: <a href="mailto:hello@mariusmarai.com">hello@mariusmarai.com</a>.',
      nlInvalid: "Por favor, introduce una dirección de correo electrónico válida.",
      nlSent: "Solicitud preparada. Revisa tu bandeja de entrada para confirmar mediante Double Opt-In de MailerLite.",
      ftHome: "Inicio",
      ftPrivacy: "Política de Privacidad",
      ftTerms: "Términos de Servicio",
      ftCopy: "© mariusmarAI. Operaciones Globales, Liderazgo Comercial y Transformación impulsada por IA.",
      categories: {
        all: "Todos los Pilares",
        "ai-ops": "IA, Automatización y Ops",
        "business-geo": "Negocio, GEO y FinTech",
        "career-remote": "Carrera, Remoto y Habilidades Híbridas",
        "market-pulse": "Pulso de Mercado y Regulación"
      },
      impacts: [
        { num: "199h → 25m", label: "Compresión de Reportes", note: "Flujos de datos deterministas combinados con síntesis de IA." },
        { num: "4 Pilares", label: "Sin Canibalización SEO", note: "Arquitectura editorial enfocada en 6 idiomas." },
        { num: "Listo para GEO", label: "Optimizado para IA y Buscadores", note: "Respuestas directas, definiciones claras y lógica comparativa." }
      ],
      posts: [
        {
          id: "ai-workflows-deterministic-guardrails",
          cat: "ai-ops",
          format: "Guía Práctica",
          date: "22 nov 2026",
          readTime: "4 min de lectura",
          title: "Cómo Combinar Hojas Deterministas con Agentes de IA Sin Perder Trazabilidad",
          summary: "Mantén los cálculos en tablas deterministas (Excel, VBA, SQL) y utiliza agentes de IA únicamente para síntesis narrativa y formato ejecutivo.",
          quote: "La IA acelera la síntesis; las reglas deterministas mantienen cada cifra auditada.",
          body: "Los equipos operativos pierden confianza en la IA cuando se pide a los modelos de lenguaje realizar cálculos o conciliar exportaciones sin procesar. Un flujo sólido separa el cálculo de la narración: fija primero las fórmulas KPI en tablas estructuradas y pasa solo resúmenes verificados a la IA."
        },
        {
          id: "geo-visibility-beyond-traditional-seo",
          cat: "business-geo",
          format: "Marco Aplicado",
          date: "22 nov 2026",
          readTime: "5 min de lectura",
          title: "GEO en la Práctica: Estructurar Contenido B2B para que los Motores de IA te Citen",
          summary: "Coloca respuestas directas justo debajo de subtítulos claros, define conceptos con precisión y organiza comparativas fáciles de extraer.",
          quote: "Los motores generativos extraen claridad, rigor y comparativas estructuradas, no introducciones vacías.",
          body: "La optimización para motores generativos (GEO) premia la precisión frente al relleno. Inicia cada sección con una afirmación directa, respalda los argumentos con métricas operativas concretas y evita adjetivos genéricos."
        },
        {
          id: "hybrid-skills-remote-leverage",
          cat: "career-remote",
          format: "Checklist Accionable",
          date: "22 nov 2026",
          readTime: "4 min de lectura",
          title: "Habilidades Híbridas que Multiplican el Impacto en Liderazgo Remoto",
          summary: "Combinar responsabilidad comercial sobre P&L con dominio de datos y automatización genera una ventaja diferencial en equipos distribuidos.",
          quote: "Quienes dominan tanto el P&L como el flujo de datos avanzan el doble de rápido.",
          body: "El trabajo remoto expone de inmediato los procesos ambiguos. Quienes combinan criterio de negocio con reportes estructurados, documentación asíncrona clara y automatización ligera eliminan cuellos de botella entre zonas horarias."
        },
        {
          id: "eu-ai-act-privacy-practical-impact",
          cat: "market-pulse",
          format: "Análisis Regulatorio",
          date: "22 nov 2026",
          readTime: "4 min de lectura",
          title: "AI Act Europeo y Privacidad: Qué Deben Estandarizar Hoy los Equipos Operativos",
          summary: "Mapea dónde entran datos personales en prompts de IA, define límites con proveedores y documenta revisiones humanas en decisiones críticas.",
          quote: "Una buena gobernanza acelera la operación cuando se integra desde el primer día.",
          body: "En lugar de tratar el cumplimiento como una auditoría aislada, los equipos eficaces mantienen un inventario sencillo de herramientas de IA, clasificación de datos y puntos de control humano."
        }
      ]
    },

    fr: {
      pageTitle: "mariusmarAI | Journal Éditorial",
      metaDesc: "Notes exécutives typographiques sur les workflows IA, l'automatisation, les opérations, le GEO, le business digital et les compétences hybrides.",
      subtag: "Journal Éditorial",
      home: "Accueil",
      cv: "CV",
      projects: "Projets",
      play: "Interactive Play",
      blog: "Blog",
      contact: "Contact",
      eyebrow: "Journal Exécutif Typographique · Sans Images",
      title: "Workflows IA, Opérations, Business & Exécution de Carrière",
      sub: "Cadres pratiques et notes de terrain autour de quatre piliers éditoriaux—conçus pour une lecture claire et sans distraction visuelle.",
      toc: "Sur Cette Page",
      nlTitle: "S'abonner aux Notes Éditoriales",
      nlSub: "Analyses concises sur l'automatisation IA, les opérations, le GEO et la stratégie de carrière. Protégé par Double Opt-In MailerLite.",
      nlPlaceholder: "vous@domaine.com",
      nlBtn: "S'abonner",
      nlConsent: 'Double Opt-In requis. En vous inscrivant, vous acceptez la <a href="../../privacy.html">Politique de Confidentialité</a> et les <a href="../../terms.html">Conditions d’Utilisation</a>. Contact : <a href="mailto:hello@mariusmarai.com">hello@mariusmarai.com</a>.',
      nlInvalid: "Veuillez saisir une adresse e-mail valide.",
      nlSent: "Demande prête. Vérifiez votre boîte de réception pour confirmer via le Double Opt-In MailerLite.",
      ftHome: "Accueil",
      ftPrivacy: "Politique de Confidentialité",
      ftTerms: "Conditions d'Utilisation",
      ftCopy: "© mariusmarAI. Opérations Globales, Leadership Commercial & Transformation par l'IA.",
      categories: {
        all: "Tous les Piliers",
        "ai-ops": "IA, Automatisation & Ops",
        "business-geo": "Business, GEO & FinTech",
        "career-remote": "Carrière, Remote & Compétences Hybrides",
        "market-pulse": "Tendances Marché & Régulation"
      },
      impacts: [
        { num: "199h → 25m", label: "Compression du Reporting", note: "Pipelines déterministes couplés à la synthèse IA." },
        { num: "4 Piliers", label: "Zéro Cannibalisation SEO", note: "Architecture éditoriale ciblée en 6 langues." },
        { num: "Prêt pour GEO", label: "Structuré pour l'IA & Google", note: "Réponses directes, définitions claires et comparaisons." }
      ],
      posts: [
        {
          id: "ai-workflows-deterministic-guardrails",
          cat: "ai-ops",
          format: "Guide Pratique",
          date: "22 nov. 2026",
          readTime: "4 min de lecture",
          title: "Associer Tableurs Déterministes et Agents IA Sans Perdre la Traçabilité",
          summary: "Conservez les calculs dans des tableaux déterministes (Excel, VBA, SQL) et réservez les agents IA à la synthèse narrative et à la mise en forme.",
          quote: "L’IA accélère la synthèse ; les règles métier déterministes garantissent l’exactitude des chiffres.",
          body: "Les équipes opérationnelles perdent confiance dans l’IA lorsqu’on demande aux modèles de langage d’effectuer des calculs sur des exports bruts. Un workflow robuste sépare calcul et narration : verrouillez d’abord les formules KPI, puis transmettez uniquement des synthèses validées."
        },
        {
          id: "geo-visibility-beyond-traditional-seo",
          cat: "business-geo",
          format: "Cadre Appliqué",
          date: "22 nov. 2026",
          readTime: "5 min de lecture",
          title: "GEO en Pratique : Structurer vos Contenus B2B pour Être Cité par les Moteurs IA",
          summary: "Placez des réponses directes sous des sous-titres explicites, définissez vos concepts et structurez vos comparaisons de façon lisible.",
          quote: "Les moteurs génératifs extraient la clarté, la preuve et les comparaisons structurées—pas le remplissage.",
          body: "Le Generative Engine Optimization (GEO) privilégie la précision plutôt que le volume de mots. Commencez chaque section par une réponse factuelle directe, appuyée sur des indicateurs concrets."
        },
        {
          id: "hybrid-skills-remote-leverage",
          cat: "career-remote",
          format: "Checklist Actionnable",
          date: "22 nov. 2026",
          readTime: "4 min de lecture",
          title: "Compétences Hybrides à Fort Effet de Levier dans le Leadership à Distance",
          summary: "Allier pilotage commercial P&L, maîtrise des données et automatisation crée un avantage rare dans les organisations distribuées.",
          quote: "Les leaders qui maîtrisent à la fois le P&L et la donnée avancent deux fois plus vite.",
          body: "Le travail à distance révèle immédiatement les processus flous. Combiner jugement métier, reporting structuré, documentation asynchrone et automatisation légère supprime les goulets d’étranglement."
        },
        {
          id: "eu-ai-act-privacy-practical-impact",
          cat: "market-pulse",
          format: "Note Réglementaire",
          date: "22 nov. 2026",
          readTime: "4 min de lecture",
          title: "AI Act Européen & Confidentialité : Ce que les Opérationnels Doivent Standardiser",
          summary: "Cartographiez l’usage des données personnelles dans les prompts IA, encadrez les sous-traitants et documentez la validation humaine.",
          quote: "Une gouvernance claire accélère l’exécution lorsqu’elle est intégrée dès le départ.",
          body: "Plutôt que d’aborder la conformité comme un audit ponctuel, les équipes performantes tiennent un registre simple des outils IA, des niveaux de sensibilité des données et des points de contrôle humain."
        }
      ]
    },

    it: {
      pageTitle: "mariusmarAI | Diario Editoriale",
      metaDesc: "Note executive tipografiche su flussi IA, automazione, operazioni, GEO, business digitale, competenze ibride e regolamentazione.",
      subtag: "Diario Editoriale",
      home: "Home",
      cv: "CV",
      projects: "Progetti",
      play: "Interactive Play",
      blog: "Blog",
      contact: "Contatti",
      eyebrow: "Diario Executive Tipografico · Senza Immagini",
      title: "Flussi IA, Operazioni, Business ed Esecuzione Professionale",
      sub: "Framework pratici e note sul campo su quattro pilastri chiave—progettati per una lettura chiara e senza distrazioni visive.",
      toc: "In Questa Pagina",
      nlTitle: "Iscriviti alle Note Editoriali",
      nlSub: "Analisi sintetiche su automazione IA, operazioni, GEO e strategia di carriera. Protetto da Double Opt-In MailerLite.",
      nlPlaceholder: "tu@dominio.com",
      nlBtn: "Iscriviti",
      nlConsent: 'Double Opt-In richiesto. Iscrivendoti accetti la <a href="../../privacy.html">Privacy Policy</a> e i <a href="../../terms.html">Termini di Servizio</a>. Contatti: <a href="mailto:hello@mariusmarai.com">hello@mariusmarai.com</a>.',
      nlInvalid: "Inserisci un indirizzo e-mail valido.",
      nlSent: "Richiesta pronta. Controlla la tua casella di posta per confermare tramite Double Opt-In MailerLite.",
      ftHome: "Home",
      ftPrivacy: "Informativa sulla Privacy",
      ftTerms: "Termini di Servizio",
      ftCopy: "© mariusmarAI. Operazioni Globali, Leadership Commerciale e Trasformazione guidata dall'IA.",
      categories: {
        all: "Tutti i Pilastri",
        "ai-ops": "IA, Automazione e Ops",
        "business-geo": "Business, GEO e FinTech",
        "career-remote": "Carriera, Remoto e Skill Ibride",
        "market-pulse": "Polso del Mercato e Normative"
      },
      impacts: [
        { num: "199h → 25m", label: "Compressione del Reporting", note: "Pipeline deterministiche abbinate alla sintesi IA." },
        { num: "4 Pilastri", label: "Zero Cannibalizzazione SEO", note: "Architettura editoriale focalizzata in 6 lingue." },
        { num: "Pronto per GEO", label: "Strutturato per IA e Ricerca", note: "Risposte dirette, definizioni chiare e logica comparativa." }
      ],
      posts: [
        {
          id: "ai-workflows-deterministic-guardrails",
          cat: "ai-ops",
          format: "Guida Pratica",
          date: "22 nov 2026",
          readTime: "4 min di lettura",
          title: "Come Abbinare Fogli Deterministici e Agenti IA Senza Perdere Tracciabilità",
          summary: "Mantieni i calcoli in tabelle deterministiche (Excel, VBA, SQL) e usa gli agenti IA solo per sintesi narrativa e formattazione executive.",
          quote: "L’IA accelera la sintesi; le regole deterministiche mantengono verificabile ogni numero.",
          body: "I team operativi perdono fiducia nell’IA quando si chiede ai modelli linguistici di eseguire calcoli su dati grezzi. Un flusso solido separa calcolo e narrazione: blocca prima le formule KPI e passa all’IA solo riepiloghi verificati."
        },
        {
          id: "geo-visibility-beyond-traditional-seo",
          cat: "business-geo",
          format: "Framework Applicato",
          date: "22 nov 2026",
          readTime: "5 min di lettura",
          title: "GEO in Pratica: Strutturare Contenuti B2B per Essere Citati dai Motori IA",
          summary: "Inserisci risposte dirette subito sotto titoli chiari, definisci i concetti chiave e organizza confronti facilmente estraibili.",
          quote: "I motori generativi estraggono chiarezza, fonti e confronti strutturati—non introduzioni superflue.",
          body: "La Generative Engine Optimization (GEO) premia la precisione rispetto alla lunghezza. Apri ogni sezione con un’affermazione fattuale chiara e supportala con metriche operative concrete."
        },
        {
          id: "hybrid-skills-remote-leverage",
          cat: "career-remote",
          format: "Checklist Operativa",
          date: "22 nov 2026",
          readTime: "4 min di lettura",
          title: "Competenze Ibride che Moltiplicano l'Impatto nella Leadership Remota",
          summary: "Unire responsabilità commerciale su P&L, padronanza dei dati e automazione crea un vantaggio raro nelle organizzazioni distribuite.",
          quote: "Chi padroneggia sia il P&L sia la pipeline dei dati si muove due volte più velocemente.",
          body: "Il lavoro remoto mette subito in luce i processi ambigui. Combinare visione di business, reporting strutturato, documentazione asincrona e automazione leggera elimina i colli di bottiglia."
        },
        {
          id: "eu-ai-act-privacy-practical-impact",
          cat: "market-pulse",
          format: "Analisi Normativa",
          date: "22 nov 2026",
          readTime: "4 min di lettura",
          title: "AI Act Europeo e Privacy: Cosa Standardizzare Subito nei Processi Operativi",
          summary: "Mappa dove entrano dati personali nei prompt IA, definisci i limiti con i fornitori e documenta la supervisione umana.",
          quote: "Una governance chiara accelera l’operatività quando è integrata fin dal primo giorno.",
          body: "Invece di gestire la conformità come un controllo sporadico, i team efficaci mantengono un inventario semplice degli strumenti IA, della classificazione dei dati e dei punti di verifica umana."
        }
      ]
    },

    pt: {
      pageTitle: "mariusmarAI | Diário Editorial",
      metaDesc: "Notas executivas tipográficas sobre fluxos de IA, automação, operações, GEO, negócios digitais, carreira híbrida e regulação.",
      subtag: "Diário Editorial",
      home: "Início",
      cv: "CV",
      projects: "Projetos",
      play: "Interactive Play",
      blog: "Blog",
      contact: "Contacto",
      eyebrow: "Diário Executivo Tipográfico · Sem Imagens",
      title: "Fluxos de IA, Operações, Negócio e Execução Profissional",
      sub: "Modelos práticos e notas de terreno em quatro pilares centrais—concebidos para uma leitura clara e sem ruído visual.",
      toc: "Nesta Página",
      nlTitle: "Subscrever as Notas Editoriais",
      nlSub: "Análises concisas sobre automação com IA, operações, GEO e estratégia de carreira. Protegido por Double Opt-In MailerLite.",
      nlPlaceholder: "voce@dominio.com",
      nlBtn: "Subscrever",
      nlConsent: 'Double Opt-In obrigatório. Ao subscrever, aceita a <a href="../../privacy.html">Política de Privacidade</a> e os <a href="../../terms.html">Termos de Serviço</a>. Contacto: <a href="mailto:hello@mariusmarai.com">hello@mariusmarai.com</a>.',
      nlInvalid: "Por favor, introduza um endereço de e-mail válido.",
      nlSent: "Pedido preparado. Verifique a sua caixa de entrada para confirmar via Double Opt-In do MailerLite.",
      ftHome: "Início",
      ftPrivacy: "Política de Privacidade",
      ftTerms: "Termos de Serviço",
      ftCopy: "© mariusmarAI. Operações Globais, Liderança Comercial e Transformação impulsionada por IA.",
      categories: {
        all: "Todos os Pilares",
        "ai-ops": "IA, Automação e Ops",
        "business-geo": "Negócio, GEO e FinTech",
        "career-remote": "Carreira, Remoto e Competências Híbridas",
        "market-pulse": "Pulso de Mercado e Regulação"
      },
      impacts: [
        { num: "199h → 25m", label: "Compressão de Relatórios", note: "Pipelines determinísticos combinados com síntese de IA." },
        { num: "4 Pilares", label: "Zero Canibalização SEO", note: "Arquitetura editorial focada em 6 idiomas." },
        { num: "Pronto para GEO", label: "Estruturado para IA e Pesquisa", note: "Respostas diretas, definições claras e lógica comparativa." }
      ],
      posts: [
        {
          id: "ai-workflows-deterministic-guardrails",
          cat: "ai-ops",
          format: "Guia Prático",
          date: "22 nov 2026",
          readTime: "4 min de leitura",
          title: "Como Combinar Folhas Determinísticas com Agentes de IA Sem Perder Auditabilidade",
          summary: "Mantenha os cálculos em tabelas determinísticas (Excel, VBA, SQL) e utilize agentes de IA apenas para síntese narrativa e formatação executiva.",
          quote: "A IA acelera a síntese; regras de negócio determinísticas mantêm cada número auditável.",
          body: "As equipas operacionais perdem confiança na IA quando se pede aos modelos de linguagem que façam cálculos sobre exportações em bruto. Um fluxo sólido separa cálculo de narração: fixe primeiro as fórmulas de KPI e envie apenas resumos validados."
        },
        {
          id: "geo-visibility-beyond-traditional-seo",
          cat: "business-geo",
          format: "Modelo Aplicado",
          date: "22 nov 2026",
          readTime: "5 min de leitura",
          title: "GEO na Prática: Estruturar Conteúdo B2B para Ser Citado por Motores de IA",
          summary: "Coloque respostas diretas logo abaixo de subtítulos claros, defina conceitos-chave e organize comparações fáceis de extrair.",
          quote: "Os motores generativos extraem clareza, rigor e comparações estruturadas—não introduções vazias.",
          body: "A otimização para motores generativos (GEO) recompensa a precisão acima da extensão do texto. Inicie cada secção com uma afirmação factual direta e sustente-a com métricas operacionais concretas."
        },
        {
          id: "hybrid-skills-remote-leverage",
          cat: "career-remote",
          format: "Checklist Acionável",
          date: "22 nov 2026",
          readTime: "4 min de leitura",
          title: "Competências Híbridas que Multiplicam o Impacto na Liderança Remota",
          summary: "Combinar responsabilidade comercial sobre P&L com literacia de dados e automação cria uma vantagem rara em equipas distribuídas.",
          quote: "Líderes que dominam tanto o P&L como o fluxo de dados avançam duas vezes mais depressa.",
          body: "O trabalho remoto expõe de imediato processos ambíguos. Quem combina critério de negócio com relatórios estruturados, documentação assíncrona clara e automação ligeira elimina gargalos entre fusos horários."
        },
        {
          id: "eu-ai-act-privacy-practical-impact",
          cat: "market-pulse",
          format: "Nota Regulatória",
          date: "22 nov 2026",
          readTime: "4 min de leitura",
          title: "AI Act Europeu e Privacidade: O Que Padronizar Agora nas Operações",
          summary: "Mapeie onde entram dados pessoais em prompts de IA, defina limites com fornecedores e documente revisões humanas.",
          quote: "Uma boa governação acelera a operação quando é integrada desde o primeiro dia.",
          body: "Em vez de tratar a conformidade como uma auditoria isolada, equipas eficazes mantêm um inventário simples de ferramentas de IA, classificação de dados e pontos de validação humana."
        }
      ]
    },

    ro: {
      pageTitle: "mariusmarAI | Jurnal Editorial",
      metaDesc: "Note executive tipografice despre fluxuri AI, automatizare, operațiuni, GEO, business digital, carieră hibridă și reglementări.",
      subtag: "Jurnal Editorial",
      home: "Acasă",
      cv: "CV",
      projects: "Proiecte",
      play: "Interactive Play",
      blog: "Blog",
      contact: "Contact",
      eyebrow: "Jurnal Executiv Tipografic · Fără Imagini",
      title: "Fluxuri AI, Operațiuni, Business și Execuție în Carieră",
      sub: "Cadre practice și note aplicate pe patru piloni editoriali clari—construite pentru lectură rapidă, fără zgomot vizual.",
      toc: "Cuprins Pagină",
      nlTitle: "Abonează-te la Notele Editoriale",
      nlSub: "Analize concise despre automatizare AI, operațiuni, GEO și strategie de carieră. Protejat prin MailerLite Double Opt-In.",
      nlPlaceholder: "nume@domeniu.ro",
      nlBtn: "Abonează-te",
      nlConsent: 'Este necesar Double Opt-In. Prin abonare, accepți <a href="../../privacy.html">Politica de Confidențialitate</a> și <a href="../../terms.html">Termenii și Condițiile</a>. Contact: <a href="mailto:hello@mariusmarai.com">hello@mariusmarai.com</a>.',
      nlInvalid: "Te rugăm să introduci o adresă de e-mail validă.",
      nlSent: "Solicitare pregătită. Verifică inbox-ul pentru confirmarea Double Opt-In prin MailerLite.",
      ftHome: "Acasă",
      ftPrivacy: "Politica de Confidențialitate",
      ftTerms: "Termeni și Condiții",
      ftCopy: "© mariusmarAI. Operațiuni Globale, Leadership Comercial și Transformare prin AI.",
      categories: {
        all: "Toți Pilonii",
        "ai-ops": "AI, Automatizare & Operațiuni",
        "business-geo": "Business, GEO & FinTech",
        "career-remote": "Carieră, Remote & Skill-uri Hibride",
        "market-pulse": "Analize & Reglementări (Pulse)"
      },
      impacts: [
        { num: "199h → 25m", label: "Comprimarea Raportării", note: "Fluxuri deterministe de date combinate cu sinteză AI." },
        { num: "4 Piloni", label: "Zero Canibalizare SEO", note: "Arhitectură editorială clară în 6 limbi." },
        { num: "Pregătit GEO", label: "Structurat pentru AI & Search", note: "Răspunsuri directe, definiții clare și logică comparativă." }
      ],
      posts: [
        {
          id: "ai-workflows-deterministic-guardrails",
          cat: "ai-ops",
          format: "Ghid Practic",
          date: "22 nov. 2026",
          readTime: "4 min citire",
          title: "Cum Combini Tabelele Deterministe cu Agenții AI Fără Să Pierzi Trasabilitatea",
          summary: "Păstrează calculele în structuri deterministe (Excel, VBA, SQL) și folosește agenții AI strict pentru sinteză narativă și formatare executivă.",
          quote: "AI-ul accelerează sinteza; regulile deterministe de business păstrează fiecare cifră auditabilă.",
          body: "Echipele operaționale își pierd încrederea în AI atunci când modelelor de limbaj li se cere să facă aritmetică pe exporturi brute. Un flux robust separă calculul de narațiune: blochează mai întâi formulele KPI în tabele structurate și trimite către AI doar rezumate validate."
        },
        {
          id: "geo-visibility-beyond-traditional-seo",
          cat: "business-geo",
          format: "Cadru Aplicat",
          date: "22 nov. 2026",
          readTime: "5 min citire",
          title: "GEO în Practică: Cum Structurezi Conținutul B2B ca Să Fii Citat de Motoarele AI",
          summary: "Plasează răspunsuri directe imediat sub subtitluri clare, definește explicit termenii și organizează comparațiile în blocuri ușor de extras.",
          quote: "Motoarele generative extrag claritatea, sursa și comparațiile structurate—nu introducerile de umplutură.",
          body: "Generative Engine Optimization (GEO) recompensează precizia, nu numărul de cuvinte. Începe fiecare secțiune cu o afirmație factuală directă, susține ideile cu metrici operaționale concrete și evită adjectivele vagi."
        },
        {
          id: "hybrid-skills-remote-leverage",
          cat: "career-remote",
          format: "Checklist Acționabil",
          date: "22 nov. 2026",
          readTime: "4 min citire",
          title: "Skill-uri Hibride Care Multiplică Impactul în Leadership-ul Remote",
          summary: "Îmbinarea responsabilității comerciale pe P&L cu lucrul pe date și automatizarea fluxurilor creează un avantaj rar în echipele distribuite.",
          quote: "Liderii care înțeleg atât P&L-ul, cât și fluxul de date din spate avansează de două ori mai repede.",
          body: "Munca remote expune imediat procesele ambigue. Profesioniștii care combină judecata de business cu raportarea structurată, documentația asincronă clară și automatizarea ușoară elimină blocajele între fusuri orare."
        },
        {
          id: "eu-ai-act-privacy-practical-impact",
          cat: "market-pulse",
          format: "Analiză Reglementări",
          date: "22 nov. 2026",
          readTime: "4 min citire",
          title: "EU AI Act & Confidențialitate: Ce Ar Trebui Să Standardizeze Acum Echipele Operaționale",
          summary: "Mapează unde intră date personale în prompturile AI, stabilește limitele furnizorilor și documentează validarea umană pentru deciziile critice.",
          quote: "Guvernanța bine gândită accelerează operațiunile atunci când este integrată din prima zi.",
          body: "În loc să trateze conformitatea ca pe un audit juridic izolat, echipele performante mențin un inventar simplu al uneltelor AI, clasificării datelor și punctelor de verificare umană."
        }
      ]
    }
  };

  function detectLangFromPathOrStorage() {
    const match = window.location.pathname.match(/\/blog\/(en|es|fr|it|pt|ro)(?:\/|$)/i);
    if (match) return match[1].toLowerCase();
    try {
      const saved = localStorage.getItem("mariusmarai_lang");
      if (saved && SUPPORTED_LANGS.includes(saved.toLowerCase())) return saved.toLowerCase();
    } catch (e) {}
    return "en";
  }

  let activeLang = detectLangFromPathOrStorage();
  let activeCategory = "all";

  function render() {
    const data = BLOG_DATA[activeLang] || BLOG_DATA.en;
    document.documentElement.lang = activeLang;
    document.title = data.pageTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", data.metaDesc);

    try { localStorage.setItem("mariusmarai_lang", activeLang); } catch (e) {}

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === activeLang);
    });

    document.getElementById("blog-subtag").textContent = data.subtag;
    document.getElementById("nav-home").textContent = data.home;
    document.getElementById("nav-cv").textContent = data.cv;
    document.getElementById("nav-projects").textContent = data.projects;
    document.getElementById("nav-play").textContent = data.play;
    document.getElementById("nav-blog").textContent = data.blog;
    document.getElementById("nav-contact").textContent = data.contact;

    document.getElementById("hero-eyebrow").textContent = data.eyebrow;
    document.getElementById("hero-title").textContent = data.title;
    document.getElementById("hero-sub").textContent = data.sub;
    document.getElementById("toc-heading").textContent = data.toc;

    document.getElementById("nl-title").textContent = data.nlTitle;
    document.getElementById("nl-sub").textContent = data.nlSub;
    document.getElementById("nl-email").placeholder = data.nlPlaceholder;
    document.getElementById("nl-btn").textContent = data.nlBtn;
    document.getElementById("nl-consent").innerHTML = data.nlConsent;

    document.getElementById("ft-home").textContent = data.ftHome;
    document.getElementById("ft-privacy").textContent = data.ftPrivacy;
    document.getElementById("ft-terms").textContent = data.ftTerms;
    document.getElementById("ft-copy").textContent = data.ftCopy;

    document.getElementById("impact-strip").innerHTML = data.impacts.map((item) => `
      <div class="impact-card">
        <div class="impact-num">${item.num}</div>
        <div class="impact-label">${item.label}</div>
        <div class="impact-note">${item.note}</div>
      </div>
    `).join("");

    const filterBar = document.getElementById("category-filter-bar");
    filterBar.innerHTML = Object.entries(data.categories).map(([key, label]) => `
      <button type="button" class="filter-btn ${activeCategory === key ? "active" : ""}" data-cat="${key}">${label}</button>
    `).join("");

    filterBar.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.cat;
        render();
      });
    });

    const visiblePosts = activeCategory === "all"
      ? data.posts
      : data.posts.filter((post) => post.cat === activeCategory);

    document.getElementById("articles-stream").innerHTML = visiblePosts.map((post) => `
      <article class="article-card" id="${post.id}">
        <div class="article-meta-row">
          <span class="article-cat">${data.categories[post.cat] || post.cat}</span>
          <span class="article-format">${post.format}</span>
          <span>·</span>
          <span>${post.date}</span>
          <span>·</span>
          <span>${post.readTime}</span>
        </div>
        <h2>${post.title}</h2>
        <p class="article-summary">${post.summary}</p>
        <blockquote class="typographic-pullquote">${post.quote}</blockquote>
        <p>${post.body}</p>
      </article>
    `).join("");

    document.getElementById("toc-list").innerHTML = visiblePosts.map((post, idx) => `
      <li><a href="#${post.id}" class="toc-link ${idx === 0 ? "active" : ""}" data-target="${post.id}">${post.title}</a></li>
    `).join("");

    updateProgressAndToc();
  }

  function updateProgressAndToc() {
    const container = document.getElementById("blog-top");
    const bar = document.getElementById("reading-progress-bar");
    if (container && bar) {
      const rect = container.getBoundingClientRect();
      const scrollable = Math.max(container.offsetHeight - window.innerHeight, 1);
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      bar.style.width = `${(scrolled / scrollable) * 100}%`;
    }

    const cards = Array.from(document.querySelectorAll(".article-card"));
    const links = Array.from(document.querySelectorAll(".toc-link"));
    let currentId = cards[0] ? cards[0].id : null;
    cards.forEach((card) => {
      if (card.getBoundingClientRect().top <= 155) currentId = card.id;
    });
    links.forEach((link) => {
      link.classList.toggle("active", link.dataset.target === currentId);
    });
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.lang;
      if (!SUPPORTED_LANGS.includes(target)) return;
      try { localStorage.setItem("mariusmarai_lang", target); } catch (e) {}
      if (/\/blog\/(en|es|fr|it|pt|ro)(?:\/|$)/i.test(window.location.pathname)) {
        window.location.href = `../${target}/`;
      } else {
        activeLang = target;
        render();
      }
    });
  });

  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navDrawer = document.getElementById("nav-drawer");
  if (hamburgerBtn && navDrawer) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = navDrawer.classList.toggle("open");
      hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      hamburgerBtn.textContent = isOpen ? "✕" : "☰";
    });
  }

  const mlForm = document.getElementById("mailerlite-form");
  if (mlForm) {
    mlForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = BLOG_DATA[activeLang] || BLOG_DATA.en;
      const emailInput = document.getElementById("nl-email");
      const statusEl = document.getElementById("nl-status");
      const email = (emailInput.value || "").trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        statusEl.textContent = data.nlInvalid;
        statusEl.className = "ml-status err";
        return;
      }
      statusEl.textContent = data.nlSent;
      statusEl.className = "ml-status ok";
      emailInput.value = "";
    });
  }

  window.addEventListener("scroll", updateProgressAndToc, { passive: true });
  render();
})();
