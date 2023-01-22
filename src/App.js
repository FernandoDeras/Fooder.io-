import React from 'react';
import './styles/style.css';
import Meal from './Components/Meal';
import Recipe from './Components/Recipe';
import FormValidation from './Components/Contact';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
   <Routes>
      <Route  path="/" element={<Meal/>}/>
      <Route exact path="/:recipeId" element={<Recipe/>}/>
      <Route path="/contact" element={<FormValidation/>}/>
      </Routes>
    </>
  )
}

export default App;