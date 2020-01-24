// @flow

import {
  ADD_COMPANY_NAME,
  ADD_COMPANY_LOGO,
  ADD_WORKED_COMPANY_NAME,
  ADD_HEADING,
  ADD_PRICE_LIST,
} from './actionTypes';

export type AddCompanyName = (text: string) => void();

export type AddCompanyLogo = (image: Image) => void();

export type AddWorkedCompanyName = (text: string) => void();

export type AddHeading = (text: string) => void();

export type AddPriceList = (price: []) => void();


export const addCompanyName = (text: string) => ({
  type: ADD_COMPANY_NAME,
  data: {text}
})

export const addCompanyLogo = (image: Image) => ({
  type: ADD_COMPANY_LOGO,
  data: {image}
})

export const addWorkedCompanyName = (text: string) => ({
  type: ADD_WORKED_COMPANY_NAME,
  data: {text}
})

export const addHeading = (text: string) => ({
  type: ADD_HEADING,
  data: {text}
})

export const addPriceList = (price: []) => ({
  type: ADD_PRICE_LIST,
  data: {price}
})