import React from "react";
import styled, { css } from "styled-components";

import { IComponentProps } from '../../../types';

interface IButtonProps extends IComponentProps {
	className?: string;
	gray?: boolean;
	red?: boolean;
}

const CustomStyledButton = ({ className, ...props }: IButtonProps) => (
  <button
    className={className}
  >
    {props.children}
  </button>
);

const StyledButton = styled(CustomStyledButton)`
  display: inline-block;
  border: 0;
  background-color: #6AD1BA;
  color: #FFFFFF;
  cursor: pointer;
  padding: 0px 20px;
  min-width: 140px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  outline: 0;
  box-shadow: 0 4px 8px 0 rgba(#6AD1BA, .25);
  transition: background 300ms;
  margin: 20px;

  &:disabled {
    box-shadow: unset;
    cursor: not-allowed;
    background-color: #E4E7F0 !important;
  }

  &:hover {
    background-color: #1ba3a3;
  }

  &:active {
    background-color: #39797a;
    box-shadow: unset;
  }

  ${props =>
    props.gray === true &&
      css`
      background-color: #4E527D;
      box-shadow: 0 4px 8px 0 rgba(#4E527D, 0.25);

      &:hover {
        background-color: #464A68;
      }

      &:active {
        background-color: #313557;
        box-shadow: unset;
      }
  `};

  ${props =>
    props.red === true &&
      css`
      background-color: #fa265f;
      box-shadow: 0 4px 8px 0 rgba(#fa265f, 0.25);

      &:hover {
        background-color: #c81e4c;
      }

      &:active {
        background-color: #961739;
        box-shadow: unset;
      }
  `};
`;

export const SCButton = (props: IButtonProps) => {
  return (
    <StyledButton gray={props.gray} red={props.red}>
      {props.children}
    </StyledButton>
  );
};
