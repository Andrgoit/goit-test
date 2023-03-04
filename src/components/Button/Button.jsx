import { StyledButton } from './Button.styled';

export default function Button({ isFollow, onClick }) {
  return (
    <StyledButton onClick={onClick} isFollow={isFollow}>
      {isFollow ? 'following' : 'follow'}
    </StyledButton>
  );
}
