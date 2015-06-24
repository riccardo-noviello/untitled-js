require(['app/messages', 'app/person-service', 'utils', 'bindable'], function(messages, PersonService, utils, Bindable) {

    // private variable myperson
    var myperson = null;

    /**
     * Initialise the page by retrieving some data for our Form
     * @returns {undefined}
     */
    init = function() {
        // Simulation of a Service call
        personService = new PersonService();

        // Map data from service to local Object
        data = personService.getPersons();
        myperson = new Bindable("user", data);
        
        // test service 
        var t = personService.getEstimate();
        println("estimate: " +t);
    };

    /**
     * Shows the values of the Person
     * @returns {undefined}
     */
    show = function() {
        // myperson object now holds the values of the person
        println(myperson.toJson());
    };
    
    init();
    
});