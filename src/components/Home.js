import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                bgImage="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                bgImage="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                bgImage="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                bgImage="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                bgImage="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section 
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof"
                bgImage="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section 
                title="Accessories"
                description=""
                bgImage="accessories.jpg"
                leftBtnText="Shop Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`