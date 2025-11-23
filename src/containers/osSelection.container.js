import React from "react";
import { useNavigate } from "react-router-dom";
import "./osSelection.scss";
import windowsLogo from "../assets/images/baseImages/windows-logo.svg";
import appleLogo from "../assets/images/baseImages/apple-logo.svg";

function OSSelection() {
    const navigate = useNavigate();

    const handleOSSelection = (os) => {
        if (os === "windows") {
            navigate("/windows10");
        } else if (os === "macos") {
            navigate("/macOS");
        }
    };

    return (
        <div className="os-selection-container">
            <div className="os-selection-content">
                <h1 className="os-selection-title">Choose Your Experience</h1>
                <p className="os-selection-subtitle">
                    Select your preferred operating system theme
                </p>

                <div className="os-cards-container">
                    {/* Windows 10 Card */}
                    <div
                        className="os-card windows-card"
                        onClick={() => handleOSSelection("windows")}
                    >
                        <div className="os-card-inner">
                            <div className="os-logo-container">
                                <img
                                    src={windowsLogo}
                                    alt="Windows 10"
                                    className="os-logo"
                                    onError={(e) => {
                                        e.target.style.display = "none";
                                        e.target.nextSibling.style.display = "block";
                                    }}
                                />
                                <div className="os-logo-fallback windows-fallback">
                                    <svg viewBox="0 0 88 88" className="windows-svg">
                                        <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349l-.011 41.34-47.318-6.678-.066-34.739z" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="os-card-title">Windows 10</h2>
                            <p className="os-card-description">
                                Classic desktop experience with taskbar and start menu
                            </p>
                            <div className="os-card-button">
                                <span>Enter</span>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M7.5 15L12.5 10L7.5 5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* macOS Card */}
                    <div
                        className="os-card macos-card"
                        onClick={() => handleOSSelection("macos")}
                    >
                        <div className="os-card-inner">
                            <div className="os-logo-container">
                                <img
                                    src={appleLogo}
                                    alt="macOS"
                                    className="os-logo"
                                    onError={(e) => {
                                        e.target.style.display = "none";
                                        e.target.nextSibling.style.display = "block";
                                    }}
                                />
                                <div className="os-logo-fallback apple-fallback">
                                    <svg viewBox="0 0 24 24" className="apple-svg">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="os-card-title">macOS</h2>
                            <p className="os-card-description">
                                Modern liquid glass design with dock and menu bar
                            </p>
                            <div className="os-card-button">
                                <span>Enter</span>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M7.5 15L12.5 10L7.5 5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OSSelection;
