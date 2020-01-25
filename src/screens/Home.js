// @flow
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, List, FAB} from 'react-native-paper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../redux/actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    padding: 8,
    backgroundColor: '#ffffff',
  },
  fab: {
    position: 'absolute',
    marginHorizontal: 16,
    marginVertical: 24,
    right: 0,
    bottom: 0,
    backgroundColor: '#3c20c0',
  },
  list: {
    margin: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingRight: 16,
    paddingVertical: 16,
  },
  pickColor: {
    paddingLeft: 8,
    backgroundColor: '#3c20c0',
    marginRight: 8,
    borderRadius: 8,
    marginVertical: -8,
  },
  pickColorWrapper: {
    flexDirection: 'row',
  },
});

type Props = {
  navigation: *,
  estimation: Estimation,
};

const Home = (props: Props) => {
  const {
    estimation: {
      heading,
      description,
      workedCompanyName,
      priceList,
    },
    navigation,
  } = props;
  return (
    <View style={styles.homeContainer}>
      {heading ? (
        <List.Item
        style={styles.list}
          title={heading}
          description={description}
          left={() =>(
            <View style={styles.pickColorWrapper}>
              <View style={styles.pickColor} />
            </View>
          )}
          right={() => <Icon
            style={{marginTop: 16}}
            onPress={() => navigation.navigate('Show')}
            name="chevron-right" size={20} />}
        />
      ) : null}
      <FAB
        icon="plus"
        onPress={() => props.navigation.navigate('Create')}
        style={styles.fab}
      />
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
)(Home);