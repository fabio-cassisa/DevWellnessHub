//This is the homepage for Desktop and Tablet,
//which is composed by VerticalMenu + Dashboard + HistoricalCalDetailed;
import { useState } from 'react';
import useScreenSize from "../hooks/useScreenSize";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HistoricalCalDetailed } from "../components/HistoricalCal/HistoricalCalDetailed";
import { VerticalMenu } from "../components/VerticalMenu";
import { Dashboard } from "./Dashboard";
import { FocusTimerDetailed } from "../components/FocusTimer/FocusTimerDetailed"
import { MoodTrackerDetailed } from "../components/MoodTracker/MoodTrackerDetailed"
import { HabitTrackerDetailed } from "../components/HabitTracker/HabitTrackerDetailed"
import { BreatheTimerDetailed } from "../components/BreatheTimer/BreatheTimerDetailed"
import { SettingsPage } from './SettingsPage';
import "./DesktopHomepage.css"

export const DesktopHomepage = () => {
    //Here the logic if to switch on mobile or on desktop with
    //conditional rendering of which components (better than doing it in the App.jsx)
    const { isMobile } = useScreenSize();
    const [currentPage, setCurrentPage] = useState('dashboard');

    const handleMenuClick = (page) => {
        setCurrentPage(page);
    };
    
    return (
        <>
            {isMobile ? (                    
                   <Router>
                   <Routes>
                     {/* Mobile routes */}
                     <Route path="/" element={<Dashboard />} />
                     <Route path="/focus-timer" element={<FocusTimerDetailed />} />
                     <Route path="/habit-tracker" element={<HabitTrackerDetailed />} />
                     <Route path="/breathe-timer" element={<BreatheTimerDetailed />} />
                     <Route path="/mood-tracker" element={<MoodTrackerDetailed />} />
                     <Route path="/settings" element={<SettingsPage />} />
                     {/* Add more mobile-only routes as needed */}
                   </Routes>
                 </Router>
            ) : (
                //Import VerticalMenu
                //Import Dashboard
                //Import HistoricalCalDetailed
                <div className="desktop-wrapper">
                    <VerticalMenu onMenuClick={handleMenuClick} />
                        <div>
                            {currentPage === 'dashboard' && <Dashboard/>}
                            {currentPage === 'focus' && <FocusTimerDetailed />}
                            {currentPage === 'mood' && <MoodTrackerDetailed />}
                            {currentPage === 'habit' && <HabitTrackerDetailed />}
                            {currentPage === 'breath' && <BreatheTimerDetailed />}
                            {currentPage === 'settings' && <SettingsPage />}
                        </div>
                        <HistoricalCalDetailed/>
                </div>
            )}
        </>   
    );
    
};
