const getEmpty = () => new Object();

// multi-line
const fall = (time) => {
  let pos = 0;
  let velocity = 0;
  let g = 9.8;
  for (let i = 0; i < time; i++) {
    velocity += g;
    pos += velocity;
  }
  return pos;
};

// no args
const rand = () => Math.random();

module.exports = { getEmpty, fall, rand };
