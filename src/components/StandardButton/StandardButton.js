// import React, { forwardRef } from 'react';
// import PropTypes from 'prop-types';

// const Button = forwardRef(({ children, className, ...restProps }, ref) => (
//   <button
//     type="button"
//     ref={ref}
//     {...restProps}
//     className={`Button ${className}`}
//   >
//     {children}
//   </button>
// ));

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string
// };

// Button.defaultProps = {
//   className: ''
// };

// export default Button;

import React from 'react';
import {Button} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function StandardButton({buttonText}) {
  return (
    <Button
      colorScheme="teal"
      variant="solid"
      borderRadius="8px"
      py="4"
      px="4"
      lineHeight="1"
      size="sm"
    >
      {buttonText}
    </Button>
  );
}
StandardButton.propTypes = {
  buttonText: PropTypes.string,
};

StandardButton.defaultProps = {
  buttonText: 'SHOP NOW',
};
