import React from "react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
   
      <div className="toggle-container">
        <span className="toggle">
          <button
            className={
              darkMode
                ? "btn btn-change-mode light-mode"
                : "btn btn-change-mode dark-mode"
            }
            onClick={() => setDarkMode((prevMode) => !prevMode)}
          >
            {darkMode ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>
        </span>
      </div>
    
  );
};

export default DarkModeToggle;
