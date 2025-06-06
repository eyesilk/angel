export default (price: number): string => {
  return price.toLocaleString('ru-Ru') + '₽';
};
