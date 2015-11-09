'use strict';

angular.module('testApp', [
    'validation',
    'validation.rule',
  ])
    .config(["$sceProvider", "$locationProvider", function($sceProvider, $locationProvider) {
        $locationProvider.html5Mode(false);
        $sceProvider.enabled(false);
  }])
