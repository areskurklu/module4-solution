(function () {
'use strict';


angular.module('MenuApp')
.controller('MenuRestaurantListController', MenuRestaurantListController);


MenuRestaurantListController.$inject = ['MenuDataService'];
function MenuRestaurantListController(MenuDataService) {
  var mainList = this;
  //mainList.items = items;
  
  var promise = MenuDataService.getAllCategories();
  promise.then(function (response) {
	console.log("response data1:"+ response.data);
    mainList.items  =  response.data;

  })
  .catch(function () {
    console.log("Error in getAllCategories");
  });
  

}

})();
