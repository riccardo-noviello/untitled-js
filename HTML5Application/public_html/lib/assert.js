define(function() {

    function append(message, passed) {
        var mylist = document.getElementById("testresults");
        var newcontent = document.createElement('div');
        if (passed==true) {
            newcontent.innerHTML = "<li class='test-passed'>" + message + "</li>";
        } else {
            newcontent.innerHTML = "<li class='test-failed'>" + message + "</li>";
        }
        while (newcontent.firstChild) {
            mylist.appendChild(newcontent.firstChild);
        }
    }

    /**
     * Simple Assertion for tests
     * 
     * @param {type} condition
     * @param {type} message
     * @returns {undefined}
     */
    return function assert(condition, message) {
        if (!condition) {
            message = "Assertion failed: " + message;
            append(message, false);
        } else {
            message = "Assertion passed: " + message;
            append(message, true);
        }
    };
});