angular.module('service.catalog', [])

.service('CatalogService', function($http) {

    this.getData = function() {
        return $http.get('src/providers/catalog.db.json').then(function(response) {
            return response.data;
        });
    };

});