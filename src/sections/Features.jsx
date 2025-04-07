import React, { useState } from 'react';
import './Features.css';

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      img: './images/healthicons_weights.svg',
      title: 'Instant Form Correction',
      description: 'Aura gives you real-time feedback directly overlaid on your screen, ensuring that you perform each exercise with great form.'
    },
    {
      img: './images/mingcute_fitness-fill.svg',
      title: 'Interactive Coaching',
      description: 'Aura the virtual coach can demonstrate and verbally guide you through each set, making the workout feel like a live session.'
    },
    {
      img: './images/healthicons_running.svg',
      title: 'Training Tracker',
      description: 'Aura adapts to the user’s fitness level, goals, and performance metrics. It can also track workout difficulty, and duration based on your progress.'
    },

    {
      img: './images/uil_create-dashboard.svg',
      title: 'Create Custom Sessions',
      description: 'Users can create their own workout by selecting exercises based on their available time, preferred equipment, and specific fitness goals.'
    },

    {
      img: './images/material-symbols_cool-to-dry.svg',
      title: 'Cooldowns Included',
      description: 'Cooldowns are an important aspect of any workout program, Aura can help users with personalized cooldown routines to enhance their recovery.'
    },
    {
      img: './images/material-symbols_food-bank-rounded.svg',
      title: 'Aura Meal Plans',
      description: 'Aura provides personalized nutrition guidance for complementing your workout and fitness goals. Aura can provide recipes, complete with ingredients and cooking instructions'
    },

    {
      img: './images/material-symbols_trophy.svg',
      title: 'Challenge Yourself',
      description: 'Aura Challenges create motivation, and community engagement into your fitness journey.'
    },
  ];


  const moveSlide = (direction) => {
    setCurrentIndex((prevIndex) => {
      const totalSlides = features.length;
      return (prevIndex + direction + totalSlides) % totalSlides;
    });
  };

  return (
   <center>
    <div className="features-container">
      <div className="carousel-container">
      <h1>Explore Our Features</h1>
      <h3>Explore why our users love our app!</h3>
        <div className="carousel" style={{ transform: `translateX(-${currentIndex * 300 + 30 * currentIndex}px)` }}>
          {features.map((feature, index) => (
            <div key={index} className="carousel-card">
              <img src={feature.img} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <button className="prev" onClick={() => moveSlide(-1)}>🡰</button>
        <button className="next" onClick={() => moveSlide(1)}>🡲</button>
      </div>
    </div>
    </center>
  );
};

export default Features;