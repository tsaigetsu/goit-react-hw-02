

const Options = ({onGoodClick, onNeutralClick, onBadClick, onResetClick}) => {
  return (
    <div>
      <button onClick={onGoodClick}>Good</button>
      <button onClick={onNeutralClick}>Neutral</button>
      <button onClick={onBadClick}>Bad</button>
      {hasFeedback && <button onClick={onResetClick}></button>}
    </div>
  );
};

export default Options;
