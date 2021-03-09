import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Breadcrumb from "./Components/BreadCrum";
import MenuBar from "./Components/MenuBar";
import Governoment from "./Components/Pages/Governoment";
// import Policy from './Components/Pages/Policy';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Elections from "./Components/Pages/Elections";
import UserProfile from "./Components/Pages/UserProfile";
import Policy from "./Components/Pages/Policy";
import Public from "./Components/Pages/Public";
import Home from "./Components/Pages/Home";
import Search from "./Components/Pages/Search";
import About from "./Components/Pages/About Page";

const app = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Breadcrumb />
        <MenuBar />
      </div>

      <Switch>
        <Route path="/Private">
          <Public />
        </Route>
        <Route path="/Public">
          <Public />
        </Route>
        <Route path="/Governoment">
          <Governoment />
        </Route>
        <Route path="/Election">
          <Elections />
        </Route>
        <Route path="/Policy">
          <Policy />
        </Route>
        <Route path="/UserProfile">
          <UserProfile />
        </Route>
        <Route path="/Search">
          <Search />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default app;

// class App extends Component {

//   componentDidMount() {
//     // Axios Request
//     // axios.get(`URL`)
//     //   .then(res => {
//     //     const persons = res.data;
//     //     this.setState({ persons });
//     //   })
//   }

//   render() {
//     return (
//     );
//   }
// }

// export default App;
