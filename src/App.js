import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Breadcrumb from './Components/BreadCrum';
import MenuBar from './Components/MenuBar';
import CompactProfile from './Components/CompactProfile';
import Bill from './Components/Bill';



function App() {
  return (
    <div className="App">
      
    <NavBar />
    <Breadcrumb />
    <MenuBar />
    
    <Bill />
    
<center>
<CompactProfile />
<hr />
<CompactProfile />
<hr />
<CompactProfile />
</center>



    

    </div>
  );
}

export default App;


