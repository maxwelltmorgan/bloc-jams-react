import React from 'react';
import '../style/Landing.css';

const Landing = () => (
  <section className="landing">
    <section className="welcome">
      <h1>Welcome to Crafted Sound</h1>
      <p>Please enjoy our free music player.  Music is a powerful force we believe should be available to all.  Check out just a few of the many health benefits listeners frequently experience...</p>
    </section>
    <section className="benefits benefits-container">
      <div className="benefit box1">Improve Mood</div>
      <div className="benefit box2">Reduce Stress</div>
      <div className="benefit box3">Lessen Anxiety</div>
      <div className="benefit box4">Improve Exercise</div>
      <div className="benefit box5">Improve Memory</div>
      <div className="benefit box6">Ease Pain</div>
    </section>
    <section className="motivate">
     <h1>Check out our library to begin listening today!</h1>
    </section>
  </section>
);

export default Landing;
