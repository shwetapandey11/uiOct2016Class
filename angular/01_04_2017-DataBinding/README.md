**ONE WAY DATA BINDING**

Getting the data from the controller and putting the same onto the html is what we call one way data binding.

    There are two ways of performing one way data binding:
    1. ng-bind
       Syntax:
            <span ng-bind="<pass the property of vm>"></span>
            
       example:
            <span ng-bind="user.firstName"></span>
            
    2. Angular expressions
        We can alternatively, use angular expressions. These are basically double curly braces that we use to bind the data.
        syntax:
            <span>{{<pass the property of vm>}}</span>
            
        example:
            <span>{{user.firstName}}</span>
            
        *** The issue with angular expressions is that until the data is loaded in the controller, the html shows empty curly braces.
            This is a bad user experience.
            
    ** Preferred way of performing one way data binding is using ng-bind attribute.
    
_________________________________________________________________________________________________________________
    
**TWO WAY DATA BINDING**   
 
The concept of sending the data from the html to controller and back from controller to the html is what we call as two way data binding.
Since, there is only the form fields that we use for user to input some data, we can make use on angular's ng-model to perform two way data binding.

    syntax:
        <input type="text" ng-model="<pass the property of vm>" />
       
    example:
        <input type="text" ng-model="user.firstName" />
        
    ** Only ng-model attribute is used to perform two way data binding.
     
     
     
________________________________________________________________________________________________________________     
   
**ROUTING IN ANGULARJS**     
     