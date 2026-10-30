import React from "react";
import "./JarvisHUD.css";

export default function JarvisHUD() {
  return (
    <div className="jarvis-shell">
      <div className="hud-noise" />
      <header className="topbar">
        <div className="brand">STARK AI</div>
        <div className="status">
          <span className="dot online" />
          SYSTEM ONLINE
        </div>
      </header>

      <aside className="sidebar left">
        <div className="module active">HOME</div>
        <div className="module">SECURITY</div>
        <div className="module">LAB</div>
        <div className="module">MISSIONS</div>
      </aside>

      <main className="main-panel">
        <div className="core-ring">
          <div className="core-center">JARVIS</div>
        </div>

        <div className="command-box">
          <span className="prompt">></span>
          <input value="Good morning, Tony." readOnly />
        </div>
      </main>

      <aside className="sidebar right">
        <div className="card">
          <h4>POWER</h4>
          <p>94.8%</p>
        </div>
        <div className="card">
          <h4>WEATHER</h4>
          <p>21°C / Clear</p>
        </div>
        <div className="card">
          <h4>ACTIVE TASKS</h4>
          <p>07</p>
        </div>
      </aside>

      <footer className="bottombar">
        <div>MICROPHONE</div>
        <div>VOICE READY</div>
        <div>COGNITIVE LOAD: 32%</div>
      </footer>
    </div>
  );
}
