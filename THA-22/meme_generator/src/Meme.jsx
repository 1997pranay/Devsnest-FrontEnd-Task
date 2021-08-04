import { useState } from "react";

const Meme = ({ meme, setMeme }) => {
  const [form, setform] = useState({
    template_id: meme.id,
    username: process.env.REACT_APP_USERNAME,
    password: process.env.REACT_APP_PASSWORD,
    boxes: [],
  });
  const [image, setImage] = useState(meme.url);
  const handleClick = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, index) => {
      url+=`&boxes[${index}][text]=${box.text}`;
      return 0;
    });
    console.log(url);
    fetch(url, {
      method: "POST",
    }).then((res) => {
      res.json().then((data) => {
        console.log(data)
        setImage(data.data.url);
      });
    });
  };
  return (
    <div className="meme">
      <img src={image} alt="" />
      <div>
        {[...Array(meme.box_count)].map((key, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Meme caption ${index + 1}`}
            onChange={(e) => {
              const newBoxes = form.boxes;
              newBoxes[index] = { text: e.target.value };
              setform({ ...form, boxes: newBoxes });
            }}
          ></input>
        ))}
      </div>
      <div>
        <button onClick={handleClick}>Get Meme</button>
        <button onClick={() => setMeme(null)}>Go Back</button>
      </div>
    </div>
  );
};

export default Meme;