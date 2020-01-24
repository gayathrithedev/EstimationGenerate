// @flow
import React from 'react';
import {View, Text} from 'react-native';

type Props = {
  navigation: *,
};

const Show = (props: Props) => {
  console.log(props.navigation.state.params);
  const {
    companyName,
    workedCompanyName,
    heading,
    priceList,
  } = props.navigation.state.params;
  return (
    <View>
      <Text>Show</Text>
  <Text>{companyName}</Text>
<Text>{workedCompanyName}</Text>
  <Text>{heading}</Text>
<Text>{priceList.name}</Text>
  <Text>{priceList.cost}</Text>
    </View>
  );
};

export default Show;
