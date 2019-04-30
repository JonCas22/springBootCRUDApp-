'use strict';

angular.module('crudApp').factory('UserService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllUsers: loadAllUsers,
                loadCompanyUsers: loadCompanyUsers,
                getAllUsers: getAllUsers,
                getCompanyUsers: getCompanyUsers,
                getUser: getUser,
                createUser: createUser,
                updateUser: updateUser,
                removeUser: removeUser
            };

            return factory;
            
            function loadAllUsers() {
                console.log('Fetching all users 1');
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all users');
                            $localStorage.users = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading users');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            
            
            function loadCompanyUsers(company){
            	console.log('Loading Company Users in company: ' + company);
            	console.log('Fetching all users 2: ' + company);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + company.name)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all company users');
                            $localStorage.users = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading company users');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            
            
            
            function getCompanyUsers(){
            	//console.log('$localStorage.users: ' + $localStorage.users);
                return $localStorage.users;
            }

            function getAllUsers(){
                return $localStorage.users;
            }

            function getUser(id) {
                console.log('Fetching User with id :'+id);
                var deferred = $q.defer();
                console.log("JON - Float: " + id)
                $http.get(urls.USER_SERVICE_API + parseFloat(id))
                    .then(
                        function (response) {
                            console.log('Fetched successfully User with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading user with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createUser(user, company) {
                console.log('Creating User');
                var deferred = $q.defer();
                console.log("JON - CreateUser: " + user.name + " in company " + company.name);
                $http.post(urls.USER_SERVICE_API, user)
                    .then(
                        function (response) {
                        	loadCompanyUsers(company);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                           console.error('Error while creating User : '+errResponse.data.errorMessage);
                           deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateUser(user, id, company) {
                console.log('Updating User with id '+id);
                var deferred = $q.defer();
                $http.put(urls.USER_SERVICE_API + id, user)
                    .then(
                        function (response) {
                        	loadCompanyUsers(company);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating User with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeUser(id, company) {
                console.log('Removing User with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.USER_SERVICE_API + id)
                    .then(
                        function (response) {
                        	loadCompanyUsers(company);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing User with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }
    ]);