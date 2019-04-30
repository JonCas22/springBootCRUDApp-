<div class="container">    
                <div class="jumbotron">
                  <div class="row">
                      <div class="col-md-4 col-xs-12 col-sm-6 col-lg-4">
                          <img src="https://www.svgimages.com/svg-image/s5/man-passportsize-silhouette-icon-256x256.png" alt="stack photo" class="img">
                      </div>
                      <div class="col-md-8 col-xs-12 col-sm-6 col-lg-8">
                          <div class="container" style="border-bottom:1px solid black">
                            <h2>{{pctrl.getCurrentLoginCompany.name}}</h2>
                          </div>
                            <hr>
                          <ul class="container details">
                            <li><p><i class="fa fa-envelope" /></i> {{pctrl.getCurrentLoginCompany.email}}</p></li>
                            <li><p><i class="fa fa-map-marker" dataLat= {{pctrl.getCurrentLoginCompany.latitude}} id= "latitude" /> {{pctrl.getCurrentLoginCompany.latitude}}</p></li>
                            <li><p><i class="fa fa-map-marker" dataLng= {{pctrl.getCurrentLoginCompany.longitude}} id= "longitude"/> {{pctrl.getCurrentLoginCompany.longitude}}</p></li>
                            <li><p><button type="button" data-toggle="modal" data-target="#myModal" data-lat= '{{pctrl.getCurrentLoginCompany.latitude}}' data-lng= '{{pctrl.getCurrentLoginCompany.longitude}}' class="fa fa-map"> Open Map</button></p></li>
                          </ul>
                      </div>
                  </div>
                  
                 <modal-map id="coord" data-lat= '{{pctrl.getCurrentLoginCompany.latitude}}' data-lng= '{{pctrl.getCurrentLoginCompany.longitude}}'></modal-map>  
				
</div>