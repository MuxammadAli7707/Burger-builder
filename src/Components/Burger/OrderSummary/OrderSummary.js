import React from 'react'
import Auxs from '../../../hoc/Auxs'
import Button from '../../UI/Button/Button'
export default function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients)
    .map((igKey) => {
      return (
        <li key={igKey+1}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      )
    })
  return (
    <Auxs>
      <h3>Your Order</h3>
      <p>A delicious Burger width the following ingredients: </p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}$</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancel}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
    </Auxs>
  )
}
