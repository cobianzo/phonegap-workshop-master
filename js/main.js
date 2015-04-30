var app = {

    findByName: function() {
        console.log('findByName');
        this.store.findByName(	$('.search-key').val(), 
        		function(employees) {
		            $('.employee-list').html(self.employeeLiTpl(employees));  // Tpl declared in index.hmtl
        		});
    },


	/*  VIEWS :  HTML */
	 renderHomeView: function() {
		 $("body").html(
					 		this.homeTpl()
		 );
         $('.search-key').on('keyup', $.proxy(this.findByName, this));	 	
	},


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
    	
    	/* Hndlebars: load templates created in index.html (but could be in external files) */
		this.homeTpl 		= Handlebars.compile($("#home-tpl").html());
		this.employeeLiTpl 	= Handlebars.compile($("#employee-li-tpl").html());    	

    	self		= this;		
        this.store	= new MemoryStore( 
        	
        	function(){
	        	self.renderHomeView();
        });
        
    },

/*	###########	###########	###########	###########	###########	###########		*/


	


};

app.initialize();

