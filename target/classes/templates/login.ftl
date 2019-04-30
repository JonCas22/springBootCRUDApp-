
<div class="container">
    	<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<div class="panel panel-login">
					<div class="panel-heading">
						<div class="row">
							<div class="col-xs-6">
								<a href="#/login" class="active" id="login-form-link">Login</a>
							</div>
							<div class="col-xs-6">
								<a href="#/register" id="register-form-link">Register</a>
							</div>
						</div>
						<hr>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-lg-12">
							<div class="alert alert-success" role="alert" ng-if="lctrl.successMessage">{{lctrl.successMessage}}</div>
	           				<div class="alert alert-danger" role="alert" ng-if="lctrl.errorMessage">{{lctrl.errorMessage}}</div>
								<form id="login-form" ng-submit="lctrl.login()" role="form" style="display: block;">
									<div class="form-group">
										<input type="text" ng-model="lctrl.company.name" name="username" id="username" tabindex="1" class="form-control" placeholder="Username" value="" required>
									</div>
									<div class="form-group">
										<input type="password" ng-model="lctrl.company.password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password" required>
									</div>
									
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login-main" value="Log In">
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