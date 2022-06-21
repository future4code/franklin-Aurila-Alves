import React from 'react';
import styled from 'styled-components';

const CardPequenoContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 80px;
    width: 400px
`
const CardPequenoImg = styled.img`
    width: 40px;
    margin-right: 10px;
`
const CardPequenoDiv =styled.p`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
const CardPequenoH4 = styled.h4`
    margin-bottom: 5px;
`
const CardPequenoP =styled.p`
    align-self: center
`



function CardPequeno(props) {
    return (
        <CardPequenoContainer>
            <CardPequenoImg src={ props.imagem } />
            <CardPequenoDiv>
                <CardPequenoH4>{ props.nome }</CardPequenoH4>
                <CardPequenoP>{ props.descricao }</CardPequenoP>
            </CardPequenoDiv>
        </CardPequenoContainer>
    )
}

export default CardPequeno;