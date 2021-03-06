'use strict';

angular.module('crudApp').controller('UserController',
		['UserService', 'CategoryService', 'CompanyService', '$scope',  function(UserService, CategoryService, CompanyService, $scope) {

        var self = this;
        self.user = {};
        self.users=[];

        self.submit = submit;
        self.getAllUsers = getAllUsers;
        self.getCompanyUsers = getCompanyUsers;
        self.getAllCategories = getAllCategories;
        self.getLogedCompany = getLogedCompany;
        self.createUser = createUser;
        self.updateUser = updateUser;
        self.removeUser = removeUser;
        self.editUser = editUser;
        self.reset = reset;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;

        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;
        
        

        function submit() {
            console.log('Submitting');
            if (self.user.id === undefined || self.user.id === null) {
                console.log('Saving New User', self.user);
                createUser(self.user);
            } else {
                updateUser(self.user, self.user.id);
                console.log('User updated with id ', self.user.id);
            }
        }
        
        function createUser(user) {
            console.log('About to create user');
            //self.user.company = CompanyController.getCurrentLoginCompany();
            self.user.company = CompanyService.getCurrentLoginCompany().name;
            UserService.createUser(user, CompanyService.getCurrentLoginCompany())
                .then(
                    function (response) {
                        console.log('User created successfully');
                        self.successMessage = 'User created successfully';
                        self.errorMessage='';
                        self.done = true;
                        self.user={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating User');
                        self.errorMessage = 'Error while creating User: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                    
                );
        }


        function updateUser(user, id){
            console.log('About to update user');
            UserService.updateUser(user, id, CompanyService.getCurrentLoginCompany())
                .then(
                    function (response){
                        console.log('User updated successfully');
                        self.successMessage='User updated successfully';
                        self.errorMessage='';
                        self.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function(errResponse){
                        console.error('Error while updating User');
                        self.errorMessage='Error while updating User '+errResponse.data;
                        self.successMessage='';
                    }
                );
        }


        function removeUser(id){
            console.log('About to remove User with id '+id);
            UserService.removeUser(id, CompanyService.getCurrentLoginCompany())
                .then(
                    function(response){
                        console.log('User '+id + ' removed successfully');
                    },
                    function(errResponse){
                        console.error('Error while removing user '+id +', Error :'+errResponse.data);
                    }
                );
        }
        
        function getCurrentLoginCompany(){
        	return CompanyController.getCurrentLoginCompany();
        }
        
        function getCompanyUsers(){
            return UserService.getCompanyUsers();
        }

        function getAllUsers(){
            return UserService.getAllUsers();
        }
        
        function getAllCategories(){
            return CategoryService.getAllCategories();
        }
        
        function getLogedCompany(){
        	var current = CompanyService.getCurrentLoginCompany();
        	console.log('Current loged Company: ' + current.name);
        	return current;
        }

        function editUser(id) {
            self.successMessage='';
            self.errorMessage='';
            UserService.getUser(id).then(
                function (user) {
                    self.user = user;
                },
                function (errResponse) {
                    console.error('Error while removing user ' + id + ', Error :' + errResponse.data);
                }
            );
        }
        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.user={};
            $scope.myForm.$setPristine(); //reset Form
        }
    }


    ]);