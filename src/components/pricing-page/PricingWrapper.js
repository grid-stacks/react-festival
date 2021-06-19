import React from 'react';
import styled from 'styled-components';
import check from '../../images/check.png';
import uncheck from '../../images/uncheck1.png';
import uncheck2 from '../../images/uncheck.png';
const PricingWrapper = () => {
  return (
    <Wrapper>
      <table>
        <tr>
          <th>
            <div>
              <div className='th1'>
                <p>Monthly</p>
                <label class='switch'>
                  <input type='checkbox' />
                  <span class='slider round'></span>
                </label>
                <p>Yearly</p>
              </div>
              <div className='plan'>
                <h3>Plans</h3>
              </div>
            </div>
          </th>
          <th>
            <div>
              <p>Community</p>
              <h3>Free</h3>
            </div>
          </th>
          <th>
            <div>
              <p>Essential</p>
              <h3>
                $250
                <small>/ y</small>
              </h3>
            </div>
          </th>
          <th>
            <div>
              <p>Business</p>
              <h3>
                $350
                <small>/ y</small>
              </h3>
            </div>
          </th>
          <th>
            <div>
              <p>Enterprise</p>
              <h3>Custom</h3>
            </div>
          </th>
        </tr>

        <tr>
          <td className='left'>Maximum Panorama Size</td>
          <td>20mb</td>
          <td>30mb</td>
          <td>50mb</td>
          <td>100mb</td>
        </tr>
        <tr>
          <td className='left'>iOS and Android app</td>
          <td>Free version</td>
          <td>PRO versions</td>
          <td>PRO versions</td>
          <td>PRO versions</td>
        </tr>
        <tr>
          <td className='left'>Embed Functionality</td>
          <td>Unlimited</td>
          <td>Unlimited</td>
          <td>Unlimited</td>
          <td>Unlimited</td>
        </tr>
        <tr>
          <td className='left'>360 Camera Integration</td>
          <td>
            <img src={check} alt='' />
          </td>
          <td>
            <img src={check} alt='' />
          </td>
          <td>
            <img src={check} alt='' />
          </td>
          <td>
            <img src={check} alt='' />
          </td>
        </tr>
        <tr>
          <td className='left'>Video Resolution</td>
          <td>4K</td>
          <td>8K</td>
          <td>16K</td>
          <td>Upto 32K</td>
        </tr>
        <tr>
          <td className='left'>Custom Branding</td>
          <td>
            <img src={uncheck} alt='' />
          </td>
          <td>1 Brand</td>
          <td>15 Brands</td>
          <td>50 Brands</td>
        </tr>
        <tr>
          <td className='left'>Live Tours / Collections</td>
          <td>
            <img src={uncheck} alt='' />
          </td>
          <td>25</td>
          <td>50</td>
          <td>Unlimited</td>
        </tr>

        <tr>
          <td className='left'>Private and unlisted</td>
          <td>
            <img src={uncheck} alt='' />
          </td>
          <td>
            <img src={check} alt='' />
          </td>
          <td>
            <img src={check} alt='' />
          </td>
          <td>
            <img src={check} alt='' />
          </td>
        </tr>
        <tr>
          <td className='left'>Number of Users</td>
          <td>
            <img src={uncheck} alt='' />
          </td>
          <td>
            <img src={uncheck2} alt='' />
          </td>
          <td>3 Users</td>
          <td>5 Users</td>
        </tr>

        <tr>
          <td className='left'>Basic API integration</td>
          <td>
            <img src={uncheck} alt='' />
          </td>
          <td>
            <img src={uncheck2} alt='' />
          </td>
          <td>
            <img src={uncheck2} alt='' />
          </td>
          <td>
            <img src={check} alt='' />
          </td>
        </tr>
        <tr>
          <td className='left'>Custom domain with SSL</td>
          <td>
            <img src={uncheck} alt='' />
          </td>
          <td>
            <img src={uncheck2} alt='' />
          </td>
          <td>
            <img src={uncheck2} alt='' />
          </td>
          <td>
            <img src={check} alt='' />
          </td>
        </tr>
        <tr>
          <td className='left'>Detailed Analytics</td>
          <td>
            <img src={uncheck} alt='' />
          </td>
          <td>
            <img src={uncheck2} alt='' />
          </td>
          <td>
            <img src={uncheck2} alt='' />
          </td>
          <td>
            <img src={check} alt='' />
          </td>
        </tr>
        <tr>
          <td className='left'></td>
          <td>
            <button className='btn plan-btn'>Select Plan</button>
          </td>
          <td>
            <button className='btn plan-btn'>Select Plan</button>
          </td>
          <td>
            <button className='btn plan-btn'>Select Plan</button>
          </td>
          <td>
            <button className='btn plan-btn'>Select Plan</button>
          </td>
        </tr>
      </table>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 95vw;
  margin: 0 auto;
  margin-bottom: 30px;
  max-width: 1251px;
  table {
    width: 100%;

    border-collapse: collapse;
  }

  tr {
    height: auto;
    display: grid;
    align-items: center;
    justify-items: space-between;

    gap: 2rem;
    @media (min-width: 1100px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }
  th {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    padding: 8px;
    margin-bottom: 2rem;
  }
  td.left {
    text-align: left;
    padding: 8px;
    font-size: 12px;
  }
  td {
    text-align: center;
    padding: 8px;
    font-size: 14px;
  }
  /* td:nth-child(even) {
    background-color: rgba(165, 165, 189, 0.3);
  } */

  th {
    p {
      margin-bottom: 0.5rem;
    }
    h3 {
      color: #fad096;
      margin: 0;
      small {
        margin: 0;
        font-size: 14px;
        color: #262525;
      }
    }
  }
  .th1 {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  .plan {
    position: relative;
    margin-top: 1rem;
    ::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 0%;
      transform: translateY(-50%);
      background-color: #262525;
      height: 2px;
      width: 56px;
    }
    h3 {
      font-weight: 600;
      color: #262525;
    }
  }
  /* ========= */
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

  .plan-btn {
    height: 46px;
    width: 164px;
    background-color: #33b864;
    margin-top: 2rem;
  }
`;
export default PricingWrapper;
