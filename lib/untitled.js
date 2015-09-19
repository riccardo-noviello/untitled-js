define(['bindable', 'service'], function(Bindable, Service) {

/**

I want a simple MVC framework for fast web app prototyping

Templating
Routing
Controller
Services/ rest calls
Dependencies / DI
Data Binding

**/

return untitled = {
	test : function() {
		console.log("untitled js is running");
	},
	bind : function(uid, obj){
		return (obj instanceof Array)  ? "" : new Bindable(uid, obj);			
		
//		if(obj instanceof Array) return new BindableArray(uid, obj);
		
	}
}

});
