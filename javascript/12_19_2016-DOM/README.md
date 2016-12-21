DOM
What is DOM?
DOM = DOCUMENT OBJECT MODEL

Whenever we connect js with html and open that html in the browser, 
then, that browser is converted into an object called 'WINDOW' inside the JS, which gets constructed.
This window object holds all the html document(s).

**From JS's prospective, the entire html is now called as 'document'


window object is the parent of all. This window object is basically our browser inside js
each html now becomes a document, as a property, inside this window object.

Hence, to target an element, we simply say either 
window.document.getElementById 
(or)
document.getElementById


____________________________________________________________________________________________________

    SELECTING AN ELEMENT FROM DOM
    
    We can make use of predefined properties of the document object. Some of them are:
    1. getElementById() -> this targets only unique IDs
    2. getElementsByClassName() -> this targets all the elements with the same class names
    3. getElementsByTagName() -> this targets all the elements with the specified tag names
    4. querySelector() -> this is a special superset of all the selectors.
                            we use these to target absolutely anything in the html document.
                            querySelector() returns the first element that match the value.
    5. querySelectorAll() -> this is similar to querySelector() but it returns all the elements as an array.



****Remember that the IIFE construct is an anonymous function. we call it immediately.
Because of this, the DOM never gets initialized. to avoid that problem, we can pass window object
as an argument.

    example:
    // for plan javascript
    (function(window){
        var heading = window.document.getElementById('heading');
    })(window);
    
    // for jquery
    (function($){
        var heading = $('#heading');
    })(window.jQuery);
    
    // for angular
    (function(angular){
        angular.module('myApp',function MyApp(){});
    })(window.angular);













