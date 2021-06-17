import React from 'react';
import styled from 'styled-components';
import image1 from '../images/Image 1.png';
const VirtualSettings2 = () => {
  return (
    <Wrapper className='section'>
      <div className='container '>
        <div className='img-container'>
          <img src={image1} alt='' />
        </div>
        <div className='content'>
          <div className='upper'>
            <div className='top'></div>
          </div>
          <div className='middle'>
            <div className='pano'>
              <label class='switch'>
                <input type='checkbox' />
                <span class='slider round'></span>
              </label>
              <p>Pano Details</p>
            </div>
            <div className='pano fullscreen'>
              <label class='switch'>
                <input type='checkbox' />
                <span class='slider round'></span>
              </label>
              <p>Fullscreen Button</p>
            </div>
          </div>
          <div className='btn-container'>
            <button className='btn trial-btn'>Copy to Embed Code</button>
            <button className='btn demo-btn'>Start Free Trial</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .container {
    overflow: hidden;
    display: grid;
    gap: 1.5rem;
    @media (min-width: 1100px) {
      grid-template-columns: 1fr 1fr;
    }
    .img-container {
      img {
        width: 100%;
      }
    }
    .content {
      .upper {
        min-height: 236px;
        width: 100%;
        box-shadow: var(--shadow-2);
        border-radius: 10px;
      }
    }
    .middle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 40px;
      flex-wrap: wrap;
      .pano {
        height: 76px;
        width: 256px;
        box-shadow: var(--shadow-2);
        border-radius: 10px;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        gap: 1.5rem;
        justify-content: center;
        p {
          font-weight: 600;
        }
      }
      .fullscreen {
        height: 76px;
        width: 274px;
        box-shadow: var(--shadow-2);
        border-radius: 10px;
      }
      .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 28px;
      }

      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      .slider:before {
        position: absolute;
        content: '';
        height: 36px;
        width: 36px;
        left: -1px;
        bottom: -3px;
        box-shadow: var(--shadow-4);
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      input:checked + .slider {
        background-color: #222;
      }

      input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
      }

      input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }

      /* Rounded sliders */
      .slider.round {
        border-radius: 34px;
      }

      .slider.round:before {
        border-radius: 50%;
      }
    }
  }

  .btn-container {
    margin-top: 2.5rem;
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .btn {
      letter-spacing: 1;
      font-size: 14px;
    }
    .trial-btn {
      background-color: #222;
      width: 274px;
      height: 46px;
    }
    .demo-btn {
      background-color: #33b864;

      width: 239px;
      height: 46px;
    }
  }
`;
export default VirtualSettings2;
