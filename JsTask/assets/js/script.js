// var eventHandler = {
//     events: [], //Array of events the element is subscribed to.
  
//     bindEvent: function(event, callback, targetElement) {
//       //remove any duplicate event 
//       this.unbindEvent(event, targetElement);
  
//       //bind event listener to DOM element
//       targetElement.addEventListener(event, callback, false);
  
//       this.events.push({
//         type: event,
//         event: callback,
//         target: targetElement
//       }); //push the new event into our events array.
//     },
  
//     findEvent: function(event) {
//       return this.events.filter(function(evt) {
//         return (evt.type === event); //if event type is a match return
//       }, event)[0];
//     },
//     unbindEvent: function(event, targetElement) {
//       //search events
//       var foundEvent = this.findEvent(event);
  
//       //remove event listener if found
//       if (foundEvent !== undefined) {
//         targetElement.removeEventListener(event, foundEvent.event, false);
//       }
  
//       //update the events array
//       this.events = this.events.filter(function(evt) {
//         return (evt.type !== event);
//       }, event);
//     }
//   };
  
//   var testBtn = document.getElementById('test');
  var log = document.getElementById('eventlog');
  
  function logMsg(e) {
    if (e.type !== undefined) {
      log.innerHTML = log.innerHTML + '<br> Event triggered: ' + e.type;
    }
  }
  
//   function addEvent() {
//     var list = document.getElementById("eventlist");
//     var selected = list.options[list.selectedIndex].value;
//     eventHandler.bindEvent(selected, logMsg, document.getElementById('test'));
//     activeList();
//   }
  
//   function activeList() {
//     var list = document.getElementById('activeeventlist');
//     list.innerHTML = '';
//     eventHandler.events.forEach(function(e) {
//       var opt = document.createElement('option');
//       opt.setAttribute('value', e.type);
//       opt.innerHTML = e.type;
//       list.appendChild(opt);
//     });
//   }
  
//   function removeEvent() {
//     var list = document.getElementById("activeeventlist");
//     var selected = list.options[list.selectedIndex].value;
//     eventHandler.unbindEvent(selected, document.getElementById('test'));
//     activeList();
//   }
    function addClass(){
        var html = "";
        if ( document.getElementById("MyElement").className.match(/(?:^|\s)myClass(?!\S)/) ){
            console.log('Class Already Exist');
            html += "Class Already Exist"
        } else{
            document.getElementById("MyElement").className = "myClass";
            console.log('Class Added "myClass"');
            html += "Class Added"
        }
        const para = document.createElement("p");
        const node = document.createTextNode(html);
        para.appendChild(node);
        const element = document.getElementById("eventlog");
        element.appendChild(para);
    }
    function removeClass(){
        var html = "";
        if ( document.getElementById("MyElement").className.match(/(?:^|\s)myClass(?!\S)/) ){
            document.getElementById("MyElement").className = document.getElementById("MyElement").className.replace( /(?:^|\s)MyClass(?!\S)/g , '' )
            html += "Class Name Removed"
        } else{
            // document.getElementById("MyElement").className = "myClass";
            console.log('No Class Found');
            html += "No Class Found"
        }
        const para = document.createElement("p");
        const node = document.createTextNode(html);
        para.appendChild(node);
        const element = document.getElementById("eventlog");
        element.appendChild(para);
    }
    function getDataSet(){
        var html = "";
        var inputData = document.getElementById('myInput').value;
        var e = document.getElementById("myCountry");
        var value = e.value;
        var text = e.options[e.selectedIndex].text;
        html += "The input data is " + inputData + ".<br>";
        
        html += "The Selected Option is " + text + " and the value of selected option is "+ value + ".<br>";
        
        // document.getElementById("dataSet").innerHTML = html;
        const para = document.createElement("p");
        const node = document.createTextNode(html);
        para.appendChild(node);
        const element = document.getElementById("dataSet");
        element.appendChild(para);
    }

    function makeAjaxRequest(url, methodType) {
        var xhr = new XMLHttpRequest();
        xhr.open(methodType, url);

        xhr.send();
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
               var json = ''
              console.log('Response:', xhr.responseText);
              var json = JSON.parse(xhr.responseText);
              document.getElementById('apiResult').innerHTML = xhr.responseText;
              valueCallBack(json); //Callback function
            } else {
              console.error('Error:', xhr.statusText);
            }
          }
        };
      }
      
     function MakeMultiplePostRequest(){
      var url1 = 'https://jsonplaceholder.typicode.com/posts';
      var url2 = 'https://jsonplaceholder.typicode.com/posts';
      var url3 = 'https://jsonplaceholder.typicode.com/posts';
      
      var request1 = fetch(url1, { method: 'POST' });
      var request2 = fetch(url2, { method: 'POST' });
      var request3 = fetch(url3, { method: 'POST' });
      
      Promise.all([request1, request2, request3])
        .then(function(responses) {
          return Promise.all(responses.map(function(response) {
            return response.text();
          }));
        })
        .then(function(texts) {
          console.log('Response 1:', texts[0]);
          console.log('Response 2:', texts[1]);
          console.log('Response 3:', texts[2]);
          
        })
        .catch(function(error) {
          console.error('Error:', error);
        });
    }
    function getDataAndSet(){
        makeAjaxRequest('https://jsonplaceholder.typicode.com/todos/1', 'GET');
    }
    function valueCallBack(value){
        document.getElementById("title").value =  value.title;
        document.getElementById("status").selectedIndex = value.completed;
    }
      
    window.onload = function(){
        document.getElementById("addClass").addEventListener( 'click', addClass);
        document.getElementById("removeClass").addEventListener( 'click', removeClass);
        document.getElementById("getDataSet").addEventListener( 'click', getDataSet);
        // document.getElementById("getAjax").addEventListener( 'click', makeAjaxRequest('https://jsonplaceholder.typicode.com/todos/1', 'GET'));
        document.getElementById("setData").addEventListener( 'click', getDataAndSet);
        document.getElementById("postAjax").addEventListener( 'click', MakeMultiplePostRequest);
    }
