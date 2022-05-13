import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import './BuildControls.css'

const controls = [
  {label: "Salad", type: "salad"},
  {label: "Bacon", type: "bacon"},
  {label: "Meat", type: "meat"},
  {label: "Cheese", type: "cheese"},
]
export default function BuildControls(props) {
  return (
    <div className='BuildControls'>
      <p>Current Price: <strong>{props.price.toFixed(2)}$</strong></p>
      {controls.map(ctrl => (
        <BuildControl 
          key={ctrl.label} 
          label={ctrl.label} 
          added={() => props.ingredientAdded(ctrl.type)}
          remove={() => props.ingredientRemove(ctrl.type)}
          disabled={props.disabledInfo[ctrl.type]}
          />
      ))}

      <button 
        onClick={props.ordered} 
        disabled={!props.purchasable} 
        className="OrderButton">
          ORDER NOW
      </button>
    </div>
  )
}
