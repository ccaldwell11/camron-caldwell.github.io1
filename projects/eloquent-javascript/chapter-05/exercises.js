// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  return array.reduce((flatArray, tempArray) => flatArray.concat(tempArray), []);
};

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {
  for (let i = start; test(i); i = update(i)) {
    body(i);
  }
};
// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  for (let item of array) {
    if (!test(item)) {
      return false;
    }
  }
  return true;
};

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
  const directions = Array.from(string, char =>
    characterScript(char.codePointAt(0))?.direction || 'none'
  );
  const ltrCount = directions.filter(dir => dir === 'ltr').length;
  const rtlCount = directions.filter(dir => dir === 'rtl').length;
  return rtlCount > ltrCount ? 'rtl' : 'ltr';
};

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
