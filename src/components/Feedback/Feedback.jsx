import PropTypes from 'prop-types';
import { Button, FeedbButtons } from './Feedback.styled';
export const FeedbackButtons = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbButtons>
      {options.map(option => (
        <Button
          onClick={() => {
            onLeaveFeedback(option);
          }}
          type="button"
          key={option}
        >
          {option}
        </Button>
      ))}
    </FeedbButtons>
  );
};

FeedbackButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};