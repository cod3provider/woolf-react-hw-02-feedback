import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  return (
    <ul className={s.list}>
      {options.map(option => (
        <li key={option}>
          <button
            className={s.button}
            type='button'
            name={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
