define(['class' ], function(d1) {

    return personService = Class.extend({
        init: function() {
            this.baseurl="localhost/myapi";
        },
        getPersons: function() {
            return '{"name":"Ric", "age":"28", "surname" : "Noviello"}';
        }
    });

});