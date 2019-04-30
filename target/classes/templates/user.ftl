<div class="generic-container">
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">User</span></div>
        <!--<button type="button" ng-click="" class="btn btn-primary btn-sm">Add category</button>-->
		<div class="panel-body">
	        <div class="formcontainer">
	            <div class="alert alert-success" role="alert" ng-if="uctrl.successMessage">{{uctrl.successMessage}}</div>
	            <div class="alert alert-danger" role="alert" ng-if="uctrl.errorMessage">{{uctrl.errorMessage}}</div>
	            <form ng-submit="uctrl.submit()" name="myForm" class="form-horizontal">
	                <input type="hidden" ng-model="uctrl.user.id" />
	                <div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="uname">Name</label>
	                        <div class="col-md-7">
	                            <input type="text" ng-model="uctrl.user.name" name="uName" id="uname" class="username form-control input-sm" placeholder="Enter your name" required ng-minlength="3" ng-pattern ="/^[a-zA-Z\s]*$/"/>
	                            <div class="custom-error"  ng-show="myForm.uName.$error.pattern"> Insert more than three words!</div>
	                        </div>
	                    </div>
	                </div>
	                
	                <!--<div *ngIf="myForm.get('uname').invalid && processValidation" [ngClass] = "'error'">
					    Name is required.
					</div>
					<div *ngIf="uname.errors.minlength">
					    Name must be at least 3 characters long.
					</div>-->

	                <div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="age">Age</label>
	                        <div class="col-md-7">
	                            <input type="text" ng-model="uctrl.user.age" name="ageName" id="age" class="form-control input-sm" placeholder="Enter your Age." required ng-pattern="uctrl.onlyIntegers"/>
	                            <div class="custom-error"  ng-show="myForm.ageName.$error.pattern"> Insert valid value!</div>
	                        </div>
	                    </div>
	                </div>
	
	                <div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="salary">Salary</label>
	                        <div class="col-md-7">
	                            <input type="number" ng-model="uctrl.user.salary" name="salaryAmount" id="salary" min="1500" class="form-control input-sm" placeholder="Enter your Salary." required ng-pattern="uctrl.onlyNumbers"/>
	                           	<div ng-message="min">This field must be at least 1500.</div>
	                        </div>
	                    </div>
	                </div>
	                
	                <div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="category">Category</label>
	                        <div class="col-sm-4">
					            <select class="form-control" name="type" ng-model="uctrl.user.idCategory">
									<option  name"userCategory" ng-repeat="c in uctrl.getAllCategories()" value="{{c.id}}" ng-selected="uctrl.user.idCategory == c.id">
									{{c.name}}</option>					            	
					            </select>
				          </div>
	                    </div>
	                </div>

	                <div class="row">
	                    <div class="form-actions floatRight">
	                    
	                    	<button type="submit" class=" btn btn-primary btn-sm {{!uctrl.user.id ? 'fa fa-plus-circle' : 'fa fa-pencil-square'}}" ng-disabled="myForm.$invalid || myForm.$pristine"></button>
	                        
	                        <button type="button" ng-click="uctrl.reset()" class="btn btn-warning btn-sm"><i class="fa fa-repeat" aria-hidden="true"></i></button>
	                    </div>
	                </div>
	            </form>
    	    </div>
		</div>	
    </div>
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">List of Users </span></div>
		<div class="panel-body">
			<div class="table-responsive">
		        <table class="table table-hover">
		            <thead>
		            <tr>
		                <th>ID</th>
		                <th>NAME</th>
		                <th>AGE</th>
		                <th>SALARY</th>
		                <th>CATEGORY</th>
		                <th>COMPANY</th>
		                <th width="100"></th>
		                <th width="100"></th>
		            </tr>
		            </thead>
		            <tbody>
		            <tr  ng-repeat="u in uctrl.getCompanyUsers()" ng-click="uctrl.editUser(u.id)">
		                <td>{{u.id}}</td>
		                <td>{{u.name}}</td>
		                <td>{{u.age}}</td>
		                <td>{{u.salary}}</td>
		                <td>{{u.category.name}}</td>
		                <td>{{u.company}}</td>
		                		                
		                <td><button type="button" ng-click="uctrl.removeUser(u.id)" class="btn btn-danger custom-width"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
		            </tr>
		            </tbody>
		        </table>
			</div>
		</div>
    </div>
</div>