import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDesktopBackground } from "../../../utils/actions/settingsaction";
import settings from "../../../utils/data/settings.config";
import checked from "../../../assets/images/baseImages/checked.svg";
import "./macOSSettings.scss";

function MacOSSettings() {
    const [activeCategory, setActiveCategory] = useState("wallpaper");
    const current_settings = useSelector((state) => state.settingsState);
    const dispatch = useDispatch();

    const changeWallpaper = (wallpaperId) => {
        dispatch(changeDesktopBackground(wallpaperId));
    };

    const categories = [
        { id: "general", name: "General", icon: "⚙️" },
        { id: "wallpaper", name: "Desktop & Wallpaper", icon: "🖼️" },
        { id: "dock", name: "Dock", icon: "📱" },
        { id: "displays", name: "Displays", icon: "🖥️" },
        { id: "accessibility", name: "Accessibility", icon: "♿" },
    ];

    return (
        <div className="macos-settings">
            {/* Sidebar */}
            <div className="settings-sidebar">
                <div className="settings-search">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                    </svg>
                    <input type="text" placeholder="Search" />
                </div>

                <div className="settings-categories">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`settings-category ${activeCategory === category.id ? "active" : ""
                                }`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <span className="category-icon">{category.icon}</span>
                            <span className="category-name">{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="settings-content">
                {activeCategory === "general" && (
                    <div className="settings-section">
                        <h2>General</h2>
                        <div className="setting-item">
                            <label>Appearance</label>
                            <select className="setting-select">
                                <option>Auto</option>
                                <option>Light</option>
                                <option>Dark</option>
                            </select>
                        </div>
                        <div className="setting-item">
                            <label>Accent Color</label>
                            <div className="color-picker">
                                <div className="color-option blue active"></div>
                                <div className="color-option purple"></div>
                                <div className="color-option pink"></div>
                                <div className="color-option red"></div>
                                <div className="color-option orange"></div>
                                <div className="color-option yellow"></div>
                                <div className="color-option green"></div>
                            </div>
                        </div>
                    </div>
                )}

                {activeCategory === "wallpaper" && (
                    <div className="settings-section">
                        <h2>Desktop & Wallpaper</h2>
                        <p className="section-description">
                            Choose a wallpaper for your desktop
                        </p>
                        <div className="wallpaper-grid">
                            {settings.desktop_wallpapers.map((wallpaper, index) => (
                                <div
                                    key={index}
                                    className={`wallpaper-item ${current_settings.currentWallpaperId === wallpaper.id
                                            ? "selected"
                                            : ""
                                        }`}
                                    onClick={() => changeWallpaper(wallpaper.id)}
                                >
                                    <div
                                        className="wallpaper-preview"
                                        style={{
                                            backgroundImage: `url(${wallpaper.value})`,
                                        }}
                                    >
                                        {current_settings.currentWallpaperId === wallpaper.id && (
                                            <div className="wallpaper-check">
                                                <img src={checked} alt="Selected" width="24" height="24" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeCategory === "dock" && (
                    <div className="settings-section">
                        <h2>Dock</h2>
                        <div className="setting-item">
                            <label>Size</label>
                            <input type="range" min="32" max="80" defaultValue="56" />
                        </div>
                        <div className="setting-item">
                            <label>Magnification</label>
                            <input type="checkbox" defaultChecked />
                        </div>
                        <div className="setting-item">
                            <label>Position on screen</label>
                            <select className="setting-select">
                                <option>Bottom</option>
                                <option>Left</option>
                                <option>Right</option>
                            </select>
                        </div>
                    </div>
                )}

                {activeCategory === "displays" && (
                    <div className="settings-section">
                        <h2>Displays</h2>
                        <p className="section-description">
                            Display settings are managed by your browser
                        </p>
                    </div>
                )}

                {activeCategory === "accessibility" && (
                    <div className="settings-section">
                        <h2>Accessibility</h2>
                        <p className="section-description">
                            Accessibility features coming soon
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MacOSSettings;
