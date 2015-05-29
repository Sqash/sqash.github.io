'use strict';

/**
 * @ngdoc function
 * @name samWhiteleyApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the samWhiteleyApp
 */
angular.module('samWhiteleyApp')
  .controller('ContactCtrl', function ($scope) {

    var standard = {
      title: 'General contact purposes',
      email: 'sam.whiteley@hotmail.com',
      notes: [
        'For inquiries related to employment, projects, collaboration, and ' +
        'me in general.',
        'Send an email with a concise and accurate subject line as I tend to ' +
        'ignore and delete emails that look like spam. If your email is ' +
        'about a specific project, please preface the subject line with the ' +
        'name of the project.'
      ]
    };

    var ccss = {
      title: 'Carleton Computer Science Society',
      email: 'sam.whiteley@ccss.carleton.ca',
      notes: [
        'For inquiries related to my position on the Exective Board of the ' +
        'CCSS.',
        'If your inquiry is about student academic life and/or success at ' +
        'Carleton university for Comp. Sci. students, please send an email ' +
        'with a concise and accurate subject line. For inquiries about ' +
        'other CCSS happenings (events, services, etc.) please check our ' +
        'website (ccss.carleton.ca) for relevant contacts or email our ' +
        'secretary.'
      ]
    };

    $scope.methods = [standard, ccss];

  });
