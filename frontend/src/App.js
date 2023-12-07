import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom'
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import GetMenus from './Pages/GetMenus';
import Details from './Components/Details';
import Update from './Pages/Update';

function App() {
  return (
    <Router> 
      {/* <Header /> */}
            <Routes>  
              <Route path='/' element={<Home /> } exact /> 
              <Route path='/admin' element={<Admin /> } exact /> 
              <Route path='/data' element={<GetMenus /> } exact /> 
              <Route path='/detail/:id' element={<Details /> } exact /> 
              <Route path='/update/:id' element={<Update /> } exact /> 
              <Route path='*' element={<Navigate to ='/' />} />  
            </Routes>
      {/* <Footer /> */}
    </Router>

  );
}

export default App;
