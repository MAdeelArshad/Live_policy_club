import './App.css';
import MenuAppBar from './Components/AppBar';
import ActiveLastBreadcrumb from './Components/BreadCrum';
import CompactProfile from './Components/CompactProfile';
import Bill from './Components/Bill';

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <ActiveLastBreadcrumb />
      
      <Bill />


    </div>
  );
}

export default App;
