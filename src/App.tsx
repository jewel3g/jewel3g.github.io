import React from 'react';
import './App.css'; // Create this file for component-specific styles

const App: React.FC = () => {
  return (
    <div className="app">
      {/* Hero Banner Section */}
      <header className="hero">
        <img 
          src="https://raw.githubusercontent.com/jewel3g/jewel3g.github.io/main/public/full-image.png" 
          alt="MD Anaet Ullah - Embedded Systems Engineer" 
          className="hero-image"
        />
        <div className="hero-content">
          <h1>MD Anaet Ullah</h1>
          <h2>Embedded Systems & Electronics Engineer</h2>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          Passionate Embedded Systems Engineer with expertise in PCB design, 
          hardware testing, and firmware development. Dedicated to creating 
          efficient and innovative electronic solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Embedded Systems</h3>
            <ul>
              <li>ARM Cortex Microcontrollers</li>
              <li>RTOS (FreeRTOS, Zephyr)</li>
              <li>Communication Protocols (I2C, SPI, UART)</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>PCB Design</h3>
            <ul>
              <li>Altium Designer</li>
              <li>KiCad</li>
              <li>Circuit Simulation</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Programming</h3>
            <ul>
              <li>C/C++ (Embedded)</li>
              <li>Python (Scripting)</li>
              <li>MATLAB (Signal Processing)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="project-card">
          <h3>Smart Home Controller</h3>
          <p>
            Designed a low-power IoT controller with ESP32 and custom PCB,
            supporting multiple wireless protocols.
          </p>
        </div>
        <div className="project-card">
          <h3>Industrial Sensor Node</h3>
          <p>
            Developed a ruggedized sensor node with STM32 and LoRaWAN
            connectivity for remote monitoring.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="contact-section">
        <h2>Get In Touch</h2>
        <div className="contact-links">
          <a href="mailto:your.email@example.com">Email</a>
          <a href="https://github.com/jewel3g">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
