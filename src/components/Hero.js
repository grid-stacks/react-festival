import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import bg from '../images/bg.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Wrapper>
      <div className='bg'>
        <div className='curve'></div>
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
                <Link to='/'>Pricing</Link>
              </li>
              <li>
                <Link to='/'>About Us</Link>
              </li>
              <li>
                <Link to='/'>Blog</Link>
              </li>
            </ul>
          </div>
          <div className='button'>
            <button className='btn signin-btn'>sign in</button>
          </div>
        </nav>
        <HeroSection>
          <p className='create'>create & share</p>
          <h2>
            fastest virtual <br /> tour software
          </h2>
          <p className='trust'>
            Trusted by <span> 15 Million </span> creators and{' '}
            <span> 20,000+ </span> B usinesses
          </p>
          <div className='btn-container'>
            <button className='btn trial-btn'>start a free trial</button>
            <button className='btn demo-btn'>request demo</button>
          </div>
        </HeroSection>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .bg {
    height: 100vh;
    background-image: url(${bg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: right;
    position: relative;
    overflow: hidden;

    ::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        90deg,
        rgba(254, 243, 216, 1) 0%,
        rgba(254, 243, 216, 0.9164040616246498) 48%,
        rgba(254, 243, 216, 0.5) 100%
      );
      // background: linear-gradient(
      //     to right,
      //     // rgba(254, 243, 216, 1),
      //     #fef3d8,
      //     rgba(235, 204, 162, 0.5)
      // );
      z-index: 1;
    }
  }

  .curve {
    width: 100%;
    height: 65px;
    background-color: #f8fafc;
    border-radius: 0 0 50% 50%/0 0 100% 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
    transform: rotate(180deg) scaleX(1.1);
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
  }
  .signin-btn {
    background-color: #fff;
    color: #222;
    border-radius: 0;
    cursor: pinter;
    padding: 0.8rem 1.2rem;
    font-weight: 600;

    margin-right: 1rem;
  }
`;

const HeroSection = styled.div`
  height: 60vh;
  display: flex;
  margin-left: 12rem;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  z-index: 10;
  position: relative;
  .create {
    margin-bottom: 5px;
    letter-spacing: 4px;
    font-weight: 400;
    margin-left: 6.7rem;
    position: relative;
    text-transform: capitalize;
    ::before {
      content: '';
      height: 2px;
      width: 56px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -100px;
      background-color: #222;
    }
  }
  .trust {
    font-size: 16px;
    margin-bottom: 20px;
    span {
      color: #33b864;
      font-size: 20px;
      font-weight: 700;
      margin: 0 2px;
    }
  }

  h2 {
    margin: 0;
    font-size: 46px;
    word-spacing: 5px;
  }
  .btn-container {
    display: flex;
    gap: 2rem;
  }
  .trial-btn {
    background-color: #33b864;
    padding: 0.8rem 2.5rem;
  }
  .demo-btn {
    background-color: #222;
    padding: 1rem 3rem;
  }
`;
export default Hero;
