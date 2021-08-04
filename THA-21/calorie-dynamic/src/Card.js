import { useState } from "react";
import "./Card.css";
const Card = ({ index, title, value, handleClick, state, handleEdit }) => {
  const [isEdit, setEdit] = useState(false);
  const [currentTitle, setTitle] = useState(title);
  const [currentValue, setValue] = useState(value);
  const handleEditCard = () => {
    if (isEdit) {
      handleEdit(index, { title: currentTitle, value: currentValue });
      setEdit(!isEdit);
    } else {
      setEdit(!isEdit);
      setTitle(title);
      setValue(value);
    }
  };
  return (
    <div className="card">
      {isEdit ? (
        <div className="random">
          <input
            type="text"
            required="required"
            value={currentTitle}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <br></br>
          <input
            type="number"
            required="required"
            value={currentValue}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <br />
          <button className="edit-btn" onClick={handleEditCard}>
            Save
          </button>
        </div>
      ) : (
        <div>
          {" "}
          <h2>{title}</h2>
          <p>You Have Consumed {value} calories</p>
          <button className="delete-btn" onClick={handleClick}>
            Delete
          </button>
          <button className="edit-btn" onClick={handleEditCard}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;


