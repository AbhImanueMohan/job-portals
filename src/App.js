import './App.css';

import Navbars from './Nvabar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Assembly from './Assembly';
import Home2 from './Home2';
import Home from './Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbars/>
        <Routes>
          <Route path='/Home2' element={<Home2/>}/>
          <Route path='/Assembly' element={<Assembly/>}/>

        </Routes>
</BrowserRouter>
 
    </div>
  );
}

export default App;
