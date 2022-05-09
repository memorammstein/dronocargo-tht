import avatarDefaultImage from "../assets/account_circle.png"
import { StyledCircularImage } from "./StyledCircularImage";

const Avatar = ({ imageUrl = avatarDefaultImage }) => {
  return (
    <StyledCircularImage alt="profile image" src={imageUrl} />
  );
};

export { Avatar };
