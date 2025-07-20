import React from 'react';
import '../css/reviwes.css';
import { useState } from 'react';
export default function CardRevirw() {
    const reviews = [
    {
      name: "saja omar.",
      comment: "Loved the beach bag! Super stylish and comfy.",
    },
    {
      name: "osama alqaisy.",
      comment: "Quick delivery and excellent product quality. Highly recommend!",
    },
    {
      name: "rawan almomani.",
      comment: "Perfect summer wear. I’m in love with the hat!",
    },
  ];
  return (
    <div className="feedback">
      <h2>Feedback Our Customers </h2>
      <div className="feedbackcards">
        {reviews.map((reviews, index) => (
          <div key={index} className="card">
            <p className="comment">“{reviews.comment}”</p>
            <p className="name">– {reviews.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
