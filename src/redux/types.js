// @flow

type Price = {
  id: string,
  name: string,
  cost: number,
};

type ContactPersonDetails = {
  name: string,
  email: string,
  phoneNumber: string,
  address: string,
};

type Estimation = {
  workedCompanyName: string,
  companyAddress: string,
  heading: string,
  description: string,
  logo: Image,
  priceList: Price[],
  editPriceId: Date,
  contactPersonDetail: ContactPersonDetails,
};

export type {
  Price,
  Estimation,
  ContactPersonDetails
};