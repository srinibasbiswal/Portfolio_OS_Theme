import React from "react";
import AppleMenu from "./appleMenu";
import ControlCenter from "../controlCenter/controlCenter";
import "./menuBar.scss";

function MacOSMenuBar({ onSystemAction }) {
    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    };

    const getCurrentDate = () => {
        const now = new Date();
        return now.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
        });
    };

    const [time, setTime] = React.useState(getCurrentTime());
    const [date, setDate] = React.useState(getCurrentDate());

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(getCurrentTime());
            setDate(getCurrentDate());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="macos-menubar">
            <div className="menubar-left">
                <AppleMenu onSystemAction={onSystemAction} />
                <div className="menubar-item menubar-app-name">Portfolio</div>
                <div className="menubar-item">File</div>
                <div className="menubar-item">Edit</div>
                <div className="menubar-item">View</div>
                <div className="menubar-item">Window</div>
                <div className="menubar-item">Help</div>
            </div>

            <div className="menubar-right">
                <div className="menubar-item menubar-icon">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                    </svg>
                </div>
                <ControlCenter />
                <div className="menubar-item menubar-icon">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                </div>
                <div className="menubar-item menubar-time">
                    <span className="menubar-date">{date}</span>
                    <span className="menubar-clock">{time}</span>
                </div>
            </div>
        </div>
    );
}

export default MacOSMenuBar;
