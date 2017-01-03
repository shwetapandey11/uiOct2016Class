**GRUNT AND BOWER** 

<b>npm</b>

npm in Node Package Manager(npm). It is painful to fetch all the dependency files one after the other.
So, we use npm to install all the packages in one shot.

    STEP 1:
        visit https://nodejs.org/en/download/ can download the nodejs.
        This will install npm and also, put the node and npm in our Environment variable's PATH location.
        
    STEP 2:
        to create a project from scratch, we need to create 'package.json'.
        this is an entry point for npm to install all the packages.
        
            npm init
        
        follow the steps required when you execute the above command.
        
    ***WE NEED TO DO THIS ONLY ONCE PER PROJECT***
        
        sample:
            {
              "name": "loginportalapp",
              "version": "1.0.0",
              "description": "this is a angular class dated 01/02/2017",
              "author": "Srikar Shastry",
              "license": "MIT",
              "dependencies": {
                "bower": "^1.8.0",
                "grunt": "^1.0.1"
              },
              "devDependencies": {
                "grunt-contrib-jshint": "^1.1.0"
              }
            }
            
    STEP 3:
        We need to add node_modules to our gitignore file so that it is not getting uploaded to our repo.
        Create a '.gitignore' file and all the relative path of 'node_modules' inside that file.
        
    STEP 4:
        Visit https://www.npmjs.com/ and search for packages. Once you find the exact name, use the command:
            
            npm install <package name> --save
                        or
            npm install -s <package name>
            
        The above command will install the <package name> in the local project as well as adds an entry in our package.json file.
            
    *** **REMEMBER npm SHOULD ONLY BE USED TO INSTALL DEPENDENCIES NOT THE WEB PACKAGES LIKE ANGULAR, JQUERY, ETC.** ***        
    
    STEP 5:
        There are certain packages that we need at a global level so that we can access the same packages to all the projects in our machine.
        such dependencies (NOT DEVDEPENDENCIES) are needed to be installed at a global level.
        to install these packages we simply run:
        
            npm install <package name> --global
                        or
            npm install -g <package name>            
            
        **We need to install the same global <package name> locally.
        
        
__________________________________________________________________________________________________________________________________
        
**Bower**        

Bower is a web package manager. This means that the packages related to UI development like angular, jquery, bootstrap, backbonejs, etc. can be installed from bower.
Bower does not have any packages related to server side development.

    Step 1:
        To install bower, we need npm and we execute this command:
        
            npm install -g bower
                    &
            npm install bower --save
    
    Step 2:
        Once the above commands are executed, we now can run bower from any location inside our terminal
        To install angular components, we simply run the command:
        
            bower install angular --save
            
_______________________________________________________________________________________________________________________________
            
**YEOMAN GENERATORS**            

Over the time, we have become so lazy and fat that we do not have time and patience to construct the project from scratch.
So, some geniuses came up with an automation tool to install the entire project including the dependency components like grunt, bower, angular, jquery, etc.
This automation tool is yeoman generator.

    Step 1:
        To install yeoman, simply run this command:
            
            npm install -g yo
    
    Step 2:
        Search for generators from this url: http://yeoman.io/generators/
        For this example, we are using 'angular generator'
        To install it, simply run this command:
            
            npm install -g generator-angular
        
    Step 3:
        Once all the components are ready to be executed, we run the next command:
        
            yo angular
        
        Follow the on screen instructions by carefully reading the instructions.
        
    Step 4:
        Just for safe precaution, we delete 'node_modules' and 'bower_components' if installed.
        Then, we run the following commands:
        
            npm install
                &
            bower install
            
        This will install all the packages needed for our project
        
    Step 5:
        By this time, all the dependencies and devDependencies are installed. So, we can execute our task runner.
        a. To build the UI, we run:
        
            grunt build
            
        b. To start the server and deploy the code, we run:
            
            grunt serve
        
        c. To run the production(minified) version of the code, we run:
        
            grunt serve:dist
            
        Now, the default should open and our application will run @ http://localhost:9000    
        
    *** REMEMBER NOT TO CLOSE THE TERMINAL IN WHICH WE ARE RUNNING, grunt server, COMMAND.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            
            
            
            
        
        
        