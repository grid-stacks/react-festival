import React from 'react';
import styled from 'styled-components';
import sony from '../images/sony.PNG';
const Company = () => {
  return (
    <Wrapper>
      <h2>The affordable matterport Alternative the matter</h2>
      <p>No lock-ins total freedom . 100000 Clienets can"t be worng</p>
      <div className='company'>
        <img src={sony} alt='' />
        <img src={sony} alt='' />
        <img src={sony} alt='' />
        <img src={sony} alt='' />
        <img src={sony} alt='' />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  text-align: center;
  width: 95vw;

  margin: 6rem auto;

  max-width: 1160px;
  h2 {
    margin: 0;
  }
  p {
    margin-top: 0;
  }
  .company {
    padding-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
    margin-top: 2rem;
    img {
      width: 170px;
    }
  }
`;
export default Company;
