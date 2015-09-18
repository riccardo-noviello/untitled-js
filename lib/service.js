define(['class'], function(d1) {

    /**
     * source: http://rest.elkstein.org/2008/02/using-rest-in-javascript.html
     * @returns {ActiveXObject|XMLHttpRequest}
     */
    function createRequest() {
	var req = null;
	var resp = null;
        var result = null;
        if (window.XMLHttpRequest) {
            // FireFox, Safari, etc.
            result = new XMLHttpRequest();
            if (typeof result.overrideMimeType != 'undefined') {
                result.overrideMimeType('application/json'); // Or anything else
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
     * 
     * @returns
     */
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
    function promise(resp) {
        var counter = 0;
        do {
            //console.log("Response is still not good " + resp + " # " + req.responseText);
            sleep(200);
            counter++;
        } while (counter < 5 && resp == null);
        return resp;
    }


    /**
     * Service Class
     */
    return Service = Class.extend({
        init: function(baseurl) {
            this.baseurl = baseurl;            
        },
        httpGet: function(url, fn) {
	    var req = createRequest();
            req.open("GET", this.baseurl + url, true);
            req.send();
            req.onreadystatechange = function() {
                if (req.readyState == 4) {
                        //var det = eval("(" + req.responseText + ")");
			json = JSON.parse(req.responseText);
			fn(json, req.status);
                    }
            };

        }

    });

});
