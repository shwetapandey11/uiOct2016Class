**FORM VALIDATION**

Form validation is an important piece in any angular application.
Angular has predefined validators to perform form validations.

    To each input fields, there are six main validators:
    1. valid    -> makes sure the input field is valid
    2. invalid  -> makes sure the input field is invalid
    3. pristine -> makes sure the input field is pristine
    4. dirty    -> makes sure the input field is dirty
    5. touched  -> makes sure the input field has been touched(blurred)
    6. untouched-> makes sure the input field has been untouched(focused)
    
We make use of these validators and show a custom message to the user when an error on the client side happen.

    Steps to perform form validation:
    
    Step 1 - form:
        add name attribute to the form and also add "novalidate" flag to stop default html5 validation
        Also make sure that the ng-submit is added to the form to support the keyboard buttons
        Example:
            <form name="myForm" novalidate ng-submit="LoginCtrl.loginUser()"></form>
    
    Step 2 - input:
        add the validation attributes to the input fields along with ng-model
         
         Example:
            <input type="text" name="username" ng-model="LoginCtrl.user.username" required/>
            
         These attributes will tell angular that the validators are added. In the above example, 'required' is one of the validators
         
         Once these validators are added, angular will add classes like 'ng-valid', 'ng-invalid', 'ng-invalid-required', etc.
         These are some of the helper classes.
         
         **The input field should also have 'name' attribute
          
    Step 3 - custom message:
        Now, we can add a span element with the message suitable for the error.
        
        Example:
            <span style="color:red" ng-if="myForm.username.$error.required">User name is required.</span>
            
            The ng-if directive will tell angular when to render the span element.
            The condition clearly tells that if the username field of myForm form has an error related to required, then the message should show up.
            
            
    Step 4 - css:
        capturing the classes ng-valid, ng-invalid, ng-dirty, etc. we can add some styles to make it more user interactive.
        
        
    