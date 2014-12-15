define(['app/messages', 'assert'], function(messages, assert) {

    return {
        run: function() {
            assert(messages.getHello() === "Hello World", "getHello message test");
            assert(messages.getHello() === "Hello", "getHello wrong message test");
        }
    };

});
