const array = [1, 2, 3, 4, 5, 6, 7, 8, 6, 10, 24];
// Filter return new array
const newFilterArray = array.filter((number) => number > 3);
console.log(newFilterArray, 'newFilterArray');
console.log('//////');
// Map return new array
const newMapArray = array.map((number) => {
  if (number > 3) {
    return number + 1;
  } else {
    return number;
  }
});
// Find return object or undefined
const findResult = array.find((number) => number === 122); // undefined
const findResult1 = array.find((number) => number === 6); // 6
console.log(findResult, 'findResult');
console.log(findResult1, 'findResult1');
// Includes
const include = array.includes(66);
console.log(include, 'include');

const users = [
  { id: 1, name: 'ahmed' },
  { id: 2, name: 'ali' },
  { id: 4, name: 'yousef' },
];

const newUsers = users.map((user) => {
  if (user.id === 2) {
    return { ...user, name: 'hossam' };
  }
  return user;
});

console.log(users, 'users');
console.log(newUsers, 'newUsers');
