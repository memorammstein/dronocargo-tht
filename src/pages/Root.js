import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Root = () => {
  return (
    <StyledRoot>
      <Header />
        <Outlet />
      <Footer />
    </StyledRoot>
  );
};

export { Root };
