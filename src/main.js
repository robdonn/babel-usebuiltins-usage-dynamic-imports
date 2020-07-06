const main = () => {
  const obj = {
    main: true,
  };

  console.log(Object.values);

  // Object.entries(obj).forEach(([key, value]) => {
  //   console.log(`${key} is ${value}`);
  // });

  // import(/* webpackChunkName: "secondary" */ './secondary').then((secondary) => {
  //   secondary();
  // });

  console.log('Hello');
};

main();
