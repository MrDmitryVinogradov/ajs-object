export default function sorting(obj, keys) {
  const arr = [];
  const copy = [];
  keys.forEach((element) => {
      copy.push({ 'key': element, 'value': obj[element] });
      delete obj[element];
  });
  for (let prop in obj) {
    arr.push(prop)
  }
  arr.sort();
  arr.forEach((element) => {
      copy.push({ 'key': element, 'value': obj[element] });
      delete obj[element];
  });
  return copy
};
