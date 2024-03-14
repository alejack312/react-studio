import React from "react";

// TODO: create a component that displays a single bakery item

const BakeryItem = (props) => {

    const handleClick = () => {
      props.addToCart(props.price); // Assuming addToCart requires the id of the item
    };

    return (
      <div className="BakeryItem">
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>Price: ${props.price}</p>
        <button onClick={handleClick}>Add to Cart</button> {/* New code */}
      </div>
    );
};

export default BakeryItem;