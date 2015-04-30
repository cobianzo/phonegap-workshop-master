var app = {





	// para usar el diálog de alertas nativo cdo corremos la app, y del browser cdo en browser. 
	showAlert: function (message, title) {
    	if (navigator.notification) 
        	navigator.notification.alert(message, null, title, 'OK');  // objeto nativo del móvil
	    else 
    	    alert(title ? (title + ": " + message) : message); // browser
	},
	
	registerEvents: function() {
		var self = this;
		// Check of browser supports touch events...
		if (document.documentElement.hasOwnProperty('ontouchstart')) {
			// ... if yes: register touch event listener to change the "selected" state of the item
			$('body').on('touchstart', 'a', function(event) {
				$(event.target).addClass('tappable-active');
			});
			$('body').on('touchend', 'a', function(event) {
				$(event.target).removeClass('tappable-active');
			});
		} else {
			// ... if not: register mouse events instead
			$('body').on('mousedown', 'a', function(event) {
				$(event.target).addClass('tappable-active');
				//self.showAlert("fds", "fdsds");
			});
			$('body').on('mouseup', 'a', function(event) {
				$("a").removeClass('tappable-active');
			});
		}
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
		this.registerEvents();
    	
        
    },

/*	###########	###########	###########	###########	###########	###########		*/


	


};

app.initialize();

