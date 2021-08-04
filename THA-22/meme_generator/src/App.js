import {useEffect,useState} from "react";
import Template from "./Template";
import './App.css';
import Meme from "./Meme";

function App() {
  const [templates,settemplates]=useState([]);
  const [meme,setmeme]=useState(null);
  useEffect(() => {
    async function xd() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      settemplates(data.data.memes);
    }
    xd();
  }, []);

  return (
    <div className="App">
      <h1>Meme Generator</h1>
      {meme === null ? (
        <Template templates={templates} setMeme={setmeme} />
      ) : (
        <Meme meme={meme} setMeme={setmeme} />
      )}
    </div>
  );
}

export default App;
