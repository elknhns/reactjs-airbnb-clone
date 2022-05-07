import React from "react"
import airbnbLogo from '../images/airbnb-logo.png'
import "../index.css"

export default function Navbar() {
  return (
    <nav>
      <img src={airbnbLogo} alt="airbnb-logo" />
    </nav>
  )
}
