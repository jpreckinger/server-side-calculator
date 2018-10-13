$( document ).ready( readyNow );

function readyNow(){
  console.log( 'JQ' );
  //('#add-btn').on('click', );
  getCalcs();
} //end readyNow

function getCalcs() {
  $.ajax({
    method: 'GET',
    url: '/calculations'
  }).then(function(response){
    appendCalcs(response);
  })
}

function appendCalcs(array){
  $('#data').empty();
  for ( let calc of array ){
    $('#data').append(calc);
  }
}
