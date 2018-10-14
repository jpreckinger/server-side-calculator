$( document ).ready( readyNow );

let operator;

function readyNow(){
  console.log( 'JQ' );
  $('#equal-btn').on('click', runCalc );
  $('.operator').on('click', function(){
    operator = $(this).text();
    console.log(operator); 
  });
  getCalcs(); // retrieve previous calculations from the server
} //end readyNow

//request array of previous calculations from the server
function getCalcs() {
  console.log('in get getCalcs')
  $.ajax({
    method: 'GET',
    url: '/calculation'
  }).then(function(response){
    appendCalcs(response);
  }).catch(function(error){
    console.log('ERROR: ', error);
  })
} // end getCalcs

//append the previous calculations to the DOM for viewing
function appendCalcs(array){
  console.log('in appendCalcs')
  $('#data').empty();
  for ( let calc of array ){
    $('#data').append(`<p>${calc.num1} ${calc.operator} ${calc.num2}</p>`);
  }
} // end appendCalcs

function runCalc(){
  let num1 = $('#num1-in').val();
  let num2 = $('#num2-in').val();
  console.log('num1 is ' + num1 + operator + ' and num2 is ' + num2 )
  $.ajax({
    method: 'POST',
    url: '/calculation',
    data: {
      num1: num1,
      num2: num2,
      operator: operator
    }
  }).then(function(response){
    displayAnswer();
    getCalcs();
  }).catch(function(error){
    console.log('ERROR running calculation: ', error);
  })
} // end runCalc

function displayAnswer(){
  console.log('in displayAnswer')
  $.ajax({
    method: 'GET',
    url: '/answer'
  }).then(function(response){
    console.log('in .then /answer')
    $('#answer').empty();
    $('#answer').append(response);
  }).catch(function(error){
    console.log('Failed to retrieve answer', error);
  })
}