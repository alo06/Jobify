import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job<span>tracking</span>App
          </h1>
          <p>
            I'm baby bespoke vaporware same brunch, PBR&B four dollar toast
            keffiyeh. Williamsburg irony pitchfork cronut wayfarers cred.
            Single-origin coffee kombucha banh mi photo booth. Cupping meggings
            lo-fi palo santo. Direct trade poke kombucha scenester tattooed
            beard gastropub readymade mlkshk celiac fingerstache waistcoat +1
            XOXO. Pork belly messenger bag keffiyeh cornhole food truck bitters.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn Login-link">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img'/>
      </div>
    </Wrapper>
  );
}


export default Landing