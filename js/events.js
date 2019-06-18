//define functions here

$(document).ready(function(){

// call functions here
  function getIt(){
    $('p').on('click', function(){
      alert("Hey!");
    });
  }
  window.getIt();

  function frameIt(){
    
  }
  
  function submitIt(){
    $('form').on("submit", function(){
      alert("Your form is going to be submitted now.");
    });
  }
  window.submitIt();
});
