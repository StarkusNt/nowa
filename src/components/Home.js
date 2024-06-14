import React, { useEffect, useState } from 'react';
import '../assets/styles/Home.css';
import programmer from '../assets/images/programista.jpg';
import { useLanguage } from '../context/languageContext';

const Home = () => {

  const [showSubTitle, setShowSubTitle] = useState(false);
  const {t} = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubTitle(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

    

  return (
    <div className="home-container">
      <img src={programmer} alt="Welcome" className="home-image" />
      <div className="text-container">
        <h1 className="home-title">{t('welcome')}</h1>
        <h1 className="home-title">{t('myname')}</h1>
        <h2 className="home-subtitle">{t('student')}</h2>
        {showSubTitle && <h2 className="home-subtitle">{t('goodtoseeu')}</h2>}
      </div>
    </div>
  );
};

export default Home;
