import styled from "styled-components";
import { StyledLink } from "./StyledLink";

const StyledHeader = styled.footer`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  padding: 3rem 2rem 4rem;
`;

const Footer = () => {
  return (
    <StyledHeader>
      <span>Powered by Nuvo Cargo</span>
      <span>
        <StyledLink href="mailto:guillermo_jimenez@outlook.com?subject=I need some help with the nuvo cargo app">
          Help
        </StyledLink>
      </span>
    </StyledHeader>
  );
};

export { Footer };
