import {
  StyledIconContainer,
  StyledImg,
  StyledBorder,
} from './UserIcon.styled';

import icon from '../../img/user.png';

export default function UserIcon() {
  return (
    <StyledIconContainer>
      <StyledBorder>
        <StyledImg src={icon} alt="user icon" />
      </StyledBorder>
    </StyledIconContainer>
  );
}
