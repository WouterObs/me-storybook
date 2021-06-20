import styled from 'styled-components';
import { ButtonProps } from '../Button';

/**
 * Styled Button - styled-component with attrs.
 * @type {*}
 */
export const StyledButton = styled.button.attrs((props: ButtonProps) => ({
  size: props.size || 'medium',
  className:
    props.className ||
    [
      'storybook-button',
      `storybook-button--${props.size}`,
      props.primary
        ? 'storybook-button--primary'
        : 'storybook-button--secondary',
    ].join(' '),
  ...props,
}))`
  font-weight: bold;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`;
