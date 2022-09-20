import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
function App() {
  return (
    <div className="App">
     <h1>Hello Todo app</h1>
     <Navbar/>
     <Home/>
    </div>
  );
}

export default App;
