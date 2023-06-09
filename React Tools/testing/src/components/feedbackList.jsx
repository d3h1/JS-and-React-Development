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

export default feedbackList