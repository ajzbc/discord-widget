$(document).ready(newID);

var mainRef = new Firebase("https://discord-widget.firebaseio.com/");
var createRef = mainRef.child("create");

function newID () {
    createRef.transaction(function(current_value) {
        return current_value + 1;
    });
}