export default function sorting(obj, keys) {
  let copy = [];
  for (let i = 0; i < keys.length; i++) {
    for (let prop in obj) {
      if (keys[i] === prop) {
        copy.push({ 'key': prop, 'value': obj[prop] });
        delete obj[prop];
      }
    }
  }
  let arr = [];
  for (let prop in obj) {
    arr.push(prop);
  }
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    for (let prop in obj) {
      if (arr[i] === prop) {
        copy.push({ 'key': prop, 'value': obj[prop] });
      }
    }
  }
  return copy
}
