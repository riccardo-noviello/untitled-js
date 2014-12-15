define(['class'], function(d1) {

    return Person = Class.extend({
        init: function(name, age) {
            this.name = name;
            this.age = age;
        },
        toString: function() {
            return "name: " + this.name + " age:" + this.age;
        }
    });

});