import React, { useState } from "react";
import "./Services.css";
import theme from "../../assets/theme.png";
import Services_Data from "../../assets/services_data";
import ProjectCard from "../Project/ProjectCard";

const Services = ({ onSelectProject }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter de projecten op naam
  const filteredServices = Services_Data.filter((service) =>
    service.s_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>Mijn Projecten</h1>
        <img src={theme} alt="" />
      </div>

      {/* Zoekveld */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Zoek een project..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="services-container">
        {filteredServices.map((service, index) => (
          <ProjectCard
            key={service.s_no}
            index={index}
            s_desc={service.s_desc}
            s_name={service.s_name}
            s_no={service.s_no}
            onReadMore={() => onSelectProject(service)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
