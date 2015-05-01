
function EmployeeView(employeeData){		// called with EmployeeView()

	this.init		= function(){
		/* definiticón de ppdes privadas */
		this.jViewContainer	= $("<div class='employee-details'></div>");	/* "this.jViewContainer" es necesario declararlo aquí para poder usarlo en addLocation y aplicarle en onclick*/
		
		/* definiticón de métodos */		
		this.jViewContainer.on('click', '.add-location-btn', this.addLocation);
		this.jViewContainer.on('click', '.add-contact-btn', this.addToContacts);		
	};

	// called on click so event.target should give the calling dom element
	// Ejercicio: y di quisiese que el botón de AddLocation estuviese tb al lado del nombre de cada employee en la home? Cómo reusaría esta función?
	this.addLocation = function(event) {
		event.preventDefault();

		locationString	= "";
		console.log('addLocation');
		
		/* NATIVE LOCATION API: informarme de la misma */
		navigator.geolocation.getCurrentPosition(
			function(position) {
				locationString	=	position.coords.latitude + ',' + position.coords.longitude;
				$(".location", this.jViewContainer).html(locationString);
				$("h1").html(locationString);
			},
			function() {	alert('Error getting location');		}
		);

		console.log('locationString '+locationString);
		
		return false;
	};	
	
	this.addToContacts = function(event) {
		event.preventDefault();
		console.log('addToContacts');
		if (!navigator.contacts) {
			app.showAlert("Contacts API not supported", "Error");
			return;
		}
		var contact 			= navigator.contacts.create();			// <--  NAVIGATOR.contacts: objeto de ??? informarme! 
		contact.name 			= {givenName: employee.firstName, familyName: employee.lastName};
		contact.phoneNumbers	= [	new ContactField('work', employee.officePhone, false),		// <-- ContactField: declared where? 
									new ContactField('mobile', employee.cellPhone, true) ]; 	// preferred number (true)
		 	
		contact.save();	// Salvado a contactos del móvil  !!!
		return false;
	};







	
	
	
	this.render = function() {
    	this.jViewContainer.html( EmployeeView.mainTemplate(employeeData) ); /* Imprescindible devolver this o el objeto jquery */
    	return this.jViewContainer;
	};


	this.init();
}

// declaración de vars públicas
EmployeeView.mainTemplate	= Handlebars.compile($("#employee-tpl").html());