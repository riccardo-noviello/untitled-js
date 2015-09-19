define(['data-binder'], function(DataBinder) {

    // Bindable object definition
    return function Bindable(uid, obj) {
	var tag = "data-bind-";
        var binder = new DataBinder(uid, tag),
                bindable = {
                    attributes: {},
                    // The attribute setter publish changes using the DataBinder PubSub
                    set: function(attr_name, val) {
			this.attributes[attr_name] = val;
	                binder.publish(uid + ":change", attr_name, val, this);
                    },
		    get: function(attr_name) {
                        return this.attributes[attr_name];
                    },
                    toJson: function() {
                        // serialise to JSON
                        return JSON.stringify(this.attributes);
                    },
                    _binder: binder
                };

        // make object bindable by cloning its properties
      	if (null == obj || "object" != typeof obj)
            return obj;
        var copy = obj.constructor();
	
	for (var attr in obj) {
	        if (obj.hasOwnProperty(attr))
                bindable.set(attr, obj[attr]);
	}
	

        // Subscribe to the PubSub
        binder.on(uid + ":change", function(evt, attr_name, new_val, initiator) {
            if (initiator !== bindable) {
                bindable.set(attr_name, new_val);
            }
        });


        return bindable;
    };

});
