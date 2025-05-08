import React, { useState, useEffect } from 'react';
import './OnboardingTour.css';

const OnboardingTour = () => {
  const [showTour, setShowTour] = useState(false);
  const [step, setStep] = useState(0);

  const steps = [
    "👋 Welcome to your Emotionally Intelligent Chatbot!",
    "💬 Type your concerns and receive empathetic support.",
    "🌐 You can select your preferred language too.",
    "🧘‍♀️ We also give relaxation tips for anxious moments.",
    "✅ Ready? Let's begin your journey!"
  ];

  useEffect(() => {
    const hasSeenTour = localStorage.getItem('hasSeenTour');
    if (!hasSeenTour) {
      setShowTour(true);
    }
  }, []);

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem('hasSeenTour', 'true');
      setShowTour(false);
    }
  };

  const skipTour = () => {
    localStorage.setItem('hasSeenTour', 'true');
    setShowTour(false);
  };

  if (!showTour) return null;

  return (
    <div className="tour-overlay">
      <div className="tour-box">
        <p>{steps[step]}</p>
        <div style={{ marginTop: '10px' }}>
          <button onClick={nextStep}>Next</button>
          <button onClick={skipTour} style={{ marginLeft: '10px' }}>Skip</button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingTour;
