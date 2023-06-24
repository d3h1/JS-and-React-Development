import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import SiriImage from "./images/siri.png";
import CortanaImage from "./images/cortana.png";

import "bulma/css/bulma.css";

const App = () => {
  return (
    <div>
      <div className="container">
        <section className="hero is-primary">
          <div className="hero-body">
            <p className="title">Our Digital Assistants</p>
          </div>
        </section>
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard image={SiriImage} name="Siri" handle="@siri90" />
            </div>
            <div className="column is-3">
              <ProfileCard image={AlexaImage} name="Alexa" handle="@alexa101" />
            </div>
            <div className="column is-3">
              <ProfileCard
                image={CortanaImage}
                name="Cortana"
                handle="@cortana22"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
