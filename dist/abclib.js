(function(root) {

    function sayHello() {
        console.log("hello from abc!");
    }

    root.abc = {sayHello: sayHello}

})(window || global);