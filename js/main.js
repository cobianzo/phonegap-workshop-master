var app = {

    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    },

    initialize: function() {
    	self		= this;
        this.store	= new MemoryStore( function(){self.showAlert("Se ha inicializado MemoryStore", "Informacion");} );
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    },



	// esto es para usar el diálog de alertas nativo cuando corremos la app, y del browser cdo en browser. 
	showAlert: function (message, title) {
    	if (navigator.notification) 
        	navigator.notification.alert(message, null, title, 'OK');  // objeto nativo del móvil
	    else 
    	    alert(title ? (title + ": " + message) : message); // browser
	},


};

app.initialize();