EVENT TARGET

These are used to captured the events from the js side rather than html side.

These have three methods:

    1. addEventListener()
    This method is used to listen for an event from JS.
    syntax:
    <element>.addEventListener(<type of event in string format>,
                                <callback function with event as argument>,
                                <boolean for event bubbling>);
                                
    example:
    var elem = window.document.querySelectorAll('a');
    elem[0].addEventListener('click',function(event){
        // stop the default action
        event.preventDefault();
        // logic
        console.log('I was stopped');
    },false);
    
    
    2. removeEventListener()
    This method works the oppsoite way. we can remove an existing event.
    syntax: 
    <element>.removeEventListener(<type of event registered>,
                                    <callback function as soon as the event is removed>,
                                    <boolean for event bubbling and preventDefault()>)
    
    example:
    var buttons = window.document.querySelectorAll('button');
    buttons[0].addEventListener('click',function(event){
        event.preventDefault();
        buttons[2].removeEventListener('click',function(event){
            console.log('event was removed');
        },false);
    },false);
    
    
    3. dispatchEvent()
    This basically connects our events to our elements
    In short, when we add or remove an event from an element, a connection from the 'Event' object is constructed.
    because of this connection, our events and callback function communicate with each other.
    
    We can make use of dispatchEvent() to create our own custom events
    syntax:
    var newEvent = new Event(<custom event name>);
    <element>.dispatchEvent(newEvent);
    
    example:
    // create a new event called trippleClick
    var e = new Event('tripleClick');
    
    // we can add custom properties to this new event
    e.clientHeight = '50px';
    
    // capture the element
    var elem = window.document.querySelectorAll('a');
    
    // register the new event to the first anchor tag
    elem[0].dispatchEvent(e);
    
    // listen to the new event
    elem[0].addEventListener('tripleClick',function(event){
        // logic to be executed
        console.log(event);
        console.log('Im the new custom event');
    },false);
    
    
    
    
*** if an event is getting transferred from the child to the parent, then its called as
    'EVENT BUBBLING'
    
    
*** we can stop event bubbling by using the method stopPropagation()
    event.preventDefault();
    event.stopPropagation();




event.preventDefault()  -> this stop the default action. 
                            example: 
                            anchor tag by default takes you to the link inside href. 
                            we can stop it be preventDefault() method
                            
                            
event.stopPropagation() -> this will stop the event to bubble
                            example:
                            `
                            <div>
                                <a href="https://www.google.com">Click me for google</a>
                            </div> 
                            `
                            if we want to click to not go to div level (which is event bubbling)
                            then, we can say inside the anchor click event, event.stopPropagation();
                            
                                 















    