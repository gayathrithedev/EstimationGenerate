// @flow
import type {Estimation} from './types';

export const initialState: Estimation = {
  workedCompanyName: null,
  companyAddress: null,
  heading: null,
  description: null,
  image: null,
  priceList: [],
  editPriceId: null,
  contactPersonDetail:{
    name: null,
    email: null,
    phoneNumber: 0,
    address: null,
  }
};