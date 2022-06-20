import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function fillEntry(emojiObject){
  return <Entry value={emojiObject.id} title={emojiObject.name} emoji={emojiObject.emoji} description={emojiObject.meaning}/>
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
       {emojipedia.map(fillEntry)}
      </dl>
    </div>
  );
}

export default App;