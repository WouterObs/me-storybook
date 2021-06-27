import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import EmbededLanguagesSVG from '../EmbededLanguagesSVG';

storiesOf('Wakatime Embeddable Charts | SVGs | Wheel Charts', module)
  .addDecorator(withKnobs)
  .add('EmbededLanguagesSVG', () => {
    return <EmbededLanguagesSVG />;
  });
