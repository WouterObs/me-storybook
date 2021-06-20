import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { Button, ButtonProps } from '../../Button/Button';

const defaultProps: ButtonProps = {
  primary: true,
  label: 'Button',
  size: 'medium',
};
const primaryProps: ButtonProps = {
  primary: true,
  backgroundColor: 'white',
  label: 'Primary',
  size: 'large',
};
const secondaryProps: ButtonProps = {
  primary: false,
  label: 'Button',
  size: 'small',
};
storiesOf('StyledButton', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const { label, size } = defaultProps;
    return (
      <Button
        label={label}
        primary={boolean('primary', (defaultProps.primary = true))}
        size={select(
          'Size',
          { Small: 'small', Medium: 'medium', Large: 'large' },
          size,
        )}
        onClick={action('clicked')}
      />
    );
  })
  .add('Primary', () => {
    const { label, size } = primaryProps;
    return (
      <Button
        label={label}
        primary={boolean('primary', (primaryProps.primary = true))}
        size={select(
          'Size',
          { Small: 'small', Medium: 'medium', Large: 'large' },
          size,
        )}
        onClick={action('clicked')}
      />
    );
  })
  .add('Secondary', () => {
    const { label, size } = secondaryProps;
    return (
      <Button
        label={label}
        primary={boolean('primary', (secondaryProps.primary = false))}
        size={select(
          'Size',
          { Small: 'small', Medium: 'medium', Large: 'large' },
          size,
        )}
        onClick={action('clicked')}
      />
    );
  });
