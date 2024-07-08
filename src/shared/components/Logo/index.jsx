import React from 'react'
import cnexLogo from '../../../assets/images/cnexlogo.png'
import styled from 'styled-components'

const Image = styled.img`
    width: 156px;
    height: 57px;
`

function Logos() {
  return (
    <>
      <Image src={cnexLogo} alt="Cnex Logo" />
    </>
  )
}

export default Logos
