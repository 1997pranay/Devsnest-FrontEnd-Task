import "./Card.css";
function Card({ title, value,handleDelete,id }){
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{value}</p>
      <button className="delete-btn" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Card;


