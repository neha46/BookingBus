import './resources/global.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import PublicRoutes from './components/PublicRoutes.js';
import ProtectedRoutes from './components/ProtectedRoutes.js';
import Loader from './components/Loader.js';
import {useSelector} from 'react-redux';
import AdminHome from './pages/Admin/AdminHome.js';
import AdminBuses from './pages/Admin/AdminBuses.js';
import AdminUsers from './pages/Admin/AdminUsers.js';
import BookNow from './pages/BookNow.js';
function App() {

  const {loading}=useSelector((state)=>state.alert)
  return (
    <div>
  
       {loading &&<Loader/>}
      <BrowserRouter> 
      <Routes>
        <Route path='/' element={<ProtectedRoutes><Home/></ProtectedRoutes>}></Route>
        <Route path='/book-now/:id' element={<ProtectedRoutes><BookNow/></ProtectedRoutes>}></Route>
        <Route path='/admin' element={<ProtectedRoutes><AdminHome/></ProtectedRoutes>}></Route>
        <Route path='/admin/buses' element={<ProtectedRoutes><AdminBuses/></ProtectedRoutes>}></Route>
        <Route path='/admin/users' element={<ProtectedRoutes><AdminUsers/></ProtectedRoutes>}></Route>
        <Route path='/login' element={<PublicRoutes><Login/></PublicRoutes>}></Route>
        <Route path='/register' element={<PublicRoutes><Register/></PublicRoutes>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
