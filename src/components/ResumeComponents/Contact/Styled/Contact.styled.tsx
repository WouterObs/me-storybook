/* eslint-disable react/prop-types */
import React, { HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

/** @type {*} */
const StyledSection = styled.section`
  background: #191919;
  padding-top: 96px;
  padding-bottom: 102px;
  color: #636363;
`;

/** @type {*} */
const StyledRow = styled.div`
  width: 96%;
  max-width: 1020px;
  margin: 0 auto;
`;

export const Section = (props: HTMLAttributes<HTMLElement>): ReactElement => {
  const { children, ...rest } = props;
  return <StyledSection {...rest}>{children}</StyledSection>;
};

export const Row = (props: HTMLAttributes<HTMLElement>): ReactElement => {
  const { children, ...rest } = props;
  return <StyledRow {...rest}>{children}</StyledRow>;
};
