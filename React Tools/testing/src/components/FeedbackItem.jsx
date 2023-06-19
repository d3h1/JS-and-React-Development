// import { useState } from "react";
import PropTypes from 'prop-types';
import Card from "./shared/card";

function FeedbackItem({item}) {
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState("This a feedback item");

  //   Able to use previous values
  // const handleClick = () => {
  //   setRating((prev) => {
  //     return prev + 1;
  //   });
  // };

  return (
    // !Conditional class of revserse in the Card.jsx and can call it here
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem;
