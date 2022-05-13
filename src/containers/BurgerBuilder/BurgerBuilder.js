import React, { Component } from 'react'
import BuildControls from '../../Components/BuildControls/BuildControls';
import Burger from '../../Components/Burger/Burger';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Modals from '../../Components/UI/Modal/Modals';
import Aux from '../../hoc/Auxs';

const INGREDIENT_PRICE = {
  salad: 0.1,
  bacon: 0.4,
  cheese: 0.2,
  meat: 0.8
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 1,
    purchasable: false,
    purchasing: false,
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }
  purchaseContinueHandler = () => {
    alert('You continue')
  }
  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients).map(inKey => {
      return ingredients[inKey]
    }).reduce((sum, el) => {
      return sum + el
    }, 0);
    
    this.setState({purchasable: sum > 0})
  }

  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients
    }
    updateIngredients[type] = updateCount;

    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = priceAddition + oldPrice;

    this.setState({totalPrice: newPrice, ingredients: updateIngredients});
    this.updatePurchaseState(updateIngredients);
  }

  removeIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients
    }
    updateIngredients[type] = updateCount;

    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;

    this.setState({totalPrice: newPrice, ingredients: updateIngredients});
    this.updatePurchaseState(updateIngredients);
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modals show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
          <OrderSummary 
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
            purchaseContinue={this.purchaseContinueHandler}
            purchaseCancel={this.purchaseCancelHandler}
          />
        </Modals>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdded={this.addIngredientsHandler} 
          ingredientRemove={this.removeIngredientsHandler} 
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
          />
      </Aux>
    )
  }
}
export default BurgerBuilder