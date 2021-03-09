import styled from "styled-components";
import { lighten } from "polished";
import { _constants as themeConstants } from "@styles/themes";
import media from "styled-media-query";

const { THEME_LIGHT } = themeConstants;

export const Wrapper = styled.div`
  width: 608px;
  height: 389px;
  display: flex;
  border: 1px solid
    ${({ theme: { title, colors } }) =>
      title === THEME_LIGHT ? colors.border : lighten(0.1, colors.secondaryBg)};
  border-radius: 4px;
  background: ${({ theme: { title, colors } }) =>
    title === THEME_LIGHT ? colors.white : colors.secondaryBg};
  position: relative;

  ${media.lessThan("medium")`
    width: 100%;
    height: 100%;
    border-radius: 0;
    border: 0;
    overflow: hidden;
  `}
`;

export const MessageOfflineWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  justify-content: center;
  background: ${({ theme }) => theme.colors.blackTransparent};
  bottom: 0;
  left: 0;
  z-index: 3;
`;

export const MessageOfflineText = styled.div`
  position: fixed;
  text-align: center;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  bottom: 0;
  left: 0;
  z-index: 3;

  svg {
    margin-right: 10px;
    font-size: 22px;
    min-width: 22px;
  }
`;
