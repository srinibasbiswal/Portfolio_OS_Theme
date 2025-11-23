import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleApplicationClick, minimizeApplication, maximizeApplication } from "../../../utils/actions/app.action";
import Draggable from "react-draggable";
import { Resizable } from "react-resizable";
import "./macOSAppWindow.scss";
import "react-resizable/css/styles.css";

function MacOSAppWindow({ appInfo }) {
    const dispatch = useDispatch();
    const appState = useSelector((state) => state.appState);
    const [activeTab, setActiveTab] = useState(0);
    const [windowSize, setWindowSize] = useState({ width: 800, height: 600 });
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Calculate centered position with cascade offset
    useEffect(() => {
        const openWindows = appState.apps?.filter(app => app.isOpened && !app.isMinimized) || [];
        const windowIndex = openWindows.findIndex(app => app.id === appInfo.id);

        // Center position
        const centerX = (window.innerWidth - windowSize.width) / 2;
        const centerY = (window.innerHeight - 28 - windowSize.height) / 2;

        // Small cascade offset (30px each direction)
        const cascadeOffset = windowIndex * 30;

        setPosition({
            x: centerX + cascadeOffset,
            y: Math.max(50, centerY + cascadeOffset)
        });
    }, [appInfo.id, windowSize.width, windowSize.height, appState.apps]);

    const handleClose = (e) => {
        e.stopPropagation();
        dispatch(handleApplicationClick(appInfo));
    };

    const handleMinimize = (e) => {
        e.stopPropagation();
        dispatch(minimizeApplication(appInfo));
    };

    const handleMaximize = (e) => {
        e.stopPropagation();
        dispatch(maximizeApplication(appInfo));
    };

    const onResize = (event, { size }) => {
        setWindowSize({ width: size.width, height: size.height });
    };

    // Check if maximized
    const isMaximized = appInfo.isMaximized;

    return (
        <Draggable
            handle=".macos-window-titlebar"
            bounds="parent"
            disabled={isMaximized}
            position={isMaximized ? { x: 0, y: 0 } : undefined}
            defaultPosition={position}
        >
            <Resizable
                width={isMaximized ? window.innerWidth : windowSize.width}
                height={isMaximized ? window.innerHeight - 28 : windowSize.height}
                onResize={onResize}
                minConstraints={[400, 300]}
                maxConstraints={[window.innerWidth, window.innerHeight - 28]}
                resizeHandles={isMaximized ? [] : ['se', 'e', 's', 'sw', 'w', 'ne', 'nw', 'n']}
            >
                <div
                    className={`macos-window ${isMaximized ? 'macos-window-maximized' : ''}`}
                    style={{
                        width: isMaximized ? '100vw' : `${windowSize.width}px`,
                        height: isMaximized ? 'calc(100vh - 28px)' : `${windowSize.height}px`,
                        top: isMaximized ? '28px' : undefined,
                        left: isMaximized ? '0' : undefined,
                    }}
                >
                    {/* Title Bar with traffic lights */}
                    <div className="macos-window-titlebar">
                        <div className="macos-traffic-lights">
                            <button
                                className="traffic-light traffic-light-close"
                                onClick={handleClose}
                                title="Close"
                                aria-label="Close window"
                            >
                                <svg viewBox="0 0 12 12">
                                    <path
                                        d="M3 3L9 9M9 3L3 9"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                            <button
                                className="traffic-light traffic-light-minimize"
                                onClick={handleMinimize}
                                title="Minimize"
                                aria-label="Minimize window"
                            >
                                <svg viewBox="0 0 12 12">
                                    <path
                                        d="M3 6H9"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                            <button
                                className="traffic-light traffic-light-maximize"
                                onClick={handleMaximize}
                                title={isMaximized ? "Restore" : "Maximize"}
                                aria-label={isMaximized ? "Restore window" : "Maximize window"}
                            >
                                <svg viewBox="0 0 12 12">
                                    {isMaximized ? (
                                        <path
                                            d="M3 7L6 4L9 7"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                        />
                                    ) : (
                                        <path
                                            d="M3 5L6 8L9 5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                        <div className="macos-window-title">{appInfo.name}</div>
                        <div className="macos-window-titlebar-spacer" />
                    </div>

                    {/* Tabs if multiple subcomponents */}
                    {appInfo.subComponent && appInfo.subComponent.length > 1 && (
                        <div className="macos-window-tabs">
                            {appInfo.subComponent.map((tab, index) => (
                                <div
                                    key={index}
                                    className={`macos-tab ${activeTab === index ? "macos-tab-active" : ""
                                        }`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab.name}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Content */}
                    <div className="macos-window-content">
                        {appInfo.subComponent &&
                            appInfo.subComponent[activeTab] &&
                            React.createElement(
                                appInfo.subComponent[activeTab].component
                            )}
                    </div>
                </div>
            </Resizable>
        </Draggable>
    );
}

export default MacOSAppWindow;
