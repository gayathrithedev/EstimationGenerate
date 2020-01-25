// @flow
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button, TextInput, FAB, Checkbox, List} from 'react-native-paper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../redux/actions';
import {Estimation} from '../redux/types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    marginTop: 16,
    backgroundColor: '#3c20c0',
  },
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceListWrapper: {
    marginVertical: 16,
  },
  iconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pencilIcon: {
    color: 'orange',
    marginLeft: 8,
  },
  deleteIcon: {
    color: '#db0f1f',
    marginLeft: 16,
  },
  list: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#3c20c0',
  },
});

type Props = {
  navigation: *,
  addDescription: *,
  addWorkedCompanyName: *,
  addHeading: *,
  addPriceList: *,
  estimation: Estimation,
  setEditPriceName: *,
  deletePriceList: *,
  editPriceList: *,
  setEditPriceList: *,
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
    navigation,
    setEditPriceList,
    editPriceList,
    deletePriceList,
  }= props;
  const [numOfPrice, setNewPrice] = useState([]);

  const getPriceList = (item: *) => {
    const {
      name,
      cost,
    } = item;
    const goToEdit = (id: Date)=>{
      setEditPriceList(id);
      navigation.navigate('AddPrice');
    };
    return (
      <View key={item.id} style={styles.priceListWrapper}>
        <List.Item
        key={item.id}
        style={styles.list}
          title={name}
          description={cost}
          right={() => (
            <View style={styles.iconsWrapper}>
              <Icon name="pencil-outline" size={24} style={styles.pencilIcon}
                onPress={() => goToEdit(item.id)}
              />
              <Icon name="delete-outline" size={24} style={styles.deleteIcon}
                onPress={() => deletePriceList(item.id)}
              />
            </View>
          )}
        />
      </View>
    );
  }
  
  return (
    <ScrollView>
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
        {priceList.length > 0
          ? priceList.map(item => getPriceList(item))
          : null}
        <FAB
          small
          style={styles.fab}
          label="Add Cost"
          onPress={() => navigation.navigate('AddPrice')}
        />
        <Button onPress={() => navigation.navigate('Show')}>Go to Show</Button>
      </View>
    </ScrollView>
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
