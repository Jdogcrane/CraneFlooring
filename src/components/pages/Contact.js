import React, { useEffect } from 'react';

export default function Contact() {
useEffect(() => {
    const init = () => {
        const container = document.getElementById('calendly-inline');

        if (window.Calendly && container) {
            window.Calendly.initInlineWidget({
                url: 'https://calendly.com/cranehardwoodflooring/estimate?hide_event_type_details=1&hide_gdpr_banner=1',
                parentElement: container,
                resize: true,
            });
        } else {
            setTimeout(init, 300);
        }
    };

    init();
}, []);

    return (
        <div className="contact-page">

            <section className="contact-header">
                <h1 className="title">Let's Talk About Your Floors</h1>

                <p className="normalText">
                    Schedule an estimate and we'll take a look at your floors,
                    discuss what you're looking for, and give you a realistic
                    recommendation for your project.
                </p>

                <div className="contact-details">
                    <a href="tel:+17572970270">
                        <i className="fas fa-phone" aria-hidden="true"></i>
                        (757) 297-0270
                    </a>

                    <span>
                        <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                        Virgina
                    </span>
                </div>
            </section>


            <section className="contact-scheduler">
                <h2>Schedule an Estimate</h2>

                <div id="calendly-inline" />
            </section>
            <section className="contact-info-grid">

                <article className="contact-info-card">
                    <i className="fas fa-home contact-info-icon" aria-hidden="true"></i>

                    <div>
                        <h2>About Crane Flooring</h2>

                        <p className="normalText">
                            Serving the greater Hampton Roads area since 2018, Crane Flooring
                            specializes in hardwood refinishing, installation, and repairs. We've
                            helped over 200 customers with residential flooring projects.
                        </p>
                    </div>
                </article>

                <article className="contact-info-card">
                    <i className="fas fa-clipboard-check contact-info-icon" aria-hidden="true"></i>

                    <div>
                        <h2>What to Expect</h2>

                        <p className="normalText">
                            We prefer to see the project firsthand so we can
                            account for the condition of your floors and give
                            you an accurate estimate. We'll discuss the work,
                            materials, timing, and cost before anything begins.
                        </p>

                        <p className="normalText">
                            All labor is backed by our 1 year guarantee, and
                            payment isn't due in full until you're satisfied
                            with the finished work.
                        </p>
                    </div>
                </article>

            </section>

        </div>
    );
}