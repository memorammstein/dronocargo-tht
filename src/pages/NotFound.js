import styled from "styled-components";
import { StyledPage } from "../components/StyledPage";
import { StyledTitle } from "../components/StyledTitle";

const StyledNotFound = styled(StyledTitle)`
  font-size: 5rem;
`;

const NotFound = () => {
  return (
    <StyledPage>
      <StyledNotFound>
        Page Not Found
      </StyledNotFound>
    </StyledPage>
  );
};

export { NotFound };
