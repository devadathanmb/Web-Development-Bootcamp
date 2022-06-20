import React from "react";
import Card from "./Card";
import contacts from "../contacts";

//This function receives each contact and renders,
//the card component on page.
function createCard(contact) {
  return (
    <div>
      <Card
        //Each of these components require a unique key to identify each of them
        //to render efficiently.
        //We cannot access this is a prop
        key={contact.id}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* This statement here loops through all the contact,
      int the contacts array and pass the contact into the 
      createCard function. */}
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
