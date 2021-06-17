import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { Button, ButtonProps } from '../../Button/Button';

const props: ButtonProps = {
  primary: true,
  label: 'Button',
  size: 'medium',
};
const props2: ButtonProps = {
  primary: false,
  backgroundColor: 'white',
  label: 'Button',
  size: 'small',
};

storiesOf('StyledButton', module)
  .addDecorator(withKnobs)
  .add('PrimaryButton', () => {
    return (
      <Button
        label={props.label}
        primary={boolean('primary', props.primary ? true : false)}
        size={select(
          'Size',
          { Small: 'small', Medium: 'medium', Large: 'large' },
          props.size,
        )}
        onClick={action('clicked')}
      />
    );
  })
  .add('SecondaryButton', () => {
    return (
      <Button
        label={props2.label}
        primary={boolean('primary', props.primary ? false : true)}
        backgroundColor={props.primary ? undefined : props2.backgroundColor}
        size={select(
          'Size',
          { Small: 'small', Medium: 'medium', Large: 'large' },
          props2.size,
        )}
        onClick={action('clicked')}
      />
    );
  });
