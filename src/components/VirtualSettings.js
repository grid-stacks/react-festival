import React from 'react';
import styled from 'styled-components';
import { BiDotsVertical } from 'react-icons/bi';
import { BiDotsHorizontal } from 'react-icons/bi';
import primary from '../images/primary.png';
import VirtualSettings2 from './VirtualSettings2';
const VirtualSettings = () => {
  return (
    <Wrapper className='section'>
      <div className='settings'>
        <div className='auto-rotate'>
          <text>Autorotate </text>
          <input type='range' id='rotate' name='rotate' min='0' max='10' />
        </div>
        <div className='view-mode'>
          <p>View Mode</p>
          <div className='icon'>
            <BiDotsVertical />
          </div>
          <div className='icon black'>
            <BiDotsHorizontal />
          </div>
        </div>

        <form action='' className='form'>
          <div className='input'>
            <input
              className='input'
              type='text'
              placeholder='Width'
              id='width'
            />
            <span htmlFor='width'>
              <img src={primary} alt='' />
            </span>
          </div>

          <div className='input'>
            <input
              className='input'
              type='text'
              placeholder='Height'
              id='height'
            />
            <span htmlFor='height'>
              <img src={primary} className='rotate' alt='' />
            </span>
          </div>
          <span>
            <div className='icon black'>%</div>
            <div className='icon'>px</div>
          </span>
        </form>
      </div>

      <VirtualSettings2 />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .settings {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .auto-rotate {
    flex: 1;
    height: 86px;
    width: 276px;
    box-shadow: var(--shadow-1);
    border-radius: var(--borderRadius);
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    text {
      font-weight: 600;
    }
    #rotate {
      width: 116px;
      background: #fff;
      color: #222;
      cursor: pointer;
    }
  }
  .view-mode {
    flex: 1;
    height: 86px;
    width: 282px;
    box-shadow: var(--shadow-1);
    border-radius: var(--borderRadius);
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    p {
      font-weight: 600;
    }
  }
  .icon {
    height: 42px;
    width: 42px;
    background-color: #e4e4eb;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    svg {
      font-size: 35px;
    }
  }
  .black {
    background-color: #262525;
    color: #fff;
  }
  .form {
    flex: 2;
    min-height: 86px;
    width: 425px;
    box-shadow: var(--shadow-1);
    border-radius: var(--borderRadius);
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 425px) {
      flex-wrap: wrap;
    }
    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .input {
      display: flex;
      align-items: center;
      justify-content: space-between;
      input {
        height: 36px;
        width: 156px;
        border: none;
        padding: 0 0 1rem 1rem;
        border-bottom: 2px solid #ddd;

        ::placeholder {
          letter-spacing: 2px;
        }
      }
      span {
        img {
          margin-left: -1.5rem;
        }
      }
      .rotate {
        transform: rotate(90deg);
      }
    }
  }
`;

export default VirtualSettings;
