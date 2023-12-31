import React from 'react'
import styled from "styled-components"

function Header() {
  return (
    <div>
      <Container>
       <a href='/'> #<img src="/images/logo.svg" alt="#" /></a>

       <Menu>
      <a href="/"> Model x</a>
      <a href="/"> Model y</a>
       <a href="/">  Model 3</a>
       <a href="/">  Model s</a>
       </Menu>

       <RightMenu>

        <a href="/">Shop</a>
        <a href="/"> TeslaAccount</a>
       </RightMenu>

      </Container>

    </div>
  )
}

export default Header


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    padding: 0 20px;
    top: 0;
    left:0;
    right:0;
    
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content:center ;
  flex: 1;


  a{
    font-weight:600;
    color:inherit;
    text-transform: uppercase;
    padding:0 10px;
    flex-wrap: nowrap;
  }
`

const RightMenu = styled.div`


a{
    font-weight:600;
    color:inherit;
    text-transform: uppercase;
    margin: 10px;
   
  }

`