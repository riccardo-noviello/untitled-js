
define(function() {
    
    println = function (msg) {
        console.log(msg);
    };
    parseJSON = function(data) {
        return window.JSON && window.JSON.parse ? window.JSON.parse(data) : (new Function("return " + data))();
    };
    
    
});