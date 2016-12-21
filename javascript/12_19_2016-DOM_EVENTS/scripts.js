// construct the IIFE by passing the window object
//window is the global object
(function(window){
    // for onload
    window.myTest = function(){
        console.log('hello world');
    };

    // for clicking the submit button
    window.submitForm = function(){
        var fName = window.document.getElementById('firstName');
        var lName = window.document.getElementById('lastName');

        console.log('First Name: ' + fName.value + ' ,Last Name: ' + lName.value + ' clicked this button');
    };

    var i = 0;
    // for change events
    window.myChange = function(){
        console.log(i);

        i++;
    };


    // for stoping the default click event
    window.dontNavigate = function(event){
        // this will prevent the default action
        // i.e., navigating to google.com
        event.preventDefault();
        console.log('I was stopped');
    };
})(window);





















