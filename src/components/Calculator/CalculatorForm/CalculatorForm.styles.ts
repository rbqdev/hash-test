import styled from "styled-components";
import { _constants as themeConstants } from "@styles/themes";
import media from "styled-media-query";

const { THEME_LIGHT } = themeConstants;

export const Wrapper = styled.section`
  width: 375px;
  padding: 41px 70px 44px 56px;
  border-radius: 4px 0 0 4px;
  background: ${({ theme: { title, colors } }) =>
    title === THEME_LIGHT ? colors.white : colors.secondaryBg};

  ${media.lessThan("medium")`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 25px;

    form {
      width: 100%;
    }
  `}
`;

export const Title = styled.h2`
  margin-bottom: 22px;
  font-size: 24px;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.text};
`;
