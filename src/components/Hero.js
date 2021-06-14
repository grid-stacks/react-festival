import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
const Hero = () => {
  return (
    <Wrapper>
      <div className='bg'>
        <nav>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <div className='nav-links'>
            <ul>
              <li>
                <a href=''>Home</a>
              </li>
              <li>
                <a href=''>Pricing</a>
              </li>
              <li>
                <a href=''>About Us</a>
              </li>
              <li>
                <a href=''>Blog</a>
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
            trusted by <span>15 million</span> creators and <span>20,000+</span>{' '}
            business
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
    background-image: url('http://thewandercamp.com/wp-content/uploads/2021/01/grand-canyon-1024x683.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    position: relative;

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
        to right,
        rgba(254, 243, 216, 1),
        rgba(235, 204, 162, 0.5)
      );
      z-index: 1;
    }
  }
  nav {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      z-index: 9;
      height: 50px;
      width: 50px;
      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
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
          font-weight: 600;
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
    padding: 1rem 1rem;
    transform: skew(170deg);
    margin-right: 1rem;
  }
`;

const HeroSection = styled.div`
  height: 80vh;
  display: flex;
  margin-left: 7rem;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  z-index: 10;
  position: relative;
  .create {
    margin: 0;
    margin-left: 4rem;
    position: relative;
    text-transform: capitalize;
    ::before {
      content: '';
      height: 2px;
      width: 35px;
      position: absolute;
      top: 50%;
      left: -50px;
      background-color: #222;
    }
  }
  .trust {
    letter-spacing: 2px;
    span {
      color: #33b864;
      font-size: 25px;
      font-weight: 600;
    }
  }

  h2 {
    font-weight: 700;
    letter-spacing: 5px;
    margin: 0;
  }
  .btn-container {
    display: flex;
    gap: 2rem;
  }
  .trial-btn {
    background-color: #33b864;
    padding: 1rem 2.5rem;
  }
  .demo-btn {
    background-color: #222;
    padding: 1rem 3rem;
  }
`;
export default Hero;
