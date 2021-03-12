import styled from "styled-components";
import { darken, lighten } from "polished";
import { _constants as themeConstants } from "@styles/themes";
import { ICustomInput } from ".";

const { THEME_LIGHT } = themeConstants;

type InputErrorProp = Pick<ICustomInput, "error">;

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  margin-bottom: 22px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const LabelText = styled.span`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 6px;
`;

export const TextInfo = styled.small`
  color: ${({ theme: { title, colors } }) =>
    title === THEME_LIGHT ? colors.textLight : darken(0.35, colors.text)};
  font-size: 11px;
  line-height: 14px;
  font-weight: bold;
  margin-top: 4px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const IconError = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translate(0, -50%);
  height: auto;
  display: flex;
  color: ${({ theme }) => theme.colors.error};
`;

export const Input = styled.input<InputErrorProp>`
  color: ${({ theme: { title, colors } }) =>
    title === THEME_LIGHT ? colors.text : colors.white};
  background: ${({ theme: { title, colors } }) =>
    title === THEME_LIGHT ? colors.white : colors.mainBg};
  border: 1px solid
    ${({ error, theme }) =>
      error !== undefined && error
        ? `${theme.colors.error}!important`
        : theme.colors.border};
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 18px;
  padding: 9px 28px 9px 12px;
  width: 100%;
  outline: none;

  &:hover {
    border: 1px solid
      ${({ theme: { title, colors } }) =>
        title === THEME_LIGHT
          ? darken(0.1, colors.border)
          : lighten(0.1, colors.border)};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.blueBorder};
  }
`;
