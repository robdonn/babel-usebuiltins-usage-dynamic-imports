const obj = {
  secondary: true,
};

export default () => {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} is ${value}`);
  });
};
