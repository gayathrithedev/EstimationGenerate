// @flow

import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native'
import {TextInput, Button} from 'react-native-paper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../redux/actions';
import type {Estimation} from '../redux/types';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  priceInput: {
    padding: 8,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  doneButton: {
    padding: 8,
    width: '30%',
    alignSelf: 'center',
    borderRadius: 50,
    marginTop: 16,
  },
  costInput: {
    width: '40%',
    alignSelf: 'center',
  }
})

type Props = {
  addPriceList: *,
  navigation: *,
  estimation: Estimation,
}

const AddPrice = (props: Props) => {
  const [info, setInfo] = useState(null);
  const [price, setPrice] = useState(0);
  const [editData, setEditData]=useState({});
  const {
    navigation,
    addPriceList,
    estimation: {
      editPriceId,
      priceList,
    },
  } = props;

  // useEffect(()=> {
  //   const editPrice = priceList.filter(item => item.id === editPriceId);
  //   setEditData(editPrice);
  // }, []);

  const onDoneButtonPress = () => {
    if(editPriceId !== null){
      editPriceList(id, info, price);
    } else  {
              addPriceList(new Date(), info, price);
            }
    navigation.navigate('Create');
  };

  return (
    <View style={styles.container}>
        <TextInput
          required
          multiline
          mode="outlined"
          value={info}
          onChangeText={value => setInfo(value)}
          placeholder="Work name"
          label="Work name"
          style={styles.priceInput}
        />
        <TextInput
          required
          mode="outlined"
          value={price}
          onChangeText={value => setPrice(value)}
          placeholder="Cost"
          label="Cost"
          style={[styles.priceInput, styles.costInput]}
        />
        <Button mode="contained" style={styles.doneButton}
          onPress={() => onDoneButtonPress()}
        >
          Done
        </Button>
      </View>
  );

}

export default connect(
  state => ({
    estimation: state.estimationReducer,
  }),
  dispatch =>
    bindActionCreators(
      {
        ...Actions,
      },
      dispatch,
    ),
)(AddPrice);