import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      profile: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      name: 'John Doe',
      review: 'This app has completely transformed my fitness journey. The instant feedback is amazing!',
      rating: 5, // Rating out of 5
    },
    {
      profile: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      name: 'Jane Smith',
      review: 'I love the personalized workout plans! It’s like having a personal trainer in my pocket.',
      rating: 4,
    },
    {
      profile: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Mark Wilson',
      review: 'The meal plans have really helped me improve my nutrition. I feel stronger and more energized!',
      rating: 4,
    },
    {
      profile: 'https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      name: 'Emily Johnson',
      review: 'Aura’s interactive coaching is a game-changer. It feels like having a live session every time I work out.',
      rating: 5,
    },
    {
      profile: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      name: 'Sarah Lee',
      review: 'The challenges keep me motivated! I love competing and pushing my limits.',
      rating: 5,
    },
  ];

  const moveSlide = (direction) => {
    setCurrentIndex((prevIndex) => {
      const totalSlides = reviews.length;
      return (prevIndex + direction + totalSlides) % totalSlides;
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <center>
      <div className="reviews-container">
        <div className="carousel-container">
          <h1>Active Aura Reviews</h1>
          <h3>See what our Active Aura community has to share about their experience.</h3>
          <div className="carousel" style={{ transform: `translateX(-${currentIndex * 300 + 30 * currentIndex}px)` }}>
            {reviews.map((review, index) => (
              <div key={index} className="carousel-card">
                <img src={review.profile} alt={review.name} className="profile-img" />
                <h3 className="reviewer-name">{review.name}</h3>
                <p>"{review.review}"</p>
                <div className="stars">{renderStars(review.rating)}</div>
              </div>
            ))}
          </div>
          <button className="prev" onClick={() => moveSlide(-1)}>🡰</button>
          <button className="next" onClick={() => moveSlide(1)}>🡲</button>
          <p>View more or leave us a review in the app store <a href="https://www.apple.com/ca/app-store/" className="here-link">here</a></p>
        </div>
        
      </div>
    </center>
  );
};

export default Reviews;