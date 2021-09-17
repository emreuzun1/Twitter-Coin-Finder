import React, {FC} from 'react';
import styled from 'styled-components/native';
import {Colors} from '../constants/Colors';

const StyledContainer = styled.SafeAreaView({
  flex: 1,
  alignItems: 'center',
  backgroundColor: Colors.black,
});

const CoinScreen: FC = () => {
  return <StyledContainer />;
};

export default CoinScreen;
