//named exports in commonJS modules
const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

exports.add = add;
exports.sub = sub;
