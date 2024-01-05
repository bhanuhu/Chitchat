import './App.css';
import Signin from './Signin';
import Inside from './Inside'
import Profile from './Profile/Profile';
import Saved from './Saved/Saved';
import Following from './Following/Following';
import Communities from './Community/Communities';
import Sports from './Sports/Sports';
import Education from './Education/Education';
import Health from './Health/Health';
import Travel from './Travel/Travel';
import Programming from './Programming/Programming';
import Food from './Food/Food';
import Business from './Business/Business';

import { useEffect,useState } from 'react';

import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {

  

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Signin/>}/>
    <Route path='inside' element={<Inside/>}/>
    <Route path='profile' element={<Profile/>}/>
    <Route path='saved' element={<Saved/>}/>
    <Route path='following' element={<Following/>}/>
    <Route path='communities' element={<Communities/>}/>
    <Route path='sports' element={<Sports/>}/>
    <Route path='health' element={<Health/>}/>
    <Route path='travel' element={<Travel/>}/>
    <Route path='programming' element={<Programming/>}/>
    <Route path='education' element={<Education/>}/>
    <Route path='food' element={<Food/>}/>
    <Route path='business' element={<Business/>}/>

    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
