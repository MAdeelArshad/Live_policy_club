import { Breadcrumb } from "react-bootstrap";

const BreadCrum = () => {
    return ( 
<Breadcrumb>
<Breadcrumb.Item >Home</Breadcrumb.Item>
{/* <Breadcrumb.Item href="">
  Library
</Breadcrumb.Item> */}
<Breadcrumb.Item active>Governoment</Breadcrumb.Item>
</Breadcrumb>
     );
}
 
export default BreadCrum;