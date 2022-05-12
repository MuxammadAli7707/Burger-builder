let ing = {
  meat: 2,
  salad: 1,
  bacon: 3,
  cheese: 4,
}

const tranformedIng = Object.keys(ing).map(inKey => {
  return [...Array(ing[inKey])].map((_, i) => {
    return `<li>${inKey}</li>`
  })
}).reduce((arr, el) => {
  return arr.concat(el);
})

console.log(tranformedIng);