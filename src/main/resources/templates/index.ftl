<!DOCTYPE html>

<html lang="en" ng-app="crudApp">
    <head>
        <title>${title}</title>
        
        <link href="css/bootstrap.css" rel="stylesheet"/>
        <link href="css/app.css" rel="stylesheet"/>
        <link rel="stylesheet" href="fontawesome/css/font-awesome.min.css">
        
        
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/jquery.validation/1.15.1/jquery.validate.min.js"></script>
		<link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet">
      	<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  		<script src="//maps.googleapis.com/maps/api/js"></script>
  		<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js"></script>
		
		
		<script src="js/lib/CryptoJS/rollups/sha3.js"></script>
    	<script src="js/lib/CryptoJS/rollups/aes.js"></script>


        
    </head>
    <body>
		<menu-bar ng-if="location.path() == '/category' || location.path() == '/user'|| location.path() == '/profile'"></menu-bar>
        <div ui-view></div>
        <script src="js/lib/angular.min.js" ></script>
        <script src="js/lib/angular-ui-router.min.js" ></script>
        <script src="js/lib/localforage.min.js" ></script>
        <script src="js/lib/ngStorage.min.js"></script>
        <script src="js/app/app.js"></script>
        <script src="js/app/UserService.js"></script>
        <script src="js/app/UserController.js"></script>
        <script src="js/app/CategoryService.js"></script>
        <script src="js/app/CategoryController.js"></script>
        <script src="js/app/CompanyService.js"></script>
        <script src="js/app/CompanyController.js"></script>
    </body>
</html>