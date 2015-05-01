
function EmployeeView(employeeData){		// called with EmployeeView()

	this.init		= function(){
		/* definiticón de ppdes privadas */
		this.jViewContainer	= $("<div class='employee-details'></div>");	/* "this.jViewContainer" es necesario declararlo aquí para poder usarlo en addLocation y aplicarle en onclick*/
		
		/* definiticón de métodos */		
		this.jViewContainer.on('click', '.add-location-btn', this.addLocation);
		this.jViewContainer.on('click', '.add-contact-btn', this.addToContacts);		
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
		alert("employee a renderizar : "+employeeData.id);		 
    	this.jViewContainer.html( EmployeeView.mainTemplate(employeeData) ); /* Imprescindible devolver this o el objeto jquery */
    	return this.jViewContainer;
	};


	this.init();
}

// declaración de vars públicas
EmployeeView.mainTemplate	= Handlebars.compile($("#employee-tpl").html());