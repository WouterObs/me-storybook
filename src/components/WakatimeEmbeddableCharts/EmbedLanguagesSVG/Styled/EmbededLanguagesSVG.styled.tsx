/* eslint-disable react/prop-types */
import React, { HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

/** @type {*} */
const LanguagesSVGWrapper = styled.div`
  width: 49.5%;
  height: auto;
  padding: 10px 5px 10px 10px;
`;

export const LanguagesSVG = (props: HTMLAttributes<HTMLElement>): ReactElement => {
  const { children, ...rest } = props;
  return <LanguagesSVGWrapper {...rest}>{children}</LanguagesSVGWrapper>;
};
