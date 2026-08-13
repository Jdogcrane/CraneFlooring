import React, { useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
        const init = () => {
            const container = document.getElementById('calendly-inline');

            if (window.Calendly && container) {
                window.Calendly.initInlineWidget({
                    url: 'https://calendly.com/cranehardwoodflooring/estimate?hide_event_type_details=1&hide_gdpr_banner=1',
                    parentElement: container,
                });
            } else {
                setTimeout(init, 300);
            }
        };

        init();
    }, []);

    return (
        <div className="contact-page">
            <p className="title spacing2">Set Appointment</p>

            <div id="calendly-inline" />
        </div>
    );
}