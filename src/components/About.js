import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/About.css';
import { useLanguage } from '../context/languageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-section">
      <h1 data-aos="fade-up">o mnie</h1>
      <section className="intro" data-aos="fade-up">
      <h2>{t('introduction')}</h2>
        <p>{t('description1')}</p>
        <p>{t('description2')}</p>
        <p>{t('description3')}</p>
        <p>{t('description4')}</p>
      </section>

      <section className="timeline" data-aos="fade-up">
      <h2>{t('timeline')}</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(33, 150, 243, 0.8)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '10px solid rgba(33, 150, 243, 0.8)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">New Wave International Cargo</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('job_position')}</h4>
            <h5 className="vertical-timeline-element-subtitle">{t('date1')}</h5>
            <p>{t('job_duties')}</p>
            <li>{t('duty1')}</li>
            <li>{t('duty2')}</li>
            <li>{t('duty3')}</li>
            <li>{t('duty4')}</li>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgba(233, 30, 99, 0.8)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '10px solid rgba(233, 30, 99, 0.8)' }}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">{t('universityname')}</h3> {/* Poprawka tutaj */}
            <h4 className="vertical-timeline-element-subtitle">{t('major')}</h4>
            <h5 className="vertical-timeline-element-subtitle">{t('date2')}</h5>
            <p>{t('description5')}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgba(233, 30, 99, 0.8)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '10px solid rgba(233, 30, 99, 0.8)' }}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">{t('schoolname')}</h3>
            <h5 className="vertical-timeline-element-subtitle">{t('date3')}</h5>
            <p>{t('description6')}</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default About;
