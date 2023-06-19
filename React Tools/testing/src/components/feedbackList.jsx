import PropTypes from 'prop-types';
import FeedbackItem from "./FeedbackItem"

function feedbackList({feedback}) {
  if(!feedback || feedback.length === 0) {
    return <p>No Feedback Yet!</p>
  }
  else {

  }

  return (
    <div className="list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
}

feedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
      }
    )
  ),
}

export default feedbackList