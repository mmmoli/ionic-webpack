export default ngModule => {

  ngModule

    .run(function ($log, $rootScope, $ionicBackdrop, $timeout) {

      $log.debug('app module - run');

      $rootScope.$on('$stateChangeStart',
        function (event, toState) {
          $log.debug('$stateChangeStart - name:', toState.name);
        });

      $rootScope.$on('$stateChangeSuccess',
        function (event, toState) {
          $log.debug('$stateChangeSuccess - name:', toState.name);
        });

      $rootScope.$on('$stateNotFound',
        function (event, unfoundState, fromState, fromParams) {
          $log.warn('$stateNotFound', {
            event        : event,
            unfoundState : unfoundState,
            fromState    : fromState,
            fromParams   : fromParams
          });
        });

      $rootScope.$on('$stateChangeError',
        function (event, toState, toParams, fromState, fromParams, error) {
          $log.error('$stateChangeError', {
            event      : event,
            toState    : toState,
            toParams   : toParams,
            fromState  : fromState,
            fromParams : fromParams,
            error      : error
          });
          if (error) {
            throw error;
          }
        });

      $ionicBackdrop.retain();

      $timeout(function() {
        $ionicBackdrop.release();
      }, 600);
    });



  ;
}
