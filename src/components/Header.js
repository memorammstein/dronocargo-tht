import { useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuthContext } from "../contexts/AuthContext";
import { Avatar } from "./Avatar";

const StyledHeader = styled.header`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  padding: 2rem;
`;

const StyledLogo = styled(Link)`
  color: inherit;
  font-weight: 600;
  text-decoration: none;
`;

const StyledSignIn = styled(Link)`
  color: inherit;
  cursor: pointer;
  text-decoration: inherit;
`;

const StyledUserContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 0.625rem;
`;

const StyledUserAvatar = styled(Avatar)``;

const SignIn = () => {
  const { signIn } = useAuthContext();

  const handleSignInClick = useCallback((event) => {
    event.preventDefault();
    signIn();
  }, [signIn]);

  return (
    <StyledSignIn onClick={handleSignInClick} to="/signin">Sign In</StyledSignIn>
  );
};

const User = () => {
  const { user } = useAuthContext();

  return user ? (
    <StyledUserContainer>
      <span>{user.name}</span>
      <StyledUserAvatar imageUrl={user.imgURL} />
    </StyledUserContainer>
  ) : null;
};

const Header = () => {
  const { isSignedIn } = useAuthContext();

  return (
    <StyledHeader>
      <StyledLogo to="/">Dronocargo</StyledLogo>
      {isSignedIn ? <User /> : <SignIn />}
    </StyledHeader>
  );
};

export { Header };
