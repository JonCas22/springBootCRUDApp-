
'use strict';
 
angular.module('crudApp').controller('CompanyController',
    ['CompanyService', '$scope', '$location',  function( CompanyService, $scope, $location) {
 
        var self = this;
       
        self.company = {};
        self.companies=[];
 
        self.submit = submit;
        self.getAllCompanies = getAllCompanies;
        self.getCurrentLoginCompany = getCurrentLoginCompany();
        self.createCompany = createCompany;
        self.updateCompany = updateCompany;
        self.removeCompany = removeCompany;
        self.editCompany = editCompany;
        self.reset = reset;
        self.login = login;
        

 
        self.successMessage = '';
        self.errorMessage = '';
        self.errorValidate = '';
        self.done = false;
 
        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;
 
        function submit() {
            console.log('Submitting');
            if (self.company.id === undefined || self.company.id === null) {
                console.log('Saving New company', self.company);
                createCompany(self.company);
            } else {
            	updateCompany(self.company, self.company.id);
                console.log('Company updated with id ', self.company.id);
            }
        }
        
        function login() {
        	
        	CompanyService.login(self.company)
        	.then(
                    function (response) {
                        console.log('JON - Login successfully');
//                        self.successMessage = 'Login successfully';
//                        self.errorMessage='';
                        $location.path("user");
                    },
                    function (errResponse) {
                        console.error('JON - Error in Login');
                        self.errorMessage = 'Error in Login' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }
        
        function createCompany(company) {
            console.log('About to create company');
            CompanyService.createCompany(company)
                .then(
                    function (response) {
                        console.log('Company created successfully');
                        self.successMessage = 'Company created successfully';
                        self.errorMessage='';
                        self.done = true;
                        self.companies={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating company');
                        self.errorMessage = 'Error while creating company: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }
        
        function updateCompany(company, id){
            console.log('About to update company');
            CompanyService.updateCompany(company, id)
                .then(
                    function (response){
                        console.log('Company updated successfully');
                        self.successMessage='Company updated successfully';
                        self.errorMessage='';
                        self.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function(errResponse){
                        console.error('Error while updating Company');
                        self.errorMessage='Error while updating Company '+errResponse.data;
                        self.successMessage='';
                    }
                );
        }
 
 
        function removeCompany(id){
            console.log('About to remove Company with id '+id);
            CompanyService.removeCompany(id)
                .then(
                    function(){
                        console.log('Company '+id + ' removed successfully');
                    },
                    function(errResponse){
                        console.error('Error while removing Company '+id +', Error :'+errResponse.data);
                    }
                );
        }
 
 
        function getAllCompanies(){
            return CompanyService.getAllCompanies();
        }
        
        function getCurrentLoginCompany(){
        	//console.log('Current loged Company: ' + CompanyService.getCurrentLoginCompany.name);
        	return CompanyService.getCurrentLoginCompany();
        }
 
        function editCompany(id) {
            self.successMessage='';
            self.errorMessage='';
            CompanyService.getCompany(id).then(
                function (company) {
                    self.company = company;
                },
                function (errResponse) {
                    console.error('Error while removing Company ' + id + ', Error :' + errResponse.data);
                }
            );
        }
        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.company={};
            $scope.myForm.$setPristine(); //reset Form
        }
    }
    ]);