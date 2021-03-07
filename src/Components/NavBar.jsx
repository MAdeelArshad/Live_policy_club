import { Navbar } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <Navbar bg="dark">
      <Link to="/Home" onClick = {()=>props.handleBreadCrums("") } >
        <Navbar.Brand href="#home" style={{ color: "wheat" }}>
          <h3>Grovrr</h3>
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle />

      {/* <Navbar.Collapse className="justify-content-center" style={{color: "wheat"}}>
            hsfjd
        </Navbar.Collapse> */}

      <Navbar.Collapse
        className="justify-content-end"
        style={{ color: "wheat" }}
      >
        <Link to="/Search" onClick = {()=>props.handleBreadCrums("Search") }>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
        </Link>

        <Link to="/UserProfile" onClick = {()=>props.handleBreadCrums("Profile") } >
          <img
            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            alt="Profile Pic"
            width="50em"
            height="50em"
          />
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
