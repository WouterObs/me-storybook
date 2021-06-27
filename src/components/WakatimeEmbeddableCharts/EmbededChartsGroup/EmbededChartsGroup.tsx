import React, { PureComponent, ReactElement } from 'react';
import EmbededCodeActivitySVG from '../EmbededCodeActivitySVG/EmbedCodeActivitySVG';
import EmbededLanguagesSVG from '../EmbedLanguagesSVG/EmbededLanguagesSVG';
import { GroupSVG } from './Styled/EmbededChartsGroup.styled';

/**
 *?Resume 'EmbededChartsGroup' section/component.
 *
 * @export
 * @class EmbededChartsGroup
 * @extends {Component<Main>}
 */
export default class EmbededChartsGroup extends PureComponent {
  render(): ReactElement {
    return (
      <GroupSVG id={'Embedded-SVG-Group-Wrapper'}>
        <EmbededLanguagesSVG />
        <EmbededCodeActivitySVG />
      </GroupSVG>
    );
  }
}
