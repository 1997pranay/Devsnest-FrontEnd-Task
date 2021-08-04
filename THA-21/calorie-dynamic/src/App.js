import {useState} from "react";
import './App.css';
import Container from "./Container"
function App() {
  const [calories,setcalories]=useState("");
  const [item,setitem]=useState("")
  const [cards,setcards]=useState("")
  const handleClick=(e)=>{
    const newcard=[...cards,{title:item,value:calories}];
    setcards(newcard);
  }

  return (
    <div className="App">
      <form>
        <label>Item</label>
        <br></br>
        <input
        type="text"
        value={item}
        onChange={(e)=> setitem(e.target.value)}
        />
        <input
            type="number"
            value={calories}
            onChange={(e) => setcalories(e.target.value)}
          />
        <br></br>
        <button onClick={handleClick}>Add</button>
      </form>
        <Container cards={cards} handleClick={setcards} />
    </div>
  );
}

export default App;
