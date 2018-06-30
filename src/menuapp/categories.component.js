(function () {
'use strict';
//categories
angular.module('MenuApp')
.component('menuList', {
  templateUrl: 'src/menuapp/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
