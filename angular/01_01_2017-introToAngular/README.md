BIG ISSUE WITH PLAIN JS:

When we are writing or performing AJAX calls, we need to write lesser, cleaner and manageable code.
Since, the entire UI process is to perform AJAX calls to/from the server and show the data in a beautiful manner.


MVC architecture


M -> MODEL

V -> VIEW

C -> CONTROLLER

AngularJS is an MVC architecture


MVVM architecture

M -> MODEL

V -> VIEW

V -> VIEW

M -> MODEL

AngularJS is MVVM architecture



<b>AngularJS is an MVW architecture</b>

SPA: SINGLE PAGE APPLICATION

Loading/changing html document without reloading/refreshing/changing the url is called SPA.
__________________________________________________________________________________________________

<b>ANGULARJS</b>

MVC/MVVM approach:

    STEP 1: 
        Grab the url of CDN from angular.js or download angular.js from the website
        
        source it in our html file.
        
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js"></script>
        
    STEP 2:
        'BOOTSTRAPPING' our app. Automatic bootstrapping.
        
        example:
        <div ng-app="myApp">
            ...
            ...
        </div>
        
        Manual bootstrapping:
        example:
            <div id="test">
                ...
                ...
            </div>

            script.js:
            
                var test = document.getElementById('test');
                angular.bootstrap('myApp',test);
                
                
**** NEVER EVER BOOTSTRAP ONE APP INSIDE THE OTHER APP!!!!                
_______________________________________________________________________________
                
TASK RUNNERS
Angularjs works purely on AJAX. So, we need a dummy server to supply all the files.
Since, we cannot develop a full blown server, we depend on task runners. The job of task runner is to run certain tasks.
Running a dummy server is one of its task.

    There are two task runners which are popular dated 01/01/2017
    GULP:
        This task runner gives us the power to write from scratch everything.
        
    GRUNT:
        This task runner comes with a basic amenities in which we can make modifications of add new tasks.
        
        
        