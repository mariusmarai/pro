(function () {
  const CONSENT_KEY = 'mariusmarai_cookie_consent';
  const CONSENT_DATE_KEY = 'mariusmarai_cookie_consent_date';
  const LANG_KEY = 'mariusmarai_lang';
  const MAILERLITE_ACCOUNT = '2815590';
  const MAILERLITE_SRC = 'https://assets.mailerlite.com/js/universal.js';

  const i18n = {
    en: {
      bannerTitle: 'Cookie & Privacy Preferences',
      bannerText: 'We use essential storage for language preferences and privacy-friendly analytics (GoatCounter, cookieless). External scripts like the MailerLite newsletter form load only with your consent.',
      privacyLabel: 'Privacy Policy',
      btnEssentials: 'Essentials Only',
      btnAcceptAll: 'Accept All',
      mlTitle: 'Newsletter Form Disabled by Cookie Preferences',
      mlDesc: 'To protect your privacy, the external MailerLite subscription form is blocked under your current settings.',
      mlBtn: 'Enable & Load Subscription Form',
      footerCookieBtn: 'Cookie Settings'
    },
    es: {
      bannerTitle: 'Preferencias de Cookies y Privacidad',
      bannerText: 'Utilizamos almacenamiento esencial para recordar tu idioma y analítica sin cookies (GoatCounter). Los scripts externos como el formulario de MailerLite solo se cargan con tu consentimiento.',
      privacyLabel: 'Política de Privacidad',
      btnEssentials: 'Solo Esenciales',
      btnAcceptAll: 'Aceptar Todo',
      mlTitle: 'Formulario Desactivado por Preferencias de Cookies',
      mlDesc: 'Para proteger tu privacidad, el formulario externo de suscripción de MailerLite está bloqueado según tu configuración actual.',
      mlBtn: 'Activar y Cargar Formulario',
      footerCookieBtn: 'Configuración de Cookies'
    },
    fr: {
      bannerTitle: 'Préférences de Cookies et Confidentialité',
      bannerText: 'Nous utilisons un stockage essentiel pour mémoriser votre langue et une mesure d’audience sans cookies (GoatCounter). Les scripts externes comme le formulaire MailerLite ne se chargent qu’avec votre accord.',
      privacyLabel: 'Politique de Confidentialité',
      btnEssentials: 'Essentiels Uniquement',
      btnAcceptAll: 'Tout Accepter',
      mlTitle: 'Formulaire Désactivé par vos Préférences',
      mlDesc: 'Pour protéger votre vie privée, le formulaire externe d’inscription MailerLite est bloqué selon vos paramètres actuels.',
      mlBtn: 'Activer et Charger le Formulaire',
      footerCookieBtn: 'Paramètres des Cookies'
    },
    it: {
      bannerTitle: 'Preferenze Cookie e Privacy',
      bannerText: 'Utilizziamo l’archiviazione essenziale per ricordare la lingua e statistiche senza cookie (GoatCounter). Gli script esterni come il modulo MailerLite vengono caricati solo con il tuo consenso.',
      privacyLabel: 'Informativa sulla Privacy',
      btnEssentials: 'Solo Essenziali',
      btnAcceptAll: 'Accetta Tutto',
      mlTitle: 'Modulo Disattivato dalle Preferenze Cookie',
      mlDesc: 'Per proteggere la tua privacy, il modulo esterno di iscrizione MailerLite è bloccato dalle impostazioni attuali.',
      mlBtn: 'Attiva e Carica il Modulo',
      footerCookieBtn: 'Impostazioni Cookie'
    },
    pt: {
      bannerTitle: 'Preferências de Cookies e Privacidade',
      bannerText: 'Utilizamos armazenamento essencial para guardar o seu idioma e análise sem cookies (GoatCounter). Scripts externos como o formulário da MailerLite só são carregados com o seu consentimento.',
      privacyLabel: 'Política de Privacidade',
      btnEssentials: 'Apenas Essenciais',
      btnAcceptAll: 'Aceitar Tudo',
      mlTitle: 'Formulário Desativado pelas Preferências de Cookies',
      mlDesc: 'Para proteger a sua privacidade, o formulário externo de subscrição da MailerLite está bloqueado nas definições atuais.',
      mlBtn: 'Ativar e Carregar Formulário',
      footerCookieBtn: 'Definições de Cookies'
    },
    ro: {
      bannerTitle: 'Preferințe Cookie și Confidențialitate',
      bannerText: 'Folosim stocare esențială pentru preferința de limbă și analiză fără cookie-uri (GoatCounter). Scripturile externe, precum formularul de abonare MailerLite, se încarcă doar cu acordul tău.',
      privacyLabel: 'Politica de Confidențialitate',
      btnEssentials: 'Doar Esențiale',
      btnAcceptAll: 'Acceptă Tot',
      mlTitle: 'Formular Dezactivat conform Preferințelor Cookie',
      mlDesc: 'Pentru a-ți proteja confidențialitatea, formularul extern de abonare MailerLite este blocat în setările curente.',
      mlBtn: 'Activează și Încarcă Formularul',
      footerCookieBtn: 'Setări Cookie'
    }
  };

  function getLang() {
    const htmlLang = (document.documentElement.lang || '').toLowerCase().slice(0, 2);
    if (i18n[htmlLang]) return htmlLang;
    try {
      const stored = (localStorage.getItem(LANG_KEY) || '').toLowerCase().slice(0, 2);
      if (i18n[stored]) return stored;
    } catch (e) {}
    return 'en';
  }

  function getPrivacyHref() {
    const path = window.location.pathname;
    if (path.includes('/blog/')) return '../../privacy.html';
    return 'privacy.html';
  }

  function getConsent() {
    try {
      return localStorage.getItem(CONSENT_KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
      localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString());
    } catch (e) {}
  }

  function injectStyles() {
    if (document.getElementById('mm-cookie-styles')) return;
    const style = document.createElement('style');
    style.id = 'mm-cookie-styles';
    style.textContent = `
      #mm-cookie-banner {
        position: fixed;
        bottom: 16px;
        left: 16px;
        right: 16px;
        max-width: 960px;
        margin: 0 auto;
        z-index: 10000;
        background: rgba(17, 26, 46, 0.98);
        border: 1px solid rgba(245, 158, 11, 0.45);
        border-radius: 14px;
        padding: 1.15rem 1.35rem;
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.55);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        color: #F8FAFC;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        display: none;
      }
      #mm-cookie-banner.visible {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }
      .mm-cb-content {
        flex: 1 1 520px;
        min-width: 0;
      }
      .mm-cb-title {
        font-size: 0.95rem;
        font-weight: 700;
        color: #F8FAFC;
        margin-bottom: 0.25rem;
      }
      .mm-cb-text {
        font-size: 0.84rem;
        line-height: 1.55;
        color: #CBD5E1;
      }
      .mm-cb-text a {
        color: #38BDF8;
        text-decoration: none;
        margin-left: 0.35rem;
      }
      .mm-cb-text a:hover {
        text-decoration: underline;
      }
      .mm-cb-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        flex-shrink: 0;
      }
      .mm-cb-btn {
        font-family: 'Inter', sans-serif;
        font-size: 0.83rem;
        font-weight: 600;
        padding: 0.58rem 1rem;
        border-radius: 9px;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .mm-cb-btn-essentials {
        background: #162238;
        color: #CBD5E1;
        border: 1px solid rgba(148, 163, 184, 0.28);
      }
      .mm-cb-btn-essentials:hover {
        border-color: rgba(245, 158, 11, 0.45);
        color: #F8FAFC;
      }
      .mm-cb-btn-accept {
        background: #F59E0B;
        color: #0B1220;
        border: 1px solid #F59E0B;
        font-weight: 700;
      }
      .mm-cb-btn-accept:hover {
        background: #D97706;
        border-color: #D97706;
      }
      .mm-ml-fallback {
        width: 100%;
        background: #162238;
        border: 1px dashed rgba(245, 158, 11, 0.45);
        border-radius: 12px;
        padding: 1.25rem 1.35rem;
        text-align: center;
      }
      .mm-ml-fallback-title {
        font-size: 0.94rem;
        font-weight: 700;
        color: #F8FAFC;
        margin-bottom: 0.35rem;
      }
      .mm-ml-fallback-desc {
        font-size: 0.85rem;
        color: #CBD5E1;
        line-height: 1.55;
        margin-bottom: 0.95rem;
      }
      .mm-ml-fallback-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: #F59E0B;
        color: #0B1220;
        border: none;
        border-radius: 9px;
        padding: 0.6rem 1.15rem;
        font-family: 'Inter', sans-serif;
        font-size: 0.85rem;
        font-weight: 700;
        cursor: pointer;
        transition: background 0.2s ease, transform 0.15s ease;
      }
      .mm-ml-fallback-btn:hover {
        background: #D97706;
        transform: translateY(-1px);
      }
      .mm-footer-cookie-btn {
        background: none;
        border: none;
        padding: 0;
        color: inherit;
        font: inherit;
        cursor: pointer;
        transition: color 0.2s ease;
      }
      .mm-footer-cookie-btn:hover {
        color: #F59E0B;
        text-decoration: underline;
      }
      @media (max-width: 600px) {
        #mm-cookie-banner {
          bottom: 10px;
          left: 10px;
          right: 10px;
          padding: 1rem;
        }
        .mm-cb-actions {
          width: 100%;
        }
        .mm-cb-btn {
          flex: 1 1 auto;
          text-align: center;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function clearMailerLiteFallbacks() {
    document.querySelectorAll('.mm-ml-fallback').forEach(el => el.remove());
  }

  function renderMailerLiteFallbacks() {
    if (getConsent() === 'all') {
      clearMailerLiteFallbacks();
      return;
    }
    const dict = i18n[getLang()];
    document.querySelectorAll('.ml-embedded').forEach(container => {
      let box = container.querySelector('.mm-ml-fallback');
      if (!box) {
        box = document.createElement('div');
        box.className = 'mm-ml-fallback';
        container.appendChild(box);
      }
      box.innerHTML = `
        <div class="mm-ml-fallback-title">${dict.mlTitle}</div>
        <p class="mm-ml-fallback-desc">${dict.mlDesc}</p>
        <button type="button" class="mm-ml-fallback-btn">${dict.mlBtn}</button>
      `;
      const btn = box.querySelector('.mm-ml-fallback-btn');
      if (btn) {
        btn.addEventListener('click', () => {
          applyConsentDecision('all');
        });
      }
    });
  }

  function loadMailerLite() {
    clearMailerLiteFallbacks();
    if (window.__mmMailerLiteLoaded) {
      if (typeof window.ml === 'function') {
        window.ml('account', MAILERLITE_ACCOUNT);
      }
      return;
    }
    window.__mmMailerLiteLoaded = true;
    (function (w, d, e, u, f, l, n) {
      w[f] = w[f] || function () {
        (w[f].q = w[f].q || []).push(arguments);
      };
      l = d.createElement(e);
      l.async = 1;
      l.src = u;
      n = d.getElementsByTagName(e)[0];
      n.parentNode.insertBefore(l, n);
    })(window, document, 'script', MAILERLITE_SRC, 'ml');
    window.ml('account', MAILERLITE_ACCOUNT);
  }

  function renderBanner(forceShow) {
    let banner = document.getElementById('mm-cookie-banner');
    if (!banner) {
      banner = document.createElement('aside');
      banner.id = 'mm-cookie-banner';
      banner.setAttribute('role', 'region');
      banner.setAttribute('aria-label', 'Cookie consent');
      document.body.appendChild(banner);
    }

    const dict = i18n[getLang()];
    banner.innerHTML = `
      <div class="mm-cb-content">
        <div class="mm-cb-title">${dict.bannerTitle}</div>
        <div class="mm-cb-text">
          ${dict.bannerText}
          <a href="${getPrivacyHref()}">${dict.privacyLabel}</a>
        </div>
      </div>
      <div class="mm-cb-actions">
        <button type="button" class="mm-cb-btn mm-cb-btn-essentials" id="mm-cb-essentials">${dict.btnEssentials}</button>
        <button type="button" class="mm-cb-btn mm-cb-btn-accept" id="mm-cb-accept">${dict.btnAcceptAll}</button>
      </div>
    `;

    banner.querySelector('#mm-cb-essentials').addEventListener('click', () => {
      applyConsentDecision('essentials');
    });
    banner.querySelector('#mm-cb-accept').addEventListener('click', () => {
      applyConsentDecision('all');
    });

    if (forceShow || !getConsent()) {
      banner.classList.add('visible');
    } else {
      banner.classList.remove('visible');
    }
  }

  function injectFooterCookieLink() {
    const legalLine = document.querySelector('.footer-legal-line');
    if (!legalLine) return;
    const dict = i18n[getLang()];

    let btn = legalLine.querySelector('.mm-footer-cookie-btn');
    if (!btn) {
      const sep = document.createElement('span');
      sep.textContent = ' · ';
      btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'mm-footer-cookie-btn';
      btn.addEventListener('click', () => window.openCookieSettings());
      legalLine.appendChild(sep);
      legalLine.appendChild(btn);
    }
    btn.textContent = dict.footerCookieBtn;
  }

  function applyConsentDecision(choice) {
    setConsent(choice);
    const banner = document.getElementById('mm-cookie-banner');
    if (banner) banner.classList.remove('visible');

    if (choice === 'all') {
      loadMailerLite();
    } else {
      renderMailerLiteFallbacks();
    }
  }

  window.openCookieSettings = function () {
    renderBanner(true);
  };

  function init() {
    injectStyles();
    injectFooterCookieLink();

    const currentConsent = getConsent();
    if (currentConsent === 'all') {
      loadMailerLite();
      renderBanner(false);
    } else if (currentConsent === 'essentials') {
      renderMailerLiteFallbacks();
      renderBanner(false);
    } else {
      renderMailerLiteFallbacks();
      renderBanner(true);
    }

    const observer = new MutationObserver(() => {
      injectFooterCookieLink();
      const banner = document.getElementById('mm-cookie-banner');
      if (banner && banner.classList.contains('visible')) {
        renderBanner(true);
      }
      if (getConsent() !== 'all') {
        renderMailerLiteFallbacks();
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang']
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
