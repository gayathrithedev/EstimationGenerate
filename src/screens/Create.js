// @flow
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, TextInput, FAB, Checkbox} from 'react-native-paper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../redux/actions';
import {Estimation} from '../redux/types';

const styles = StyleSheet.create({
  inputBox: {},
  container: {
    margin: 16,
  },
  inputWrapper: {
    marginVertical: 8,
  },
  priceList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceDetailInput: {
    width: '55%',
  },
  priceInput: {
    width: '25%',
  },
  Checkbox: {
    width: '20%',
  },
  fab: {
    backgroundColor: '#3c20c0',
  },
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = {
  navigation: *,
  addDescription: *,
  addWorkedCompanyName: *,
  addHeading: *,
  addPriceList: *,
  estimation: Estimation,
};

const Create = (props: Props) => {
  const {
    estimation: {
      description,
      workedCompanyName,
      heading,
      priceList,
    },
    addDescription,
    addWorkedCompanyName,
    addHeading,
    addPriceList,
  }= props;
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          required
          mode="outlined"
          value={workedCompanyName}
          onChangeText={value => addWorkedCompanyName(value)}
          placeholder="Company Name"
          label="Company Name"
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          required
          mode="outlined"
          value={heading}
          onChangeText={value => addHeading(value)}
          placeholder="Title of the work"
          label="Title of the work"
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          required
          mode="outlined"
          multiline
          value={description}
          onChangeText={value => addDescription(value)}
          placeholder="Description about the work"
          label="Description about the work"
        />
      </View>
      <View style={[styles.inputWrapper, styles.priceList]}>
        <View style={[styles.inputWrapper, styles.priceDetailInput]}>
          <TextInput
            required
            multiline
            mode="outlined"
            value={priceList.name}
            onChangeText={value => addPriceList({name: value})}
            placeholder="Work name"
            label="Work name"
          />
        </View>
        <View style={[styles.inputWrapper, styles.priceInput]}>
          <TextInput
            required
            mode="outlined"
            keyboardType="numeric"
            value={priceList.cost}
            onChangeText={value => addPriceList({cost: value})}
            placeholder="Cost"
            label="Cost"
          />
        </View>
        <View style={[styles.inputWrapper, styles.checkbox]}>
          <Checkbox status="checked" color="#3c20c0" />
        </View>
      </View>
      <FAB small style={styles.fab} label="Add More Cost" />
      <Button onPress={() => props.navigation.navigate('Show')}>
        Go to Show
      </Button>
    </View>
  );
};

export default connect(
  state=> ({
    estimation: state.estimationReducer,
  }),
  dispatch => 
  bindActionCreators(
    {
      ...Actions,
    },
    dispatch,
  )
)(Create);
