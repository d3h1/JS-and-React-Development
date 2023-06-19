import { useState } from "react";
import Card from "./shared/card";
import Button from "./shared/button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    // Validation will run here when we start typing something

    // Cheacking first if there is text 
    if(text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } 
    else if(text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    }
    else {
      setBtnDisabled(false)
      setMessage(null)
    }
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
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
