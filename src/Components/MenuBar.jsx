import { Button } from "react-bootstrap";

const MenuBar = () => {
    return ( 
        <>
  <Button variant="outline-danger">Private</Button> {"   "}
  <Button variant="outline-success">Public</Button>{"   "}
  <Button variant="outline-secondary">Governoment</Button>{"   "}
  <Button variant="outline-primary">Elections</Button>{"   "}
  <Button variant="outline-dark">Policy</Button>{"   "}
  <br /> <br />
</>
     );
}
 
export default MenuBar;

