import Header from "./components/header";
import FeedbackList from "./components/feedbackList";
import FeedbackData from "./data/feedbackData";

import { useState } from "react";
import PropTypes from 'prop-types'

const App = () => {
    const [feedback, setFeedback] = useState(FeedbackData)

    return ( 
        <>
            <Header />
            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </>
     );
}

// You can use default props
Header.defaultProps = {
    text: 'Feedback UI',
}

Header.propTypes = {
    text: PropTypes.string
}
 
export default App;