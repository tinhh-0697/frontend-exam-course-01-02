import React, { useState } from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const Checkbox = ({ checked, secondHandle }) => {
  const [active, setActive] = useState(checked);

  const CheckBoxStyling = styled(Button)`
    height: 37px;
    border: 0;
    background-color: ${({ theme }) => theme.color.fifty};

    &&&.active {
      background-color: ${({ theme }) => theme.color.seventh};
    }
  `;

  const handleClick = () => {
    secondHandle('status', !active);
    setActive(!active);
  };

  return (
    <div>
      <CheckBoxStyling onClick={handleClick} active={active}>
        {active ? 'Activated' : 'Active'}
      </CheckBoxStyling>
    </div>
  );
};

export default Checkbox;
