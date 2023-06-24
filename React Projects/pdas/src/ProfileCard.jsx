import React from "react";

const ProfileCard = ({ name, image, handle }) => {
  // * Not the best way
  // const name = props.name;
  // const handle = props.handle

  // ! This is called destructuring -- much easier to read
  // const { name, handle} = props;

  // !!!! ABOVE IS THE BEST form of destructuring

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="prof-pic" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{name}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
