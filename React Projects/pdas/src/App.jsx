import ProfileCard from "./ProfileCard";


const App = () => {
  return (
    <div>
      <h1>Our Digital Assistants</h1>
      <ProfileCard name='Siri' handle='@siri90'/>
      <ProfileCard name='Alexa' handle='@alexa101' />
      <ProfileCard name='Cortana' handle='@cortana22' />
    </div>
  );
};

export default App;
