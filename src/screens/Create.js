// @flow
import React, useState from 'react';
import {View, Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

type Props = {
  navigation: *,
};

const Create = (props: Props) => {
  const [companyName, setCompanyName] = useState(null);
  return (
    <View>
      <Text>Create</Text>
    <TextInput
      value={companyName}
      onChangeText={(value) => setCompanyName(value)}
    />
    <TextInput
      value={companyName}
      onChangeText={(value) => setCompanyName(value)}
    />
    <TextInput
      value={companyName}
      onChangeText={(value) => setCompanyName(value)}
    />
    <TextInput
      value={companyName}
      onChangeText={(value) => setCompanyName(value)}
    />
      <Button onPress={() =>props.navigation.navigate('Show')}>Go to Show</Button>
    </View>
  );
};

export default Create;
