import { useState } from "react";

export default function TipCalc({ onAddItems }) {
  const [bill, setBill] = useState("");
  const [myRating, setMyRating] = useState("");
  const [friendRating, setFriendRating] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    // if (!description) return;
    // const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);
    // onAddItems(newItem);
    // handleAddItems(newItem);
    // setDescription("");
    // setQuantity(1);
  }
  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <div>
          <p> Bill...</p>
          <input
            type="text"
            placeholder="Bill..."
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>

        <div>
          <p> Your Rating</p>
          <select
            value={myRating}
            onChange={(e) => setMyRating(Number(e.target.value))}
          >
            <option value={0} key={0}>
              Not Satisfied - 0%
            </option>
            <option value={5} key={5}>
              Okay - 5%
            </option>
            <option value={10} key={10}>
              Good - 10%
            </option>
            <option value={20} key={20}>
              Very Satisfied - 20%
            </option>
          </select>
        </div>

        <div>
          <p> Your Friends Rating</p>
          <select
            value={friendRating}
            onChange={(e) => setFriendRating(Number(e.target.value))}
          >
            <option value={0} key={0}>
              Not Satisfied - 0%
            </option>
            <option value={5} key={5}>
              Okay - 5%
            </option>
            <option value={10} key={10}>
              Good - 10%
            </option>
            <option value={20} key={20}>
              Very Satisfied - 20%
            </option>
          </select>
        </div>
      </form>
    </div>
  );
}
