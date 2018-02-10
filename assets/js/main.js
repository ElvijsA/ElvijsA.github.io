$(function() {
  var error = false;
  function check_name() {
    var name_lenght = $('#contact-name').val().length;

    if(name_lenght < 3 || name_lenght > 20) {
      $('#contact-name').addClass('is-danger');
      $('.name-error').text('Name must be 3 to 20 characters long');
      error = true;
    }else{
      $('#contact-name').removeClass('is-danger');
    }
  }

  function check_message() {
    var message_lenght = $('#contact-message').val().length;

    if(message_lenght < 10 || message_lenght > 200) {
      $('.message-error').text('Message must be 10 to 200 characters long!');
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
      $('.email-error').text('Please Input Valid Email Adress');
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

//Close Modal
  $('.modal-close, .modal-background').click( function() {
    $('.modal').removeClass('is-active')
  });

//Open Modal when click image
  $('.e-image').each(function(i) {
    $(this).bind('click', false);
    $(this).click(function(){
      $('.modal').addClass('is-active');
      //Run show function with this image id
      showImage(i);
    });
  });

  //Show image in modal
  function showImage(i){
    var images = $(".e-image")
    var imageModal = $('#modal-image')
    //Check if image id exists
    if (i > images.length - 1) {i = 0}
    if (i < 0) {i = images.length - 1}
    //Get clicked image link href for big image
    var target = images.eq(i).attr("href")
    //Set Data atribute for modal with current image id
    imageModal.attr('data-id', i)
    //Update image modal with Big image
    imageModal.attr("src", target)
  }

  //Next Previous image change
  function plusImage(n) {
    var imageModal = $('#modal-image')
    var i = imageModal.attr('data-id')
    showImage(+i + +n)
  }

  var $animation_elements = $('.revealOnScroll');
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');
