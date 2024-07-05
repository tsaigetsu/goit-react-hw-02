

const Options = ({onGoodClick, onNeutralClick, onBadClick}) => {
  return (
    <div>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Options;
