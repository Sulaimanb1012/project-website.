
import arrow from "../../assets/arrow_icon.svg";
import "./ProjectCard.css"; 

const ProjectCard = ({ s_no, s_name, s_desc }) => {
  return (
    <div className="services-format">
      <h3>{s_no}</h3>
      <h2>{s_name}</h2>
      <p>{s_desc}</p>
      <div className="services-readmore">
        <p>Lees Meer</p>
        <img src={arrow} alt="arrow icon" />
      </div>
    </div>
  );
};

export default ProjectCard;
