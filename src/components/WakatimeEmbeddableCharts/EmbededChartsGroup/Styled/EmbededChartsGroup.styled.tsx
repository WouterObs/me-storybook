/* eslint-disable react/prop-types */
import React, { HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

/** @type {*} */
const SVGGroupWrapper = styled.section`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const GroupSVG = (props: HTMLAttributes<HTMLElement>): ReactElement => {
  const { children } = props;
  return <SVGGroupWrapper>{children}</SVGGroupWrapper>;
};
