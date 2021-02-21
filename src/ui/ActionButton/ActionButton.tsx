import React from 'react';

const ActionButton = () => {
  //This is an action button that user can interact with to complete the quest
  return (
    <div style={{
      marginTop: "6em",
      width: "3em",
      height: "3em",
      display: 'flex',
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <img style={{
        width: "6em"
      }}src='https://lh3.googleusercontent.com/proxy/b1C0OupSZG_HkZxHQLiNtL-q9TNwzEIJ5ihb0deCnGKn4JsEai1Rc7HlPiYzc9jHxk7zKk2yxQfPB3FrTRAWF8g'/>
      <button>COMPLETE</button>
    </div>
  );
}

export default ActionButton;