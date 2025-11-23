import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleApplicationClick } from "../../../utils/actions/app.action";
import settingsIcon from "../../../assets/images/apps/settings.svg";
import "./dock.scss";

function MacOSDock() {
    const appState = useSelector((state) => state.appState);
    const dispatch = useDispatch();

    const handleIconClick = (app) => {
        dispatch(handleApplicationClick(app));
    };

    // Filter apps to show in dock
    const dockApps = appState.apps ? appState.apps.filter((app) => app.showInDesktop) : [];

    // Find settings app
    const settingsApp = appState.apps ? appState.apps.find((app) => app.id === "settings") : null;

    return (
        <div className="macos-dock-container">
            <div className="macos-dock">
                {dockApps.map((app, index) => (
                    <div
                        key={index}
                        className={`dock-item ${app.isOpened ? "dock-item-active" : ""}`}
                        onClick={() => handleIconClick(app)}
                        title={app.name}
                    >
                        <div className="dock-item-inner">
                            {app.icon && (
                                <img
                                    src={app.icon}
                                    alt={app.name}
                                    className="dock-item-icon"
                                />
                            )}
                            {app.isOpened && <div className="dock-item-indicator" />}
                        </div>
                        <div className="dock-item-label">{app.name}</div>
                    </div>
                ))}

                {/* Divider */}
                <div className="dock-divider" />

                {/* Settings icon */}
                {settingsApp && (
                    <div
                        className={`dock-item ${settingsApp.isOpened ? "dock-item-active" : ""}`}
                        onClick={() => handleIconClick(settingsApp)}
                        title={settingsApp.name}
                    >
                        <div className="dock-item-inner">
                            <img
                                src={settingsIcon}
                                alt="Settings"
                                className="dock-item-icon"
                            />
                            {settingsApp.isOpened && <div className="dock-item-indicator" />}
                        </div>
                        <div className="dock-item-label">Settings</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MacOSDock;
