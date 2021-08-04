import Card from "./Card";
import "./Container.css";
import {useState} from "react";


const Container = ({ cards }) => {
  const [items,setitems]=useState([
    { title: "Pizza", value: "you have consumed 56 cals today",id:1 },
    { title: "Burger", value: "you have consumed 69 cals today",id:2 },
    { title: "Coke", value: "you have consumed 500 cals today",id:3},
    { title: "Fried Rice", value: "you have consumed 90 cals today",id:4 },
  ]
  );

  const handleDelete = (id) => {
    const newitems = items.filter((i) => i.id !== id);
    setitems(newitems);
  };

  return (
    <div className="card-container">
      {items.map((i) => (
        <Card
          title={i.title}
          value={i.value}
          id={i.id}
          handleDelete={handleDelete}
        />
      ))}

    </div>
  );
};

export default Container;