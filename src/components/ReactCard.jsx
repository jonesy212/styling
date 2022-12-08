import React from "react";

class Card extends React.Component {
    render() {
      
        const box = {
            
            backgroundColor: "black",
            color: "green",
            border: "1px solid gray",
            padding: '.5rem',
            borderRadius: ".5rem",
            boxShadow: "0 0 0 0 .25 rgb(180, 180, 255) solid",
            textAlign: "start"
        }
    return (
        <div style={box}>
        <h1>Captain Kickflip 🛹</h1>
        <p>
          Full-Stack <strike>Developer</strike> of Pancakes
        </p>
        <div>{"⭐️".repeat(4)}</div>
      </div>
    );
  }
}

export default Card
