
import { Navbar } from "react-bootstrap";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const NavBar = () => {
    return ( 
    <Navbar bg="dark" >
        <Navbar.Brand href="#home" style={{color: "wheat"}} ><h3>Grovrr</h3></Navbar.Brand>
        <Navbar.Toggle />

        {/* <Navbar.Collapse className="justify-content-center" style={{color: "wheat"}}>
            hsfjd
        </Navbar.Collapse> */}

        <Navbar.Collapse className="justify-content-end" style={{color: "wheat"}}>
        <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>

          <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="Profile Pic" width="50em" height="50em" />
        </Navbar.Collapse>
      </Navbar>
       );
}
 



export default NavBar;