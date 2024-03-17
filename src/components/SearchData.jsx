import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const SearchData = () => {
const [searchdata , setSearchData]=useState(undefined)
   const params= useParams()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getSearchedData = async(name)=> {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_API_KEY}&query=${name}`
        )
        const data = await api.json()
        if (data.results && data.results.length > 0) {
          setSearchData(data.results)
        } else {
          searchdata([])
        
        }
        console.log(data.results)
      } catch (error) {
        console.error('Error fetching data:', error)
        setSearchData()
      
      }
    }
    useEffect(()=>{
     getSearchedData(params.search)
    },[getSearchedData, params.search])
  return (
    <Container>
      <h1>{params.search}</h1>
      <Grid>
        {searchdata && searchdata.length > 0 &&
          searchdata.map((search) => {
            return (                
              <Card key={search.id}>  
              <img src={search.image} alt={search.id} />
             <p>{search.title}</p>
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
      font-size: 3em;
      text-align: center;
      align-items: center;
      padding: 2px;
    }
 `
  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-gap: 3rem;
    margin: 0 25rem;

 `
const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
   
    }
   p{
    text-align: center;
    padding: 1rem;
   }
  
`
export default SearchData