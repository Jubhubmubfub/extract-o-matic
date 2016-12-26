function extract(num,digit){
  //use a counter to represent the digit place
var count = 0;
  //for loop increments by power of 10 to target each digit per count
  for(var i = 1; count <= digit; i*=10){
    //this moves decimal point over
    var extract = num/i;
    //gets rid of the decimal number part and saves the spot in the 1 position
    var dig = Math.floor(extract%10);
    //increments count
    count++
  }
  //after count has reached digit, return the value
  return "The exctracted number is: " +dig;
}//end of extract function



$(document).ready(function(){
  console.log("document has loaded");

  $('#number').click(function(){
    $('input,select,textarea').css('color','black')

  })

  $('form').on('click','button',function(){
    console.log("you clicked the button");
    console.log(extract($('#number').val(),$('#digit').val()));

    $('#answer').html("<p>"+extract($('#number').val(),$('#digit').val())+"</p>");

  })//end of click function

})//end of doucment ready
