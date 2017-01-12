**DIGEST CYCLES**

Whenever we attach the ng-app, angular is going to attach an apply cycle.

This apply cycle will call digest cycle which will again call watch cycles.
These watch cycles are basically going to look for value change. In short, there are going to check if the value was change from old to new.
Once the watch cycle determines that the value was changed or not, the digest cycle then tell the angular that the value now needs to be applied. 
And hence, the new value will be update to that particular scope model.

$apply() -> $digest() -> Watch listeners

Watch listeners -> $digest() -> $apply()


    To create our own watch cycle, we can do this:
    (To construct our own watch cycles, we need to look for $rootScope or $scope or directive's scope):
    
    Syntax:
    <scope>.$watch(<model on which you want to look upon>,<callback function/watch listner callback>,<boolean to tell whether to watch all times or only one time>);

    Example:
    <input ng-model="HomeCtrl.user.username">
    
    JS:
    $scope.$watch(
        function(){
            return vm.user.username;
        },function(newUsername,oldUsername){
        if(newUsername !== oldUsername){
            // perform some logic
            
            // return new value
        } 
    },true);
    
___________________________________________________________________________________
    
**EVENT LISTENING**
    
This is a concept where we have the to power to broadcast a value from the parent scope to the child scope(s).

In angular, there are two type of event broadcasting:
    
    1. $broadcast
        $broadcast -> parent to child
        
        Syntax:
        From the scope you want to broadcast:
        <scope>.$broadcast(<custom event name>,<the object you need to broadcast>);
        
        To the scope you want to retrieve the broadcast:
        <scope>.$on(<the custom event name we defined above>,<callback function that accepts this object>);
        
        Example:
        HomeController.js:
        $rootScope.$broadcast('userObject',{username: vm.user.username});
        
        SrikarElement.js:
        scope.$on('userObject',function(event,username){
            console.log(username); // output: value of vm.user.username
        });
        
    2. $emit
        $emit -> child to parent
        
        Syntax:
        From the scope you want to emit:
        <scope>.$emit(<custom event name>,<the object you want to emit>);
        
        To the scope you want to retrieve the broadcast:
        <scope>.$on(<the custom event name we defined above>,<callback function that accepts this object>);
             
        Example:
        SrikarElement.js:
        $rootScope.$emit('userObject',{username: vm.user.username});
        
        HomeController.js:
        $scope.$on('userObject',function(event,username){
            console.log(username); // output: value of vm.user.username
        });        
        
        
  angular.module().run()
  
  controllers
  
  directives
  
  
_____________________________________________________________________________________________________  


