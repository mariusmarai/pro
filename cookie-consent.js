(function () {
    const MAILERLITE_ACCOUNT_ID = '2815590';
    const MAILERLITE_SCRIPT_URL = 'https://assets.mailerlite.com/js/universal.js';

    const translations = {
        en: {
            text: "This site uses essential local storage for language preferences and security, plus privacy-friendly, cookieless analytics.",
            linkText: "Privacy Policy",
            essentialBtn: "Essential only",
            acceptBtn: "Accept all"
        },
        ro: {
            text: "Acest site folosește stocare locală esențială pentru preferința de limbă și securitate, plus statistici fără cookie-uri.",
            linkText: "Politica de Confidențialitate",
            essentialBtn: "Doar esențiale",
            acceptBtn: "Acceptă tot"
        },
        fr: {
            text: "Ce site utilise un stockage local essentiel pour la langue et la sécurité, ainsi que des statistiques sans cookies.",
            linkText: "Politique de Confidentialité",
            essentialBtn: "Essentiels uniquement",
            acceptBtn: "Tout accepter"
        },
        it: {
            text: "Questo sito utilizza archiviazione locale essenziale per lingua e sicurezza, oltre a statistiche senza cookie.",
            linkText: "Informativa sulla Privacy",
            essentialBtn: "Solo essenziali",
            acceptBtn: "Accetta tutto"
        },
        pt: {
            text: "Este site utiliza armazenamento local essencial para idioma e segurança, além de estatísticas sem cookies.",
            linkText: "Política de Privacidade",
            essentialBtn: "Apenas essenciais",
            acceptBtn: "Aceitar tudo"
        },
        es: {
            text: "Este sitio utiliza almacenamiento local esencial para el idioma y la seguridad, además de estadísticas sin cookies.",
            linkText: "Política de Privacidad",
            essentialBtn: "Solo esenciales",
            acceptBtn: "Aceptar todo"
        }
    };

    let mailerLiteLoaded = false;

    function loadMailerLite() {
        if (mailerLiteLoaded || typeof window.ml === 'function') {
            mailerLiteLoaded = true;
            return;
        }
        mailerLiteLoaded = true;

        (function (w, d, e, u, f, l, n) {
            w[f] = w[f] || function () {
                (w[f].q = w[f].q || []).push(arguments);
            };
            l = d.createElement(e);
            l.async = 1;
            l.src = u;
            n = d.getElementsByTagName(e)[0];
            n.parentNode.insertBefore(l, n);
        })(window, document, 'script', MAILERLITE_SCRIPT_URL, 'ml');

        window.ml('account', MAILERLITE_ACCOUNT_ID);
    }

    function getPrivacyHref() {
        const path = window.location.pathname;
        return path.includes('/blog/') ? '../../privacy.html' : 'privacy.html';
    }

    function getActiveLanguage() {
        let savedLang = null;
        try {
            savedLang = localStorage.getItem('mariusmarai_lang') || localStorage.getItem('selectedLanguage') || localStorage.getItem('lang');
        } catch (e) {}
        const htmlLang = document.documentElement.lang;
        const lang = (savedLang || htmlLang || 'en').toLowerCase().substring(0, 2);
        return translations[lang] ? lang : 'en';
    }

    function updateCookieText() {
        const textEl = document.getElementById('cookie-popup-text');
        const linkEl = document.getElementById('cookie-privacy-link');
        const essBtn = document.getElementById('cookie-btn-essential');
        const accBtn = document.getElementById('cookie-btn-accept');
        if (!textEl || !linkEl || !essBtn || !accBtn) return;

        const lang = getActiveLanguage();
        textEl.textContent = translations[lang].text + ' ';
        linkEl.textContent = translations[lang].linkText;
        essBtn.textContent = translations[lang].essentialBtn;
        accBtn.textContent = translations[lang].acceptBtn;
    }

    function saveChoice(choice) {
        try {
            localStorage.setItem('cookieConsent', choice);
            localStorage.setItem('cookieConsentDate', new Date().toISOString());
        } catch (e) {}

        if (choice === 'all') {
            loadMailerLite();
        }

        const popup = document.getElementById('cookie-popup');
        if (popup) popup.style.display = 'none';
    }

    function initCookieBanner() {
        let consent = null;
        try {
            consent = localStorage.getItem('cookieConsent');
        } catch (e) {}

        if (consent === 'all') {
            loadMailerLite();
            return;
        }

        if (consent === 'essential' || consent === 'true') {
            return;
        }

        const popup = document.createElement('div');
        popup.id = 'cookie-popup';
        popup.setAttribute('role', 'region');
        popup.setAttribute('aria-label', 'Cookie and privacy notice');
        popup.style.cssText = [
            'position: fixed',
            'bottom: 20px',
            'left: 20px',
            'right: 20px',
            'max-width: 520px',
            'background: #0B1220',
            'color: #F8FAFC',
            'padding: 16px 20px',
            'border-radius: 12px',
            'box-shadow: 0 10px 25px rgba(0,0,0,0.35)',
            "font-family: 'Inter', -apple-system, sans-serif",
            'font-size: 13.5px',
            'z-index: 9999',
            'display: flex',
            'flex-direction: column',
            'gap: 12px',
            'border: 1px solid rgba(245, 158, 11, 0.42)'
        ].join(';');

        popup.innerHTML = `
            <div style="line-height: 1.5; color: #CBD5E1;">
                <span id="cookie-popup-text"></span>
                <a id="cookie-privacy-link" href="${getPrivacyHref()}" style="color: #38BDF8; text-decoration: underline;"></a>.
            </div>
            <div style="display: flex; gap: 10px; justify-content: flex-end; flex-wrap: wrap;">
                <button id="cookie-btn-essential" type="button" style="background: #162238; color: #F8FAFC; border: 1px solid rgba(148, 163, 184, 0.35); padding: 8px 14px; border-radius: 6px; font-weight: 600; font-size: 13px; cursor: pointer;"></button>
                <button id="cookie-btn-accept" type="button" style="background: #F59E0B; color: #0B1220; border: 1px solid #F59E0B; padding: 8px 14px; border-radius: 6px; font-weight: 700; font-size: 13px; cursor: pointer;"></button>
            </div>
        `;

        document.body.appendChild(popup);
        updateCookieText();

        document.getElementById('cookie-btn-essential').addEventListener('click', function () {
            saveChoice('essential');
        });

        document.getElementById('cookie-btn-accept').addEventListener('click', function () {
            saveChoice('all');
        });

        const observer = new MutationObserver(updateCookieText);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCookieBanner);
    } else {
        initCookieBanner();
    }
})();
