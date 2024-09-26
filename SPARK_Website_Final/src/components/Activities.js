import React, { useState, useEffect } from 'react';
import './Activities.css';

// Sample Images for Slider with names
const sliderImages = [
  { src: '/images/ai_ai.png', name: 'Outdoor Adventure' },
  { src: '/images/cyber_cyber.png', name: 'Cultural Event' },
  { src: '/images/harsh.png', name: 'Music Festival' },
  { src: '/images/princi.jpg', name: 'Art Exhibition' },
];

// Sample Activities Data
const activities = [
  {
    image: '/images/princi.jpg',
    title: 'Hiking Adventure',
    points: ['Mountain Trails', 'Guided Tour', 'Beautiful Views'],
    details: 'Experience the thrill of hiking through scenic mountain trails.',
    youtubeLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    extraInfo: 'Explore our hiking trails and join us for an unforgettable adventure.',
  },
  {
    image: '/images/princi.jpg',
    title: 'Art Workshop',
    points: ['Sculpting', 'Watercolors', 'Canvas Painting'],
    details: 'Join us for an immersive art workshop with hands-on activities.',
    youtubeLink: 'https://www.youtube.com/embed/C0DPdy98e4c',
    extraInfo: 'Discover your artistic side in our engaging art workshops.',
  },
  {
    image: '/images/princi.jpg',
    title: 'Cooking Class',
    points: ['Italian Cuisine', 'Hands-on Experience', 'Chef Guided'],
    details: 'Learn to cook delicious Italian dishes under expert guidance.',
    youtubeLink: 'https://www.youtube.com/embed/2fGJk05P8XA',
    extraInfo: 'Enhance your cooking skills with our expert chefs.',
  },
];

const Activities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedActivity, setExpandedActivity] = useState(null);

  // Auto-transition slider images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 3000); // 3 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1));
  };

  const handleActivityClick = (activity) => {
    setExpandedActivity(activity);
  };

  const handleClosePopup = () => {
    setExpandedActivity(null);
  };

  return (
    <div className="activities-container">
      {/* Slider Section */}
      <div className="slider">
        <img src={sliderImages[currentSlide].src} alt="Event Slide" className="slide-image" />
        <div className="slider-overlay">
          <span className="activity-name">{sliderImages[currentSlide].name}</span>
        </div>
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>

      {/* Activities Section */}
      <div className="activities-section">
        {activities.map((activity, index) => (
          <div 
            key={index} 
            className={`activity-box ${expandedActivity === activity ? 'expanded' : ''}`}
            onClick={() => handleActivityClick(activity)}
          >
            <img src={activity.image} alt={activity.title} className="activity-image" />
            <div className="activity-content">
              <h3>{activity.title}</h3>
              <ul>
                {activity.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Activity Details */}
      {expandedActivity && (
        <div className="activity-popup" onClick={handleClosePopup}>
          <div className="popup-content">
            <h2>{expandedActivity.title}</h2>
            <p>{expandedActivity.details}</p>
            <div className="youtube-container">
              <iframe 
                src={expandedActivity.youtubeLink} 
                title={expandedActivity.title}
                frameBorder="0"
                allowFullScreen
                className="youtube-video"
              ></iframe>
            </div>
            <p>{expandedActivity.extraInfo}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activities;
