import React from 'react';

import { ButtonEl } from './Button.styles';

const Button = (props) => {
  return (
    <ButtonEl type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </ButtonEl>
  );
};

export default Button;
