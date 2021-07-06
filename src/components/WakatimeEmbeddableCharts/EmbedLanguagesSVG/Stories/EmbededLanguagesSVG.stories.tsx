import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import EmbededLanguagesSVG from '../EmbededLanguagesSVG';

const storyTitle = {
  title: 'Wakatime | Embeddable Charts/SVG/Wheel Charts',
};

storiesOf(storyTitle.title, module)
  .addDecorator(withKnobs)
  .add('EmbededLanguagesSVG', () => {
    return <EmbededLanguagesSVG />;
  });
