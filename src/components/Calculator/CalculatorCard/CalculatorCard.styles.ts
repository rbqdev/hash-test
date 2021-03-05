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
