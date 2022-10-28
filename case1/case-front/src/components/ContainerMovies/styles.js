import styled from 'styled-components'

export const MovieContainer = styled.div`


`

export const MovieBox = styled.div`

width: 176px;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-bottom: 20px;
&:hover{
  background-color: aliceblue;
}
`

export const MovieImg = styled.img`
width: 176px ;
height: 264px;
`

export const MovieTitle = styled.h3`
font-size: 16px;
color: black;

`

export const MovieDate = styled.p`
font-size: 14px;
color: #646464;
`