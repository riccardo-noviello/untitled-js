// Configure loading untitled-js modules from the lib directory,
// except for application related ones, which are in the 'app' directory

requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app'
    }
});

