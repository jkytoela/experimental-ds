import React, { AriaAttributes, ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from '../styled/StyledButton';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Applies rounded corners */
  rounded?: boolean;

  /** Specifies the button variant */
  variant?: 'primary' | 'outline' | 'danger' | 'default';

  /** Specifies the button size */
  size?: 'small' | 'medium' | 'large';

  /** Stretches the button to its container width */
  fullWidth?: boolean;
}

const Button: React.FunctionComponent<
  IButtonProps & React.RefAttributes<HTMLButtonElement>
> = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {

  return <StyledButton ref={ref} {...props} />;
});

Button.propTypes = {
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'outline', 'danger', 'default']),
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  rounded: true,
  size: 'medium',
  variant: 'default',
  fullWidth: false,
};

export default Button as React.FunctionComponent<
  IButtonProps & React.RefAttributes<HTMLButtonElement> & AriaAttributes
>;