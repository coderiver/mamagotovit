$(document).ready(function() {

//select
$('.work__select select').change(function() {
  var sel_val = $(this).val();
  $(this).prev().html(sel_val);
});

});