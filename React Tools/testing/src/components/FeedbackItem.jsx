// import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/card";

// !Calling handle delete from feedback list as a prop
function FeedbackItem({ item, handleDelete }) {
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState("This a feedback item");

  //   Able to use previous values
  // const handleClick = () => {
  //   setRating((prev) => {
  //     return prev + 1;
  //   });
  // };

  // Able to pass in the item id and then handle it on click
  // const handleClick = (id) => {
  //   console.log(id);
  // }

  return (
    // !Conditional class of revserse in the Card.jsx and can call it here
    <Card className='container'>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
