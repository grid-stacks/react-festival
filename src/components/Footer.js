import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/logo-footer.png';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import youtube from '../images/youtube.png';
import twitter from '../images/twitter.png';
import googleplay from '../images/googleplay.png';
import appstore from '../images/appstore.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  const [date, setDate] = useState(new Date().getFullYear());
  return (
    <Wrapper>
      <div className='footer-top'>
        <img src={logo} alt='' />
        <h2>Fastest Virtual Tour Software</h2>
        <div className='btn-container'>
          <button className='btn trial-btn'>Start Free Trial</button>
          <button className='btn demo-btn'>Request demo</button>
        </div>
      </div>
      <hr />
      <div className='footer-middle section'>
        <div className='teliport'>
          <div className='heading'>
            <img src={logo} alt='' />
            <h3>teliportme</h3>
          </div>
          <p className='body2'>Create & Share 360 Photos And Virtual Tours</p>
          <div className='icon-container'>
            <Link>
              <img src={facebook} alt='' />
            </Link>
            <Link>
              <img src={instagram} alt='' />
            </Link>
            <Link>
              <img src={twitter} alt='' />
            </Link>
            <Link>
              <img src={youtube} alt='' />
            </Link>
          </div>
        </div>
        <div className='links'>
          <h4>Important Links</h4>
          <ul>
            <li>
              <Link>RemixVR</Link>
            </li>
            <li>
              <Link>P360 Android App</Link>
            </li>
            <li>
              <Link>P360 iOS App</Link>
            </li>
            <li>
              <Link>Knowledge Base</Link>
            </li>
            <li>
              <Link>Roadmap</Link>
            </li>
          </ul>
        </div>
        <div className='contact'>
          <h4>Contact Us</h4>
          <ul>
            <li>814 Mission Street</li>
            <li>San Francisco, CA, 94103</li>
          </ul>
          <div className='btn-container'>
            <div className='google-play'>
              <img src={googleplay} alt='' />
            </div>
            <div className='apple-store'>
              <img src={appstore} alt='' />
            </div>
          </div>
        </div>
      </div>
      <hr className='hr2' />
      <div className='footer-bottom section'>
        <p>© {date} TeliportMe, Inc. All rights reserved.</p>
        <p>
          Made by{' '}
          <span>
            <Link>Grid Stacks</Link>
          </span>
        </p>
        <div className='terms'>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  background-color: #262525;
  .section {
    max-width: 1217px;
  }
  .footer-top {
    text-align: center;
    min-height: 765px;
    margin: 0 auto;
    display: flex;
    gap: 45px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 628px;
    img {
      height: 86px;
      width: 86px;
    }
    h2 {
      color: #fff;
      line-height: 65px;
      font-size: 48px;
    }
  }
  .btn-container {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;

    .trial-btn {
      background-color: #33b864;
      width: 262px;
      height: 56px;
    }
    .demo-btn {
      background-color: #fff;
      width: 262px;
      color: #262525;
      height: 56px;
    }
  }
  hr {
    width: 80%;
    margin: o auto;
    height: 1px;
    background-color: #e4e4eb;
    color: #e4e4eb;
    opacity: 0.4;
  }
  .footer-middle {
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 600px) {
      justify-content: space-around;
    }
    margin-top: 55px;
    margin-bottom: 35px;
    .heading {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      img {
        height: 52px;
        width: 52px;
      }
      h3 {
        text-transform: uppercase;
        color: #fff;
        margin: 0;
        font-size: 24px;
      }
    }
    p {
      margin: 35px 0;
      margin-left: 0.6rem;
    }
    .icon-container {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      margin-left: 0.6rem;
      @media (max-width: 600px) {
        justify-content: center;
      }
    }
    .links {
      @media (max-width: 600px) {
        text-align: center;
      }
      h4 {
        color: #fff;
        font-size: 24px;
      }
      ul li {
        margin-bottom: 0.6rem;
      }

      ul li a {
        color: #fff;

        font-size: 12px;
      }
    }
    .contact {
      @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
      h4 {
        color: #fff;
        font-size: 24px;
      }

      ul li {
        color: #fff;
        margin-bottom: 0.8rem;
        font-size: 12px;
      }
      .btn-container {
        margin: 70px 0 0 1rem;
        display: flex;
        flex-wrap: wrap;
        img {
          cursor: pointer;
        }
      }
    }
  }
  .hr2 {
    width: 100%;
    opacity: 0.3;
  }

  .footer-bottom {
    min-height: 90px;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #fff;
    p {
      font-size: 12px;
      span a {
        color: #14d89c;
      }
    }
    .terms {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`;
export default Footer;
