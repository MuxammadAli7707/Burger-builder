let ing = {
  meat: 2,
  salad: 1,
  bacon: 3,
  cheese: 4,
}

const tranformedIng = Object.keys(ingredients).map(inKey => {
  return ingredients[inKey];
}).reduce((sum, el) => {
  return sum + el
}, 0);

this.setState({purchasable: sum > 0})

console.log(tranformedIng);