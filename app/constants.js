export default ngModule => {

  ngModule

    .constant('VERSION', require('../package.json').version)

  ;
}
