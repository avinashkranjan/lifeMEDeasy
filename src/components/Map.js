import React, { useState } from "react";
import  "./Map.css";

const Map = () => {
  let [showMenu, setShowMenu] = useState(false);
  
  const startMenu = () => {
    setShowMenu(true);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <div className="emergency">
        <div style={{ display: showMenu ? "" : "none" }}>
          <p>
            <a
              href="https://www.google.com/maps/search/public+toilet+near+me/"
              
            >
              <button className="btn" style={{fontSize:"18px"}} onClick={() => hideMenu()}>
                Public
              </button>
            </a>
          </p>
          <p>
            <a
              href="https://www.google.com/maps/search/hospitals+near+me/"
            >
              <button className="btn" style={{fontSize:"18px"}} onClick={() => hideMenu()}>
                Hospital
              </button>
            </a>
          </p>
        </div>
        {!showMenu ? (
          <button className="btn" style={{fontSize:"18px"}} onClick={() => startMenu()}>
            Emergency
          </button>
        ) : (
          <button className="btn" style={{fontSize:"18px"}} onClick={() => hideMenu()}>
            Restrooms
          </button>
        )}
      </div>
    </>
  );
};

export default Map;
