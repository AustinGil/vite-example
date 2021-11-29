export default () => {
  return {
    name: 'my-plugin',
    load(id) {
      console.log('load', id);
    },
  };
};
