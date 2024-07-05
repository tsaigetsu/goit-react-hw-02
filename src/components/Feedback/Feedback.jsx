

const Feedback = ({feedback}) => {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.neutral}</p>
      <p>Total: {feedbacl.total}</p>
    </div>
  );
};

export default Feedback;
