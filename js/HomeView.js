
/* HomeView() is a function --HomeView()-- , will be called with "new". And "store" is an object created by MemoryStore, with methods and propierty array "employees" */
function HomeView (store){	


	this.init			= function(){
//		this.wrapper.on("keyup", ".search-key", this.findByName);  // ???: NO LO ENTIENDO MUY BIEN
	};
	

	/*  VIEWS : new HomeView(*data de store*).render() appends the template mainTemplate to body, inside a wrapper */
	 this.render	= function() {
	 	$("body").html("<div id='wrapper'>"+HomeView.mainTemplate()+"</div>");			 	// here -inside HomeView.render()-, "this" is HomeView
	 	$("#wrapper").on("keyup", ".search-key", this.findByName);
		return this;	// <- "this" is the object Homeview, y devuelve tb this.wrapper x tanto
	};



    this.findByName	= function() {
        store.findByName(	$('.search-key').val(),  
        		function(employees) {
		            $('.employee-list').html(HomeView.liTemplate(employees));  // Tpl declared in index.hmtl
        		});
    },




    this.init();

};


/* Handlebars: ------------------------------------------------------
load templates created in index.html (but could be in external files) 
NOTE: inside HomeView() this elements can't be called with this. Use HomeView.mainTemplate stil*/

HomeView.mainTemplate	= Handlebars.compile(	$("#home-tpl").html()		);	// <-- returns function
HomeView.liTemplate 	= Handlebars.compile( $("#employee-li-tpl").html());    	
