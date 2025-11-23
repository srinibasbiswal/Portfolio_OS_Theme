import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./appleMenu.scss";

function AppleMenu({ onSystemAction }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
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

    const handleMenuClick = (action) => {
        setIsOpen(false);
        if (onSystemAction) {
            onSystemAction(action);
        }
    };

    return (
        <div className="apple-menu-container" ref={menuRef}>
            <button
                className="apple-menu-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
            </button>

            {isOpen && (
                <div className="apple-menu-dropdown">
                    <div className="apple-menu-item" onClick={() => handleMenuClick("about")}>
                        <span>About This Mac</span>
                    </div>
                    <div className="apple-menu-divider" />
                    <div className="apple-menu-item" onClick={() => handleMenuClick("settings")}>
                        <span>System Settings...</span>
                    </div>
                    <div className="apple-menu-divider" />
                    <div className="apple-menu-item" onClick={() => handleMenuClick("sleep")}>
                        <span>Sleep</span>
                    </div>
                    <div className="apple-menu-item" onClick={() => handleMenuClick("restart")}>
                        <span>Restart...</span>
                    </div>
                    <div className="apple-menu-item" onClick={() => handleMenuClick("shutdown")}>
                        <span>Shut Down...</span>
                    </div>
                    <div className="apple-menu-divider" />
                    <div className="apple-menu-item" onClick={() => handleMenuClick("lock")}>
                        <span>Lock Screen</span>
                        <span className="apple-menu-shortcut">⌃⌘Q</span>
                    </div>
                    <div className="apple-menu-item" onClick={() => navigate("/")}>
                        <span>Switch OS...</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AppleMenu;
