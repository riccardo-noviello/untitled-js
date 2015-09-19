define(['untitled' ], function(U) {

    return personService = Service.extend({
        init: function() {
            this._super("http://localhost:8080/mywebapp/api/v1/");
        },
        getPersonById: function(id, fn) {
            this.httpGet("persons/"+id, fn);
        },
        getPersons: function(fn){
            return this.httpGet("persons/",fn);
        }
    });

});
