import React from "react";
import { IoMdAlert } from "react-icons/io";
import * as Styled from "./InputText.styles";

export interface ICallbackPayload {
  value: string | number;
  name: string;
}

export interface IInputText
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  textInfo?: string;
}

export interface ICustomInput {
  name: string;
  error?: boolean;
  callbackFunction?: (payload: ICallbackPayload) => void;
}

const InputText = React.forwardRef<HTMLInputElement, IInputText & ICustomInput>(
  ({ label, name, error = false, textInfo = "", ...restProps }, ref) => (
    <Styled.Wrapper>
      <Styled.Label htmlFor={name}>
        <Styled.LabelText>{label}</Styled.LabelText>

        <Styled.InputWrapper>
          <Styled.Input
            type="text"
            id={name}
            name={name}
            error={error}
            aria-invalid={error}
            ref={ref}
            {...restProps}
          />

          {error && (
            <Styled.IconError data-testid="icon-error">
              <IoMdAlert />
            </Styled.IconError>
          )}
        </Styled.InputWrapper>

        {textInfo && <Styled.TextInfo>{textInfo}</Styled.TextInfo>}
      </Styled.Label>
    </Styled.Wrapper>
  )
);

export default InputText;
