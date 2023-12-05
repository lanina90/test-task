import React, {useState} from 'react';
import { lazy } from 'react';
import './App.scss';
const Header = lazy(() => import('./components/layout/Header/Header'));
const Hero = lazy(() => import('./components/Hero/Hero'));
const Users = lazy(() => import('./components/UsersSection/Users'));
const Registration = lazy(() => import('./components/Registration/Registration'));



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
