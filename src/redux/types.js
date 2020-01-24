// @flow

type Price = {
  name: string,
  cost: number,
};

type Estimation = {
  companyName: string,
  workedCompanyName: string,
  heading: String,
  logo: Image,
  priceList: Price[],
};

export type {
  Pricece,
  Estimation
};