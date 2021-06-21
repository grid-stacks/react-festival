import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
const Wrapper = styled.nav`
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
export default Navbar;
