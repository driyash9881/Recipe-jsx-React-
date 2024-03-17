import React, { useState } from 'react'
import styled from 'styled-components'
import { CiSearch } from "react-icons/ci";
import { NavLink, useNavigate } from 'react-router-dom';
import { MdHome } from "react-icons/md";

const Search = () => {
   const[valinput,setValInput]= useState("")
    const navigate = useNavigate()
   const submitHandler=(e)=>{
    e.preventDefault()
     navigate('/searchData/' + valinput)
   }
   
  return (
    <div>
   
    <FormCon onSubmit={submitHandler}>
    <Slink to={'/'}>
   <MdHome size={48} />
   </Slink>
        <div>
            <CiSearch/>
            <input 
             onChange={(e)=>setValInput(e.target.value)}
             type='text'
             value={valinput }/>
        </div>
    
    </FormCon>
    </div>
  )
}

const FormCon = styled.form`
position: relative;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    padding: 0 0 5rem 0;
  div{
    svg{
        z-index: 10;
       position: absolute;
       font-size: 2.3rem;
       padding: 5px;
       margin-top: 3.7rem;
        
    }
    input{
      z-index: -1;
    margin-right:5rem ;
    border-radius: 24px;
    width: 20rem;
    height: 2rem;
    color: #1e3950;
   margin-top: 3.5rem;
   transition: ease-in 0.5s;
   font-size: 1.5em;
   padding: 8px 40px;
    }
  }

`
const Slink = styled(NavLink)`
  svg{
   color: black;
   margin-top: 3.5rem;
   transition: ease-in 0.5s;
   padding: 2px 0;
   &:hover{
    border-radius: 1px;
    border-bottom: 1px solid #7e7b7b;
    transition: ease-out 0.3s;
    color: #393838;

   }

  }
`

export default Search