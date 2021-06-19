import React, { useState } from 'react';
import plusIcon from '../../images/plus-icon.png';
import minus from '../../images/minus-icon.png';
import styled from 'styled-components';
const AccordionComponent = ({ item }) => {
  const [show, setShow] = useState(false);
  return (
    <Wrapper>
      <div className='single'>
        <p className='heading'>
          <span>{item.heading}</span>
          <span className='icon' onClick={() => setShow(!show)}>
            {show ? <img src={minus} alt='' /> : <img src={plusIcon} alt='' />}
          </span>
        </p>
        {show && <p className='content'>{item.answer}</p>}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default AccordionComponent;
