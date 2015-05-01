var app = {





	// para usar el diálog de alertas nativo cdo corremos la app, y del browser cdo en browser. 
	showAlert: function (message, title) {
    	if (navigator.notification) 
        	navigator.notification.alert(message, null, title, 'OK');  	// objeto nativo del móvil
	    else 
    	    alert(title ? (title + ": " + message) : message); 			// browser
	},
	
	registerEvents: function() {
		var self = this;
		
		// Check of browser supports touch events...
		if (document.documentElement.hasOwnProperty('ontouchstart')) {	// 	::: if yes: register touch event listener to change the "selected" state of the item
			$('body').on('touchstart', 'a', function(event) {	$(event.target).addClass('tappable-active');		});
			$('body').on('touchend', 'a', function(event) {		$(event.target).removeClass('tappable-active');		});
		} else {// 															::: if not: register mouse events instead
			$('body').on('mousedown', 'a', function(event) {	$(event.target).addClass('tappable-active');		});
			$('body').on('mouseup', 'a', function(event) {		$("a").removeClass('tappable-active');				});
		};
		
		$(window).on('hashchange', $.proxy(this.route, this));					// ::: cada vez que cambie la url 'hashchange', llamamos a route, que recarga la página dinámicamente
				
	},
	
	
	
	
	

	/* ROUTING *********** ROUTING *********** ROUTING *********** *********** *********** */
	/* ----------------------------------------------------------------------------------- */
	
	
	routing: {
		employeeDetails	: /^#employee\/(\d{1,})/,	
	},
	
	route: function() {
		var hash = window.location.hash;
		
		this.showAlert(hash);
		
		/* EMPLOYEEDETAILS routing */
		/* ----------------------- */				
		if (match = hash.match(this.routing.employeeDetails)) {
			var id_employee	= Number(match[1]);
			this.store.findById(id_employee, function(employee) {
				$('body').html(new EmployeeView(employee).render());  // imprescindible meter un jQuery object dentro de .html(), no vale sólo html o no heredará los eventos asociados, creados en EmployeeView.js
			});
		}
		else if (!hash)	/* ........... HOMEPAGE routing  ----------------  si no tiene anchor (#whatever) mostramos home */
		{
			$('body').html(new HomeView(this.store).render());
			$(".search-key").keyup();//			::: para mostrar los nombres por defecto
			return;
		}

		
		
	},











	
	/*
	###########	###########	###########	###########	###########	###########
	###########			INITIALIZE FUNCTION FOR THE APP			###########	
	###########	###########	###########	###########	###########	###########		*/
	
    initialize: function() {


	    var self = this;
    	this.store = new MemoryStore(function() {			// object app.store
    		self.route();
			// los enventos que tengan q pasar en "onload" digamos, q vengan aquí, donde se carga la home    		
	    });        
		this.registerEvents();
    	
        
    },

/*	###########	###########	###########	###########	###########	###########		*/


	


};

app.initialize();

