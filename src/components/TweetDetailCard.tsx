import React, {FC, useState} from 'react';
import styled from 'styled-components/native';

import {getValueOfSymbol} from '../Lib/binanceApi';
import {ITweet} from '../Interfaces/TweetInterface';
import {Dimensions, TouchableOpacity} from 'react-native';
import {Colors} from '../constants/Colors';

const {width, height} = Dimensions.get('screen');

const StyledContainer = styled.View({
  width: width / 1.05,
  alignSelf: 'center',
  height: 50,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginVertical: 12,
  paddingHorizontal: 8,
  alignItems: 'center',
});

const StyledSymbolText = styled.Text({
  fontSize: 20,
  color: 'white',
});

const StyledPriceText = styled.Text({
  fontSize: 18,
  color: Colors.grey,
});

const StyledSymbolContainer = styled.View({
  justifyContent: 'space-between',
});

const StyledTweetText = styled.Text({
  fontSize: 20,
  color: 'white',
});

interface ITweetDetail {
  symbol: string;
  tweets: ITweet[];
  onPress: (symbol: string, tweets: ITweet[]) => void;
}

const TweetDetailCard: FC<ITweetDetail> = ({symbol, tweets, onPress}) => {
  const [price, setPrice] = useState<string>('');

  React.useEffect(() => {
    getValueOfSymbol(symbol).then(val => {
      setPrice(val);
    });
  }, [symbol]);

  return (
    <StyledContainer>
      <StyledSymbolContainer>
        <StyledSymbolText>{symbol}</StyledSymbolText>
        <StyledPriceText>${price}</StyledPriceText>
      </StyledSymbolContainer>
      <TouchableOpacity onPress={() => onPress(symbol, tweets)}>
        <StyledTweetText>Tweetleri Gör</StyledTweetText>
      </TouchableOpacity>
    </StyledContainer>
  );
};

export default TweetDetailCard;
