// @flow
import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

type Props = {
  navigation: *,
};

const Home = (props: Props) => {
  return(
    <View>
      <Text>Home</Text>
      <Button onPress={() => props.navigation.navigate('Create')}>Go to Create</Button>
    </View>
  )
}

export default Home;