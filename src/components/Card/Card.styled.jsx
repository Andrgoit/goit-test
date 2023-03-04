import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 20px;
`;

export const StyledTweetsText = styled.p`
  position: relative;
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  color: #ebd8ff;
  line-height: 1.2;
`;

export const StyledFollowersText = styled.p`
  position: relative;
  margin-bottom: 26px;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  color: #ebd8ff;
  line-height: 1.2;
`;
