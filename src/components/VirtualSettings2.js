import React from 'react';
import styled from 'styled-components';
import image1 from '../images/Image 1.png';
import ditTop1 from '../images/dot-top1.png';
import ditTop2 from '../images/dot-top2.png';
import ditBottom1 from '../images/dot-bottom1.png';
import ditBottom2 from '../images/dot-bottom2.png';
import upload from '../images/upload.png';

const VirtualSettings2 = () => {
  return (
    <Wrapper className='section'>
      <div className='container '>
        <div className='img-container'>
          <img src={image1} alt='' />
        </div>
        <div className='content'>
          <div className='upper'>
            <div className='upper-top'>
              <div className='show-logo'>
                <label class='switch'>
                  <input type='checkbox' />
                  <span class='slider round'></span>
                </label>
                <p>Show Logo</p>
              </div>
              <div class='upload-btn-wrapper'>
                <label for='file'>
                  <img src={upload} alt='' />
                  <span>Upload Custom Logo</span>
                </label>
                <input type='file' name='myfile' id='file' />
              </div>
            </div>
            <div className='upper-middle'>
              <p>Logo Position</p>
              <button className='icon-btn icon '>
                <img src={ditTop2} alt='' />
              </button>
              <button className='icon-btn icon active'>
                <img src={ditTop1} alt='' />
              </button>
              <button className='icon-btn icon'>
                <img src={ditBottom1} alt='' />
              </button>
              <button className='icon-btn icon'>
                <img src={ditBottom2} alt='' />
              </button>
            </div>
            <div className='upper-bottom'>
              <article>
                <text>Logo Size </text>
                <input
                  type='range'
                  id='rotate'
                  name='rotate'
                  min='0'
                  max='10'
                />
              </article>
              <article>
                <text> Transparency</text>
                <input
                  type='range'
                  id='rotate'
                  name='rotate'
                  min='0'
                  max='10'
                />
              </article>
            </div>
          </div>

          {/* =============== */}

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

          {/* ============== */}

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
        padding: 1rem 1.5rem;
      }
    }

    .upper-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      @media (max-width: 500px) {
        flex-direction: column;
      }
      .show-logo {
        display: flex;
        align-items: center;
        gap: 1.5rem;
      }
      .upload-btn-wrapper {
        label {
          display: flex;
          align-items: center;
          cursor: pointer;
          gap: 1rem;
        }
        input {
          display: none;
        }
      }
    }
    .upper-middle {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin: 30px 0;
      .active {
        background-color: #707070;
      }
    }
    .upper-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      @media (max-width: 500px) {
        flex-direction: column;
      }
      article {
        display: flex;
        align-items: center;
        gap: 0.5rem;
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
