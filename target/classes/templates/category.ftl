<div class="generic-container">
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">Category</span></div>
        <!--<button type="button" ng-click="" class="btn btn-primary btn-sm">Add category</button>-->
		<div class="panel-body">
	        <div class="formcontainer">
	            <div class="alert alert-success" role="alert" ng-if="ctrl.successMessage">{{ctrl.successMessage}}</div>
	            <div class="alert alert-danger" role="alert" ng-if="ctrl.errorMessage">{{ctrl.errorMessage}}</div>
	            <form ng-submit="ctrl.submit()" name="myForm" class="form-horizontal">
	                <input type="hidden" ng-model="ctrl.category.id" />
	                <div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="cname">Category Name</label>
	                        <div class="col-md-7">
	                            <input type="text" ng-model="ctrl.category.name" name="cName" id="cname" class="username form-control input-sm" placeholder="Enter category name" required ng-minlength="3" ng-pattern ="/^[a-zA-Z\s]*$/"/>
	                            <div class="custom-error"  ng-show="myForm.cName.$error.pattern"> Insert more than three words!</div>
	                        </div>
	                    </div>
	                </div>
	                
	                <!--<div *ngIf="myForm.get('cname').invalid && processValidation" [ngClass] = "'error'">
					    Cateogy name is required.
					</div>
					<div *ngIf="cname.errors.minlength">
					    Category name must be at least 3 characters long.
					</div>-->

	                <div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="category">Category</label>
	                        <div class="col-md-7">
	                            <input type="text" ng-model="ctrl.category.description" name="descriptionType" id="description" class="form-control input-sm" placeholder="Enter your category description." required ng-pattern="/^[a-zA-Z\s]*$/"/>
	                             <div class="custom-error"  ng-show="myForm.descriptionType.$error.pattern"> Insert more than three words!</div>
	                        </div>
	                    </div>
	                </div>

	                <div class="row">
	                    <div class="form-actions floatRight">
	                    	
	                    	<button type="submit" class=" btn btn-primary btn-sm {{!ctrl.category.id ? 'fa fa-plus-circle' : 'fa fa-pencil-square'}}" ng-disabled="myForm.$invalid || myForm.$pristine"></button>
	                        <button type="button" ng-click="ctrl.reset()" class="btn btn-warning btn-sm"><i class="fa fa-repeat" aria-hidden="true"></i></button>
	                    </div>
	                </div>
	            </form>
    	    </div>
		</div>	
    </div>
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">List of Categories </span></div>
		<div class="panel-body">
			<div class="table-responsive">
		        <table class="table table-hover">
		            <thead>
		            <tr>
		                <th>ID</th>
		                <th>NAME</th>
		                <th>DESCRIPTION</th>
		                <th width="100"></th>
		                <th width="100"></th>
		            </tr>
		            </thead>
		            <tbody>
		            <tr ng-repeat="c in ctrl.getAllCategories()" ng-click="ctrl.editCategory(c.id)">
		                <td>{{c.id}}</td>
		                <td>{{c.name}}</td>
		                <td>{{c.description}}</td>
		                
		                <td><button type="button" ng-click="ctrl.removeCategory(c.id)" class="btn btn-danger custom-width"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
		            </tr>
		            </tbody>
		        </table>		
			</div>
		</div>
    </div>
</div>