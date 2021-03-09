import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../Redux/store";
import { changeBreadcrumsValue } from "../Redux/Layout/Breadcrums/actions";
const BreadCrum = () => {
  const dispatch = useDispatch();
  const breadcrumsValue = useSelector(
    (state: IAppState) => state.breadcrumsState.breadcrumsValue
  );
  const handleBreadCrums = (value: string) => {
    dispatch(changeBreadcrumsValue(value));
  };
  return (
    <Breadcrumb>
      <Breadcrumb.Item onClick={() => handleBreadCrums("")}>
        <Link to="/Home">Home</Link>
      </Breadcrumb.Item>
      {/* <Breadcrumb.Item href="">
  Library
</Breadcrumb.Item> */}
      <Breadcrumb.Item active>{breadcrumsValue}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrum;
