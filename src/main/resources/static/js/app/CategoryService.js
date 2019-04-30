
'use strict';
 
angular.module('crudApp').factory('CategoryService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {
 
            var factory = {
                loadAllCategories: loadAllCategories,
                getAllCategories: getAllCategories,
                getCategory: getCategory,
                createCategory: createCategory,
                updateCategory: updateCategory,
                removeCategory: removeCategory
            };
 
            return factory;
 
            function loadAllCategories() {
                console.log('Fetching all categories');
                var deferred = $q.defer();
                $http.get(urls.CATEGORY_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all categories');
                            $localStorage.categories = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading categories');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function getAllCategories(){
                return $localStorage.categories;
            }
 
            function getCategory(id) {
                console.log('Fetching Category with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.CATEGORY_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Category with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading category with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function createCategory(category) {
                console.log('Creating Category');
                var deferred = $q.defer();
                $http.post(urls.CATEGORY_SERVICE_API, category)
                    .then(
                        function (response) {
                        	loadAllCategories();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                           console.error('Error while creating category : '+errResponse.data.errorMessage);
                           deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function updateCategory(category, id) {
                console.log('Updating Category with id '+id);
                var deferred = $q.defer();
                $http.put(urls.CATEGORY_SERVICE_API + id, category)
                    .then(
                        function (response) {
                        	loadAllCategories();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Category with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function removeCategory(id) {
                console.log('Removing Category with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.CATEGORY_SERVICE_API + id)
                    .then(
                        function (response) {
                        	loadAllCategories();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Category with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
        }
    ]);