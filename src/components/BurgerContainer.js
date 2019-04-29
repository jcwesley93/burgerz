import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  state={
    burgers: [], 
    category: 'All', 
    filteredBurgers: []
  }
  componentDidMount(){
    fetch('http://localhost:3001/burgers')
    .then(res => res.json())
    .then(allBurgers => {
      // console.log(allBurgers)
      //update the state
      this.setState({
        burgers: allBurgers,
        filteredBurgers: allBurgers
      })
    })
  }

  handleCategoryChange = (event) => {
    // console.log(event.target.value)
    // this.setState({
    //   category: event.target.value
    // })
    // console.log(this.state.category)
     let relatableburgers = [...this.state.burgers]
     if(event.target.value === 'Relatable'){
      let relatableBurgersArray = relatableburgers.filter(burger => {
       return burger.category ==='Relatable'
      })
      this.setState({
        filteredBurgers: relatableBurgersArray
      })
    }else if(event.target.value === 'Bougie'){
      let relatableBurgersArray = relatableburgers.filter(burger => {
        return burger.category ==='Bougie'
       })
       this.setState({
         filteredBurgers: relatableBurgersArray
       })
    }
  }

  // filterBurgersByCategory = (type) => {
  //   if(this.state.category === 'All'){
  //     return this.state.burgers}
  //   // }else {
  //   //   return this.state.burgers.filter(burger => burger.category === type)
  //   // }
  // }

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter category={this.state.category} handleCategoryChange={this.handleCategoryChange} />
        {/* passed in the props for burgers so they can go to the child */}
        <BurgerList burgers={this.state.filteredBurgers} handleDisplayBurger={this.props.handleDisplayBurger} category={this.state.category} /> 
      </div>
    )
  }
}
