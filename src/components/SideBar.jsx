import { BsCalendar4Event } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { HiOutlineSupport } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";
import { LuListTodo } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { PiGearSix } from "react-icons/pi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

function Sidebar() {
    return (
        <section className="dashboard-sidebar card">
            <div className="dashboard-logo">
                Donezo
            </div>
            <div className="sidebar-content">
                <div className="sidebar-menu">
                    <menu className="sidebar-menu-menu">
                        <div className="sidebar-header">
                            <h4>Menu</h4>
                        </div>
                        <div className="menu-item">
                            <MdDashboard className="icon" />
                            <a href="#">Dashboard</a>
                        </div>
                        <div className="menu-item menu-task">
                            <span>
                                <LuListTodo className="icon"  />
                                <a href="#">Tasks</a>
                            </span>
                            <span className="tasks-number">
                                <h6>12+</h6>
                            </span>
                        </div>
                        <div className="menu-item" >
                            <BsCalendar4Event className="icon"  />
                            <a href="#">Calendar</a>
                        </div>
                        <div className="menu-item">
                            <TbBrandGoogleAnalytics  className="icon" />
                            <a href="#">Analytics</a>
                        </div>
                        <div className="menu-item">
                            <GoPeople className="icon" />
                            <a href="#">Team</a>
                        </div>
                    </menu>
                    <menu className="sidebar-menu-general">
                        <div className="sidebar-header">
                            <h4>General</h4>
                        </div>
                        <div className="menu-item">
                            <PiGearSix className="icon"  />
                            <a href="#">Settings</a>
                        </div>
                        <div className="menu-item">
                            <HiOutlineSupport className="icon" />
                            <a href="#">Help</a>
                        </div>
                        <div className="menu-item">
                            <IoIosLogOut className="icon" />
                            <a href="#">Logout</a>
                        </div>
                    </menu>
                </div>
                <div className="download-app-card">
                    <h4>Download our Mobile App</h4>
                    <button className="download-btn">Download</button>
                </div>
            </div>
        </section>
    )
}

export default Sidebar;