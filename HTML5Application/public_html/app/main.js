require(['app/messages', 'app/persons', 'print'], function (messages, persons, print) {
   
    print(messages.getHello());
   
    var bob = new Person("bob", 43);
    print(bob.toString());
    
});