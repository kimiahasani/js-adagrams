const letterPool = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};
const scoreDict = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};
export const drawLetters = () => {
  // Implement this method for wave 1
  let poolList = [];
  for (const [key, value] of Object.entries(letterPool)) {
    poolList.push(key.repeat(value));
  }
  let split_list = poolList.join("").split("");
  // console.log(split_list)
  let randomList = [];
  let j = "";
  for (let i = 0; i < 10; i++) {
    j = split_list[Math.floor(Math.random() * split_list.length)];
    randomList.push(j);
    split_list.splice(split_list.indexOf(j), 1);
    console.log(split_list.splice(split_list.indexOf(j), 1));
  }
  return randomList;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
