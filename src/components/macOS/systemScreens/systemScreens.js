import React from "react";
import "./systemScreens.scss";

export function SleepScreen({ onWake }) {
    return (
        <div className="system-screen sleep-screen" onClick={onWake}>
            <div className="sleep-content">
                <p className="sleep-hint">Click or press any key to wake</p>
            </div>
        </div>
    );
}

export function ShutdownScreen() {
    return (
        <div className="system-screen shutdown-screen">
            <div className="shutdown-content">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="white" className="shutdown-logo">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="shutdown-spinner"></div>
            </div>
        </div>
    );
}

export function StartupScreen() {
    return (
        <div className="system-screen startup-screen">
            <div className="startup-content">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="white" className="startup-logo">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="startup-progress-bar">
                    <div className="startup-progress-fill"></div>
                </div>
            </div>
        </div>
    );
}

export function LockScreen({ onUnlock }) {
    const [password, setPassword] = React.useState("");

    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        });
    };

    const getCurrentDate = () => {
        const now = new Date();
        return now.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Any input unlocks (cosmetic only)
        if (password.length > 0) {
            onUnlock();
        }
    };

    return (
        <div className="system-screen lock-screen">
            <div className="lock-content">
                <div className="lock-time">{time}</div>
                <div className="lock-date">{date}</div>

                <div className="lock-user">
                    <div className="lock-avatar">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                    </div>
                    <div className="lock-name">User</div>
                </div>

                <form onSubmit={handleSubmit} className="lock-password-form">
                    <input
                        type="password"
                        className="lock-password-input"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoFocus
                    />
                    <button type="submit" className="lock-unlock-button">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                    </button>
                </form>

                <div className="lock-hint">Press Enter or click to unlock</div>
            </div>
        </div>
    );
}
