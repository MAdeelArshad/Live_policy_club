import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const BreadCrum = (props) => {
  return (
    
    <Breadcrumb>
      <Breadcrumb.Item onClick = {()=>props.handleBreadCrums("")}>
        <Link to="/Home">Home</Link>
      </Breadcrumb.Item>
      {/* <Breadcrumb.Item href="">
  Library
</Breadcrumb.Item> */}
      <Breadcrumb.Item active>{props.currentPage}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrum;
