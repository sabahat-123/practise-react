
import './App.css';
import Signin from './Signin';
import Signup from './Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ToDo from './ToDo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/todo' element={<ToDo/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
