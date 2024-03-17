import { useState, useEffect } from  "react";
import styled from "styled-components";
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from "react-router-dom";



const Veggies = () => {
 
  const [veggies,setVeggies] = useState([]);
  useEffect(()=>{
  veggiesData()
   },[])
 const veggiesData =  async() =>{
 const check = localStorage.getItem("veggies")

 if(check){
  setVeggies(JSON.parse(check));
}else{
  const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_APP_API_KEY}&number=9&tags=vegetarian`)
  const data = await api.json()
  localStorage.setItem("veggies",JSON.stringify(data.recipes))
  setVeggies(data.recipes)
  console.log(data.recipes)
   
}


 }
  return (
    <div>
    <Wrapper>
      <h1>Veggies Picks</h1>
      <Splide options={
        {
          perPage:3,
          gap:'3rem',
          pagination:false,
          drag:"free",
          arrows:false
        }
      }>
        {veggies.map((recipe)=>{
          return(
        <SplideSlide  key={recipe.id}>
            <Card >
            <Link to={"./recipes/" + recipe.id}>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title}/>
            <Gradient/>
            </Link>
            </Card>  
             </SplideSlide>
        
          )
        })}
        </Splide>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin:4rem 0rem;
  font-family: "Poppins";

  
  h1{
    font-size: 2em;
    font-weight: 600;
    color: #403c3c;
    font-family: 'Poppins';
    transition: 0.5s ease-in;
    &:hover{
      color: #8d8787;
      transition: 0.2s ease-out;
  
    }
    }
`;

const Card = styled.div`
  min-height:20rem;
  width: 100%;
  border-radius:25px;
  overflow: hidden;
  position: relative;
  

  p{
  
    position: absolute;
    z-index: 10;
    text-align: center;
    font-weight: 600;
    color: white;
    left: 50%;
    top: 40%;
    width: 100%;
    transform: translate(-50%,0%);
    font-size: 1.2em;
    height: 40%;
    justify-content: center;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    word-spacing:0.2pc;


  }
  img{
    border-radius: 2rem;
    position: absolute;
    background-color: #ffffff24;
    box-shadow: 0px 0px 20px 14px rgba(0,0,0,0.2);
    object-fit: cover;
    width: 100%;
    height: 100%;  
   
    }
`
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`


export default Veggies