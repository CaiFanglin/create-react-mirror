import React from 'react';
import logo from './logo.svg';
import './App.css';
import mirror, {actions, connect} from 'mirrorx';

mirror.model({
    name: 'cfl',
    initialState: 0,
    reducers: {
        plus(state, data) {
            return state + data;
        },
        reduce(state, data) {
            return state - data;
        }
    },
    effects: {}
});

const App = connect(state => {
    return {
        num: state.cfl
    }
})(props => {
    return (
        <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <h1>{props.num}</h1>
            <button onClick={() => actions.cfl.reduce(3)}>-3</button>
            <button onClick={() => actions.cfl.plus(2)}>+2</button>
        </div>
    )
});


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
