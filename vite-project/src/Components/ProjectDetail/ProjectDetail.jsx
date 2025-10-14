import "./ProjectDetail.css";


const ProjectDetail = ({ project, onBack }) => {
  if (!project) return null;

  return (
    <div id="work" className="mywork">
      <button className="back-button" onClick={onBack}>
        &larr; Terug naar projecten
      </button>

      <div className="mywork-title">
        <h1>{project.s_name}</h1>
      </div>

      <div className="mywork-container">
        <img src={project.s_img} alt={project.s_name} />
      </div>

      <div className="mywork-description">
        <p>{project.s_desc}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;

