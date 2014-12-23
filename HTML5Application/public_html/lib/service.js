define(['class'], function(d1) {

    var req = null;
    var resp = null;


    /**
     * source: http://rest.elkstein.org/2008/02/using-rest-in-javascript.html
     * @returns {ActiveXObject|XMLHttpRequest}
     */
    function createRequest() {
        var result = null;
        if (window.XMLHttpRequest) {
            // FireFox, Safari, etc.
            result = new XMLHttpRequest();
            if (typeof result.overrideMimeType != 'undefined') {
                result.overrideMimeType('text/xml'); // Or anything else
            }
        }
        else if (window.ActiveXObject) {
            // MSIE
            result = new ActiveXObject("Microsoft.XMLHTTP");
        }
        else {
            // No known mechanism -- consider aborting the application
        }
        return result;
    }


    /**
     * source: http://rest.elkstein.org/2008/02/using-rest-in-javascript.html
     * @returns {undefined}
     */
    function createReq() {
        req = createRequest(); // defined above
        // Create the callback:
        req.onreadystatechange = function() {
            if (req.readyState != 4)
                return; // Not there yet
            if (req.status != 200) {
                // Handle request failure here...
                return;
            }
            // Request successful, read the response
            resp = req.responseText;
            // ... and use it as needed by your app.
        };
    }

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }

    /**
     * 
     * @returns {req.responseText}
     */
    function promise() {
        var counter = 0;
        do {
            alert("Response is still not good " + resp + " # " + req.responseText);
            sleep(500);
            counter = counter + 1;
        } while (counter < 5 && resp == null);
        return resp;
    }


    /**
     * Service Class
     */
    return Service = Class.extend({
        init: function(baseurl) {
            this.baseurl = baseurl;
            createReq();
        },
        httpGet: function(url) {
            req.open("GET", this.baseurl + url, true);
            req.send();
            req.onreadystatechange = function() {
                if (req.readyState == 4) {
                    if (req.status == 200) {
                        //var det = eval("(" + req.responseText + ")");
                        console.log(req.responseText);
                        resp = req.responseText;
                    }
                    else
                        alert("Error ->" + req.responseText);
                }
            };

            return promise();
        }

    });

});