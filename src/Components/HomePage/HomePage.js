import React from 'react'
import './HomePage.css'
import {createContext} from 'react';
import Coreteam from '../Coreteam/Coreteam';
import Partners from '../Partners/Partners';

export const HomePageContext = createContext()

export default function HomePage() {
  
  const scrollToNext = (id) => {
    console.log(id);
    console.log(document.getElementById(id));
    document.getElementById(id).scrollIntoView(true);
  }

  return (
    <HomePageContext.Provider value={{scrollToNext}}>
      <div className="HomePage">
        <Coreteam />
        
        <Partners />
      </div>
    </HomePageContext.Provider>
  )
}