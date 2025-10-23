import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import MainContent from "./components/MainContent";

function Dashboard(){
    return(
        <section className="dashboard">
            <SideBar />
            <div className="dashboard-main">
                <TopBar />
                <MainContent />
            </div>
        </section>
    )
}

export default Dashboard;