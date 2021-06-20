import React, { ReactElement } from 'react';
import './Styled/button.css';
import { StyledButton } from './Styled/button.styled';

/**
 * StyledButton props Interface.
 * @export
 * @interface ButtonProps
 */
export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   * @type {boolean}
   * @memberof ButtonProps
   */
  primary?: boolean;
  /**
   * Button class / style.
   * @type {string}
   * @memberof ButtonProps
   */
  className?: string;
  /**
   * What background color to use
   * @type {string}
   * @memberof ButtonProps
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   * @type {('small' | 'medium' | 'large')}
   * @memberof ButtonProps
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * PrimaryButton contents
   * @type {string}
   * @memberof ButtonProps
   */
  label: string;
  /**
   * Optional click handler
   * @memberof ButtonProps
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 * @param {ButtonProps} props
 * @return {*}
 */
export const Button: React.FC<ButtonProps> = (
  props: ButtonProps,
): ReactElement => {
  const { primary = true, backgroundColor, label, onClick, ...rest } = props;
  return (
    <StyledButton
      type="button"
      primary={primary}
      style={{ backgroundColor }}
      onClick={onClick}
      {...rest}
    >
      {label}
    </StyledButton>
  );
};
