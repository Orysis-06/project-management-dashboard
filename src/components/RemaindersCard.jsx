import { AiOutlineVideoCamera } from "react-icons/ai";

function RemaindersCard() {
    return (
        <section className="remainders-card card">
            <div className="remainders-card-header">
                <h4>Remainders</h4>
            </div>
            <div className="remainders-card-centre">
                <h2>Meeting with Arc Company</h2>
                <p>Time: 02:00 pm-04:00 pm</p>
            </div>
            <button className="start-meeting-btn">
                <AiOutlineVideoCamera className="remainders-card-icon" />
                Start Meeting
            </button>
        </section>
    )
}

export default RemaindersCard;