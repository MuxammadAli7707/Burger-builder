import React from 'react'
import './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

export default function Burger(props) {
  let tranformedIng = Object.keys(props.ingredients).map(inKey => {
    return [...Array(props.ingredients[inKey])].map((_, i) => {
      return <BurgerIngredients key={inKey + i} type={inKey} />
    });
  }).reduce((arr, ell) => {
    return arr.concat(ell)
  }, []);

  if(tranformedIng.length === 0) {
    tranformedIng = <p>Please start adding ingredients</p>
  }

  return (
    <div className='Burger'>
      <BurgerIngredients type="bread-top" />
      {tranformedIng}
      <BurgerIngredients type="bread-bottom" />
    </div>
  )
}
