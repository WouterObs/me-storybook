import React, { PureComponent, ReactElement } from 'react';
import { LanguagesSVG } from './Styled/EmbededLanguagesSVG.styled';

/**
 *?Wakatime 'Embeddable Charts' - Coding Languages used SVG (Wheel Chart)
 *
 *ToDo: Create Embedable Chart props with required prop "chartType: 'bar' | 'wheel'"
 *
 *ToDo: Render the applicable chart based on the "chartType" prop. (default: 'bar')
 *
 * @export
 * @class EmbededLanguagesSVG
 * @extends {Component<Main>}
 */
export default class EmbededLanguagesSVG extends PureComponent {
  //*Render the Embeddable SVG Chart, obtained from Wakatime.
  render(): ReactElement {
    return (
      <LanguagesSVG id={'fig-languages'}>
        <figure>
          <embed src="https://wakatime.com/share/@f9a50cc3-d943-43eb-b5de-ccf0cba671b0/63dda626-1e81-4f44-bda3-23714d4c33ed.svg"></embed>
        </figure>
      </LanguagesSVG>
    );
  }
}
