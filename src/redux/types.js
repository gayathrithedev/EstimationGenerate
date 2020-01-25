// @flow

type Price = {
  id: string,
  name: string,
  cost: number,
};

type Estimation = {
  workedCompanyName: string,
  heading: string,
  description: string,
  logo: Image,
  priceList: Price[],
  editPriceId: Date,
};

export type {
  Price,
  Estimation
};