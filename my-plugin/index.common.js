module.exports = () => {
  return {
    name: 'my-plugin',
    load(id) {
      console.log('load', id);
    },
  };
};
