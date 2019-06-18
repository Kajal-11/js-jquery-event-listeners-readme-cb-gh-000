//define functions here

$(document).ready(function(){

// call functions here
  function getIt(){
    $('p').on('click', function(){
      alert("Hey!");
    });
  }
  getIt();
  function submitIt(){
    $('form').on("submit", function(){
      alert("Your form is going to be submitted now.");
    });
  }
  submitIr();
});
