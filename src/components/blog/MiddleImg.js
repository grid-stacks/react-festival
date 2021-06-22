import React from 'react';
import styled from 'styled-components';
import middleImg from '../../images/blog-tour.png';
const MiddleImg = () => {
  return (
    <Middle className='section'>
      <img src={middleImg} alt='' />
    </Middle>
  );
};
const Middle = styled.section`
  margin-bottom: 100px;
  img {
    width: 100%;
  }
`;
export default MiddleImg;
