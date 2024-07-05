import React, { useState } from 'react';
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options"

const App = () => {
  
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0
  });
    
    const handleGoodClick = () => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            good: prevFeedback.good + 1,
            total: prevFeedback.total +1
        }));
    }
    
    const handleNeutralClick = () => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            neutral: prevFeedback.neutral + 1,
            total: prevFeedback.total +1
        }));
    }

    const handleBadCLick = () => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            bad: prevFeedback.bad + 1,
            total: prevFeedback.total +1
        }));
    }

    const handleReset = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0,
            total: 0
        })
    }

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  
  return (
    <>
      <Description />
        <Options
          onGoodClick={handleGoodClick}
          onNeutralClick={handleNeutralClick}
          onBadClick={handleBadCLick}
          onResetClick={handleReset}
        />
      <Feedback />
    </>
  );
}

export default App