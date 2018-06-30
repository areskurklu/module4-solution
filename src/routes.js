(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-categories.template.html',
    controller: 'MenuRestaurantListController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('itemDetail', {
    url: '/items/{categoryShortName}',
	//url: '/item-detail/{itemId}',
    templateUrl: 'src/menuapp/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService ) {
              /*return MenuDataService.getAllCategories()
                .then(function (items) {
                 return items[$stateParams.itemId];
                });*/
				console.log("state call");
			    return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
    }
  });
}

})();
