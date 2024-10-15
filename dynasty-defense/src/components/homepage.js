import React, { useState } from "react";
import "./styles/homepage.css";

export default function HomePage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  // Sample data for last triggered times
  const [lastTriggeredTimes, setLastTriggeredTimes] = useState({
    fireSensor: "Never",
    smokeSensor: "Never",
    securitySensor: "Never",
    fireAlarm: "Never",
    smokeAlarm: "Never",
    securityAlarm: "Never",
  });

  // Sample function to update last triggered time
  const triggerAlarm = (sensor) => {
    const currentTime = new Date().toLocaleTimeString();
    setLastTriggeredTimes((prev) => ({
      ...prev,
      [sensor]: currentTime,
    }));
  };

  return (
    <div className="home-container">
      <aside className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
        <button className="sidebar-button" onClick={toggleSidebar}>
          {isSidebarCollapsed ? "Expand" : "Collapse"}
        </button>
        <button className="sidebar-button">Sensors</button>
        <button className="sidebar-button">Alarms</button>
        <button className="sidebar-button settings-button">Settings</button>
      </aside>

      <main className="main-content">
        <h1 className="header-title">Defense</h1>
        <section className="sensors-section">
          <h2>Sensors</h2>
          <div className="sensor-cards-container">
            {["fireSensor", "smokeSensor", "securitySensor"].map((sensor) => (
              <div className="sensor-card" key={sensor}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="60px"
                  height="60px"
                  className="sensor-icon"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C10.24 2 8.67 3.07 8 4.73A3.507 3.507 0 005.5 9C5.22 9 5 9.22 5 9.5S5.22 10 5.5 10H12c.83 0 1.5.67 1.5 1.5S12.83 13 12 13H3.5C2.12 13 1 14.12 1 15.5S2.12 18 3.5 18H9c0 2.21 1.79 4 4 4s4-1.79 4-4h3.5c1.38 0 2.5-1.12 2.5-2.5S19.88 15 18.5 15H12c-1.66 0-3-1.34-3-3 0-.5.12-.97.34-1.39A5.992 5.992 0 0012 2z"
                  />
                </svg>
                <button
                  className="alarm-button"
                  onClick={() => triggerAlarm(sensor)}
                >
                  {`Activate ${
                    sensor.charAt(0).toUpperCase() + sensor.slice(1)
                  } Alarm`}
                </button>
                {!isSidebarCollapsed && (
                  <p className="last-triggered-text">
                    Last Triggered: {lastTriggeredTimes[sensor]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="alarms-section">
          <h2>Alarms</h2>
          <div className="alarm-cards-container">
            {["fireAlarm", "smokeAlarm", "securityAlarm"].map((alarm) => (
              <div className="alarm-card" key={alarm}>
                <h3>{`${
                  alarm.charAt(0).toUpperCase() + alarm.slice(1)
                } Alarm`}</h3>
                <button
                  className="alarm-button"
                  onClick={() => triggerAlarm(alarm)}
                >
                  Silence Alarm
                </button>
                {!isSidebarCollapsed && (
                  <p className="last-triggered-text">
                    Last Triggered: {lastTriggeredTimes[alarm]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
