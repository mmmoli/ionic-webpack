export default ngModule => {

  ngModule

    .config(function ($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(
        /^\s*(https?|ftp|mailto|file|tel):/);
    })

    .config(function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/tasks');
    })


  ;
}
