// ============ Diccionario de traducciones ============
const I18N = {
  es: {
    "meta.title": "Ignacio Azzolina — Desarrollador de Software",
    "skipLink": "Saltar al contenido principal",

    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",

    "hero.kicker": "Desarrollador de software · Técnico electricista",
    "hero.title": "De los circuitos al código:<br>resuelvo problemas <span class=\"accent\">de punta a punta</span>.",
    "hero.sub": "Construyo SaaS con FastAPI y Supabase con la misma mentalidad con la que diagnostico una falla eléctrica: entender el sistema completo, encontrar la causa raíz y dejarlo funcionando.",
    "hero.ctaProjects": "Ver mis proyectos",
    "hero.ctaContact": "Hablemos",
    "hero.badgeHw": "Electricidad · Hardware",
    "hero.photoAlt": "Foto de Ignacio Azzolina",

    "about.title": "Sobre mí",
    "about.p1": "Soy estudiante de sistemas y técnico electricista. Ese doble perfil no es una casualidad: es mi mayor ventaja. Entiendo el software desde la lógica del código, y el mundo físico desde el tablero eléctrico. Cuando algo falla —sea un endpoint o una instalación— mi proceso es el mismo: observar, aislar el problema, corregir y verificar.",
    "about.p2": "Trabajé un año en una ferretería, donde cada cliente llegaba con un problema distinto y se iba con una solución. Hice una pasantía como técnico eléctrico en una bodega, manteniendo sistemas que no podían detenerse. Hoy aplico esa misma exigencia a mis proyectos de software: los diseño, los desarrollo y los mantengo de forma independiente, de la base de datos al deploy.",
    "about.p3": "Busco un equipo donde un perfil resolutivo e híbrido sume de verdad: alguien que no le escapa a los problemas difíciles, ni a los que están fuera de su descripción de puesto.",
    "about.fact1t": "Perfil híbrido",
    "about.fact1d": "Software + electricidad/hardware",
    "about.fact2t": "1 año en ferretería",
    "about.fact2d": "Resolución de problemas cara a cara",
    "about.fact3t": "Pasantía técnica",
    "about.fact3d": "Mantenimiento eléctrico en bodega",
    "about.fact4t": "Autogestión",
    "about.fact4d": "Proyectos SaaS de punta a punta",

    "projects.title": "Proyectos",
    "projects.repoLink": "Código en GitHub ↗",
    "projects.demoLink": "Demo en vivo ↗",

    "case.tag": "Caso de estudio · Proyecto principal",
    "case.tagline": "SaaS multitenant para la gestión de negocios de servicios",
    "case.problemT": "El problema",
    "case.problemP": "Barberías, clínicas y negocios de servicios siguen gestionando turnos y clientes con cuadernos, WhatsApp y planillas. Pierden reservas, no tienen métricas y no pueden escalar. Las soluciones existentes son rígidas o están pensadas para un solo rubro.",
    "case.solutionT": "La solución",
    "case.solutionP": "Una plataforma multitenant donde cada negocio opera de forma aislada y segura sobre una misma infraestructura. Un solo despliegue sirve a N clientes, con datos separados a nivel de base de datos y una arquitectura pensada para agregar rubros sin reescribir el core.",
    "case.techT": "Decisiones técnicas",
    "case.tech1": "<strong>FastAPI</strong> por su rendimiento, tipado con Pydantic y documentación automática de la API.",
    "case.tech2": "<strong>Supabase (PostgreSQL)</strong> con políticas RLS para aislar los datos de cada tenant a nivel de fila: la seguridad vive en la base, no solo en el código.",
    "case.tech3": "<strong>Multitenancy por diseño</strong>: cada tabla y cada consulta se pensaron desde el día uno para múltiples clientes, evitando la migración dolorosa de single a multi-tenant.",
    "case.roleT": "Mi rol",
    "case.roleP": "Soy el único desarrollador: diseñé la arquitectura, modelé la base de datos, implementé la lógica de multitenancy y la API, y gestiono el proyecto de forma independiente — decisiones de producto incluidas.",
    "case.stackMt": "Multitenancy",

    "case2.tag": "Caso de estudio · Proyecto en producción",
    "case2.tagline": "SaaS multitenant para empresas de transporte y logística",
    "case2.problemP": "Las empresas de transporte de cargas —sobre todo las que operan cruces internacionales del Mercosur— gestionan flota, choferes, documentación (MIC/DTA, CRT) y facturación en planillas sueltas y carpetas de PDFs. Es fácil perder de vista un RTO por vencer, un chofer sin LINTI al día, o una factura que nadie cobró a tiempo. Y la carga de datos de cada viaje internacional es lenta: hay que transcribir a mano la ruta, la carga y los valores desde el MIC/DTA.",
    "case2.solutionP": "Una plataforma multitenant donde cada empresa de transporte opera de forma aislada: flota, choferes, viajes (nacionales e internacionales), facturación, liquidación de sueldos y reportes, todo en un solo lugar. Para acelerar la carga de viajes internacionales, el sistema permite soltar el PDF del MIC/DTA y autocompleta origen, destino, carga, valores, camión y chofer automáticamente. El panel de administración multitenant gestiona el alta de empresas clientes y su suscripción mensual, cobrada de forma recurrente por Mercado Pago.",
    "case2.tech1": "<strong>React + Vite + TypeScript</strong> en el frontend, priorizando velocidad de desarrollo e iteración rápida sobre un dashboard con muchas vistas (flota, choferes, viajes, facturación, liquidación, reportes).",
    "case2.tech2": "<strong>Supabase (PostgreSQL)</strong> para el panel de administración multitenant: alta de empresas, aprovisionamiento de usuarios y estado de suscripción, aislando los datos de cada cliente.",
    "case2.tech3": "<strong>Integración con la API de Mercado Pago</strong> para cobro recurrente: link de pago por empresa, débito automático, e historial de pagos con corte automático de acceso tras un período de gracia si el cliente deja de pagar.",
    "case2.tech4": "<strong>Parsing automático de MIC/DTA</strong> y modelado de dominio específico del rubro: pasos fronterizos reales del Mercosur, vencimientos de documentación (RTO, LINTI) y liquidación de choferes con tarifa por km/cruce/día.",
    "case2.roleP": "Soy el único desarrollador: diseñé el modelo de datos multitenant, construí las nueve secciones del panel operativo (dashboard, flota, choferes, viajes, facturación, liquidación, reportes, configuración y panel de administración de clientes), integré Mercado Pago para la cobranza recurrente, y llevé el producto a producción — hoy en uso por empresas de transporte reales con suscripción paga activa.",

    "proj2.title": "Sistema de pedidos por WhatsApp con IA",
    "proj2.desc": "Plataforma de pedidos para gastronomía: un bot de WhatsApp toma pedidos con IA y un panel web (PWA) los gestiona en tiempo real, con estadísticas y notificaciones push.",

    "exp.title": "Experiencia",
    "exp.job1t": "Desarrollador independiente — Proyectos SaaS",
    "exp.job1m": "Actualidad",
    "exp.job1d": "Diseño y desarrollo de productos SaaS completos (BarberOS, sistema de pedidos con IA): arquitectura, base de datos, API, frontend y despliegue. Gestión autónoma del ciclo completo.",
    "exp.job2t": "Pasantía — Técnico eléctrico en bodega",
    "exp.job2m": "Pasantía profesional",
    "exp.job2d": "Mantenimiento de instalaciones eléctricas en entorno productivo: diagnóstico de fallas, trabajo preventivo y correctivo donde el tiempo de parada cuesta dinero.",
    "exp.job3t": "Atención y ventas — Ferretería",
    "exp.job3m": "1 año",
    "exp.job3d": "Un año resolviendo problemas concretos de clientes todos los días: entender la necesidad real detrás de lo que piden, proponer la solución correcta y explicarla en lenguaje simple. La mejor escuela de comunicación técnica que tuve.",

    "skills.title": "Habilidades",
    "skills.devT": "Desarrollo",
    "skills.hwT": "Técnico / Hardware",
    "skills.hwP": "Instalaciones eléctricas, diagnóstico de fallas, mantenimiento preventivo y correctivo",
    "skills.softT": "Perfil",
    "skills.softP": "Resolución de problemas complejos, lógica de sistemas, autonomía, comunicación con clientes",

    "contact.title": "Contacto",
    "contact.lead": "¿Buscás a alguien que resuelva? Estoy disponible para roles de desarrollo backend/full-stack, posiciones junior con proyección y proyectos freelance.",
    "contact.email": "Escribime un email",

    "footer.made": "Hecho a mano, sin frameworks de más."
  },

  en: {
    "meta.title": "Ignacio Azzolina — Software Developer",
    "skipLink": "Skip to main content",

    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.kicker": "Software Developer · Certified Electrician",
    "hero.title": "From circuits to code:<br>I solve problems <span class=\"accent\">end to end</span>.",
    "hero.sub": "I build SaaS products with FastAPI and Supabase using the same mindset I use to diagnose an electrical fault: understand the whole system, find the root cause, and leave it working.",
    "hero.ctaProjects": "See my projects",
    "hero.ctaContact": "Let's talk",
    "hero.badgeHw": "Electrical · Hardware",
    "hero.photoAlt": "Photo of Ignacio Azzolina",

    "about.title": "About me",
    "about.p1": "I'm a systems engineering student and a certified electrician. That dual profile is no accident — it's my biggest advantage. I understand software from the logic of code, and the physical world from the electrical panel. When something fails — an endpoint or an installation — my process is the same: observe, isolate the problem, fix it, and verify.",
    "about.p2": "I worked for a year at a hardware store, where every customer walked in with a different problem and left with a solution. I completed an internship as an electrical technician in a warehouse, maintaining systems that couldn't afford downtime. Today I apply that same standard to my software projects: I design, build, and maintain them independently, from the database to deployment.",
    "about.p3": "I'm looking for a team where a resourceful, hybrid profile truly adds value: someone who doesn't run from hard problems — or from the ones outside their job description.",
    "about.fact1t": "Hybrid profile",
    "about.fact1d": "Software + electrical/hardware",
    "about.fact2t": "1 year in retail",
    "about.fact2d": "Face-to-face problem solving",
    "about.fact3t": "Technical internship",
    "about.fact3d": "Electrical maintenance in a warehouse",
    "about.fact4t": "Self-managed",
    "about.fact4d": "End-to-end SaaS projects",

    "projects.title": "Projects",
    "projects.repoLink": "Source on GitHub ↗",
    "projects.demoLink": "Live demo ↗",

    "case.tag": "Case study · Flagship project",
    "case.tagline": "Multitenant SaaS for service business management",
    "case.problemT": "The problem",
    "case.problemP": "Barbershops, clinics, and service businesses still manage appointments and clients with notebooks, WhatsApp chats, and spreadsheets. They lose bookings, have no metrics, and can't scale. Existing solutions are rigid or built for a single vertical.",
    "case.solutionT": "The solution",
    "case.solutionP": "A multitenant platform where each business operates in isolation, securely, on shared infrastructure. A single deployment serves N customers, with data separated at the database level and an architecture designed to add new verticals without rewriting the core.",
    "case.techT": "Technical decisions",
    "case.tech1": "<strong>FastAPI</strong> for its performance, Pydantic typing, and automatic API documentation.",
    "case.tech2": "<strong>Supabase (PostgreSQL)</strong> with RLS policies to isolate each tenant's data at the row level: security lives in the database, not just in the code.",
    "case.tech3": "<strong>Multitenancy by design</strong>: every table and every query was built for multiple customers from day one, avoiding the painful single-to-multi-tenant migration.",
    "case.roleT": "My role",
    "case.roleP": "I'm the sole developer: I designed the architecture, modeled the database, implemented the multitenancy logic and the API, and I manage the project independently — product decisions included.",
    "case.stackMt": "Multitenancy",

    "case2.tag": "Case study · Live production project",
    "case2.tagline": "Multitenant SaaS for trucking and logistics companies",
    "case2.problemP": "Cargo trucking companies — especially those running international Mercosur border crossings — manage fleet, drivers, paperwork (MIC/DTA, CRT), and billing across loose spreadsheets and folders of PDFs. It's easy to lose track of an RTO inspection about to expire, a driver with an out-of-date LINTI permit, or an invoice nobody collected on time. And logging each international trip is slow: the route, cargo, and values have to be typed in by hand from the MIC/DTA document.",
    "case2.solutionP": "A multitenant platform where each trucking company operates in isolation: fleet, drivers, trips (domestic and international), billing, payroll settlement, and reports, all in one place. To speed up logging international trips, the system lets you drop in the MIC/DTA PDF and it auto-fills origin, destination, cargo, values, truck, and driver. The multitenant admin panel manages onboarding of client companies and their monthly subscription, billed recurrently through Mercado Pago.",
    "case2.tech1": "<strong>React + Vite + TypeScript</strong> on the frontend, prioritizing development speed and fast iteration across a dashboard with many views (fleet, drivers, trips, billing, payroll, reports).",
    "case2.tech2": "<strong>Supabase (PostgreSQL)</strong> for the multitenant admin panel: company onboarding, user provisioning, and subscription status, isolating each customer's data.",
    "case2.tech3": "<strong>Mercado Pago API integration</strong> for recurring billing: a payment link per company, automatic debit, and payment history with automatic access cutoff after a grace period if a customer stops paying.",
    "case2.tech4": "<strong>Automatic MIC/DTA parsing</strong> and domain modeling specific to the industry: real Mercosur border crossings, document expirations (RTO, LINTI), and driver payroll based on per-km/crossing/day rates.",
    "case2.roleP": "I'm the sole developer: I designed the multitenant data model, built all nine sections of the operations panel (dashboard, fleet, drivers, trips, billing, payroll, reports, settings, and client admin panel), integrated Mercado Pago for recurring billing, and shipped the product to production — it's in active use today by real trucking companies with an active paid subscription.",

    "proj2.title": "AI-powered WhatsApp ordering system",
    "proj2.desc": "Ordering platform for food businesses: a WhatsApp bot takes orders using AI while a web dashboard (PWA) manages them in real time, with statistics and push notifications.",

    "exp.title": "Experience",
    "exp.job1t": "Independent Developer — SaaS Projects",
    "exp.job1m": "Present",
    "exp.job1d": "Design and development of complete SaaS products (BarberOS, AI ordering system): architecture, database, API, frontend, and deployment. Fully self-managed lifecycle.",
    "exp.job2t": "Internship — Electrical Technician (Warehouse)",
    "exp.job2m": "Professional internship",
    "exp.job2d": "Maintenance of electrical installations in a production environment: fault diagnosis, preventive and corrective work where downtime costs money.",
    "exp.job3t": "Sales & Customer Service — Hardware Store",
    "exp.job3m": "1 year",
    "exp.job3d": "A year of solving concrete customer problems every single day: understanding the real need behind the request, proposing the right solution, and explaining it in plain language. The best school of technical communication I've had.",

    "skills.title": "Skills",
    "skills.devT": "Development",
    "skills.hwT": "Technical / Hardware",
    "skills.hwP": "Electrical installations, fault diagnosis, preventive and corrective maintenance",
    "skills.softT": "Profile",
    "skills.softP": "Complex problem solving, systems thinking, autonomy, client communication",

    "contact.title": "Contact",
    "contact.lead": "Looking for someone who gets things solved? I'm available for backend/full-stack roles, junior positions with room to grow, and freelance projects.",
    "contact.email": "Send me an email",

    "footer.made": "Handcrafted, no unnecessary frameworks."
  }
};

// ============ Lógica de idioma ============
const HTML_KEYS = new Set(["hero.title", "case.tech1", "case.tech2", "case.tech3"]);

function detectLang() {
  const saved = localStorage.getItem("lang");
  if (saved === "es" || saved === "en") return saved;
  return (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
}

function applyLang(lang) {
  const dict = I18N[lang];

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
  });

  document.documentElement.lang = lang;
  document.title = dict["meta.title"];

  const toggle = document.getElementById("lang-toggle");
  const label = document.getElementById("lang-label");
  if (lang === "es") {
    label.textContent = "EN";
    toggle.setAttribute("aria-label", "Switch to English");
  } else {
    label.textContent = "ES";
    toggle.setAttribute("aria-label", "Cambiar a español");
  }

  localStorage.setItem("lang", lang);
}

let currentLang = detectLang();
applyLang(currentLang);

document.getElementById("lang-toggle").addEventListener("click", function () {
  currentLang = currentLang === "es" ? "en" : "es";
  applyLang(currentLang);
});
