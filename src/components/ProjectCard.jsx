function ProjectCard({title, number, increase, note}){
    return(
        <section className="project-card card">
            <div className="project-card-header">
                 <h4>{title}</h4>
                 
            </div>
            <h1>{number}</h1>
            <div className="project-card-note">
                <p>{increase}</p>
                <p>{note}</p>
            </div>
        </section>
    )
}

export default ProjectCard;