const list = require('./list')

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
