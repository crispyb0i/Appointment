$(document).ready(function() {
  $('#form').submit(function(event){
    var name = $('#name').val();
    var date = $('#date').val();
    var time = $('#time').val();
    var desc = $('#desc').val();

    var output = 'Thank you '+name+', your appointment is confirmed for '+date+' at '+time+'. We will be seeing you for: '+desc;

    alert(
      output
    );
    event.preventDefault();
  });
});
