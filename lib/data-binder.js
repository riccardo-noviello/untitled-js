/**
 * http://www.lucaongaro.eu/blog/2012/12/02/easy-two-way-data-binding-in-javascript/
 */
define(function() {
    
    return function DataBinder(object_id, tag) {
	
	// Add an 'option' element to the select only if the element does not exist already
	function addUniqueOptionToSelect(select, pos, option){
		var allOptions = select[pos].options;
		var found = false;
                for (var i=0; i<allOptions.length; i++) {
			if(allOptions[i].value==option.value && allOptions[i].text==option.text){
				found = true;
				break;
			}
		}
		if(!found){
			select[pos].add(option);
		}
	}

        // Create a simple PubSub object
        var pubSub = {
            callbacks: {},
            on: function(msg, callback) {
                this.callbacks[ msg ] = this.callbacks[ msg ] || [];
                this.callbacks[ msg ].push(callback);
            },
            publish: function(msg) {
                this.callbacks[ msg ] = this.callbacks[ msg ] || []
                for (var i = 0, len = this.callbacks[ msg ].length; i < len; i++) {
                    this.callbacks[ msg ][ i ].apply(this, arguments);
                }
            }
        },
        data_attr = tag + object_id,
                message = object_id + ":change",
                changeHandler = function(evt) {
                    var target = evt.target || evt.srcElement, // IE8 compatibility
                            prop_name = target.getAttribute(data_attr);

                    if (prop_name && prop_name !== "") {
                        pubSub.publish(message, prop_name, target.value);
                    }
                };

        // Listen to change events and proxy to PubSub
        if (document.addEventListener) {
            document.addEventListener("change", changeHandler, false);
        } else {
            // IE8 uses attachEvent instead of addEventListener
            document.attachEvent("onchange", changeHandler);
        }

        // PubSub propagates changes to all bound elements
        pubSub.on(message, function(evt, prop_name, new_val) {
            var elements = document.querySelectorAll("[" + data_attr + "=" + prop_name + "]"),
                    tag_name;

            for (var i = 0, len = elements.length; i < len; i++) {
		tag_name = elements[i].tagName.toLowerCase();
                if (tag_name === "input" || tag_name === "textarea") {
                    elements[i].value = new_val;
                } else if( tag_name === "select") {
		   var option = document.createElement("option");
		   option.text = new_val;
                   option.value = new_val;
		   addUniqueOptionToSelect(elements, i, option);

                } else {
         	   elements[i].innerHTML = new_val;
		}
            }
        });

        return pubSub;
    };
});
