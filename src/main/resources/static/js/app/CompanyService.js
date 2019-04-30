
'use strict';
 
angular.module('crudApp').factory('CompanyService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {
    	
            var factory = {
                loadAllCompanies: loadAllCompanies,
                getAllCompanies: getAllCompanies,
                getCurrentLoginCompany: getCurrentLoginCompany,
                getCompany: getCompany,
                createCompany: createCompany,
                updateCompany: updateCompany,
                login: login,
                removeCompany: removeCompany
               
            };
 
            return factory;
            
            var currentCompany = $q.defer();
            
            function setCurrentLoginCompany(company){
            	self.currentCompany = company;
            }
            
            function getCurrentLoginCompany(){
            	//console.log("JON - getCurrentLoginCompany: " + self.currentCompany)
            	return self.currentCompany;
            }
            
 
            function loadAllCompanies() {
                console.log('Fetching all Companies');
                var deferred = $q.defer();
                $http.get(urls.REGISTER_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all Companies');
                            $localStorage.companies = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading Companies');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function getAllCompanies(){
                return $localStorage.companies;
            }
 
            function getCompany(id) {
                console.log('Fetching Company with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.REGISTER_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Company with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading Company with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            
       
            function login(company) {
                console.log('Fetching Company with username :'+company.name);
                company.password = CryptoJS.SHA3(company.password, { outputLength: 224 }).toString();
                var deferred = $q.defer();
                $http.post(urls.LOGIN_SERVICE_API, company)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Company with username :'+response.data.name);
                            loadCompanyUsers(company);
                            loadAllCategories();
                            setCurrentLoginCompany(response.data);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading Company with username :'+company.name);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            
            function loadCompanyUsers(company){
            	console.log('CompanyService - Fetching all users 2: ' + company);
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
 
            function createCompany(company) {
                console.log('Creating Company');
                company.password = CryptoJS.SHA3(company.password, { outputLength: 224 }).toString();
                var deferred = $q.defer();
                $http.post(urls.REGISTER_SERVICE_API, company)
                    .then(
                        function (response) {
                        	loadAllCompanies();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                           console.error('Error while creating Company : '+errResponse.data.errorMessage);
                           deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            
            function updateCompany(company, id) {
                console.log('Updating Company with id '+id);
                var deferred = $q.defer();
                $http.put(urls.REGISTER_SERVICE_API + id, company)
                    .then(
                        function (response) {
                        	loadAllCompanies();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Company with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function removeCompany(id) {
                console.log('Removing Company with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.REGISTER_SERVICE_API + id)
                    .then(
                        function (response) {
                        	loadAllCompanies();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Company with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
        }
    ]);