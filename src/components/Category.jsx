import styled from 'styled-components';
import { PiHamburgerDuotone , PiPizzaDuotone  } from "react-icons/pi";
import { GiNoodles , GiChopsticks } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <Wrapper>
        <List>
            <NavSlink  to={'/cuisine/italian'} >
              <PiPizzaDuotone size={30} />
            <h2>Italian</h2>
       
            </NavSlink >
            <NavSlink to={'/cuisine/american'} > 
             <PiHamburgerDuotone size={30}/>
            <h2>American</h2> 
                
            </NavSlink>
            <NavSlink to={'/cuisine/thai'} >
                  <GiChopsticks size={30} />
            <h2>Thai</h2> 
                
            </NavSlink>
            <NavSlink to={'/cuisine/japanese'} >   
            <GiNoodles size={30}/>
            <h2>Japenese</h2> 
               
            </NavSlink>

        </List>
    </Wrapper>
    
  )
}

const Wrapper = styled.div`
font-family: "Poppins";
    margin: -2rem 0rem 0rem 1rem ;
    h2{
        font-size: 1em;
        color: #7b8171;

    }
`
const List = styled.div`
 display: flex;
        gap:1rem;
        justify-content: center;
        text-align: center;      
        text-decoration: none;
`;
const NavSlink = styled(NavLink)` 
  
   border: 0.1px solid  #51534f53;
   background-color: #f4f4f4;
   border-radius: 50%;
   width: 3rem;
  display: flex;
  flex-direction: column;
 text-decoration: none;
 gap: -2rem;
 padding: 1rem 2rem;
 letter-spacing: 0.5px;
 align-items: center;
 justify-content: center;
 transition: 0.5s ease-out ;

 &:hover{
  background-color: #5762656d;
  transition: 0.5s ease-in;
  svg{
    color: #3d50c9;
  }
  h2{
    color:black;
  }
 }
  svg{
    color: #211212b3;
  }
`


export default Category