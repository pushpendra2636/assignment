angular.module('controller.home', [])

.controller('HomeCtrl', function($scope, CatalogService) {
    $scope.title = "Rental Management System";
    $scope.locations = [];
    $scope.categories = [];
    $scope.subCategories = [];
    $scope.selectedLocation = null;
    $scope.selectedBranch = null;
    $scope.selectedCategory = null;

    (function() { // self invoking function
        CatalogService.getData().then(function(result) {
            $scope.locations = result.data.locations;
        });
    })();

    $scope.showCategories = function(dataObj, showCategoriesFor, location) {
        $scope.categories = [];
        $scope.subCategories = [];
        $scope.selectedCategory = null;
        if (showCategoriesFor == 'location') {
            $scope.selectedLocation = dataObj;
            $scope.selectedBranch = null;
            for (var index in dataObj.branches) {
                var branchCategories = dataObj.branches[index].categories;
                $scope.categories = $scope.categories.concat(branchCategories);
            }
        } else if (showCategoriesFor == 'branch') {
            $scope.selectedLocation = location ? location : null;
            $scope.selectedBranch = dataObj;
            $scope.categories = dataObj.categories;
        }
    };

    $scope.showSubCategories = function(category) {
        $scope.selectedCategory = category;
        $scope.subCategories = category.subcategories;
    };


});