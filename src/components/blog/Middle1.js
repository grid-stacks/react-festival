import React from 'react';
import styled from 'styled-components';
import middle1 from '../../images/middle1.png';
import li from '../../images/li.png';
const Middle1 = () => {
  return (
    <Wrapper className='section'>
      <div className='container'>
        <div className='image'>
          <img src={middle1} alt='' />
        </div>
        <div className='content'>
          <h3>Lorem Ipsum Dolor Sit Amet, Adipiscing Elit. </h3>
          <p className='body2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            dictum orci, porta porta massa. Donec id lacus tincidunt nulla
            faucibus aliquam. Ut varius rhoncus gravida.
          </p>
        </div>
      </div>
      <div className='bottom'>
        <ul>
          <li>
            <img src={li} alt='' />{' '}
            <span>Nunc gravida sapien ac volutpat porta.</span>
          </li>
          <li>
            {' '}
            <img src={li} alt='' />{' '}
            <span>gravida in erat nec, tempor rutrum purus.</span>
          </li>
          <li>
            <img src={li} alt='' />{' '}
            <span>
              {' '}
              Ut scelerisque pellentesque tortor vitae consectetur. Cras in
              velit ex.
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <img src={li} alt='' />{' '}
            <span>vel velit porttitor, nec ornare dui suscipit.</span>
          </li>
          <li>
            <img src={li} alt='' /> <span>Suspendisse eget posuere ex.</span>
          </li>
          <li>
            <img src={li} alt='' />{' '}
            <span>
              Donec sodales bibendum augue, sed maximus sem iaculis eu. Aenean
              erat sem, congue eget suscipit consequat, sollicitudin eu leo.
            </span>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-bottom: 190px;
  @media (max-width: 999px) {
    margin-bottom: 30px;
  }
  position: relative;
  .container {
    position: relative;
    min-height: 470px;
    display: grid;
    gap: 2rem;
    justify-content: space-around;
    @media (min-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .image {
    img {
      max-width: 100%;
    }
  }
  .content {
    margin-top: 3rem;
    max-width: 455px;
    h3 {
      line-height: 55px;
    }
    p {
      margin-right: 1.5rem;
    }
  }
  .bottom {
    width: 90vw;
    max-width: 1089px;
    border-radius: 10px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 238px;
    background-color: #fff;
    box-shadow: var(--shadow-2);
    padding: 1.5rem 2.5rem;
    gap: 0 2rem;
    @media (min-width: 1000px) {
      position: absolute;
      bottom: -10%;
      right: 0;
    }
    ul {
      flex: 1;
      max-width: 428px;
      min-width: 220px;

      li {
        margin-bottom: 25px;
        display: flex;
        gap: 1rem;
        align-items: flex-start;
        font-weight: 700;
        :last-child {
          margin-bottom: 0;
        }
        img {
          margin-top: 5px;
        }
      }
    }
  }
`;
export default Middle1;
