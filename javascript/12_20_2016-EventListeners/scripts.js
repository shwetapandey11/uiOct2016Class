// construct the IIFE by passing the window object
//window is the global object
(function(window){

    // action upon clicking the achor tag
    window.dontNavigate = function(event){
        event.preventDefault();
        event.stopPropagation();
        console.log('I was stopped');
    };


    // i need to capture the anchor tag and then apply/listen the click event
    var anchors = window.document.querySelectorAll('.test');
    anchors[0].addEventListener('click', function(event){
        event.preventDefault();
        console.log('I was stopped');
    });


    var e = new Event('viswa');

    var inputField = window.document.querySelectorAll('#classOne');
    inputField[0].addEventListener('viswa',function(event){
        console.log(event);
        // logic to be executed
        console.log('custom event');
    },false);

    inputField[0].dispatchEvent(e);



    // event bubbling example
    var li = window.document.querySelectorAll('li');
    window.runSomeLogic = function(event){
        event.preventDefault();
        event.stopPropagation();

        li[0].addEventListener('click',function(event){
            window.alert('li was focused');
        },false);
    };



})(window);





















