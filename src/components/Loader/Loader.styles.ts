import styled from "styled-components";
import { opacify } from "polished";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: rgb(246 247 251 / 20%);
    border-radius: 4px;
    position: absolute;
    z-index: 1;
    order: 1;
  }

  &:after {
    content: "";
    display: block;
    width: 50px;
    height: 50px;
    margin: 16px;
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.colors.blueLight};
    border-color: ${({ theme }) => theme.colors.blueLight} transparent
      ${({ theme }) => theme.colors.blueLight} transparent;
    animation: loaderAnimation 1s linear infinite;
    position: relative;
    z-index: 2;
  }

  @keyframes loaderAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => opacify(0.5, theme.colors.black)};
  white-space: nowrap;
  order: 2;
  padding: 4px 8px;
  border-radius: 2px;
  position: absolute;
  bottom: 30%;
`;
