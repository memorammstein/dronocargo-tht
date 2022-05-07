import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  padding: 2rem;
`;

const StyledLogo = styled(Link)`
  color: inherit;
  font-weight: bolder;
  text-decoration: none;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo to="/">Dronocargo</StyledLogo>
    </StyledHeader>
  );
};

export { Header };
