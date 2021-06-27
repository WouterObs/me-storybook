import React, { PureComponent, ReactElement } from 'react';
import { ActivitySVG } from './Styled/EmbededCodeActivitySVG.styled';

/**
 *?Wakatime 'Embeddable Charts' - Coding Activity SVG
 *
 *ToDo: Create Embedable Chart props with required prop "chartType: 'bar' | 'wheel'"
 *
 *ToDo: Render the applicable chart based on the "chartType" prop. (default: 'bar')
 *
 * @export
 * @class EmbededCodeActivitySVG
 * @extends {Component<Main>}
 */
export default class EmbededCodeActivitySVG extends PureComponent {
  //*Render the Embeddable SVG Chart, obtained from Wakatime.
  render(): ReactElement {
    return (
      <ActivitySVG id={'fig-activity'}>
        <figure>
          <embed src="https://wakatime.com/share/@f9a50cc3-d943-43eb-b5de-ccf0cba671b0/81837c0b-239c-4d35-b9a1-39d049d584ef.svg"></embed>
        </figure>
      </ActivitySVG>
    );
  }
}
