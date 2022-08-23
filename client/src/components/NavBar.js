import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
                <Link to="/quiz">Quiz</Link>
            <li>
                <Link to="/table">Table</Link>
            </li>
        </ul>
    );
}

export default NavBar;