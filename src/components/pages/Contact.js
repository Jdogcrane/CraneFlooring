import React, { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    const init = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/cranehardwoodflooring/estimate?hide_event_type_details=1&hide_gdpr_banner=1',
          parentElement: document.getElementById('calendly-inline'),
        });
      } else {
        setTimeout(init, 300);
      }
    };
    init();
  }, []);

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '0rem', paddingRight: '1rem', boxSizing: 'border-box', width: '100%' }}>
      <p className="title spacing2">Set Appointment</p>
      <div id="calendly-inline" style={{ width: '100%', maxWidth: '700px', minHeight: '1050px' }}></div>
    </div>
  );
}
