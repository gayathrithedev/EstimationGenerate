// @flow

import {
  ADD_DESCRIPTION,
  ADD_COMPANY_LOGO,
  ADD_WORKED_COMPANY_NAME,
  ADD_HEADING,
  ADD_PRICE_LIST,
  EDIT_PRICE_LIST,
  DELETE_PRICE_LIST,
  SET_EDIT_PRICELIST,
  ADD_COMPANY_ADDRESS,
  ADD_CONTACT_PERSON_NAME,
  ADD_CONTACT_PERSON_EMAIL,
  ADD_CONTACT_PERSON_PHONE_NUMBER,
  ADD_MORE_COST,
} from './actionTypes';


// export type AddCompanyName = (text: string) => void()

// export type AddCompanyLogo = (image: Image) => void()

// export type AddWorkedCompanyName = (text: string) => void()

// export type AddHeading = (text: string) => void()

// export type AddPriceList = (price: []) => void()

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

export const addDescription = (text: string) => ({
  type: ADD_DESCRIPTION,
  data: {text}
})

export const addPriceList = (id: Date, name: string, cost: number) => ({
  type: ADD_PRICE_LIST,
  data: {id, name, cost}
})

export const setEditPriceList = (id: Date) => ({
  type: SET_EDIT_PRICELIST,
  data: {id}
})

export const editPriceList = (id: Date, name: string, cost: number) => ({
  type: EDIT_PRICE_LIST,
  data: {id, name, cost}
})

export const deletePriceList = (id: Date) => ({
  type: DELETE_PRICE_LIST,
  data: {id},
})

export const addCompanyAddress = (address: string) => ({
  type: ADD_COMPANY_ADDRESS,
  data: {address}
})

export const addContactPersonName = (name: string) => ({
  type: ADD_CONTACT_PERSON_NAME,
  data: {name}
})

export const addContactPersonEmail = (email: string) => ({
  type: ADD_CONTACT_PERSON_EMAIL,
  data: {email}
})

export const addContactPersonPhoneNumber = (number: number) => ({
  type: ADD_CONTACT_PERSON_PHONE_NUMBER,
  data: {number}
})

export const addMoreCost = (id: Date, name: string, cost: number) => ({
  type: ADD_MORE_COST,
  data:{id,name,cost}
})