import logotype from '../../img/goit.png';
import { StyledLogoContainer, StyledImg } from './Logo.styled';

export default function Logo() {
  return (
    <StyledLogoContainer>
      <StyledImg src={logotype} alt="logo" />
    </StyledLogoContainer>
  );
}
