import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Articles from './components/Articles/Articles';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  const location = useLocation();
  return (
    <>
    {!location.pathname.includes('dashboard') && <Header /> }
     
     <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/home' element={<Home />} />
         <Route path='/articles' element={<Articles />} />
         <Route path='/dashboard' element={<Dashboard />} />
         <Route path='/login' element={<Login />} />
         <Route path='/sign-up' element={<SignUp />}/>
     </Routes>
     
    </>
  );
}

export default App;
