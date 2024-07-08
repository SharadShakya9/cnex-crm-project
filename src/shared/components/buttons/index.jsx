import React from 'react'
import CouponButton from './CouponButton'
import AppointmentButton from './AppointmentButton'
import SetupButton from './SetupButton'

function ButtonFactory({type}) {
  switch (type) {
    case "coupon": return <><CouponButton/></>
    case "appointment": return <><AppointmentButton/></>
    case "setup": return <><SetupButton/></>
  }
}

export default ButtonFactory
