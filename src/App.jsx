// Switch is voor React-Router-Dom v5, en Routes is v6. Geeft waarschijnlijk daarom deze foutmelding:
// Uncaught SyntaxError: The requested module '/node_modules/.vite/deps/react-router-dom.js?v=488cdfa7' does not provide an export named 'useHistory' (at AuthContext.jsx:2:10)
// React-router-dom v5 --> React-router-dom v6
// v5: Switch --> v6: Routes
// v5: Redirect --> v6: Navigate
// v5: useHistory --> v6: useNavigate.
// v5: history.push('/path') --> v6: navigate('/path')

// exact path versus path: https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path
// The new version of react - v6 does not support exact anymore. 
import React, { useContext } from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthContext } from './context/AuthContext';
import './App.css';

export default function App() {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <NavBar />
      <div className="content">
        <Routes>
          {/* <Route exact path="/">
            <Home />
          </Route> */}

          <Route path="/" element={<Home />} />


          {/* <Route path="/profile">
            {isAuth ? <Profile /> : <Redirect to="/" />}
          </Route> */}

          {/* <Route path="/profile" element={isAuth ? <Profile /> : <Redirect to="/" />} /> */}
          <Route path="/profile" element={isAuth ? <Profile /> : <Navigate to="/" />} />


          {/* <Route exact path="/signin">
            <SignIn />
          </Route> */}

          <Route path="/signin" element={<SignIn />} />


          {/* <Route exact path="/signup">
            <SignUp />
          </Route> */}

          <Route path="/signup" element={ <SignUp />} />

        </Routes>
      </div>
    </>
  );
}



