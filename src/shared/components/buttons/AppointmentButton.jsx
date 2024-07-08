import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 14px 24px;
    width: 210px;
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

function AppointmentButton() {
  return (
    <>
        <ButtonContainer>Manage Appointment</ButtonContainer>
    </>
  )
}

export default AppointmentButton
