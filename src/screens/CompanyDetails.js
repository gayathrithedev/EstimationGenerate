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
  viewPdfButton: {
    marginTop: 16,
  },
});

type Props = {
  navigation: *,
  addWorkedCompanyName: *,
  estimation: Estimation,
  addCompanyAddress: *,
  addContactPersonName: *,
  addContactPersonEmail: *,
  addContactPersonPhoneNumber: *,
  addContactPersonAddress: *,
};

const CompanyDetails = (props: Props) => {
  const {
    estimation: {
      workedCompanyName,
      companyAddress,
      contactPersonDetail: {
        name,
        email,
        phoneNumber,
        address,
      }
    },
    addWorkedCompanyName,
    addCompanyAddress,
    addContactPersonName,
    addContactPersonEmail,
    addContactPersonPhoneNumber,
    addContactPersonAddress,
    navigation,
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
          <TextInput
            required
            multiline
            numberOfLines={10}
            mode="outlined"
            value={companyAddress}
            onChangeText={value => addCompanyAddress(value)}
            placeholder="Company Address"
            label="Company Address"
          />
          <TextInput
            required
            mode="outlined"
            value={name}
            onChangeText={value => addContactPersonName(value)}
            placeholder="Contact person Name"
            label="Contact person Name"
          />
          <TextInput
            required
            mode="outlined"
            value={email}
            onChangeText={value => addContactPersonEmail(value)}
            placeholder="Contact person email"
            label="Contact person email"
          />
          <TextInput
            required
            mode="outlined"
            keyboardType="number-pad"
            value={phoneNumber}
            onChangeText={value => addContactPersonPhoneNumber(value)}
            placeholder="Contact person Phone Number"
            label="Contact person Phone Number"
          />
          <TextInput
            required
            multiline
            numberOfLines={10}
            mode="outlined"
            value={address}
            onChangeText={value => addContactPersonAddress(value)}
            placeholder="Contact person Address"
            label="Contact person Address"
          />
        </View>
        <Button mode="outlined" style={styles.viewPdfButton} onPress={() => navigation.navigate('AddPriceDetails')}>Go to Show</Button>
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
)(CompanyDetails);
