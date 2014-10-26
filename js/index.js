/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
       // app.receivedEvent('deviceready');
    },
    addToCal: function() {  
        var startDate = new Date("July 19, 2013 8:00:00");  
        var endDate = new Date("July 19, 2013 18:00:00");  
        var notes = "Arrive on time, don't want to miss out (from Android)";  
        var title = "PhoneGap Day";  
        var location = "Portland, OR";  
        var notes = "Arrive on time, don't want to miss out!";  
        var success = function(message) {  
            var button = document.createElement('div');
            button.innerText = "success";
            document.body.appendChild(button);
            alert('success'); 
        };  
        var error = function(message) { 
            var button = document.createElement('div');
            button.innerText = "error";
            document.body.appendChild(button); 
            alert('error');
        };  
        var onSuccess = function(acceleration){
            alert('Acceleration X: ' + acceleration.x + '\n' +
            'Acceleration Y: ' + acceleration.y + '\n' +
            'Acceleration Z: ' + acceleration.z + '\n' +
            'Timestamp: '      + acceleration.timestamp + '\n');
        };
        var onError = function() {
            alert('onError!');
        }
        navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        echoPlugin.createEvent(title, location, notes, startDate, endDate, success, error);  
    },  
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};