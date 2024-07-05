

const Feedback = ({ feedback }) => {
  const positivePercentage = feedback.total > 0 ? (feedback.good / feedback.total * 100).toFixed(2) : 0;
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {feedback.total}</p>
      <p>Positive Persent: {positivePercentage}</p>
    </div>
  );
};

export default Feedback;
