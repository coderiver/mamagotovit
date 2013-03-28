$(document).ready(function() {

//datepicker
if ($('.datepicker-container').length > 0) {  
  $('.datepicker table tr:last').hide();  
  $('.form__period').click(function() {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      $(this).next().fadeIn();
      $(this).next().next().show();
      var current = new Date();
      if (current.getMonth() == 0){
        current.setMonth(11);
        current.setFullYear(current.getFullYear()-1);
      } else {
        current.setMonth(current.getMonth()-1);
      }
      $(this).next().children('.datepicker-container').DatePicker({
        flat: true,
        format: 'd B Y',
        date: [],
        current: current,
        calendars: 3,
        mode: 'range',
        starts: 1,
        onChange: function(formated) {
          $(this).parent().next().children('.datepicker-detail__date').html('<strong>' + formated.join('</strong> – <strong>') + '</strong>');
        }
      });
    }
    else {

    }
  });   
  $('.datepicker-detail__btn button').click(function() {
    var date_value = $(this).parent().prev().html();
    $(this).parent().parent().parent().prev().html(date_value);
    $(this).parent().parent().parent().fadeOut();
    $(this).parent().parent().parent().prev().removeClass('active');
    $(this).parent().parent().parent().next().fadeOut(); 
    $(this).parent().parent().parent().prev().addClass('selected');
    return false;
  });
  $('.datepicker-detail__btn a').click(function() {
    if (!$(this).parent().parent().parent().prev().hasClass('selected')) {
      $(this).parent().parent().parent().fadeOut();
      $(this).parent().parent().parent().prev().removeClass('active');
      $(this).parent().parent().parent().next().fadeOut();
      var date_begin = $(this).parent().parent().parent().prev().html();
      $(this).parent().prev().html(date_begin);    
      $('.datepicker-container').DatePickerClear();
    }
    else {
      $(this).parent().parent().parent().fadeOut();
      $(this).parent().parent().parent().prev().removeClass('active');
      $(this).parent().parent().parent().next().fadeOut();      
    }
    return false;
  });
  $('.form__datepicker-close').click(function() {
    var date_begin1 = $(this).prev().prev().html();
    $(this).prev().children('.datepicker-detail').children('.datepicker-detail__date').html(date_begin1);
    $('.form__datepicker').fadeOut();
    $('.form__period').removeClass('active');
    $('.datepicker-container').DatePickerClear();
    $(this).hide();
  });
};

//messages
$('.js-message button').click(function() {
  $(this).parent().slideUp(100);
  return false;
});
$('.js-sites').click(function() {
  if ($(this).hasClass('open')) {
    $(this).removeClass('open');
    $(this).parent().next().slideUp();
  }
  else {
    $(this).addClass('open');
    $(this).parent().next().slideDown();
  };  
});

//sortable + draglable
if ($('.js-form-sort').length > 0) {
  $('.js-form-sort').sortable({axis: 'y', cursor: 'move'});
  $('.js-form-sort').disableSelection();
};

});