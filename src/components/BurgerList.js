import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {
  return (
    <div className="BurgerList">
    {/* mapped over the props that were passed down.Added them to the BurgerItem Cards */}
    {/* passed in the handleDisplayBurger Function */}
      {props.burgers.map(burger => <BurgerItem burger={burger} handleDisplayBurger={props.handleDisplayBurger}/> )}
    </div>
  )
}

export default BurgerList
