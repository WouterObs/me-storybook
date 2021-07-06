import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import EmbededCodeActivitySVG from '../EmbedCodeActivitySVG';

const storyTitle = {
  title: 'Wakatime | Embeddable Charts/SVG/Bar Charts',
};

storiesOf(storyTitle.title, module)
  .addDecorator(withKnobs)
  .add('EmbededCodeActivitySVG', () => {
    return <EmbededCodeActivitySVG />;
  });
