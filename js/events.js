//define functions here

$(document).ready(function(){

// call functions here
  function getIt(){
    $('p').on('click', function(){
      alert("Hey!");
    });
  }
  window.getIt=getIt;

  function pressIt(){
    $('document').on('keypress', (event) =>{
      if(event.key === 'g')
        alert('You pressed G')
    });
  }
  window.pressIt = pressIt;

  function submitIt(){
    $('form').on("submit", function(){
      alert("Your form is going to be submitted now.");
    });
  }
  window.submitIt = submitIt;
});
