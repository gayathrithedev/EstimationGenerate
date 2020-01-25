// @flow
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../redux/actions';
import {Estimation} from '../redux/types';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentWrapper: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
  },
  heading: {
    fontSize: 20,
    marginTop: 8,
    alignSelf: 'center',
    textDecorationLine: 'underline',
    color: '#000000',
  },
  toCompany: {
    fontSize: 18,
    marginTop: 16,
    marginLeft: 8,
    color: '#000000',
    fontWeight: 'bold',
  },
  description: {
    marginTop: 8,
    marginLeft: 8,
    fontSize: 14,
    color: '#696969',
  },
  priceListContainer: {
    margin: 8,
  },
  priceListWrapper: {
    padding: 8,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 12,
  },
  costName: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  estimatedText: {
    fontSize: 14,
    paddingBottom: 8,
  },
  totalPrice: {
    alignSelf: 'flex-end',
    paddingRight: 8,
  },
  itemWrapper: {
    flex: 8,
  },
  costWrapper: {
    flex: 2,
    borderLeftColor: '#000000',
    borderLeftWidth: 1,
    paddingLeft: 8,
    marginVertical: -8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

type Props = {
  navigation: *,
  estimation: Estimation,
};

const Show = (props: Props) => {
  const {
    estimation: {
      workedCompanyName,
      heading,
      description,
      priceList,
    },
  } = props;
  const generatePdf = async () => {
    let options = {
      html: `<h1>${heading}</h1>`,
      fileName: 'test',
      directory: 'Documents',
    };
    let file = await RNHTMLtoPDF.convert(options);
    // console.log(file.filePath);
    alert(file.filePath);
  }
  function amount(item) {
    return Number(item.cost);
  }

  function sum(prev, next) {
    return prev + next;
  }

  const totalPrice = priceList.map(amount).reduce(sum);
  
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.toCompany}>{`To: ${workedCompanyName}`}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.priceListContainer}>
          <Text style={styles.estimatedText}>Estimated Budget:</Text>
          {priceList.map(item => (
            <View style={styles.priceListWrapper} key={item.id}>
              <View style={styles.itemWrapper}>
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
              <View style={styles.costWrapper}>
                <Text style={styles.costName}>{item.cost}</Text>
              </View>
            </View>
          ))}
        </View>
        <Text style={styles.totalPrice}>{`Total Budget: ${totalPrice}`}</Text>
      </View>
      <Button onPress={() => generatePdf()}>Download PDF</Button>
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
