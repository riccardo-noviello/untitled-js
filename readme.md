
<h3>What is it:</h3>
<p>The aim of this project was to improve personal skills in JavaScript by actually writing some libraries. untitled-js is just another MVC web framework with 2 way data binding enabled from the start.</p>

<p>This frameworks aims to be lightweight, therefore it makes no use of 3rd party libraries (i.e. there is no JQuery support). The only 3rd party library in use is RequireJS.</p>

<h3>What works:</h3>
SO far I was able to create a simple webpage, and using custom html tags to be used for the data binding. For example:


```html
<td><label>Name:</label></td>
<td><input type="text" data-bind-user="name" /></td>
```

With the help of RequireJS we can also define a JS controller (like AngularJS) for the page to be rendered.
```html
<!-- Load RequireJS Config -->      
        <script data-main="config" src="lib/require.js"></script>

	<!-- Load Controller for this page -->	
	<script>
		requirejs(['app/index-controller']);
	</script>
```

Our controller has te main purpose of calling a rest API, getting data and populate it to screen.
```js
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
```

Borrowing the same concept from AngularJS we wanted to clearely separate the JS Controller from the HTML View. This clean separation avoids having spagetti-code (like JSP pages, to be clear).


<h3>What does not work:</h3>
<p>I am having troubles with binding list of elements. Also I have not implemented a Router and Templating strategy just yet. But my main concern is to complete the data binding first. In an ideal world I will be able to complete this and develop further enhancements like form validation</p>

<p>Two way data binding currently works with most html form components like: inputs, paragraphs, divs, textareas, but as i mentioned before it does not work with lists of elements: (radios, selects) yet</p>
