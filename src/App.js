import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  //set the state to an empty array for the initial render
  // state={
  //   burgers: []
  // }

//moved the state and the componentDidMount to burger container, because this is the only place that needs all of the burgers. 

  //once the initial render happens, call componentDidMount to get ALL burgers
  // componentDidMount(){
  //   fetch('http://localhost:3001/burgers')
  //   .then(res => res.json())
  //   .then(allBurgers => {
  //     console.log(allBurgers)
  //     //update the state
  //     this.setState({
  //       burgers: allBurgers
  //     })
  //   })
  // }

  state={
    selectedBurger: {
      name: "Select A Burger!"
    }
  }

  handleDisplayBurger = (burger) => {
  console.log(burger)
  this.setState({
    selectedBurger: burger
  })
  console.log(this.state.selectedBurger)
  }


  //pass in the specific burger as a prop to be used in children components 
  render() {
    return (
      <div id="App">
        <BurgerContainer handleDisplayBurger={this.handleDisplayBurger} />
        <BurgerDisplay burger={this.state.selectedBurger} />
      </div>
    );
  }
}

export default App;
