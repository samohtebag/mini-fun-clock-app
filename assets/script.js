var realTime = function () {
    var dateTime = moment();
    $("#realtime").text(dateTime.format("MMMM Do YYYY, h:mm:ss A"));
};

setInterval(realTime, 1000);


function store() {
var inputEmail = document.getElementById("exampleInputEmail1");
localStorage.setItem("exampleInputEmail1", inputEmail.value);

var inputPassword = document.getElementById("exampleInputPassword1");
localStorage.setItem("exampleInputPassword1", inputPassword.value);
};

