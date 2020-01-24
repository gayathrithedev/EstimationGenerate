// @flow
import produce from 'immer';
import {
  ADD_DESCRIPTION,
  ADD_COMPANY_LOGO,
  ADD_WORKED_COMPANY_NAME,
  ADD_HEADING,
  ADD_PRICE_LIST,
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
        const {priceList} = data;
        console.log(priceList);
      });

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
    default:
      return state;
  }
}

export default estimationReducer;