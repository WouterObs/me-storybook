import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { Button, ButtonProps } from "../../Button/Button";

const props: ButtonProps = {
  primary: true,
  label: 'Button',
  size: 'medium'
}
storiesOf("StyledButton", module)
  .addDecorator(withKnobs)
  .add("StyledButton",
    () => {
      return (
        <Button
          label={props.label}
          primary={boolean('primary', props.primary = true)}
          size={select('Size', { Small: 'small', Medium: 'medium', Large: 'large' },
          props.size)}
          onClick={action("clicked")}
        />
      )
    }
  )
