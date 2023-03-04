import styled from 'styled-components';

export const StyledIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 9px solid #ebd8ff;

  &::after {
    content: '';
    position: absolute;
    left: 71px;
    height: 8px;
    width: 150px;
    background-color: #ebd8ff;

    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }

  &::before {
    content: '';
    position: absolute;
    right: 71px;
    height: 8px;
    width: 150px;
    background-color: #ebd8ff;
  }
`;

export const StyledBorder = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;

  border-radius: 50%;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const StyledImg = styled.img`
  width: 62px;
  height: 62px;
  border: none;
  border-radius: 50%;
  position: absolute;
  top: 9px;
  right: 9px;
  display: block;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    0px -1.71846px 3.43693px #ae7be3, 0px 3.43693px 2.5777px #fbf8ff;
`;
