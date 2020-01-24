// @flow
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

type Props = {
  navigation: *,
};

const Create = (props: Props) => {
  const [companyName, setCompanyName] = useState(null);
  const [workedCompanyName, setWorkedCompanyName] = useState(null);
  const [heading, setHeading]= useState(null);
  const [priceList, setPriceList] = useState([{name: null, price: 0}]);
  return (
    <View>
      <Text>Create</Text>
      <TextInput
        required
        value={companyName}
        onChangeText={value => setCompanyName(value)}
      />
      <TextInput
        required
        value={workedCompanyName}
        onChangeText={value => setWorkedCompanyName(value)}
      />
      <TextInput
        required
        value={heading} 
        onChangeText={value => setHeading(value)}
      />
      <View>
        <TextInput
        required
          value={priceList.name}
          onChangeText={value => setPriceList({name: value})}
        />
        <TextInput
        required
          keyboardType="numeric"
          value={priceList.cost}
          onChangeText={value => setPriceList({cost: value})}
        />
      </View>

      <Button onPress={() => props.navigation.navigate('Show',{
        companyName: companyName,
        workedCompanyName: workedCompanyName,
        heading: heading,
        priceList: priceList,
      })}>
        Go to Show
      </Button>
    </View>
  );
};

export default Create;
