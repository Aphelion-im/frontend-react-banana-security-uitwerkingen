import React, { createContext, useState } from 'react';
// import { useHistory } from 'react-router-dom'; Omschrijven naar:
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const [isAuth, toggleIsAuth] = useState(false);
  // const history = useHistory(); Omschrijven naar:
  const navigate = useNavigate();

  function login() {
    console.log('Gebruiker is ingelogd!');
    toggleIsAuth(true);
    // history.push('/profile'); Mogelijk omschrijven naar:
    navigate('/profile');
  }

  function logout() {
    console.log('Gebruiker is uitgelogd!');
    toggleIsAuth(false);
    // history.push('/'); Mogelijk omschrijven naar:
    navigate('/');
  }

  const contextData = {
    isAuth: isAuth,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;