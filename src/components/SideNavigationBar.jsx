// SideNavigationBar.jsx
import React from 'react';
import './SideNavigationBar.css';
import { GiLightBulb } from 'react-icons/gi';
import { PiUsers } from 'react-icons/pi';
import { AiFillTags } from 'react-icons/ai';
import { LiaDiagnosesSolid } from 'react-icons/lia';
import { TbSitemap } from 'react-icons/tb';
import { RiMapPin3Line } from 'react-icons/ri';
import { GoGraph } from 'react-icons/go';
import { CiMapPin } from 'react-icons/ci';



const SideNavigationBar = () => {
  return (
    <nav className="side-nav">
      <div className="nav-section">
        <ul className="nav-list">
          <li><GiLightBulb /> Overview</li>
          <li><PiUsers /> Activity log</li>
          <li><AiFillTags /> Access control (IAM)</li>
          <li><LiaDiagnosesSolid /> Tags</li>
          <li><TbSitemap /> Diagnose and Solve Problems</li>
        </ul>
      </div>
      <div className="nav-section">
        <p>Investigate</p>
        <hr />
        <ul>
        <li><RiMapPin3Line /> Application Map</li>
        <li><GoGraph /> Smart Detection</li>
        <li><CiMapPin /> Live Metrics</li>
        <li><AiFillTags /> Transaction Search</li>
        <li><RiMapPin3Line /> Availability</li>
        <li><GoGraph /> Failures</li>
        <li><CiMapPin /> Performance1</li>
        <li><AiFillTags /> Troubleshooting Guides</li>
        </ul>
      </div>
      <div className="nav-section">
        <p>Monitoring</p>
        <hr />
        <ul>
        <li><GoGraph /> Alert</li>
        <li><CiMapPin /> Metrics</li>
        <li><AiFillTags /> Diagnostic Settings</li>
          
        </ul>
      </div>
    </nav>
  );
}


export default SideNavigationBar;
