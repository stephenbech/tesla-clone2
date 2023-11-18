import React from 'react'
import styled from 'styled-components'
import Section from "./Section"

function Home() {
  return (
    <Container>
      
      <Section 
        title="Model s"
        description="Order Online For Touchless Delivery"
        backgroundimg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exisiting Inventory"
      />

      <Section 
        title="Model y"
        description="Order Online For Touchless Delivery"
        backgroundimg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exisiting Inventory"/>

      <Section 
       title="Model 3"
       description="Order Online For Touchless Delivery"
       backgroundimg="model-3.jpg"
       leftBtnText="Custom Order"
       rightBtnText="Exisiting Inventory"/>

      <Section 
       title="Model x"
       description="Order Online For Touchless Delivery"
       backgroundimg="model-x.jpg"
       leftBtnText="Custom Order"
       rightBtnText="Exisiting Inventory"/>

      <Section 
       title="Lowest Cst Solar Panels In America"
       description="Money-back garantee"
       backgroundimg="solar-panel.jpg"
       leftBtnText="Order Now"
       rightBtnText="Learn more"/>

      <Section 
       title="Solar for New Roofs"
       description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
       backgroundimg="solar-roof.jpg"
       leftBtnText="Order Now"
       rightBtnText="Learn more"/>

      <Section 
       title="Accessories"
       description=""
       backgroundimg="accessories.jpg"
       leftBtnText="Shop Now"
      />
    </Container>
  ) 
}

export default Home

const Container = styled.div`
   height: 100vh;
`