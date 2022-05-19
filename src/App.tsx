import React from 'react';
import styles from './App.module.css';
import { HomePage, SignInPage, RegistPage, DetailPage } from './pages';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';



function App() {

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signIn' element={<SignInPage />} />
          <Route path='register' element={<RegistPage />} />
          <Route path='detail/:touristRouteId' element={<DetailPage />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
