import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import EmbededChartsGroup from '../EmbededChartsGroup';
import EmbededCodeActivitySVG from '../../EmbededCodeActivitySVG/EmbedCodeActivitySVG';
import EmbededLanguagesSVG from '../../EmbedLanguagesSVG/EmbededLanguagesSVG';

storiesOf('Wakatime | Embeddable Charts', module)
  .addDecorator(withKnobs)
  .add('EmbededChartsGroup', () => {
    return (
      <EmbededChartsGroup>
        <EmbededLanguagesSVG />
        <EmbededCodeActivitySVG />
      </EmbededChartsGroup>
    );
  });
