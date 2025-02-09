import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      {/* <ProfileCard /> */}

      <Footer />
    </div>
  );
}

function Header() {
  return (
    // <h1 style={{ color: "red", fontSize: "42px", textTransform: "uppercase" }}>
    <header className="header">
      <h1>Welcome to React Pizza</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //   const pizzas = {};
  const numPizzas = pizzas.length;

  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>Authentic Italian Menu</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Nothing Found!</p>
      )}

      {/* <Pizza
            name="Pizza Spinachi"
            ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
            photoName="pizzas/spinaci.jpg"
            price={10}
        /> */}
    </div>
  );
}

function Pizza(props) {
  // console.log(props);
  // console.log(props.pizzaObj);

  if (props.pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <img alt={props.pizzaObj.name} src={props.pizzaObj.photoName} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <p>Price: {props.pizzaObj.price + 3}</p>
      </div>
    </li>
  );
}

function Footer() {
  //   const time = new Date().toLocaleTimeString();
  //   return React.createElement("footer", null, `${time} Copyright, 2025`);
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  //   if (hour >= openHour && hour <= closeHour) alert("Open!");
  //   else alert("Closed!");

  //   if (!isOpen)
  //     return (
  //       <div>
  //         <p>Open untillll {closeHour}:00</p>
  //       </div>
  //     );

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}. We're currently Open! */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are open from {openHour} AM to {closeHour} PM
        </p>
      )}
    </footer>
  );
}

// DESTRUCTURING PROPS
function Order({ openHour, closeHour }) {
  return (
    <div>
      <p>
        Open form {openHour}:00 AM to {closeHour}:00 PM
      </p>
      <br />
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
