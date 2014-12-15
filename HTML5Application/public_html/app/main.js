require(['app/messages', 'app/persons', 'utils', 'app/bindable'], function(messages, Person, utils, Bindable) {

    //println(messages.getHello());

    var bob = new Person("bob", 43);
    println(bob.toString());

    
    // simulation of a Service
    obj = parseJSON('{"name":"Ric", "age":"28"}');
    
    var b = new Bindable("user", obj);
    console.log(b);
});