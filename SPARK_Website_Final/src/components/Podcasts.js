import React from 'react';
import './Podcasts.css';
import { useSpring, animated } from '@react-spring/web';

const PodcastPage = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props} className="podcast-page">
      <div className="podcast-header">Our Podcast</div>
      <div className="podcast-subheader">Coming Soon</div>
      <img src="/images/Harsh_Gupta_Sexy.jpeg" alt="Podcast Placeholder" className="podcast-image" />
      <div className="podcast-coming-soon">Stay tuned for updates!</div>
    </animated.div>
  );
};

export default PodcastPage;
