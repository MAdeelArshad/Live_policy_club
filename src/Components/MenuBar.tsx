import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeBreadcrumsValue } from "../Redux/Layout/Breadcrums/actions";

const MenuBar = () => {
  const dispatch = useDispatch();
  // const breadcrumsValue = useSelector(
  //   (state: IAppState) => state.breadcrumsState.breadCrumbValue
  // );
  const handleBreadCrums = (value: string) => {
    dispatch(changeBreadcrumsValue(value));
  };
  return (
    <>
      <Link to="/Private">
        {" "}
        <Button
          onClick={() => {
            handleBreadCrums("Private");
          }}
          variant="outline-danger"
        >
          Private
        </Button>{" "}
      </Link>
      {"   "}
      <Link to="/Public">
        {" "}
        <Button
          onClick={() => {
            handleBreadCrums("Public");
          }}
          variant="outline-success"
        >
          Public
        </Button>
      </Link>
      {"   "}
      <Link to="/Governoment">
        {" "}
        <Button
          onClick={() => {
            handleBreadCrums("Governoment");
          }}
          variant="outline-secondary"
        >
          Governoment
        </Button>
      </Link>
      {"   "}
      <Link to="/Election">
        {" "}
        <Button
          onClick={() => {
            handleBreadCrums("Elections");
          }}
          variant="outline-primary"
        >
          Elections
        </Button>
      </Link>
      {"   "}
      <Link to="/Policy">
        {" "}
        <Button
          onClick={() => {
            handleBreadCrums("Policy");
          }}
          variant="outline-dark"
        >
          Policy
        </Button>
      </Link>
      {"   "}
      <Link to="/About">
        {" "}
        <Button
          onClick={() => {
            handleBreadCrums("About");
          }}
          variant="outline-warning"
        >
          About
        </Button>
      </Link>
      {"   "}
      <br /> <br />
    </>
  );
};

export default MenuBar;
