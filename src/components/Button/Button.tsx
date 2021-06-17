import React from 'react';
import './Styled/button.css';
import { StyledButton } from './Styled/button.styled';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * PrimaryButton contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 * @param {ButtonProps} props
 * @return {*}
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps): any => {
  const {
    primary = true,
    size = 'medium',
    backgroundColor,
    label,
    onClick,
    ...rest
  } = props;
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <StyledButton
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' ',
      )}
      style={{ backgroundColor }}
      onClick={onClick}
      {...rest}
    >
      {label}
    </StyledButton>
  );
};
