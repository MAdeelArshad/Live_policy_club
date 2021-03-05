import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const BreadCrum = () => {
    return ( 
<Breadcrumb>
<Breadcrumb.Item ><Link to="/Home">Home</Link></Breadcrumb.Item>
{/* <Breadcrumb.Item href="">
  Library
</Breadcrumb.Item> */}
<Breadcrumb.Item active>Governoment</Breadcrumb.Item>
</Breadcrumb>
     );
}
 
export default BreadCrum;