#!/usr/bin/node

exports.esrever = function (list) {
  let j = 0;
  const arr = [];
  for (let i = list.length - 1; i >= 0; i--, j++) {
    arr[j] = list[i];
  }
  return arr;
};
