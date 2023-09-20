import { useState } from "react";
import NavButton from "./NavButton/NavButton.tsx";
import "./Navigation.css";

interface NavProps {
    currentView: string;
    setCurrentView: (currentView: string) => void;
}

const Navigation = (props: NavProps) => {
    const [svgPosition, setSvgPosition] = useState<string>("left");

    const handleClick = (componentTitle: string) => {
        props.setCurrentView(componentTitle);
        setSvgPosition(componentTitle);
    }

    return (
        <div className="navigation">
            <div className="buttons">
                <NavButton title="Photos" selected={props.currentView == "Photos"} onClick={handleClick} />
                <NavButton title="Articles" selected={props.currentView == "Articles"} onClick={handleClick} />
            </div>

            <svg>
                <rect rx="4" ry="4" style={{
                    animationName: svgPosition,
                    animationDuration: "500ms",
                    animationTimingFunction: "ease",
                    animationFillMode: "forwards"
                }}></rect>
            </svg>
        </div>
    );
}

export default Navigation;