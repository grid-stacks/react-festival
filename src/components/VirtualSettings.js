import React from 'react';
import styled from 'styled-components';

const VirtualSettings = () => {
  return (
    <Wrapper className='section'>
      <div className='settings'>
        <div className='auto-rotate'>
          <text>Autorotate </text>
          <input type='range' id='rotate' name='rotate' min='0' max='10' />
        </div>
        <div className='view-mode'>
          <text>View Mode</text>
        </div>
        <div className='input'>Lorem, ipsum dolor sit amet</div>
      </div>
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
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    text {
      font-weight: 600;
    }
  }
  .input {
    flex: 2;
    height: 86px;
    width: 425px;
    box-shadow: var(--shadow-1);
    border-radius: var(--borderRadius);
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }
`;

export default VirtualSettings;
