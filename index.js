const simon = () => {
    console.log('Simon function called');
  };
  
  const spy = simon

const receivesAFunction = (callback) => {
  callback();
};

receivesAFunction(spy);

const returnsANamedFunction = () => {
  return function namedFunction() {
    console.log('Named function called');
  };
};
const returnsAnAnonymousFunction = () => {
  return () => {
    console.log('Anonymous function called');
  };
};
