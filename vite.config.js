// import MyPlugin from './my-plugin/index.js' // works
// import MyPlugin from 'my-plugiin/index.js' // doesn't work (becuase package is not "type":"module"). doesn't work when package is not "type":"module"
// import MyPlugin from 'my-plugiin/index.mjs' // doesn't work
// import MyPlugin from 'my-plugiin/index.cjs' // works
// import MyPlugin from 'my-plugiin/index.common.js' // works

export default {
  plugins: [
    MyPlugin()
  ]
}