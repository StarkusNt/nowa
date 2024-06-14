import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner'; // Poprawna ścieżka importu
import { LanguageProvider } from './context/languageContext';
import cookie from 'js-cookie'; // Importuj bibliotekę js-cookie do zarządzania plikami cookie

function App() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const cookieConsent = cookie.get('cookie_consent');
    if (cookieConsent) {
      setCookiesAccepted(true);
    }
  }, []);

  const handleCookieConsent = () => {
    cookie.set('cookie_consent', 'true', { expires: 365 });
    setCookiesAccepted(true);
  };

  return (
    <Router>
      <LanguageProvider>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
          {!cookiesAccepted && <CookieBanner />} 
          {/* Renderuj CookieBanner tylko jeśli pliki cookie nie są zaakceptowane */}
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
