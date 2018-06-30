(function () {
'use strict';
angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['$stateParams', 'MenuDataService'];
function ItemDetailController($stateParams, MenuDataService) {
  var items = this;
    
	  /*
  items.getItemsForCategory = function (sName) {
	     console.log("get cat:" + sName+ "|");
    var promise = MenuDataService.getItemsForCategory(sName);
    promise.then(function (response) {
      items.items = response.data;
      console.log("Item detail2:" + response.data);
    })
    .catch(function () {
      console.log("Error");
    });
  }*/
  
   var promise = MenuDataService.getItemsForCategory($stateParams.categoryShortName);
	promise.then(function (response) {

	console.log("response data2:"+ response.data.menu_items);
	//console.log("test first index:"+ response.data.menu_items[0].description);
    //items.items  =  response.data;
	items.items  =  response.data.menu_items;

  })
  .catch(function () {
    console.log("Error in getItemsForCategory");
  });
  
  /*
     items.removeItem = function (itemIndex) {
	  console.log("removing sitem" + itemIndex);
    };
	*/
}
})();


