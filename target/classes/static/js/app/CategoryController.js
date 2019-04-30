
'use strict';
 
angular.module('crudApp').controller('CategoryController',
    ['CategoryService', '$scope',  function( CategoryService, $scope) {
 
        var self = this;
        self.category = {};
        self.categories=[];
 
        self.submit = submit;
        self.getAllCategories = getAllCategories;
        self.createCategory = createCategory;
        self.updateCategory = updateCategory;
        self.removeCategory = removeCategory;
        self.editCategory = editCategory;
        self.reset = reset;

 
        self.successMessage = '';
        self.errorMessage = '';
        self.errorValidate = '';
        self.done = false;
 
        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;
 
        function submit() {
            console.log('Submitting');
            if (self.category.id === undefined || self.category.id === null) {
                console.log('Saving New Category', self.category);
                createCategory(self.category);
            } else {
            	updateCategory(self.category, self.category.id);
                console.log('Category updated with id ', self.category.id);
            }
        }
        
     
 
        function createCategory(category) {
            console.log('About to create user');
            CategoryService.createCategory(category)
                .then(
                    function (response) {
                        console.log('Category created successfully');
                        self.successMessage = 'Category created successfully';
                        self.errorMessage='';
                        self.done = true;
                        self.category={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating category');
                        self.errorMessage = 'Error while creating category: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }
 
 
        function updateCategory(category, id){
            console.log('About to update category');
            CategoryService.updateCategory(category, id)
                .then(
                    function (response){
                        console.log('Category updated successfully');
                        self.successMessage='Category updated successfully';
                        self.errorMessage='';
                        self.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function(errResponse){
                        console.error('Error while updating Category');
                        self.errorMessage='Error while updating Category '+errResponse.data;
                        self.successMessage='';
                    }
                );
        }
 
 
        function removeCategory(id){
            console.log('About to remove User with id '+id);
            CategoryService.removeCategory(id)
                .then(
                    function(){
                        console.log('Category '+id + ' removed successfully');
                    },
                    function(errResponse){
                        console.error('Error while removing category '+id +', Error :'+errResponse.data);
                    }
                );
        }
 
 
        function getAllCategories(){
            return CategoryService.getAllCategories();
        }
 
        function editCategory(id) {
            self.successMessage='';
            self.errorMessage='';
            CategoryService.getCategory(id).then(
                function (category) {
                    self.category = category;
                },
                function (errResponse) {
                    console.error('Error while removing category ' + id + ', Error :' + errResponse.data);
                }
            );
        }
        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.category={};
            $scope.myForm.$setPristine(); //reset Form
        }
    }
    ]);