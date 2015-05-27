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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis maximus velit. Suspendisse nibh ante, egestas a ipsum placerat, rutrum iaculis enim. Sed nulla velit, eleifend eu volutpat ut, iaculis sit amet sapien. Mauris eu mauris tincidunt velit consequat tincidunt vel volutpat lacus. Donec facilisis libero nec massa auctor, eget blandit diam tempus. Aliquam ante tortor, pretium vel laoreet vitae, pellentesque faucibus justo. Pellentesque consectetur, nisl quis malesuada molestie, lorem augue dignissim elit, eget fringilla leo dolor at arcu. Mauris commodo feugiat hendrerit. Aliquam purus purus, aliquet ac turpis at, egestas ornare erat. Mauris tristique metus bibendum nisi tincidunt, non vehicula augue viverra. Aliquam sollicitudin non quam tempus eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        'Sed sed lectus sit amet erat pellentesque tempus. Mauris viverra interdum nulla quis tincidunt. Suspendisse luctus scelerisque cursus. Nullam mollis ante a dolor fermentum, at congue nisi suscipit. Nam porta convallis aliquet. In non risus sit amet augue ultricies maximus id ac arcu. Duis sit amet tempor nunc. Nulla egestas, metus ut congue condimentum, purus sapien finibus massa, et volutpat metus neque in quam. Proin ligula purus, mattis a dolor et, varius vestibulum ex. Quisque tortor nibh, facilisis id neque non, mollis tempor nisi. Donec mattis odio ultrices augue venenatis, id luctus massa feugiat. Nulla facilisi. Maecenas lacinia lacus vitae luctus sagittis. Quisque ex lectus, pharetra vitae vehicula a, convallis eu lectus. Vivamus porttitor, libero eu condimentum tincidunt, nibh sapien euismod nisi, sed tincidunt orci odio vitae sem.',
        'Praesent convallis venenatis blandit. Donec et iaculis ligula, id iaculis nulla. Integer nec velit lectus. Donec bibendum vehicula urna, egestas tristique mi vehicula non. Quisque interdum pharetra lacus, semper viverra ante suscipit vel. Nulla non risus ante. Quisque condimentum arcu eu ipsum dictum, eu porta magna luctus. Vestibulum ut neque eu quam tincidunt bibendum. Proin at nisi sapien. Mauris viverra, erat rutrum rutrum sagittis, ante nulla iaculis ante, scelerisque fringilla elit eros et mi.',
        'Morbi sed nibh consectetur, bibendum magna at, lobortis turpis. Fusce sagittis vulputate metus, at facilisis purus interdum porttitor. Vestibulum ut imperdiet libero, non rhoncus lectus. Vestibulum et velit lectus. In sollicitudin at sapien in eleifend. Curabitur mollis mi urna, non blandit orci auctor vel. Nam cursus, nisi at tincidunt tincidunt, quam urna iaculis dui, ut vestibulum neque lectus id lacus. Donec bibendum, nisl et pulvinar fringilla, ipsum dolor rhoncus mauris, vel tincidunt massa mauris eget elit. Nunc egestas nunc ut mauris maximus, at elementum ex porttitor. Pellentesque ullamcorper neque lorem, a accumsan ex ultricies in. Aenean at ullamcorper metus. Quisque eget tristique ligula. Etiam tempor massa vehicula consequat fringilla. Donec convallis ut nunc at ornare. Cras posuere vitae arcu non tincidunt.',
        'Proin laoreet imperdiet quam laoreet pellentesque. In posuere elementum malesuada. Sed vitae tellus porttitor augue ornare congue. Sed ut purus venenatis, dignissim nunc eget, consectetur augue. Vivamus sit amet dolor augue. Etiam egestas sapien ut ante aliquet, nec pretium lacus pretium. Proin quis lacus mattis, aliquet augue sit amet, consectetur lorem. Duis vitae ullamcorper nisl.'
      ]
    };

    $scope.sections = [personal, compSci];

  });
