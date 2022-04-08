import { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Articles from './components/Articles/Articles';
import { CreatePost } from './components/Dashboard/CreatePost/CreatePost';
import Dashboard from './components/Dashboard/Dashboard';
import Overview from './components/Dashboard/Overview/Overview';
import PostList from './components/Dashboard/PostList/PostList';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import SignUp from './components/SignUp/SignUp';
import useStorage from './hooks/useStorage';
export const AuthContext = createContext(null)
function App() {
  const location = useLocation();
  const  [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  /* get user */
  const {users, setUsers}= useStorage();
  
  return (
    <>
    <AuthContext.Provider value={{setIsAuth, isAuth, users ,setUsers}}>
    {!location.pathname.includes('dashboard') && <Header /> }
     <Toaster position="top-center" reverseOrder={false} />
     <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/home' element={<Home />} />
         <Route path='/articles' element={<Articles />} />
         <Route path='/dashboard' element={<Dashboard />} >
             <Route index="1" path='overview' element={<Overview />} />
             <Route path='create-post' element={<CreatePost />} />
             <Route path='post-lists' element={<PostList />} />
         </Route>
         <Route path='/login' element={<Login />} />
         <Route path='/sign-up' element={<SignUp />}/>
         <Route path='*' element={<NotFound />} />
     </Routes>
     </AuthContext.Provider>
    </>
  );
}

export default App;
