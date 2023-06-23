import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import SiriImage from './images/siri.png'
import CortanaImage from './images/cortana.png'


const App = () => {
  return (
    <div>
      <h1>Our Digital Assistants</h1>
      <ProfileCard image={SiriImage} name='Siri' handle='@siri90'/>
      <ProfileCard image={AlexaImage} name='Alexa' handle='@alexa101' />
      <ProfileCard image={CortanaImage} name='Cortana' handle='@cortana22' />
    </div>
  );
};

export default App;
