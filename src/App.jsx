import Pages from './pages/Pages'
import styled from 'styled-components'
import Category from './components/Category'
import {Link , BrowserRouter } from 'react-router-dom'
import Search from './components/Search'

function App() {
  return (
    <>
    <BrowserRouter>
<Logo> <SLink to={"/"}> Recipies.Jsx </SLink></Logo>
<Container>
      <Search/>
    <Category/>
     <Pages/>
    </Container>
    </BrowserRouter>
    

    </>
  )
}

const Container = styled.div`
  margin-top: -5rem;
`
const Logo =  styled.div`
  font-size: 1.9em;
  font-weight: 900;
  font-family: 'Poppins';
  padding: 2rem;
  margin-left: 2rem;

`
const SLink = styled(Link)`
  transition: ease-in 1ms;
  text-decoration: none;
  cursor: pointer;
  color: #01a3f4;
  &:hover{
    color: #0d0e0e;
    transition: ease-in 1ms;
  }
`
export default App
