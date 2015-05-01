
function EmployeeView(employeeData){		// called with EmployeeView()

	this.init		= function(){
		// declaration of vars that I want to use later, encapsulads (proivadas)
	
	}

	
	
	this.render = function() {
		alert(employeeData);
    	jhtml =  $("<div>"+EmployeeView.mainTemplate(employeeData)+"</div>");
    	return jhtml;
	};


	this.init();
}

// declaración de vars públicas
EmployeeView.mainTemplate	= Handlebars.compile($("#employee-tpl").html());