import React from 'react'
import styled from 'styled-components'
import IconFactory from '../icons'

const ButtonContainer = styled.button`
    display: flex;
    width: 115px;
    padding: 14px 24px;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    background: #082D4A;
    border-radius: 8px;
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    color: #D6EBFB;
` 

function SetupButton() {
  return (
    <ButtonContainer>
        <IconFactory type="plus" />
        Setup
    </ButtonContainer>
  )
}

export default SetupButton
