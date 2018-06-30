
(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath'];
	function MenuDataService($http, ApiBasePath) {
	  var service = this;
	
		  service.getAllCategories = function () {
		
		  return $http.get(ApiBasePath + "/categories.json").then(function(foundItems) {

			return foundItems;
		  }) .catch(function () {
			  console.log("Error in getAllCategories")
			});
		}
		/*
		service.getItemsForCategory = function () {
			console.log("in getAllCategories_2");
		  return $http.get(ApiBasePath + "/menu_items.json").then(function(foundItems2) {

			return foundItems2;
		  }) .catch(function () {
			  console.log("Error in f1")
			});
		}
*/
		  service.getItemsForCategory = function(categoryShortName) {
			 console.log("in getItemsForCategory:" + categoryShortName +":sName");
			return $http({
			  method: "GET",
			  url: (ApiBasePath + "/menu_items.json"),
			  params: {
				category: categoryShortName
			  }
			})
			.catch(function () {
			  console.log("Error in getItemsForCategory")
			});
		}

	 
	/*
		service.removeItem = function (itemIndex) {
		  
		  console.log("removing sitem" + itemIndex);
		 // items.splice(itemIndex, 1);
		};
	 */
	 
	}

})();



