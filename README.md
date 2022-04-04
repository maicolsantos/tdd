# TDD - Test Driven Development

# Conceito
- Test Driven Development (TDD) ou em português *Desenvolvimento guiado por testes* é uma técnica de desenvolvimento de software que se relaciona com o conceito de verificação e validação

- A ideia do TDD é que você deve escrever primeiro os testes da sua aplicação, para depois implementar o código que fará com que eles funcionem

- O TDD é executado em um ciclo chamado de Red/Green/Refactor e prega que cada incremento pequeno de software deve ser testado, para que bugs sejam corrigidos rapidamente assim que surgem. Ele prega que primeiro você deve escrever o teste, antes mesmo da feature ser implementada. Quando executar esse teste, ele irá falhar (Red), aí você codifica a feature apenas o suficiente para ela passar no teste (Green) e então você melhora o código para que ele não apenas seja eficaz, mas eficiente (Refactor).


# Começamos definindo as regras de neçócio
  Deve retornar o valor total dos produtos

  Deve retornar o valor do produto com desconto

  Deve retornar o valor total dos produtos com descontos

# Step 1
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

# Step 2
  Import module in test
```
const list = require('./list')
```

# Step 3
  Create function

```
module.exports = {
  sum: (list) => {
    return list.reduce((accumulated, item) => {
      return accumulated + item.price
    }, 0)
  }
}
```

Fix test
```
module.exports = {
  sum: (list) => {
    return list.reduce((accumulated, item) => {
      if (item.discount) {
        return accumulated + (item.price - item.discount)
      }

      return accumulated + item.price
    }, 0)
  }
}
```

# Refs
https://pt.wikipedia.org/wiki/Test-driven_development

https://www.luiztools.com.br/post/tdd-como-criar-unit-tests-em-node-js-com-jest/

https://www.youtube.com/watch?v=2G_mWfG0DZE

https://www.youtube.com/watch?v=sLx00kXPoT

https://www.youtube.com/watch?v=sg1zFpNM5Jw

https://www.youtube.com/watch?v=5UYVw25weZ0
