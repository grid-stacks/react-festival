import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import { GrFormClose } from 'react-icons/gr';
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <Wrapper>
      <div className='wrapper'>
        <nav>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <div className='nav-links'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/pricing'>Pricing</Link>
              </li>
              <li>
                <Link to='/about'>About Us</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
            </ul>
          </div>
          <div className='button'>
            <Link to='sign-in'>
              <button className='btn signin-btn'>Sign In</button>
            </Link>
          </div>
        </nav>
      </div>

      <MobileNav>
        <div className='mobile-wrapper'>
          <div className='heading'>
            <img src={logo} alt='' />
            <button className='btn bar' onClick={() => setShow(true)}>
              <GoThreeBars />
            </button>
          </div>
          {show && (
            <div className='mobile-links'>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/pricing'>Pricing</Link>
                </li>
                <li>
                  <Link to='/about'>About Us</Link>
                </li>
                <li>
                  <Link to='/blog'>Blog</Link>
                </li>
                <li>
                  <Link to='sign-in'>
                    <button className='btn signin-btn'>Sign In</button>
                  </Link>
                </li>
              </ul>
              <div className='close'>
                <GrFormClose onClick={() => setShow(false)} />
              </div>
            </div>
          )}
        </div>
      </MobileNav>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  .wrapper {
    @media (max-width: 800px) {
      display: none;
    }
  }
  nav {
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    width: 95vw;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .logo {
      z-index: 9;

      img {
      }
    }
    ul {
      z-index: 9;
      display: flex;
      align-items: center;
      gap: 2rem;

      li {
        z-index: 9;
        a {
          z-index: 9;
          color: #262525;

          font-size: 14px;
          transition: 0.3s;
          position: relative;
          :hover {
            color: #a5a5bd;

            &::before {
              content: '';
              height: 3px;
              width: 30px;
              position: absolute;
              bottom: -6px;
              left: 0;
              background-color: #a5a5bd;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }

  .button {
    z-index: 9;

    .signin-btn {
      background-color: #fff;
      margin-right: 1rem;
      height: 46px;
      width: 116px;
      cursor: pointer;
      color: #000;
    }
  }
`;
const MobileNav = styled.nav`
  .mobile-wrapper {
    display: none;
    @media (max-width: 799px) {
      display: block;
    }
  }
  .heading {
    width: 95vw;
    position: relative;
    z-index: 99999;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    .bar {
      background-color: #222;
      color: #fff;
      padding: 0.3rem 0.5rem;
      clip-path: none;
    }
  }
  .signin-btn {
    background-color: #fff;
    margin-right: 1rem;
    height: 46px;
    width: 116px;
    cursor: pointer;
    color: #000;
  }
  .close {
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: 99999999;
    svg {
      background-color: #fff;
      font-size: 30px;
    }
  }
  .mobile-links {
    overflow: hidden;
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: #222;
    z-index: 99999;
    color: #fff;
    top: 0;
    left: 0;
    display: flex;
    /* visibility: hidden;
    opacity: 0; */
    align-items: center;
    justify-content: center;
    ul {
      display: flex;
      flex-direction: column;

      li a {
        color: #fff;
      }
    }
  }
`;
export default Navbar;
