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
