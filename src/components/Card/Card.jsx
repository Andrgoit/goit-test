// import { useEffect, useState } from 'react';
import {
  StyledContainer,
  StyledTweetsText,
  StyledFollowersText,
} from './Card.styled';
import Logo from 'components/Logo/Logo';
import Hero from 'components/Hero/Hero';
import UserIcon from 'components/UserIcon/UserIcon';
import Button from 'components/Button/Button';

import { useSelector, useDispatch } from 'react-redux';
import { addFollow, removeFollow } from 'redux/user-slice';
import { getFollowers, isFollower } from 'redux/user-selectors';

export default function Card() {
  const followers = useSelector(getFollowers);
  const isFollow = useSelector(isFollower);

  const dispatch = useDispatch();

  const handlerClick = () => {
    if (isFollow) {
      dispatch(removeFollow());
    }
    if (!isFollow) {
      dispatch(addFollow());
    }
  };

  const newData = followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <StyledContainer>
      <Logo />
      <Hero />
      <UserIcon />
      <StyledTweetsText>777 tweets</StyledTweetsText>
      <StyledFollowersText>{newData} followers</StyledFollowersText>
      <Button isFollow={isFollow} onClick={handlerClick} />
    </StyledContainer>
  );
}
