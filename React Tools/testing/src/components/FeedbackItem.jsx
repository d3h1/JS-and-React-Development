// import { useState } from "react";
import card from "./shared/card";

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
    <card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </card>
  );
}

export default FeedbackItem;
