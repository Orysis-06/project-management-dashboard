import { IoMdAdd } from "react-icons/io";

function ProjectsCard(){
    return(
    <section className="projects-card">
        <div className="projects-card-header">
            <h4>Project</h4>
            <button className="add-project-btn"><IoMdAdd className="add-projects-icon"/>New</button>
        </div>
        <div className="projects">
                <div className="projects-info">
                    <h5>Develop API Endpoints</h5>
                    <p>Due date: Nov 26, 2024</p>
                </div>
                <div className="projects-info">
                    <h5>Onboarding flow</h5>
                    <p>Due date: Nov 29, 2024</p>
                </div>
                <div className="projects-info">
                    <h5>Build dashboard</h5>
                    <p>Due date: Nov 30, 2024</p>
                </div>
                <div className="projects-info">
                    <h5>Optimize Page Load</h5>
                    <p>Due date: Dec 5, 2024</p>
                </div>
                <div className="projects-info">
                    <h5>Cross-Browser Testing</h5>
                    <p>Due date: Dec 6, 2024</p>
                </div>
        </div>
    </section>
    )
}

export default ProjectsCard;