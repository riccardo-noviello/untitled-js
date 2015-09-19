/**
 * Index Controller. We need to import the modules person-service and untitled-js
 *
 */
require(['app/person-service', 'untitled'], function(PersonService, U) {

    // private variable myperson
    var myperson = null;
    var list = [];
	

    /**
     * Initialise the page by retrieving some data for our Form
     * @returns {undefined}
     */
    init = function() {

	U.test();

        // Simulation of a Service call
        personService = new PersonService();

        // Map data from service to input form
        personService.getPersonById("46387558", 
	function(data){
		console.log("service call 1: " +data);
		myperson = U.bind("user", data);
	});
	
        
        // Map data from service to dropdown list
        personService.getPersons( 	
	function(data){
		console.log("service call 2: " +data);
		data.forEach(function(element, index){
			
			// create and "option" element child of the select
			var option = document.createElement("option");
		   	option.text = element.name;
                   	option.value = element.age;
			var data_attr="data-bind-users";
			var prop_name="name";
			var tag_name="select";
			var elements = document.querySelectorAll("[" + data_attr + "=" + prop_name + "]"), tag_name;
			elements[0].add(option);
			// bind each option 
			list.push(U.bind("users"+index, element));
		});

		
	});

    };

    /**
     * Shows the values of the Persons list
     */
    showList = function() {
	console.log(list);
    };

    /**
     * Add a Person to the list of Persons
     */        
    addPerson = function() {
	//list.push(myperson);	
    };

    /**
     * Initialise
     */
    init();
    
});
