

const Feedback = ({feedback}) => {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.neutral}</p>
      <p>Total: {feedback.total}</p>
    </div>
  );
};

export default Feedback;
