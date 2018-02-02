import { AnyAction, combineReducers } from 'redux';

export const ADD_PERSON = 'ADD_PERSON';
export type ADD_PERSON = typeof ADD_PERSON;

export const CHANGE_COUNT = 'CHANGE_COUNT';
export type CHANGE_COUNT = typeof CHANGE_COUNT;

export interface State {
  persons: PersonsState;
  count: CounterState;
}

type PersonsState = {
  name: string;
  age: number;
}[];

type CounterState = number;

export function addPerson(name: string) {
  return {
    type: ADD_PERSON,
    name
  };
}

export function changeCount() {
  return {
    type: CHANGE_COUNT
  };
}

function personsReducer(
  state: PersonsState = [
    {
      name: 'Mark',
      age: 1
    }
  ],
  action: AnyAction
) {
  if (action.type === ADD_PERSON) {
    return [...state, { name: action.name, age: state.length + 1 }];
  } else {
    return state;
  }
}

function counterReducer(state: CounterState = 0, action: AnyAction) {
  if (action.type === CHANGE_COUNT) {
    return state + 1;
  } else {
    return state;
  }
}

export default combineReducers<State>({
  persons: personsReducer,
  count: counterReducer
});
