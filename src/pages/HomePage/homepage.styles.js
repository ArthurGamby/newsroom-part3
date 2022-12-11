import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.background.primary};
  .content {
    width: 1140px;
    min-height: calc(100vh - 100px); // Height of the navBar

    .news-container {
      padding-top: 50px;
      display: flex;
    }

    .articles-section {
      display: flex;
      max-width: 78%;
      border-right: 1px solid black;
      flex-wrap: wrap;
    }

    .quick-infos-section {
      max-width: 22%;
      margin-left: 15px;
    }
  }
`;
