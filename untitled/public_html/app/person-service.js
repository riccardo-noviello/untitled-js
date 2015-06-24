define(['service' ], function(d1) {

    return personService = Service.extend({
        init: function() {
            this._super("http://echo.jsontest.com/");
        },
        getPersons: function() {
            return '{"name":"Ric", "age":"28", "surname" : "Noviello"}';
        },
        getEstimate: function(){
            return this.httpGet("key/value/one/two");
        }
    });

});