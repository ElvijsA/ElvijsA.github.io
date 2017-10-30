$(function() {
  var error = false;
  function check_name() {
    var name_lenght = $('#contact-name').val().length;

    if(name_lenght < 3 || name_lenght > 20) {
      $('#contact-name').addClass('is-danger');
      error = true;
    }else{
      $('#contact-name').removeClass('is-danger');
    }
  }

  function check_message() {
    var message_lenght = $('#contact-message').val().length;

    if(message_lenght < 10 || message_lenght > 200) {
      $('#contact-message').addClass('is-danger');
      error = true;
    }else{
      $('#contact-message').removeClass('is-danger');
    }
  }

  function check_email() {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,4}$/i);

    if(pattern.test($('#contact-email').val())){
      $('#contact-email').removeClass('is-danger');
    }else{
      $('#contact-email').addClass('is-danger');
      error = true;
    }
  }

  $('#contact-form').submit(function(){

    check_email();
    check_message();
    check_name();

    if(error == false){
      return true;
    }else{
      return false;
    }

  });

});