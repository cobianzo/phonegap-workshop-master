
/* HomeView() is a function --HomeView()-- , will be called with "new". And "store" is an object created by MemoryStore, with methods and propierty array "employees" */
/* store forma parte de la closure de HomeView. Una vez llamado con el param store lleno de info, se puede usar cualquier acción en él usando esa info*/
function HomeView (store){	


	this.init			= function(){
//		this.wrapper.on("keyup", ".search-key", this.findByName);  // ???: NO LO ENTIENDO MUY BIEN
		this.jViewContainer	= $("<div id='wrapper'/>");
		this.jViewContainer.on("keyup", ".search-key", this.findByName)
	};
	

	/*  VIEWS : new HomeView(*data de store*).render() appends the template mainTemplate to body, inside a wrapper */
	 this.render	= function() {
	 	this.jViewContainer.html(HomeView.mainTemplate());			 	// here -inside HomeView.render()-, "this" is HomeView
	 	//$(".search-key", this.jViewContainer).trigger("keyup");	 	
		return this.jViewContainer;	// <- "this" is the object Homeview, y devuelve tb this.wrapper x tanto
	};


	/*	ACCIONES - métidos del objeto HomeView, éste en concreto es disparado en keyup de la ppdad de esta clase que es el dom en html */
    this.findByName	= function() {
        store.findByName(	$('.search-key').val(),  
        		function(employees) {
		            $('.employee-list').html(HomeView.liTemplate(employees));  // Tpl declared in index.hmtl
        		});
    };




    this.init();

};


/* Handlebars: ------------------------------------------------------
load templates created in index.html (but could be in external files) 
NOTE: inside HomeView() this elements can't be called with this. Use HomeView.mainTemplate stil*/

HomeView.mainTemplate	= Handlebars.compile(	$("#home-tpl").html()		);	// <-- returns function
HomeView.liTemplate 	= Handlebars.compile( $("#employee-li-tpl").html());    	
