import React, { useState } from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const Checkbox = () => {
  const [active, setActive] = useState(false);

  const CheckBoxStyling = styled(Button)`
    height: 37px;
    border: 0;
    background-color: ${({ theme }) => theme.color.fifty};

    &&&.active {
      background-color: ${({ theme }) => theme.color.seventh};
    }
  `;

  return (
    <div>
      <CheckBoxStyling onClick={() => setActive(!active)} active={active}>
        {active ? 'Activated' : 'Active'}
      </CheckBoxStyling>
    </div>
  );
};

export default Checkbox;
