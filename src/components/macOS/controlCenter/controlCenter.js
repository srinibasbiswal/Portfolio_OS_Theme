import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSettings } from "../../../utils/actions/settingsaction";
import { ACTION_TYPES } from "../../../utils/documents/enums";
import "./controlCenter.scss";

function ControlCenter() {
    const [isOpen, setIsOpen] = useState(false);
    const panelRef = useRef(null);
    const settings = useSelector((state) => state.settingsState);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (panelRef.current && !panelRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleToggle = (type) => {
        dispatch(toggleSettings(type));
    };

    const getBrightness = () => {
        return settings.brightness || 75;
    };

    const getVolume = () => {
        return settings.volume || 50;
    };

    return (
        <div className="control-center-wrapper">
            <button
                className="control-center-trigger"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                </svg>
            </button>

            {isOpen && (
                <div className="control-center-panel" ref={panelRef}>
                    {/* Top Row - Wi-Fi and Bluetooth */}
                    <div className="cc-row">
                        <div
                            className={`cc-tile cc-tile-large ${settings.wifiEnabled ? "active" : ""}`}
                            onClick={() => handleToggle(ACTION_TYPES.TOGGLE_WIFI)}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-4c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2h2c0-2.21-1.79-4-4-4zm0-4c-3.31 0-6 2.69-6 6h2c0-2.21 1.79-4 4-4s4 1.79 4 4h2c0-3.31-2.69-6-6-6z" />
                            </svg>
                            <div className="cc-tile-info">
                                <div className="cc-tile-label">Wi-Fi</div>
                                <div className="cc-tile-status">{settings.wifiEnabled ? "PIED PIPER" : "Off"}</div>
                                <div className="cc-tile-sublabel">5G</div>
                            </div>
                        </div>

                        <div
                            className={`cc-tile cc-tile-large ${settings.bluetoothEnabled ? "active" : ""}`}
                            onClick={() => handleToggle(ACTION_TYPES.TOGGLE_BLUETOOTH)}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z" />
                            </svg>
                            <div className="cc-tile-info">
                                <div className="cc-tile-label">Bluetooth</div>
                                <div className="cc-tile-status">{settings.bluetoothEnabled ? "On" : "Off"}</div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row - AirDrop */}
                    <div className="cc-row">
                        <div className="cc-tile cc-tile-large">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17V7h2v7.17l3.59-3.58L17 12l-5 5z" />
                            </svg>
                            <div className="cc-tile-info">
                                <div className="cc-tile-label">AirDrop</div>
                                <div className="cc-tile-status">Off</div>
                            </div>
                        </div>

                        <div className="cc-small-buttons">
                            <button className="cc-btn-circle">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                                </svg>
                            </button>
                            <button className="cc-btn-circle">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Third Row - Battery and Music Recognition */}
                    <div className="cc-row">
                        <div className="cc-tile cc-tile-large">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
                            </svg>
                            <div className="cc-tile-info">
                                <div className="cc-tile-status">100%</div>
                            </div>
                        </div>

                        <button className="cc-btn-circle">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" />
                            </svg>
                        </button>
                    </div>

                    {/* Display Slider */}
                    <div className="cc-slider-container">
                        <div className="cc-slider-header">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
                            </svg>
                            <span>Display</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={getBrightness()}
                            className="cc-slider"
                            readOnly
                        />
                    </div>

                    {/* Sound Slider */}
                    <div className="cc-slider-container">
                        <div className="cc-slider-header">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                            </svg>
                            <span>Sound</span>
                            <button className="cc-slider-btn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                            </button>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={settings.isMute ? 0 : getVolume()}
                            className="cc-slider"
                            readOnly
                        />
                    </div>

                    {/* Edit Controls Button */}
                    <button className="cc-edit-btn">Edit Controls</button>
                </div>
            )}
        </div>
    );
}

export default ControlCenter;

