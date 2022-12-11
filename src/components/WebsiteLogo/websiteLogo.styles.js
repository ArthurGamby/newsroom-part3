import styled from "styled-components";

export const StyledContainer = styled.div`
  background: ${(props) => props.theme.colors.background.primary};
  .title {
    margin-left: 20px;
    font-size: 50px;
    font-family: ${(props) => props.theme.fonts.primary};
  }
`;
