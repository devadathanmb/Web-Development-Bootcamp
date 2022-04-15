import React from "react";
import ReactDOM from "react-dom";

//Props, properties
//They are like HTML attributes such as id, value, placeholder etc.
//Props helps us to pass in information to a react component
//So that the component can be rendered dynamically
//props are passed as an object in "props" object
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img
        style={{ width: 200, height: 200 }}
        src={props.imageURL}
        alt="avatar_img"
      />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      // className="contacts", This is not possible since it treats everything as props
      name="Angela Yu"
      imageURL="https://miro.medium.com/max/3150/1*8OkdLpw_7VokmSrzwXLnbg.jpeg"
      phone="+1 123 456"
      email="angelayu@gmail.com"
    />
    <Card
      name="Jack Bauer"
      imageURL="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      phone="+1 323 436"
      email="jack@nowhere.com"
    />

    <Card
      name="Chuck Norris"
      imageURL="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      phone="+1 323 446"
      email="chuck@nowhere.com"
    />
  </div>,
  document.getElementById("root")
);
