import { IoMdAdd } from "react-icons/io";

import ProjectCard from "./ProjectCard";
import AnalyticsCard from "./AnalyticsCard";
import RemaindersCard from "./RemaindersCard";
import { projects } from "../data";
import ProjectsCard from "./ProjectsCard";
import TeamCard from "./TeamCard";
import ProjectProgress from "./ProjectProgress";
import Timer from "./Timer";

function MainContent() {
    return (
        <section className="main-content">
            <div className="main-content-top">
                <div className="main-content-header">
                    <h2>Dashboard</h2>
                    <p>Plan, prioritize, and accomplish your tasks with ease.</p>
                </div>
                <div className="main-content-btns">
                    <button className="add-project btn"><IoMdAdd />Add Project</button>
                    <button className="import-data btn">Import Data</button>
                </div>
            </div>
            <div className="main-content-contents">
                <div className="main-content-projects">
                    {
                        projects.map((project) =>
                            <ProjectCard key={project.title} {...project} />
                        )
                    }
                </div>
                <div className="main-content-middle">
                    <AnalyticsCard />
                    <RemaindersCard />
                    <ProjectsCard />
                </div>
                <div className="main-content-bottom">
                    <TeamCard />
                    <ProjectProgress />
                </div>
                <div className="main-content-timer">
                    <Timer />
                </div>
            </div>
        </section>
    )
}

export default MainContent;