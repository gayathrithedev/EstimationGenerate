// @flow

type Price = {
  name: string,
  cost: number,
};

type Estimation = {
  workedCompanyName: string,
  heading: string,
  description: string,
  logo: Image,
  priceList: Price[],
};

export type {
  Price,
  Estimation
};