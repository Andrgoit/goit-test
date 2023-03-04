import { StyledHeroContainer, StyledImg } from './Hero.styled';
import heroImg from '../../img/big.png';

export default function Hero() {
  return (
    <StyledHeroContainer>
      <StyledImg src={heroImg} alt="hero image" />
    </StyledHeroContainer>
  );
}
