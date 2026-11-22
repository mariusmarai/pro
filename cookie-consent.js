(function () {
    const translations = {
        en: {
            text: "This site uses essential cookies to ensure proper functionality.",
            button: "Got it"
        },
        ro: {
            text: "Acest site folosește cookie-uri esențiale pentru a asigura funcționarea corectă.",
            button: "Am înțeles"
        },
        fr: {
            text: "Ce site utilise des cookies essentiels pour assurer son bon fonctionnement.",
            button: "J'ai compris"
        },
        it: {
            text: "Questo sito utilizza cookie essenziali per garantire il corretto funzionamento.",
            button: "Ho capito"
        },
        pt: {
            text: "Este site utiliza cookies essenciais para garantir o funcionamento adequado.",
            button: "Entendi"
        },
        es: {
            text: "Este sitio utiliza cookies esenciales para garantizar su correcto funcionamento.",
            button: "Entendido"
        }
    };

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
        const btnEl = document.getElementById('cookie-popup-btn');
        if (!textEl || !btnEl) return;

        const lang = getActiveLanguage();
        textEl.textContent = translations[lang].text;
        btnEl.textContent = translations[lang].button;
    }

    function initCookieBanner() {
        let consented = false;
        try {
            consented = localStorage.getItem('cookieConsent') === 'true';
        } catch (e) {}
        if (consented) return;

        const popup = document.createElement('div');
        popup.id = 'cookie-popup';
        popup.style.cssText = [
            'position: fixed',
            'bottom: 20px',
            'left: 20px',
            'right: 20px',
            'max-width: 450px',
            'background: #0B1220',
            'color: #F8FAFC',
            'padding: 16px 20px',
            'border-radius: 12px',
            'box-shadow: 0 10px 25px rgba(0,0,0,0.3)',
            "font-family: 'Inter', -apple-system, sans-serif",
            'font-size: 14px',
            'z-index: 9999',
            'display: flex',
            'align-items: center',
            'justify-content: space-between',
            'gap: 15px',
            'border: 1px solid rgba(245, 158, 11, 0.42)'
        ].join(';');

        popup.innerHTML = `
            <div id="cookie-popup-text" style="line-height: 1.4;"></div>
            <button id="cookie-popup-btn" style="background: #F59E0B; color: #0B1220; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; white-space: nowrap; transition: background 0.2s;"></button>
        `;

        document.body.appendChild(popup);
        updateCookieText();

        document.getElementById('cookie-popup-btn').addEventListener('click', function () {
            try {
                localStorage.setItem('cookieConsent', 'true');
            } catch (e) {}
            popup.style.display = 'none';
        });

        // Observă automat dacă atributul lang de pe <html> se schimbă când utilizatorul folosește selectorul de limbă
        const observer = new MutationObserver(updateCookieText);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCookieBanner);
    } else {
        initCookieBanner();
    }
})();
