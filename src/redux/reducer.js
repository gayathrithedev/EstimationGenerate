// @flow
import produce from 'immer';
import {
  ADD_DESCRIPTION,
  ADD_COMPANY_LOGO,
  ADD_WORKED_COMPANY_NAME,
  ADD_HEADING,
  ADD_PRICE_LIST,
  SET_EDIT_PRICELIST,
  EDIT_PRICE_LIST,
  DELETE_PRICE_LIST,
  ADD_COMPANY_ADDRESS,
  ADD_CONTACT_PERSON_NAME,
  ADD_CONTACT_PERSON_EMAIL,
  ADD_CONTACT_PERSON_PHONE_NUMBER,
  ADD_CONTACT_PERSON_ADDRESS,
  ADD_MORE_COST,
} from './actionTypes';
import {initialState} from './constants';
 import type {Estimation} from './types';

const addDescription = (state: Estimation, data:*) => produce(state, draft=>{
  const {text} = data;
  draft.description = text;
});

const addWorkedCompanyName = (state: Estimation, data: *) =>
  produce(state, draft => {
    const {text} = data;
    draft.workedCompanyName = text;
  });

  const addHeading = (state: Estimation, data: *) =>
    produce(state, draft => {
      const {text} = data;
      draft.heading = text;
    });

    const addPriceList = (state: Estimation, data: *) =>
      produce(state, draft => {
        const {id, name, cost} = data;
        const {priceList} = state;
        const newPrice = {
          id: id,
          name: name,
          cost: cost,
        };
        const newPriceList = [...priceList,newPrice]
        draft.priceList=newPriceList;
      });
const setEditPriceList = (state: Estimation, data: *) =>
produce(state, draft=>{
  const {id} = data;
  draft.editPriceId = id;
});

const deletePriceList = (state: Estimation, data: *) =>
produce(state, draft=>{
  const {id} = data;
  const {priceList} = state;
  const newPriceList = priceList.filter(item => item.id !== id);
  draft.priceList = newPriceList; 
})

const editPriceList = (state: Estimation, data: *) =>
produce(state, draft=>{
  const {id, name, cost} = data;
  const {
    priceList,
  } = state;
  const index = priceList.findIndex(item => item.id === id);
  draft.priceList[index].name = name;
  draft.priceList[index].cost = cost;
  draft.editPriceId = null;
})

const addCompanyAddress = (state: Estimation, data:*) =>
produce(state, draft=>{
  const {address} = data;
  draft.companyAddress = address;
})

const addContactPersonName = (state: Estimation, data: *) =>
produce(state, draft=>{
  const {name} = data;
  draft.contactPersonDetail.name =  name;
})

const addContactPersonEmail = (state: Estimation, data: *) =>
produce(state, draft=>{
  const {email} = data;
  draft.contactPersonDetail.email = email;
})

const addContactPersonPhoneNumber = (state: Estimation, data: *) =>
produce(state, draft => {
  const {number} = data;
  draft.contactPersonDetail.phoneNumber = number;
})

const addContactPersonAddress = (state: Estimation, data: *) =>
produce(state, draft=>{
  const {address} = data;
  draft.contactPersonDetail.address = address;
})

const addMoreCost = (state: Estimation, data: *) =>
produce(state, draft=>{
  const {id, name, cost} = data;
  const newPrice = {
    id: id,
    name: name,
    cost: cost,
  };
  const newPriceList = [...priceList,newPrice]
  draft.priceList=newPriceList;
})

const estimationReducer = (
  state: Estimation= {...initialState},
  action: *,
) => {
  switch(action.type){
    case ADD_WORKED_COMPANY_NAME:
      return addWorkedCompanyName(state, action.data);
    case ADD_HEADING:
      return addHeading(state, action.data);
    case ADD_PRICE_LIST:
      return addPriceList(state, action.data);
    case ADD_DESCRIPTION:
      return addDescription(state, action.data);
    case SET_EDIT_PRICELIST:
      return setEditPriceList(state, action.data);
    case EDIT_PRICE_LIST:
      return editPriceList(state, action.data);
    case DELETE_PRICE_LIST:
      return deletePriceList(state, action.data);
    case ADD_COMPANY_ADDRESS:
      return addCompanyAddress(state, action.data);
    case ADD_CONTACT_PERSON_NAME:
      return addContactPersonName(state, action.data);
    case ADD_CONTACT_PERSON_EMAIL:
      return addContactPersonEmail(state, action.data);
    case ADD_CONTACT_PERSON_PHONE_NUMBER:
      return addContactPersonPhoneNumber(state, action.data);
    case ADD_CONTACT_PERSON_ADDRESS:
      return addContactPersonAddress(state, action.data);
    case ADD_MORE_COST:
      return addMoreCost(state, action.data);
    default:
      return state;
  }
}

export default estimationReducer;