import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtnText, rightBtnText, bgImage }) {
    return (
        <Wrap bgImage={bgImage}>
            <Fade bottom>
                <TextItem>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </TextItem>
            </Fade>
            <Btns>
                <Fade bottom>
                    <BtnGroup>
                        <LeftBtn>
                            { leftBtnText }
                        </LeftBtn>

                        { rightBtnText && 
                            <RightBtn>
                                { rightBtnText }
                            </RightBtn>
                        }
                    </BtnGroup>
                </Fade>
                <DownBtn src="/images/down-arrow.svg" />
            </Btns>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url('/images/${props.bgImage}')`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const TextItem = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const BtnGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftBtn = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opactiy: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightBtn = styled(LeftBtn)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownBtn = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`

const Btns = styled.div``