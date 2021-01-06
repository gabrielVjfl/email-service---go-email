import React from 'react'

import styled from  'styled-components'

export const Container = styled.div`
display: flex;
min-height: 100vh;
min-width: 100vw;
background-color: black;
flex: 1;
justify-content: center;

`

export const Title = styled.span`
font-family: Nunito, Arial, Helvetica, sans-serif;
font-size: 44px;
color: yellow;
font-weight: 600;

`
export const Card = styled.div`
margin-top: 100px;
border: 4px solid green;
height: 560px;
width: 380px;
border-radius: 20px;
background-color: black;
position: relative;

`
export const CardBody = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

`