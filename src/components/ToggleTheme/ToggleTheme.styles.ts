import styled from "styled-components";

export default styled.button`
  outline: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.grey};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  height: 25px;
  min-width: 30px;
  padding: 0 8px;

  svg {
    max-width: 15px;
    path {
      fill: ${({ theme }) => theme.colors.text};
    }
  }
`;
