import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <p id="footer">
                Build by <a
                    className="Linkedin"
                    title="LinkedIn"
                    href="https://www.linkedin.com/in/mia-harison/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Mia Ranaivo
        </a>
                <br />
        Open-sourced on <a
                    className="GitHub"
                    title="GitHub"
                    href="https://github.com/MiandryR"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
        </a>
            </p>
        </footer>
    );
}