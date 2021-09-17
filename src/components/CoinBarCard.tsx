import React, {FC} from 'react';
import styled from 'styled-components/native';

interface IBar {
  color: string;
  height: number;
}

const StyledCoinContainer = styled.View({
  alignItems: 'center',
  alignSelf: 'flex-end',
});

const StyledCoinText = styled.Text({
  fontSize: 14,
  color: 'white',
});

const StyledCoinBar = styled.View<IBar>(({color, height}) => ({
  width: 28,
  height: height,
  backgroundColor: color,
}));

const StyledCoinTitle = styled.Text({
  fontSize: 16,
  color: 'white',
  marginTop: 6,
});

interface ICoinBar {
  count: number;
  title: string;
  color: string;
  height: number;
}

const CoinBarCard: FC<ICoinBar> = ({count, title, color, height}) => {
  return (
    <StyledCoinContainer>
      <StyledCoinText>{count}</StyledCoinText>
      <StyledCoinBar color={color} height={height} />
      <StyledCoinTitle>{title}</StyledCoinTitle>
    </StyledCoinContainer>
  );
};

export default CoinBarCard;
