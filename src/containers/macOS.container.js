import React from "react";
import MacOSDesktop from "../components/macOS/desktop/macOSDesktop";

function MacOS() {
    return (
        <div className="uk-width-expand">
            {/* For now, just show the desktop. Can add lock screen, etc. later */}
            <MacOSDesktop />
        </div>
    );
}

export default MacOS;
