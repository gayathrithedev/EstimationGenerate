// @flow
import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../redux/actions';
import {Estimation} from '../redux/types';

type Props = {
  navigation: *,
  estimation: Estimation,
};

const Show = (props: Props) => {
  const {
    estimation: {
      companyName,
      workedCompanyName,
      heading,
      priceList,
    },
  } = props;
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
)(Show);
