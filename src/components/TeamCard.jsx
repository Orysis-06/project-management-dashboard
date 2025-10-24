import { IoMdAdd } from "react-icons/io";

import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";

function TeamCard(){
    return(
        <section className="team-card">
            <div className="team-card-header">
                <h4>Team Collaboration</h4>
                <button className="team-card-btn">
                    <IoMdAdd className="team-card-icon" /> Add Member
                </button>
            </div>
            <div className="team-card-teams">
                <div className="team-member">
                    <div className="team-member-img">
                        <img src={avatar1} alt="Alexandra Deff" />
                    </div>
                    <div className="member-details">
                        <h5>Alexandra Deff</h5>
                        <p>Working on <span>Github Projects Respository</span></p>
                    </div>
                    <div className="member-project-status">
                        <p>Completed</p>
                    </div>
                </div>
                <div className="team-member">
                     <div className="team-member-img">
                        <img src={avatar2} alt="Edwin Adenike" />
                    </div>
                    <div className="member-details">
                        <h5>Edwin Adenike</h5>
                        <p>Working on <span>Integrate User Authentication System</span></p>
                    </div>
                    <div className="member-project-status">
                        <p>In Progress</p>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-img">
                        <img src={avatar3} alt="Isaac Oluwatemilorun" />
                    </div>
                    <div className="member-details">
                        <h5>Isaac Oluwatemilorun</h5>
                        <p>Working on <span>Develop Search and Filter Functionality</span></p>
                    </div>
                    <div className="member-project-status">
                        <p>Pending</p>
                    </div>
                </div>
                <div className="team-member">
                      <div className="team-member-img">
                        <img src={avatar4} alt="David Oshodi" />
                    </div>
                    <div className="member-details">
                        <h5>David Oshodi</h5>
                        <p>Working on <span>Responsive Layout for Homepage</span></p>
                    </div>
                    <div className="member-project-status">
                        <p>In Progress</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamCard;