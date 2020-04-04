import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import styled from 'styled-components';

const HeaderComp = styled.header`
    position: fixed;
    top: 10px;
    left: 20px;
    padding: 20px;
    z-index: 1;
    display: flex;
    align-items: center;
    font-family: Roboto, Sans;
    white-space: nowrap;
    transition: all ${props => props.transitionSpeedSeconds ? props.transitionSpeedSeconds : '0.5'}s;
    ${props => props.blackText ?
    `
      color: black;
      background-color: white;
    `
    :
    `
      color: white;
      background-color: black;
    `
  }
  span {
    position: relative;
    display: inline-block;
    font-weight: 500;
    font-size: 1.7rem;
    letter-spacing: 7px;
  }
  ${props => props.underlined ?
    `
      span::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -7px;
        width: 100%;
        height: 1px;
        background-color: white;
      }
    `
    :
    ``
  }
  ${props => props.blackText ?
    `
      span::after {
        background-color: black;
      }
    `
    :
    null
  }
`
  ;

const Header = ({ blackText = false, switchToBlackTextDelayed = false, switchToBlackTextDelay = 300 }) => {
  const [isBlackText, setIsBlackText] = useState(false);

  useEffect(() => {
    if (switchToBlackTextDelayed) {
      setTimeout(() => {
        setIsBlackText(true);
      }, switchToBlackTextDelay);
    }
  }, [switchToBlackTextDelayed, switchToBlackTextDelay]);

  useEffect(() => {
    setIsBlackText(blackText);
  }, [blackText]);

  return (
    <HeaderComp underlined blackText={isBlackText} >
      <span>
        ADAM KISS
    </span>
    </HeaderComp >
  )
}

Header.propTypes = {
}

export default Header
