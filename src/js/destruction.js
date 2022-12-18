export default function showSpecial(obj) {
  const result = [];
  obj.special.forEach((item) => {
    const { description = 'Описание недоступно' } = item;
    if (item.description) {
      result.push(item);
    } else {
      item.description = description; // eslint-disable-line
      result.push(item);
    }
  });
  return result;
}
