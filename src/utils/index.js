export const totalPrice = (products) => {
  return products
    .reduce((acc, product) => acc + product.price * product.units, 0)
    .toFixed(2);
};
