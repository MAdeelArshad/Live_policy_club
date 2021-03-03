import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Breadcrumb from './Components/BreadCrum';
import MenuBar from './Components/MenuBar';
import Governoment from './Components/Pages/Governoment';
// import Policy from './Components/Pages/Policy';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Elections from './Components/Pages/Elections';
import UserProfile from './Components/Pages/UserProfile';
import Policy from './Components/Pages/Policy';


function App() {
  return (
    <Router>

    
    <div className="App">
    <NavBar />
    <Breadcrumb />
    <MenuBar />
    <h2>Welcome !</h2>
    
   {/* <Governoment /> */}
   {/* <Policy /> */}
   
   {/* <Elections /> */}
    {/* <UserProfile /> */}
    

    </div>

    <Switch>
    <Route path="/Home">
            <App.js />
    </Route>

    </Switch>

    </Router>
  );
}

export default App;


