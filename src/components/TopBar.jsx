import { CiMail } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import avatar from "../assets/avatar.jpg"

function TopBar() {
    return (
        <section className="topbar">
            <div className="search-bar">
                <FaSearch className="icon search-icon" />
                <p>Search task</p>
            </div>
            <div className="user-info">
                <div className="user-info-icons">
                    <CiMail className="topbar-icon mail-icon" />
                    <IoIosNotificationsOutline className="topbar-icon notifications-icon" />
                </div>
                <div className="personal-info">
                    <div className="personal-avatar">
                        <img src={avatar} alt="Toket Micheal" />
                    </div>
                    <div className="personal-details">
                        <h5>Totek Micheal</h5>
                        <p>totekmicheal@gmail</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopBar;