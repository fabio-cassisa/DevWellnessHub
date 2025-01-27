import { useState } from 'react';
import { MobileToDashBTN } from '../components/MobileBTN';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  updateName,
  updateColorPalette,
  updateFocusTimerLengthMS,
  updateBreatheTimerLengthMS,
  factoryReset,
} from '../reducers/settings';
import './SettingsPage.css';

export const SettingsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const settingsState = useSelector(state => state.settings);

  // Local state variables to track changes
  const [name, setName] = useState(settingsState.name);
  const [focusTimerLength, setFocusTimerLength] = useState(
    settingsState.focusTimerLengthMS / (60 * 1000)
  );
  const [breatheTimerLength, setBreatheTimerLength] = useState(
    settingsState.breatheTimerLengthMS / (60 * 1000)
  );
  const [selectedPalette, setSelectedPalette] = useState(
    settingsState.colorPalette
  );

  const handleFactoryReset = () => {
    navigate('/');
    dispatch(factoryReset());
  };

  const handleSaveChanges = () => {
    // Dispatch actions to update settings in the store
    dispatch(updateName({ name }));
    dispatch(
      updateFocusTimerLengthMS({
        focusTimerLengthMS: focusTimerLength * 60 * 1000,
      })
    );
    dispatch(
      updateBreatheTimerLengthMS({
        breatheTimerLengthMS: breatheTimerLength * 60 * 1000,
      })
    );
    dispatch(updateColorPalette({ colorPalette: selectedPalette }));
  };

  return (
    <div className="main-wrapper">
      <div className="app-container">
        <header className="main-header">
          <div className="main-app-name">. SETTINGS</div>
        </header>
        <h2 className="secondary-header">Adjust with your needs:</h2>
        <p className="text-paragraph settings-description">
          Change your name, set Focus Timer length (minutes), set Breathe Timer
          length (minutes), and customize your dashboard with the palette you
          like the most.
        </p>
        <div className="settings-field-wrapper">
          <div className="field-wrap">
            <div className="text-paragraph">Name:</div>
            <div className="text-paragraph">Focus:</div>
            <div className="text-paragraph">Breathe:</div>
            <div className="text-paragraph">Color Palette:</div>
          </div>
          <div className="field-wrap">
            <input
              type="text"
              aria-label="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="settings-input-field"
            />
            <input
              type="number"
              aria-label="focus timer length"
              value={focusTimerLength}
              min="1"
              onChange={e => setFocusTimerLength(e.target.value)}
              className="settings-input-field"
            />
            <input
              type="number"
              aria-label="breathe timer length"
              value={breatheTimerLength}
              min="1"
              onChange={e => setBreatheTimerLength(e.target.value)}
              className="settings-input-field"
            />
            <select
              value={selectedPalette}
              aria-label="color palette preference"
              onChange={e => setSelectedPalette(e.target.value)}
              className="settings-input-field"
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="teal">Teal</option>
              <option value="earth">Earth</option>
              {/* Add more options for additional color palettes */}
            </select>
          </div>
        </div>
        <div className="settings-buttons-wrapper">
          <button className="app-button" onClick={handleSaveChanges}>
            Save Changes
          </button>
          <button className="app-button" onClick={handleFactoryReset}>
            Factory Reset
          </button>
        </div>
        <MobileToDashBTN />
      </div>
    </div>
  );
};
