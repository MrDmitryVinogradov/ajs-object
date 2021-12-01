export default function sorting(obj, keys) {
  let copy = [];
  keys.forEach((element) => {
    for (let prop in obj) {
      if (element === prop) {
        copy.push({ 'key': prop, 'value': obj[prop] });
        delete obj[prop];
      }
    };
  });

  let arr = [];
  for (let prop in obj) {
    arr.push(prop);
  }
  arr.sort();
  arr.forEach((element) => {
    for (let prop in obj) {
      if (element === prop) {
        copy.push({ 'key': prop, 'value': obj[prop] });
      }
    }
  });
  return copy
}
