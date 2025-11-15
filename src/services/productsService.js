export const getProducts = (categoria = null) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('/products.json')
        .then(res => res.json())
        .then(data => {
          if (categoria) {
            resolve(data.filter(p => p.categoria === categoria))
          } else {
            resolve(data)
          }
        })
        .catch(reject)
    }, 500)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('/products.json')
        .then(res => res.json())
        .then(data => resolve(data.find(p => p.id == id)))
        .catch(reject)
    }, 500)
  })
}
