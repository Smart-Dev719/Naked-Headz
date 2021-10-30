import React from "react";
import "../App.css";

class Navbar extends React.Component {
    render() {
        return (
            <div className="position">
                <nav className="social-icons">
                    <a
                        href="https://medium.com/@nakedheadz/naked-headz-faq-8d0ab624af9a"
                        title="Medium"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="fab fa-medium"></i>
                    </a>
                    <a
                        href="https://twitter.com/NakedHeadz"
                        title="Twitter"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="fab fa-twitter-square"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/naked_headz/"
                        title="Instagram"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a
                        href="https://discord.gg/bnD9W9WZ"
                        title="Discord"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="fab fa-discord"></i>
                    </a>
                </nav>
            </div>
        );
    }
}

export default Navbar;
