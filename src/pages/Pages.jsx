import React from 'react'
import Home from './Home'
import { Route,Routes} from 'react-router-dom'
import Cuisine from '../components/Cuisine'
import SearchData from '../components/SearchData'
import Recipes from '../components/Recipes'
import {motion , AnimatePresence } from 'framer-motion'


const Pages = () => {
  return (
    <div>
      <AnimatePresence wait>
        <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/cuisine/:type' element={<Cuisine/>} />
        <Route path='/searchData/:search' element={<SearchData/>} />
        <Route path='/recipes/:name' element={<Recipes/>}/>
        <Route path='/cuisine/italian/recipes/:name' element={<Recipes/>}/>
        <Route path='/cuisine/thai/recipes/:name' element={<Recipes/>}/>
        <Route path='/cuisine/american/recipes/:name' element={<Recipes/>}/>
        <Route path='/cuisine/japanese/recipes/:name' element={<Recipes/>}/>
       </Routes>
 </AnimatePresence>
 

    </div>
  )
}

export default Pages