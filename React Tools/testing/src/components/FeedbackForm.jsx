import { useState } from "react";
import Card from "./shared/card";
import Button from "./shared/button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          {/* Custom button */}
          <Button type="submit">
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
