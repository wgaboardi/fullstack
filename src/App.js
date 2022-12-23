import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.handlePClick = this.handlePClick.bind(this);
    this.state = {
      name: 'Wellington',
      city: 'Curitiba',
      counter: 0
    }
  }
  //sem construtor - class fields
  /*
  state = {
   name: 'Wellington',
   city: 'Curitiba',
   counter: 0
 }
 */

  handlePClick() {
    this.setState({ name: 'Gaboardi' });
  }

  handleBClick = (event) => {
    event.preventDefault(); //evitar chamada da url no a href
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    //const name = this.state.name;
    const { name } = this.state; // Destructuring assignment
    //const city = this.state.city;
    const { city } = this.state; // Destructuring assignment
    const { counter } = this.state; // Destructuring assignment
    //return (<p onClick={() => console.log('oi')}> Hi {name} from {city}</p>) // => arrow function
    return (
      <div>
        <p onClick={this.handlePClick}> Hi {name} from {city}</p>
        <p onClick={this.handleBClick}> Counter: {counter} times</p>
        <a target="_blank" rel="noopener noreferrer" href="https://www.uol.cmo.br" onClick={this.handleBClick} rel="noreferrer">Link</a>
      </div>
    ) // => arrow function
  }
}
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Fullstack
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
