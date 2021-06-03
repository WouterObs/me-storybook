import React from "react";
import { storiesOf } from "@storybook/react";
import ColorButton from "../ColorButton";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from '@storybook/addon-knobs';

// const props: ButtonProps = {
//   primary: true,
//   label: 'Button',
//   size: 'medium'
// }
storiesOf("ColorButton", module)
  .addDecorator(withKnobs)
  .add("red",
    () => <ColorButton btnColor={select("color", { Red: "red", Dark: "darkred" }, "red")} onClick={action("clicked")} />
  )
  .add("blue",
    () => <ColorButton btnColor={text("color", "blue")} onClick={action("clicked")} />
  )
  // .add("StyledButton",
  //   () => {
  //     return (
  //       <Button
  //         label={props.label}
  //         primary={boolean('primary', props.primary = true)}
  //         size={select('Size', { Small: 'small', Medium: 'medium', Large: 'large' },
  //         props.size)}
  //         onClick={action("clicked")}
  //       />
  //     )
  //   }
  // )
