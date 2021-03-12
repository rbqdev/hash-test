import styled from "styled-components";
import { IToast } from ".";

type Type = Pick<IToast, "type">;

export const Wrapper = styled.div<Type>`
  width: fit-content;
  max-width: 80%;
  display: flex;
  align-items: center;
  background: ${({ theme, type }) => theme.colors[type]};
  text-align: center;
  border-radius: 2px;
  padding: 12px;
  font-size: 1rem;
  position: fixed;
  z-index: 3;
  border-radius: 4px;
  right: 50%;
  left: 50%;
  top: 35px;
  transform: translate(-50%, 0);
  -webkit-animation: fadeIn 0.5s;
  animation: fadeIn 0.5s;

  @-webkit-keyframes fadeIn {
    from {
      top: 0;
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      top: 0;
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 10px;
`;

export const Message = styled.div`
  display: block;
  color: ${({ theme }) => theme.colors.white};
`;
