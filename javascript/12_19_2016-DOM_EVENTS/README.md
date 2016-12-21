DOM EVENTS

All the actions that happen on the html is considered as 'EVENTS' in JS.

There are some standard DOM events:

    1. onload
        this is triggered when the window is loaded
        example:
            <body onload="myTest()">
                <p>This is a para 1</p>
            </body>
            
            <script>
                (function(window){
                    window.myTest = function(){
                        console.log('test');
                    }
                })(window);
            </script>
            
    2. onclick
        this is triggered when the user clicks on an element
        example:
            <div onclick="myClick()"></div>
            
            <script>
                (function(window){
                    window.myClick = function(){
                        console.log('I was clicked');
                    }
                })(window);
            </script>
        
        
    3. onsubmit
        this is triggered when we submit a form
        
    4. onchange
        this is triggered when the value of an element is changed
        
    5. onfocus
        this is triggered when the element is in focus
    
    6. onblur
        this is triggered when the element is focused out
        
        
***Every element has a default action/event. for example, the anchor tag has click navigation as default event
   to stop the default action, we can make use of 'preventDefault()' callback.
   
    example:
       <a href="https://www.google.com" onclick="dontNavigate(event)">Click ME</a>
       
       <script>
       (function(window){
        window.dontNavigate = function(event){
            event.preventDefault();
            console.log('I was stopped');
        }
       })(window);
       
       </script>
        
        
        