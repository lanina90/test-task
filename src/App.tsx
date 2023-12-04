import React from 'react';
import Header from "./components/layout/Header/Header";
import Hero from "./components/Hero/Hero";
import Users from "./components/UsersSection/Users";

import './App.scss';
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Users/>
      <Registration/>
    </>
  );
}

export default App;
