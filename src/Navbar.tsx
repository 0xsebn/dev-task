import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/ProccessA">ProcessA</Link>
                </li>
                <li>
                    <Link to="/ProccessB">ProcessB</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;