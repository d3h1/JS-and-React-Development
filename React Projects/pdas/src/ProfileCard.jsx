import React from "react";

const ProfileCard = ({ name, handle }) => {
  // * Not the best way
  // const name = props.name;
  // const handle = props.handle

  // ! This is called destructuring -- much easier to read
  // const { name, handle} = props;

  // !!!! ABOVE IS THE BEST form of destructuring

  return <div>
    <h3>{name}</h3>
    <small>{handle}</small>
  </div>;
};

export default ProfileCard;
