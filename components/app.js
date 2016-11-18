import $ from 'jquery';
import {connect} from 'react-redux';
import Counter from './counter';

// Map Redux state to component props
// Take the current state and map to this.props.value within the Counter component
const mapStateToProps = (state) => {
  return {
    value: state.count
  };
};

// Actions
// These are the action messages that are passed to the store from the dispatch
const increaseAction = {type: 'increase'};
const decreaseAction = {type: 'decrease'};

// Map Redux actions to component props
// This allows dispatch actions to be handled from within the component, these are added into the props
const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => {
      $.ajax({
        method: "GET",
        url: "http://localhost:8080/"
      }).then(function(data){
        console.log(data);
        return dispatch(increaseAction);
      });
    },
    onDecreaseClick: () => {
      $.ajax({
        method: "GET",
        url: "http://localhost:8080/"
      }).then(function(data){
        console.log(data);
        return dispatch(decreaseAction);
      });
    }
  };
};

// Connected Component
// Use the connect convenience function to pass these properties to Counter component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

// Export the App component so it can be bootstrapped elsewhere
export default App;
