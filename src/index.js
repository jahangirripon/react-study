import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Steps from "./Steps";

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

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JS",
    level: "beginner",
    color: "#EFD81D",
  },
  {
    skill: "Laravel",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#EFD81D",
  },
];

function App() {
  return (
    <div className="container">
      {/* <Header /> */}
      {/* <Menu /> */}
      {/* <ProfileCard /> */}
      {/* <Footer /> */}
      <Steps />
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

function ProfileCard() {
  return (
    <div className="card">
      <Profile
        devName="Jonas Schmedtmann"
        devDesc="Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach."
        devPhoto="pizzas/spinaci.jpg"
      />
    </div>
  );
}

function Profile(props) {
  return (
    <div>
      <img src={props.devPhoto} alt={props.devName} className="profile-img" />
      <div className="card-content">
        <h2>{props.devName}</h2>
        <p className="description">{props.devDesc}</p>
        <Skills></Skills>
      </div>
    </div>
  );
}

function Skills(props) {
  // const skills = {};
  const skill = skills;
  const numSkills = skills.length;
  return (
    <div className="tags">
      {/*
      <div className="tags">
        // <span className="tag blue">HTML+CSS 💙</span>
        // <span className="tag yellow">JavaScript 🤟</span>
      </div> */}

      {numSkills > 0 ? (
        <>
          <ul className="tags">
            {skills.map((skill) => (
              <Skill
                skill={skill.skill}
                color={skill.color}
                level={skill.level}
                key={skill.skill}
              ></Skill>
            ))}
          </ul>
        </>
      ) : (
        <p>Nothing Found!</p>
      )}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <span
      className="tag"
      style={{ backgroundColor: color, padding: "5px", borderRadius: "3px" }}
    >
      {skill}
      {level === "advanced"
        ? "💪"
        : level === "intermediate"
        ? "🆗"
        : level === "beginner"
        ? "😐"
        : "❓"}
    </span>
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

  //   if (props.pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img alt={props.pizzaObj.name} src={props.pizzaObj.photoName} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <p>
          <b>
            Price:{" "}
            {props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price + 3}
          </b>
        </p>
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
