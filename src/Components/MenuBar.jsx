import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <>
      <Link to="/Private">
        {" "}
        <Button variant="outline-danger">Private</Button>{" "}
      </Link>
      {"   "}
      <Link to="/Public">
        {" "}
        <Button variant="outline-success">Public</Button>
      </Link>
      {"   "}
      <Link to="/Governoment">
        {" "}
        <Button variant="outline-secondary">Governoment</Button>
      </Link>
      {"   "}
      <Link to="/Election">
        {" "}
        <Button variant="outline-primary">Elections</Button>
      </Link>
      {"   "}
      <Link to="/Policy">
        {" "}
        <Button variant="outline-dark">Policy</Button>
      </Link>
      {"   "}
      <Link to="/About">
        {" "}
        <Button variant="outline-warning">About</Button>
      </Link>
      {"   "}
      <br /> <br />
    </>
  );
};

export default MenuBar;
