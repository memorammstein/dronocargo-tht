import styled from "styled-components";
import { css } from "styled-components";
import searchIcon from "../assets/searchIcon.svg";

const searchStyling = css`
  background: transparent url(${searchIcon}) no-repeat 19px center;
`;

const StyledInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  padding-left: ${props => props.type === "search" ? "3rem" : "0.5rem"};
  padding-right: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  ${props => props.type === "search" ? searchStyling : null}
`;

export { StyledInput };
