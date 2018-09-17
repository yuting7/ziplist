const test = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

function zipList(chara, number) {
  const array = [];
  for (let i = 0; i < chara.length; i++) {
    array.push(chara[i], number[i]);
  }
  return array;
}
console.log(zipList(test, test2));

function zipTheSimpleWay(chara, number) {
  return _.flatten(_.zip(chara, number));
}
console.log(zipTheSimpleWay(test, test2));
