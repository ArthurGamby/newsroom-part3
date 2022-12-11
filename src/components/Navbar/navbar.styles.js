import styled from "styled-components";

export const StyledNavBar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-family: ${(props) => props.theme.fonts.primary};
  .nav-items {
    width: 100%;
    background-color: black;
    text-align: center;
    span {
      text-align: center;

      a {
        padding: 0px 10px 0px 10px;
        text-decoration: none;
        cursor: pointer;
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 1px;

        &:hover {
          background-color: red;
          color: black;
        }
      }
    }
  }
`;
