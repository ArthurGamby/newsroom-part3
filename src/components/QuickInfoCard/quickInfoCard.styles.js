import styled from "styled-components";

export const StyledContainer = styled.div`
  .info-card {
    padding-bottom: 20px;
    font-family: ${(props) => props.theme.fonts.secondary};

    .title {
      font-size: 22px;
      font-weight: 600;
    }

    .summary {
      padding-top: 5px;
      font-size: 15px;
      font-weight: 300;
    }
  }
`;
