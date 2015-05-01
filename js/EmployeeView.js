
function EmployeeView(employeeData){		// called with EmployeeView()

	this.init		= function(){
		this.jViewContainer	= $("<div class='employee-details'></div>");	/* "this.jViewContainer" es necesario declararlo aquí para poder usarlo en addLocation y aplicarle en onclick*/
		this.jViewContainer.on('click', '.add-location-btn', this.addLocation);
	};

	// called on click so event.target should give the calling dom element
	this.addLocation = function(event) {
		event.preventDefault();
		alert("pero ha entrado?");
		console.log('addLocation');

		/* NATIVE LOCATION API: informarme de la misma */
		navigator.geolocation.getCurrentPosition(
			function(position) {
				$(".location", this.jViewContainer).html(position.coords.latitude + ',' + position.coords.longitude);
				alert("ale, a correr");
			},
			function() {
				alert('Error getting location');
			});
		return false;
	};	
	
	
	
	this.render = function() {
		alert("employee a renderizar : "+employeeData.id);		 
    	this.jViewContainer.html( EmployeeView.mainTemplate(employeeData) ); /* Imprescindible devolver this o el objeto jquery */
    	return this.jViewContainer;
	};


	this.init();
}

// declaración de vars públicas
EmployeeView.mainTemplate	= Handlebars.compile($("#employee-tpl").html());