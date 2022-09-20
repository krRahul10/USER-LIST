import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Register } from './Components/Register';
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <h1>Hello Todo app</h1>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
     </Routes>
    
    </div>
  );
}

export default App;
