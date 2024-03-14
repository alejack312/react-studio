import "./App.css";
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [data, setData] = useState(bakeryData);
  const [total, setTotal] = useState(0);

  const loadData = () => {
    setData(bakeryData);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i];
    }
    setTotal(sum);
  }, [cart]);

  const addToCart = (price) => {
    setCart([...cart, price]);
  };

  const buildElements = () => {
    const jsxlist = bakeryData.map(
      (
        item,
        index // TODO: map bakeryData to BakeryItem components
      ) => <BakeryItem key={index} {...item} addToCart={addToCart} />
    );

    return jsxlist;
  };

  const showCart = () => {
    if (cart.length === 0) {
      console.log("cart is empty");
      return <p>Cart is empty</p>;
    }

    const jsxlist = cart.map((price, index) => {
      return <p key={index}>$ {price}</p>;
    });

    return jsxlist;
  };

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="content">
        <div className="menu">
          <h2>Menu</h2>
          <div className="menuItems">{buildElements()}</div>
        </div>
        <div className="cart">
          <h2>Cart</h2>
          {showCart()}

          <h3>Total: ${total}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
