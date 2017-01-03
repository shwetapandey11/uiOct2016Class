<b>API</b>

API -> Application Program Interface
This is an application layer written in the backend to support the communication between client and server

<b>Step 1:</b> Once a connection is created between client and server, file transfer takes place from server to client.
This Hypertext transfer protocol(http) happens in a split second and first 'Static files' are transferred.

<b>Static files -> html, js, any images and css files</b>

*** most of these static files (mainly css and image files) are saved in the browser's cache memory. 
These are named as 'from memory cache' in the chrome's network tab.


<b>Step 2:</b> Once the static files are loaded, when a user requests for some data, and XHR request is sent to the server.
This request will have the header information. The server reads this header and then sends the response with the response header and response body.

*** The response the client gets from the server is an object and this object is know as JSON

<b>JSON</b> -> JavaScript Object Notation
JSONs are lightweight objects that get transferred between the server and the client and vice versa.

_____________________________________________________________________________________________________

<b>AJAX</b>

Asynchronous JavaScript and XML

we can update one piece of data in the html without reloading the entire page.
we request, receive and also update the data in the server

There are four request types in AJAX:

    1. GET
        GET method is used to get a data from the server
        
    2. POST
        POST method is used to add a new data to the server
        
    3. PUT
        PUT method is used to update an existing data in the server

    4. DELETE 
        DELETE method is used to remove a data from the server


*** If we combine all these methods into one single API, that is called <u>'RESTful services'</u>

<b>RESTful Services</b>
with one URL API, we can perform all the above actions

one URL and all the methods

/posts      (SGET) -> all the posts

/posts/1    (GET) -> the single post

/posts      (POST)-> adds a new post

/posts/1    (PUT) -> updates the post 1

/posts/1    (DELETE)-> remove the post 1


***For HTTP STATUS CODES, visit: http://www.restapitutorial.com/httpstatuscodes.html

__________________________________________________________________________________________________

<b>AJAX in plain Javascript:</b>

<b>Step 1: Create a new instance of XMLHttpRequest object</b>
    
    example:
        var http = new XMLHttpRequest();
        
<b>Step 2: Create a request that i need to pass to server</b>
    
    Syntax:
        <XMLHttpRequest object>.open(<method>,<URL/API>,<Async boolean>,<optional username>,<optional password>);
        
    example:
        http.open('GET','/api/users',true);
        
<b>Step 3: look for readystatechange and write a callback</b> 
        
    syntax:
        <XMLHttpRequestObject>.onreadystatechage = function(){
            // check for readyState 4 and 
            // status code as 200
        };

    example:
        http.onreadystatechange = function(){
            if(this.readyState == 4){
                switch(this.status){
                    case 200:{
                        // logic to be executed for success response
                    }
                    break;
                    case 400:{
                        // logic to be executed for bad request
                    }
                    break;
                    case 404:{
                        // logic to be executed for not found response
                    }
                    break;
                    case 500:{
                        // logic to be executed for server errors
                    }
                    break;
                }
            }
        };

*** readystatechange:

    Holds the status of the XMLHttpRequest.
        
    0: request not initialized 
    
    1: server connection established
    
    2: request received 
    
    3: processing request 
    
    4: request finished and response is ready
        
        
<b>Step 4: Make the call to the server</b>
    
    syntax:
        <XMLHttpRequestObject>.send();
        
    example:
        http.send();
        
        
____________________________________________________________________________________________________
        
<b>JSON</b>
        
JSON -> JavaScript Object Notation

In today's technology, if we are getting the response from the server as an object (or as an array) then it is a JSON response.

If the response is in html format or xml format then it is not treated as JSON response.
 
JSON has two methods:

    1. stringify()
        This method converts the object into a string. We need this to reduce the white space in our data set and also if we try to convert an undefined data then it will convert to empty string or null
        
        syntax:
            JSON.stringify(<data>);
            
        example:    
            var test = {
                firstName: 'srikar',
                lastName: 'Shastry'
            };
            
            JSON.stringify(test); // output: "{firstName:'srikar',lastName:'Shastry'}"
            JSON.stringify(beta); // output: "" or null 
        
    2. parse()
        This method converts a string into an object provided that the string has object literals.
        If the string is not in object format then JSON.parse is going to give some error.
        
        syntax:
            JSON.parse(<data>);
            
        example:
            var alpha = "{firstName:'srikar',lastName:'Shastry'}";
            
            JSON.parse(alpha); // output: {
                               //           firstName: 'Srikar',
                               //           lastName: 'Shastry'
                               //         }
        
        
______________________________________________________________________________________________________
        
<b>PROMISES</b>
        
The basic idea is to wait for either success or failure of any operation in an asynchronous world

Promises looks was success/resolved/fulfilled state or failure/rejection status

For example, when we make an API call to the server, the response coming from the server is either success or failure.
we can use promises to handle these success or failure calls accordingly.

    <API>.promise.then(
        // success
        function(resolved){
            // all the 2xx and 3xx responses are captured here
        },
        // error
        function(reject){
            // all the 4xx and 5xx responses are captured here
        }
    )
    
<b>deferred</b>

These are property of the promise object which trigger the change in state, from resolve or reject

    example:
        function APICall(url){
            var deferred = Promise.defer();
                
            <API call with the 'url'>.promise.then(function(successResp){
                // it was a success. so move forward with the data = successResp
                deferred.resolve(successResp);
            },
            function(errorResp){
                // stop the process and break here. dont proceed further
                deferred.reject(errorResp);
            });
            
            return deferred.promise;
        }
        
        
        window.buttonClick = function(){
            // perform some logic
            
            APICall(https://www.google.com/posts).then(function(googleData){
                APICall(https://www.yahoo.com/posts).then(function(yahooData){
                    // perforn the logic to show both googleData and yahooData in the html
                });
            })
        };
    
    
    
         
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        