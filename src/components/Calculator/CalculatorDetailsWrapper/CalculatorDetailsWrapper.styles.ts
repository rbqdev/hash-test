import styled, { css } from "styled-components";
import { lighten } from "polished";
import { _constants as themeConstants } from "@styles/themes";
import media from "styled-media-query";

const { THEME_LIGHT } = themeConstants;

export const Wrapper = styled.article`
  display: flex;

  ${media.greaterThan("medium")`
    width: 100%;
  `}
`;

export const WrapperArticle = styled.div`
  ${({ theme: { title, colors } }) => css`
    background: ${title === THEME_LIGHT
      ? colors.secondaryBg
      : lighten(0.04, colors.secondaryBg)};
    padding: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-style: italic;

    ${media.greaterThan("medium")`
      border-radius: 0 4px 4px 0;
    `}

    ${media.lessThan("medium")`
      width: 100%;
      height: auto;
      position: absolute;
      bottom: -100%;
      left: 0;
      visibility: hidden;
      z-index: 2;
      transition: all 0.2s;
    `}
  `}
`;

export const Title = styled.h2`
  text-transform: uppercase;
  border-bottom: 1px solid
    ${({ theme: { title, colors } }) =>
      title === THEME_LIGHT ? colors.blueBorderLight : colors.border};
  color: ${({ theme }) => theme.colors.blue};
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 4px;
  display: block;
  margin-bottom: 15px;
`;
