import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Register } from './Components/Register';
import {Route,Routes} from 'react-router-dom'
import { Edit } from './Components/Edit';
import { Details } from './Components/Details';
function App() {
  return (
    <div className="App">
     <h1>Hello Todo app</h1>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/view/:id' element={<Details/>}/>
     </Routes>
    
    </div>
  );
}

export default App;
