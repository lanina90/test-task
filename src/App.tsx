import React, {useState} from 'react';
import Header from "./components/layout/Header/Header";
import Hero from "./components/Hero/Hero";
import Users from "./components/UsersSection/Users";

import './App.scss';
import Registration from "./components/Registration/Registration";

function App() {
  const [collapsePages, setCollapsePages] = useState(false);

  return (
    <>
      <Header/>
      <Hero/>
      <Users collapsePages={collapsePages} setCollapsePages={setCollapsePages}/>
      <Registration setCollapsePages={setCollapsePages}/>
    </>
  );
}

export default App;
