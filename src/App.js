
import { Routes, Route} from 'react-router-dom';
import './App.scss';
import Layout from './Components/Layouts';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact';


function App() {
  return (
   <>
   <Sidebar />
 
  <div>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route index element={<Home />} />
      <Route path='/About' element={<About />} /> 
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
   
   </>
  );
}

export default App;
