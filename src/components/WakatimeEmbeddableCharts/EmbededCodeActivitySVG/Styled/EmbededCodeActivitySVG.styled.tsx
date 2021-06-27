/* eslint-disable react/prop-types */
import React, { HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

/** @type {*} */
const ActivitySVGWrapper = styled.div`
  width: 49.5%;
  height: auto;
  padding: 10px 10px 10px 5px;
`;

export const ActivitySVG = (props: HTMLAttributes<HTMLElement>): ReactElement => {
  const { children, ...rest } = props;
  return <ActivitySVGWrapper {...rest}>{children}</ActivitySVGWrapper>;
};
