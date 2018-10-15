$( document ).ready( readyNow );

function readyNow(){
  $('#equal-btn').on('click', runCalc );
  $('.digit').on('click', function(){
    $('#num-in').val($('#num-in').val() + $(this).text());
  });
  $('#clear-btn').on('click', clearInput);
  getCalcs(); // retrieve previous calculations from the server
} //end readyNow

//request array of previous calculations from the server
function getCalcs() {
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
  $('#data').empty();
  for ( let calc of array ){
    $('#data').append(`<p>${calc.equation}</p>`);
  }
} // end appendCalcs

function runCalc(){
let equation = $('#num-in').val();  
$.ajax({
    method: 'POST',
    url: '/calculation',
    data: {
      equation: equation
    }
  }).then(function(response){
    displayAnswer();
    getCalcs();
  }).catch(function(error){
    console.log('ERROR running calculation: ', error);
  })
} // end runCalc

function displayAnswer(){
  $.ajax({
    method: 'GET',
    url: '/answer'
  }).then(function(response){
    $('#answer').empty();
    $('#answer').append(`<h2> Answer: ${response}`);
  }).catch(function(error){
    console.log('Failed to retrieve answer', error);
  })
} // end displayAnswer

function clearInput(){
  $('input').val('');
} // end clearInput
