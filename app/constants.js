export default ngModule => {

  ngModule

    .constant('version', require('../package.json').version)

  ;
}
