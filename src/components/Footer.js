import React from 'react';

export default function Footer() {
    return (
        <footer className="section center white-text black">
            <button
                className="btn-small spacing2 black borderBotGNo"
                onClick={() => window.scrollTo(0, 0)}
            >
                To the top
            </button>

            <h6>MIT / 2021&copy;</h6>
        </footer>
    );
}