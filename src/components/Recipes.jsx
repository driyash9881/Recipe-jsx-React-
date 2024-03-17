import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'


const Recipes = () => {
  const params = useParams()
  const[recipe,setRecipe]= useState({})
  const [activeTab, setActiveTab] = useState("Instructions")
  
  const reciepeData = async() => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_APP_API_KEY}`) 
    const detailedData = await data.json()
    setRecipe(detailedData)
  }
  useEffect(()=>{
    reciepeData()
  },[params.name])

  return (

    <Container>
      <ColOne>
       <h1>{recipe.title}</h1>
       <img src={recipe.image} alt={recipe.title} />
       {/* <p</p> */}
       </ColOne>
     
     <ColTwo> 
     <div>
     <Button className={ activeTab === ("Instructions") ? "active" : " "}  onClick={()=>setActiveTab("Instructions")}>Instructions</Button>
     <Button className={activeTab === ("Ingredients")? "active" : " "} onClick={()=>setActiveTab("Ingredients")}>Ingredients</Button>
  </div>
  <div>
    {activeTab === ("Instructions") && (
        <div>
         <h2 dangerouslySetInnerHTML={{__html:recipe.summary}}></h2>
         <br/>
                 <h3 dangerouslySetInnerHTML={{__html:recipe.instructions}}></h3>  
        </div>
    ) }
    {activeTab === ("Ingredients") && (
        <ul>
       {recipe.extendedIngredients.map((recipes)=>(<li>{recipes.original}</li>))}
        </ul>
    ) }
      </div>
   
    
     </ColTwo>
    </Container>
  )
}

const Container = styled.div`
h1{
  color: #3a3838;
}
margin: 3rem 5rem;
align-items: center;
justify-content: center;
font-family: 'Poppins';
display: grid;
grid-template-columns: repeat(2 , 500px); /* Two rows with a fixed height of 100px each */
gap: 7rem; /* Adjust the gap between rows */
`
const ColOne = styled.div`
display: flex;
flex-direction: column;
width: 20rem;
height: 30rem;
align-items: center;
justify-content: start;
gap:2rem
h1{
  font-size: 2em;
  color: grey;
}


img{
  width: fit-content;
  border-radius: 20px;
  
}
`
const ColTwo = styled.div`
width: 40rem;
height: 30rem;
display: flex;
flex-direction: column;
gap: 1rem;
h2{
  letter-spacing: 1px;
  line-height: 1.5rem;
  padding: 20px;
  height: 10rem;
  font-size: 1em;
  font-weight: 500;
  color: #2d2e2e;
}
h3{
  margin-top: 6rem;
  letter-spacing: 1px;
  line-height: 1.8rem;
  padding: 20px;
  height: 10rem;
  font-size: 0.9em;
  font-weight: 400;

}

`
const Button = styled.div`
   position: relative;
    display: inline-grid;
    border: 1px solid black;
    border-radius: 5px;
    width: 10rem;
    height: 2.5rem;
    padding: 1px;
    margin:1rem 1rem;
    font-size: 1.2em;
    font-weight: 500;
    text-align:center;
   
    &.active{
      border: 1px solid black;
      background-color: black;
      color: white;
    }
    
   
`


export default Recipes