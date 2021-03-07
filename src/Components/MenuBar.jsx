import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuBar = (props) => {
  return (
    <>
      <Link to="/Private">
        {" "}
        <Button onClick={()=>{ props.handleBreadCrums("Private")}} variant="outline-danger">Private</Button>{" "}
      </Link>
      {"   "}
      <Link to="/Public">
        {" "}
        <Button onClick={()=>{ props.handleBreadCrums("Public")}} variant="outline-success">Public</Button>
      </Link>
      {"   "}
      <Link to="/Governoment">
        {" "}
        <Button onClick={()=>{ props.handleBreadCrums("Governoment")}} variant="outline-secondary">Governoment</Button>
      </Link>
      {"   "}
      <Link to="/Election">
        {" "}
        <Button onClick={()=>{ props.handleBreadCrums("Elections")}} variant="outline-primary">Elections</Button>
      </Link>
      {"   "}
      <Link to="/Policy">
        {" "}
        <Button onClick={()=>{ props.handleBreadCrums("Policy")}} variant="outline-dark">Policy</Button>
      </Link>
      {"   "}
      <Link to="/About">
        {" "}
        <Button onClick={()=>{ props.handleBreadCrums("About")}} variant="outline-warning">About</Button>
      </Link>
      {"   "}
      <br /> <br />
    </>
  );
};

export default MenuBar;
