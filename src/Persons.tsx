import * as React from 'react';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { addPerson } from './reducer';

import { makeMapStateToProps } from './selector';

interface PersonsStateProps {
  persons: string[];
}

interface PersonsDispatchProps {
  addPerson: (name: string) => void;
}

class Persons extends React.Component<
  PersonsStateProps & PersonsDispatchProps
> {
  input: HTMLInputElement;
  render() {
    console.log(this.props.persons);
    return (
      <div className="App">
        <p className="App-intro">
          <input
            type="text"
            ref={ref => (this.input = ref as HTMLInputElement)}
          />
          <button onClick={() => this.props.addPerson(this.input.value)}>
            이름 추가
          </button>
        </p>
        <p className="App-intro">{JSON.stringify(this.props.persons)}</p>
      </div>
    );
  }
}

/*
const mapStateToProps = (state: State): PersonsStateProps => {
  return {
    persons: state.persons.map(person => person.name)
  };
};
*/

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): PersonsDispatchProps => ({
  addPerson: name => dispatch(addPerson(name))
});

export default connect<PersonsStateProps, PersonsDispatchProps>(
  makeMapStateToProps,
  mapDispatchToProps
)(Persons);
