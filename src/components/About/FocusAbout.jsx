import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { MobileGoBackBTN } from '../MobileBTN';
import useScreenSize from '../../hooks/useScreenSize';
import './About.css';

export const FocusAbout = () => {
  const navigate = useNavigate();
  const { isMobile } = useScreenSize();

  useEffect(() => {
    if (!isMobile) {
      navigate('/focus-timer');
    }
  }, [isMobile]);

  return (
    <div className="about-wrapper">
      <div className="app-container">
        <div className="main-header">
          <div className="about-header">. FOCUS</div>
        </div>
        <div className="about-paragraph">
          A Focus Timer, or Pomodoro timer, divides your work into manageable
          intervals, typically 25 minutes. After each timer, we invite you to
          take a short break. It&apos;s a structured approach to boost focus and
          productivity.
          <p />
          <i>Key Benefits:</i>
          <ul>
            <li>
              <b>Maximized Productivity:</b> Work in concentrated bursts,
              minimizing procrastination
            </li>
            <li>
              <b>Enhanced Concentration:</b> Break tasks into intervals to
              foster deep concentration
            </li>
            <li>
              <b>Improved Time Management:</b> Establish a disciplined routine
            </li>
            <li>
              <b>Reduced Stress:</b> Regular breaks prevent burnout
            </li>
          </ul>
        </div>
        <MobileGoBackBTN />
      </div>
    </div>
  );
};
