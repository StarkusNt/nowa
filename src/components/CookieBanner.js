import React, { useState, useEffect } from 'react';
import cookie from 'js-cookie';
import '../assets/styles/CookieBanner.css';
import { useLanguage } from '../context/languageContext';

function CookieBanner() {
  const { t } = useLanguage();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cookieConsent = cookie.get('cookie_consent');
    if (!cookieConsent) {
      setShowPopup(true);
    }
  }, []);

  const handleCookieConsent = () => {
    cookie.set('cookie_consent', 'true', { expires: 365 });
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="cookie-banner">
        <div className="cookie-text">
          {t('cookie1')}
        </div>
        <button
          className="cookie-button"
          onClick={handleCookieConsent}
        >
          {t('accept')}
        </button>
      </div>
    )
  );
}

export default CookieBanner;
