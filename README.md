# tdd

Rules
  ☐ Should return total value of products
  ☐ Should return discount value of product
  ☐ Should return total value of discount products

Step 1
  Create tests

```
describe('List', () => {
  it('Should return total value of products', () => {
    const products = [
      {price: 10},
      {price: 20},
    ]

    expect(list.sum(products)).toEqual(30)
  })

  it('Should return discount value of product', () => {
    const products = [
      {price: 10, discount: 1},
    ]

    expect(list.sum(products)).toEqual(9)
  })

  it('Should return total value of discount products', () => {
    const products = [
      {price: 10, discount: 1},
      {price: 20, discount: 1},
    ]

    expect(list.sum(products)).toEqual(28)
  })
})

```

Step 2
  Create function

```
module.exports = {
  sum: (list) => {
    return list.reduce((total, item) => {
      return total + item.price
    }, 0)
  }
}
```

Fix test
```
module.exports = {
  sum: (list) => {
    return list.reduce((total, item) => {
      if (item.discount) {
        return total + (item.price - item.discount)
      }

      return total + item.price
    }, 0)
  }
}
```

Step 3
  Import module in test
```
const list = require('./list')
```
