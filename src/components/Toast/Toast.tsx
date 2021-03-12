import {
  IoMdDoneAll,
  IoMdAlert,
  IoMdWarning,
  IoMdInformation
} from "react-icons/io";
import * as Styled from "./Toast.styles";

export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastProps {
  id?: number;
  type: ToastType;
  message: string;
  duration?: number;
}

const icons = {
  success: <IoMdDoneAll />,
  error: <IoMdAlert />,
  warning: <IoMdWarning />,
  info: <IoMdInformation />
};

export default function Toast({ type, message }: ToastProps) {
  return (
    <Styled.Wrapper type={type} data-testid={`toast-${type}`}>
      <Styled.Icon>{icons[type]}</Styled.Icon>
      <Styled.Message>{message}</Styled.Message>
    </Styled.Wrapper>
  );
}
