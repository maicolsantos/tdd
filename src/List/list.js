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
