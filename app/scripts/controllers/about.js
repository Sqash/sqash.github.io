'use strict';

/**
 * @ngdoc function
 * @name samWhiteleyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the samWhiteleyApp
 */
angular.module('samWhiteleyApp')
  .controller('AboutCtrl', function ($scope) {

    var personal = {
      title: 'At a glance',
      content: [
        'I\'m a hacker, a problem solver, a technology enthusiast, and a ' +
        'lifetime learner. ' +
        'I\'m always trying to find new ways to apply what I learn to help ' +
        'make life better for everyone around me. ' +
        'I\'m a Computer Science student at Carleton University (Ottawa).',

        'If you want to get in touch then details are all in \'Contact\'',

        'If you\'re looking at this page because you want to know about me, ' +
        'continue down!',

        'If you\'re looking at this page because you want to see what kinds ' +
        'of things I hack up in my spare time or because you\'d like me to ' +
        'code up something for you, check out \'Projects\'',

        'If you\'re looking at this page because you\'re interested in my ' +
        'qualifications, take a peek at my resume and explore the rest!'
      ]
    };

    var compSci = {
      title: 'Code & Tech',
      content: [
        'I like it all!',
        'Seriously though, everything from newest of NASA\'s launch tests to ' +
        'the websites I hack up for friends to the coolest applications of ' +
        'cloud computing. I\'m a big nerd and I won\'t have it any other way!',
        'Education wise, I specialize in computer networking and security. ' +
        'As so far as my education has come, I\'m much better at the first ' +
        'of those two things.',
        'My personal interests lie in web-based solutions to world problems ' +
        '(big and small alike) and also in big data computation. I\'m still ' +
        'working on my expertise in the second.',
        'Most of my coding recently has been geared towards providing tools ' +
        'for people I know who don\'t code. It\'s continuing to be a really ' +
        'rewarding experience; where I can learn and test new ideas and ' +
        'tools out and provide something of value at the same time!',
        'The things I\'m always keeping in mind while at the keyboard? ' +
        'There\'s (almost) always a better solution; Think first then code; ' +
        'Don\'t solve something that already has a good answer; (User ' +
        'experience is key.) || (If it\'s not easy, they won\'t use it.)'
      ]
    };

    var volunteering = {
      title: 'I volunteer!',
      content: [
        'There are lots of things that I do in my spare time for ' +
        'organizations I love and for fun! Here are some of the highlights.',
        'Carleton Computer Science Society (CCSS): I\'ve been an Executive ' +
        'member of the society since the \'14/\'15 school year. First go I ' +
        'was Secretary for the society and for the \'15/\'16 school year I ' +
        'am the Academic Representitive. As part of the Executive Board of ' +
        'the CCSS I help provide services and events to make the University ' +
        'experience at Carleton exceptional for everyone in Comp. Sci.',
        'Carleton Game Dev Club: We built an arcade machine! You can come ' +
        'check it out and likely even play it on Carleton University campus',
        'Blue Skies Music Festival: I\'m one of a marvelous group of dudes ' +
        'and ladies that stand in the blazing August sunshine and help you ' +
        'park your sedan on the side of a mini mountain in a forest. It\'s ' +
        'a ton of fun and I love it!',
        'I\'ve also had some fun volunteering stints with Ottawa Bluesfest, ' +
        'Mister Leather Ottawa, and probably a bunch of tech and labor ' +
        'endeavours that have slipped my mind.'
      ]
    };

    $scope.sections = [personal, compSci, volunteering];

  });
