const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  return (
    <>
      <p>Please leave feedback</p>
      {options.map(option => (
        <button
          type='button'
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
