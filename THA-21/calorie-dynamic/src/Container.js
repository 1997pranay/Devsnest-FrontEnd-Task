import Card from "./Card";
import "./Container.css";


const Container = ({ cards,handleClick }) => {
  const handleDelete = (index) => {
    const newCards = cards.filter((i, index2) => index2 !== index);
    handleClick(newCards);
  };

const handleEdit = (index, value) => {
  const newCards = [...cards];
  newCards[index] = value;
  handleClick(newCards);
};
  return (
    <div className="Container">
      {!cards || cards.length === 0 ? (
        <div>Nothing to show here, Add something </div>
      ) : (
        cards.map((i, index) => (
          <Card
            index={index}
            title={i.title}
            value={i.value}
            key={index}
            handleClick={() => handleDelete(index)}
            handleEdit={handleEdit}
            state={handleClick}
          />
        ))
      )}
    </div>
  );
};

export default Container;