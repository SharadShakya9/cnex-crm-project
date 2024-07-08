import React from 'react'

function Wrapper({children}) {
  return (
    <div style={{background: '#FFF', borderRadius: '8px'}}>
      {children}
    </div>
  )
}

export default Wrapper
