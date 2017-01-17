**$http**

In angularjs, we are blessed with $httpProvider. This service allows us to perform API calls to/from the server.

From this $httpProvider, we have '_$http_'. This $http is similar to jquery's $.ajax().

$http.get() -> to perform GET call

$http.post() -> to perform POST call

$http.put() -> to perform PUT call

$http.delete() -> to perform DELETE call

There is a generic method:
    
    $http({
        method: 'GET/POST/PUT/DELETE',
        data: {},  
        url: '<server url>'
    });
    
    
$httpProvider -> is the config object that tells the angular that we want make some changes to the API call itself.
We inject $httpProvider only to AppConfig in app.js
  

$http -> is the method with which we perform API call and tell the angular that we want to make changes to the data coming from the API call.
We inject $http to anywhere we want expect the AppConfig of the project

____________________________________________________________________________________

**CORS**

CORS or Cross Origin Resource Sharing is a concept where the server is sitting on a different domain and our client is sitting in a different domain but we can still share the data.


**Promises**

Promises tell that the API call was either successful or failure.
We can then defer this promise object so that we can capture the error states and the success states.

In angular we have $resource and $q to perform these deferred states.
________________________________________________________________________

**$resource**

In older times, we used to write API for every process. 

Example:

1. to get all the records, we used to create /records api
    
2. to get one record, let says, srikar record, we used to create /srikar api
    
3. to get another records, like viswa record, we used to create /viswa
    
The problem with this approach is that if we have 500 records, we need to depend on 500 APIs to get all the individual records.
This was not flexible and also, not realistic.

So, to avoid this kind of behavior, _RESTful APIs_ were introduced.

**RESTful API** -> is a concept in which we make use of one URL but with all the operations

Example:
    
1. /posts (GET)         -> to get all the records
2. /posts (POST)        -> to post a data
3. /posts/srikar (GET)  -> to get only srikar record
4. /posts/srikar (PUT)  -> to update srikar record
5. /posts/srikar (DELETE) -> to delete the srikar record

$resource -> to make use of RESTful APIs

$q -> to make use of promises and deferred states.


**GET in $resource**

    In $resource there are two types of GET call
    
    1. to get the array data
        $resource.query()
        
    2. to get the object data
        $resource.get()
    
    
    
____________________________________________________________________
    
**httpInterceptor**    

For every API call, there is either a success or failure. We know what to do when there a success.
But, we also need to capture the errors and show some graceful message for different error scenarios.

Since there are so many different error scenarios, we need to show different message for respective error type.
In short, we need to intercept every api call and based on the API's header, we need to determine what message to show.

Hence, the httpInterceptor was introduced.


____________________________________________________________________

https://jsonplaceholder.typicode.com/users


two ways of requesting the data:

1. by path parameter (commonly used in GET method)

	/users?firstName=srikar

2. by query parameter

	we use payloads (commonly used in POST method)
	/users

	{
		firstName: 'Srikar'
	}





















