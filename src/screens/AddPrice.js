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
  button: {
    padding: 8,
    alignSelf: 'center',
    borderRadius: 50,
    marginTop: 16,
  },
  doneButton: {
    width: '30%',
  },
  addMoreButton: {
    width: '50%',
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
  editPriceList: *,
}

const AddPrice = (props: Props) => {
  const [info, setInfo] = useState(null);
  const [price, setPrice] = useState(0);
  const {
    navigation,
    addPriceList,
    estimation: {
      editPriceId,
      priceList,
    },
    editPriceList,
  } = props;

  useEffect(()=> {
    if(editPriceId) {
    const editPrice = priceList.filter(item => item.id === editPriceId);
    editPrice.map(item => {
      setInfo(item.name);
      setPrice(item.cost);
    });
  }
  }, [editPriceId]);

  const onDoneButtonPress = () => {
    if(editPriceId !== null){
      editPriceList(editPriceId, info, price);
    } if(info !== null && editPriceId === null) {
              addPriceList(new Date(), info, price);
            }
    navigation.navigate('WorkDetails');
  };

  const onAddMoreButtonPress = () => {
    if(info !== null){
    addPriceList(new Date(), info, price);
    }
    setInfo(null);
    setPrice(0);
  }

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
          keyboardType="number-pad"
          value={`${price}`}
          onChangeText={value => setPrice(value)}
          placeholder="Cost"
          label="Cost"
          style={[styles.priceInput, styles.costInput]}
        />
        {
          editPriceId === null ? (
            <Button mode="contained" style={[styles.addMoreButton, styles.button]}
              onPress={() => onAddMoreButtonPress()}
            >
              Add More
            </Button>
          ) : null
        }
        
        <Button mode={editPriceId ? "contained" : "outlined"} style={[styles.doneButton, styles.button]}
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