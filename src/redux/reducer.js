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
        const {id, info, cost} = data;
        const {priceList} = state;
        const newPrice = {
          id: id,
          name: info,
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
  removePriceList(id);
  addPriceList(id, name, cost);
  draft.editPriceId = null;
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
    default:
      return state;
  }
}

export default estimationReducer;