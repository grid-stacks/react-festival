import React from 'react';
import styled from 'styled-components';
import heroImg from '../../images/hero-blog.png';
const HeroBlog = () => {
  return (
    <Wrapper className='section'>
      <div className='image-container'>
        <img src={heroImg} alt='' />
      </div>
      <div className='content'>
        <div className='left'>
          <h3>Lorem Ipsum Dolor Sit Amet Adipiscing </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vitae rutrum velit. Donec in mi feugiat, iaculis odio vitae,
            pharetra nisi.
          </p>
        </div>
        <div className='right'>
          <div className='div1'>
            <h1>18%</h1>
            <p>lorem Ipsum</p>
          </div>
          <div className='div2'>
            <h1>265%</h1>
            <p>lorem Ipsum</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  position: relative;
  .image-container {
    width: 95%;
    max-width: 1099px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  .content {
    max-width: 1089px;
    box-shadow: var(--shadow-2);
    display: grid;
    align-items: center;
    gap: 2rem 2.5rem;
    padding: 1.5rem;
    margin: 2rem auto;
    border-radius: 10px;
    @media (min-width: 960px) {
      grid-template-columns: 1fr 1fr;
    }
    .left {
      h3 {
        line-height: 55px;
      }
      p {
        letter-spacing: 1px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 1.4rem;
      .div1,
      .div2 {
        h1 {
          color: #33b864;
          margin-bottom: 1rem;
        }
      }
    }
  }
`;
export default HeroBlog;
