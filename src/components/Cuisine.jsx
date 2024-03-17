import { useState,useEffect } from 'react'
import {useParams , Link } from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'

  

const Cuisine = () => {
 const [cuisine, setCuisine] = useState([])
 let params = useParams()
 const getCuisine = async(name) => {
 const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_API_KEY}&cuisine=${name}`)
 const recipes = await data.json()
 setCuisine(recipes.results)
 console.log('Received data:', data.results)

 }
 useEffect(()=>{
    getCuisine(params.type)
 },[params.type])
  return (
    <Container>
          <h1>{params.type}</h1>
      <Grid  
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.5}}
       >
  
     {cuisine.map((type)=>{
     return(
        <Card key={type.id}>
        <Slink to={`./recipes/${type.id}`}>
        <img src={type.image} alt={type.title}/>
        <p>{type.title}</p>  
        </Slink>
        </Card>   
     )
     })}
      </Grid>
    </Container>
    
  )
    }
 const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    h1{
      font-family: 'Poppins';
    text-transform: capitalize;
    font-size: 5em;
    letter-spacing: 1px;
    margin: 0 25rem;
    padding: 21px 1rem;
    transition: 0.5s ease-in;
    &:hover{
      color: #8d8787;
      transition: 0.2s ease-out;
    }
    }
 `
  const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
    margin: 0 25rem;

 `
const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
    }
   p{
    color: #8f938dd1;
    font-family: 'Poppins';
    font-size: 1.5em;
    text-align: center;
    padding: 1rem;
  }
   
  
`
const Slink = styled(Link)`
 text-decoration: none;
 color: inherit;
`


export default Cuisine