import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.blueLight};
  display: flex;
  line-height: 46px;

  > * {
    white-space: nowrap;
  }

  h3 {
    font-weight: normal;
    font-size: 1rem;
    margin: 0;
  }

  strong {
    margin-left: 3px;
  }
`;
