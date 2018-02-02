import { State } from './reducer';

import { createSelector } from 'reselect';

const makeGetPersons = () =>
  createSelector([(state: State) => state.persons], persons =>
    persons.map(person => person.name)
  );

export const makeMapStateToProps = () => {
  const getPersons = makeGetPersons();
  return (state: State) => {
    console.log('makeMapStateToProps');
    return {
      persons: getPersons(state)
    };
  };
};
