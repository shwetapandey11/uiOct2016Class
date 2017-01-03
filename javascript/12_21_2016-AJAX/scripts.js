// construct the IIFE by passing the window object
//window is the global object
(function(window){
    window.makeAPICall = function(){
        var http = new XMLHttpRequest(); // step 1
        // GET METHOD
        //http.open('GET','https://jsonplaceholder.typicode.com/posts',true); // step 2

        // POST METHOD
        var payload = {
          title: 'foo',
          body: 'bar',
          userId: 1
        };
        http.open('POST','https://jsonplaceholder.typicode.com/posts',true);

        // step 3
        http.onreadystatechange = function(){
            if(this.readyState == 4){
                switch(this.status){
                    case 200: {
                        var response = JSON.parse(this.response)[5];
                        window.document.getElementById('newText').innerHTML = response.id;
                    }
                    break;
                    case 201: {
                        var response = JSON.parse(this.response);
                        window.document.getElementById('newText').innerHTML = response.id + ' was created!';
                    }
                    break;
                    case 400: {
                        window.document.getElementById('newText').innerHTML = this.statusText;
                    }
                    break;
                    case 404: {
                        window.document.getElementById('newText').innerHTML = this.statusText;
                    }
                    break;
                    case 500: {
                        window.document.getElementById('newText').innerHTML = this.statusText;
                    }
                    break;
                }
            }
        };

        // step 4
        // for GET
        // http.send();

        // for POST
        var request = JSON.stringify(payload);
        http.send(request);
    };
})(window);




















