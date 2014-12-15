require(['app/messages', 'app/persons', 'utils', 'bindable'], function(messages, Person, utils, Bindable) {

    //println(messages.getHello());

    var bob = new Person("bob", 43);
    println(bob.toString());

    
    // simulation of a Service
    json = parseJSON('{"name":"Ric", "age":"28", "surname" : "Noviello"}');    
    var b = new Bindable("user", json);

    /**
     * 
     * @returns {undefined}
     */
    show = function(){
        println(b.toJson());
    };
});