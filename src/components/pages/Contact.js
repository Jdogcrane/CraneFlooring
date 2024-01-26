import React from 'react';
export default function Contact() {
  return (
    <>
      <div className='contain1 center'>
        <div>
          <p className="invisible">Hardwood Flooring</p>
        </div>
        <div className="space">
          <h4 className='spaceDown'>Set Appointment</h4>
          <iframe scrolling="no" className='iframeStyling'
            frameBorder="0"
            title="appt" src="https://calendly.com/cranehardwoodflooring/estimate?hide_event_type_details=1&hide_gdpr_banner=1"></iframe>
        </div>
      </div>

    </>
  );
}
