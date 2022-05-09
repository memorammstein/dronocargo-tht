import styled from "styled-components";
import { css } from "styled-components";
import searchIcon from "../assets/searchIcon.svg";

const searchStyling = css`
  background: transparent url(${searchIcon}) no-repeat 19px center;
  padding-left: 3rem;
`;

const inputBaseStyling = css`
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 1rem 0.5rem;
`;

const StyledInput = styled.input`
  ${inputBaseStyling}
  ${props => props.type === "search" ? searchStyling : null}
`;

const StyledSelect = styled.select`
  ${inputBaseStyling}
`;

export { StyledInput, StyledSelect };
