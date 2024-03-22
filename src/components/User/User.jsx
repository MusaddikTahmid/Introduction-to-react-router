import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, phone, id, email } = user;
  const userStyle = {
    border: "2px solid tomato",
    padding: "10px",
    margin: "10px",
    borderRadius: "20px",
  };
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>Email : {email} </p>
      <p>Phone : {phone} </p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
