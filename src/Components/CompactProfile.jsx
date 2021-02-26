
import { Card } from "react-bootstrap";


const CompactProfile = () => {
    return ( 
        <Card style={{ width: '15rem', border: "1px solid transparent"}}>
            <Card.Header style={{backgroundColor: "transparent" }} >
            <img  src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="Profile Pic" width="70em" height="70em" />
            </Card.Header>
   
  
  <Card.Body>
  <Card.Text>
      Name <br/>
      Rank
    </Card.Text>
    <Card.Title>Votes</Card.Title>
  </Card.Body>
</Card>
     );
}
 
export default CompactProfile;