export default () => {
  return {
    name: 'my-example',
    load(id) {
      console.log('load', id);
    },
  };
};
