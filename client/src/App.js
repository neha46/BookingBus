import './resources/global.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PublicRoutes from './components/PublicRoutes';
import ProtectedRoutes from './components/ProtectedRoutes';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoutes><Home/></ProtectedRoutes>}></Route>
        <Route path='/login' element={<PublicRoutes><Login/></PublicRoutes>}></Route>
        <Route path='/register' element={<PublicRoutes><Register/></PublicRoutes>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
