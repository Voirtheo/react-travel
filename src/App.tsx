import React from 'react';
import styles from './App.module.css';
import { Header, Footer, Content } from './components'



function App() {

  return (
    <div className={styles.App}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
