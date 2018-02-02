import * as React from 'react';
import './App.css';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { State, changeCount } from './reducer';

interface CounterStateProps {
  count: number;
}

interface CounterDispatchProps {
  changeCount: () => void;
}

class Counter extends React.Component<
  CounterStateProps & CounterDispatchProps
> {
  input: HTMLInputElement;
  componentDidMount() {
    setInterval(() => {
      this.props.changeCount();
      // tslint:disable-next-line:align
    }, 2000);
  }
  render() {
    return (
      <div>
        <p>{this.props.count}</p>
      </div>
    );
  }
}

const mapStateToProps = (state: State): CounterStateProps => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): CounterDispatchProps => ({
  changeCount: () => dispatch(changeCount())
});

export default connect<CounterStateProps, CounterDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
