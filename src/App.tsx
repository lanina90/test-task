import React from 'react';
import Header from "./components/layout/Header/Header";
import Hero from "./components/Hero/Hero";
import Users from "./components/UsersSection/Users";

import './App.scss';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Users/>
    </>
  );
}

export default App;
