import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className = "header-wraper">
            <div className = "main-info">
                <h1>Software Engineer</h1>
                <Typed
                className="typed-text"
                strings={["Web Designer", "Web Developer","Coder","Software Engineer","Android App Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
            </div>
        </div>
    )
}

export default Header
