<div class="container">
    	<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<div class="panel panel-login">
					<div class="panel-heading">
						<div class="row">
							<div class="col-xs-6">
								<a href="#/login"  id="login-form-link">Login</a>
							</div>
							<div class="col-xs-6">
								<a href="#/register" class="active" id="register-form-link">Register</a>
							</div>
						</div>
						<hr>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-lg-12">
							<div class="alert alert-success" role="alert" ng-if="rctrl.successMessage">{{rctrl.successMessage}}</div>
	           				<div class="alert alert-danger" role="alert" ng-if="rctrl.errorMessage">{{rctrl.errorMessage}}</div>
								<form id="register-form" name="myForm" action="" ng-submit="rctrl.submit()" method="post" role="form" style="display: block;">
									<div class="form-group">
										<input type="text" ng-model="rctrl.company.name" name="username" id="username" tabindex="1" class="form-control" placeholder="Username*"  pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{3,15}$" title="Un nombre de usuario apropiado debe comenzar con una letra, contener letras, números, guiones bajos y puntos, y tener entre 3 y 15 caracteres de longitud" required value="">
									</div>
									<div class="form-group">
										<input type="email" ng-model="rctrl.company.email" name="email" id="email" tabindex="1" class="form-control" placeholder="Email Address*" value="" required>
									</div>
									<div class="form-group">
						                <input type="password" class="form-control"  ng-model="rctrl.company.password" placeholder="Password*" name="password"required="required" ng-minlength="6"/>
						                <div ng-if="myForm.password.$touched || signupSubmitted">
						                    <p ng-show="myForm.password.$error.required" class="help-block">Password is required</p>
						                    <p ng-show="myForm.password.$error.minlength" class="help-block">Minimum 6 character</p>
						                </div>
						            </div>
						            <div class="form-group">
						                <input type="password" class="form-control"  name="confirm_password" ng-model="confirm_password" placeholder="Confirm password*" match-password="rctrl.company.password" required>
						                <div ng-if="myForm.confirm_password.$touched || signupSubmitted">
						                    <p ng-show="myForm.confirm_password.$error.required" class="help-block">Confirm password is required</p>
						                    <p ng-show="myForm.confirm_password.$error.matchPassword && !signupForm.confirm_password.$error.required" class="help-block">Confirm password didn't match</p>
						                </div>
						            </div>
									
									<div class="form-group">
										<input type="text" ng-model="rctrl.company.latitude" name="latitude" id="latitude" tabindex="1" class="form-control" placeholder="Latitude" value="">
									</div>
									
									<div class="form-group">
										<input type="text" ng-model="rctrl.company.longitude" name="longitude" id="longitude" tabindex="1" class="form-control" placeholder="Longitude" value="">
									</div>
									
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input ng-disabled="myForm.$invalid || myForm.$pristine" type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register Now" >
											</div>
										</div>
									
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>