import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom'
import Home from './Pages/Home';

function App() {
  return (
    <Router> 
      {/* <Header /> */}
            <Routes>  
              <Route path='/' element={<Home /> } exact /> 
              <Route path='*' element={<Navigate to ='/' />} />  
            </Routes>
      {/* <Footer /> */}
    </Router>

  );
}

export default App;
