var app = {





	// para usar el diálog de alertas nativo cdo corremos la app, y del browser cdo en browser. 
	showAlert: function (message, title) {
    	if (navigator.notification) 
        	navigator.notification.alert(message, null, title, 'OK');  // objeto nativo del móvil
	    else 
    	    alert(title ? (title + ": " + message) : message); // browser
	},
	



	
	/*
	###########	###########	###########	###########	###########	###########
	###########			INITIALIZE FUNCTION FOR THE APP			###########	
	###########	###########	###########	###########	###########	###########		*/
	
    initialize: function() {

	    var self = this;
    	this.store = new MemoryStore(function() {			// object app.store
    		new HomeView(self.store).render();
	    });        

    	
        
    },

/*	###########	###########	###########	###########	###########	###########		*/


	


};

app.initialize();

