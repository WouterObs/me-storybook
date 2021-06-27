import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import EmbededCodeActivitySVG from '../EmbedCodeActivitySVG';

storiesOf('Wakatime Embeddable Charts | SVGs | Bar Charts', module)
  .addDecorator(withKnobs)
  .add('EmbededCodeActivitySVG', () => {
    return <EmbededCodeActivitySVG />;
  });
