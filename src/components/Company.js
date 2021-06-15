import React from 'react';
import styled from 'styled-components';
import sony from '../images/sony.PNG';
import samsung from '../images/samsung.png';
import archdaily from '../images/archdaily.png';
import news from '../images/news.png';
import zillow from '../images/zillow.png';
const Company = () => {
  return (
    <Wrapper>
      <h3>The Affordable Matterport Alternative The Matters</h3>
      <p>No lock-ins Total Freedom. 100,000 Clients can't be wrong</p>
      <div className='company'>
        <div>
          <img src={samsung} alt='' />
        </div>
        <div>
          <img src={sony} alt='' />
        </div>
        <div>
          <img src={zillow} alt='' />
        </div>
        <div>
          <img src={news} alt='' />
        </div>
        <div>
          <img src={archdaily} alt='' />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  text-align: center;
  width: 95vw;

  margin: 2rem auto 6rem;

  max-width: 1056px;
  h3 {
    margin: 2px;
    font-size: 34px;
    font-weight: 700;
  }
  p {
    margin-top: 0;
  }
  .company {
    padding-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 9rem;
    margin-top: 2rem;

    img {
    }
  }
`;
export default Company;
