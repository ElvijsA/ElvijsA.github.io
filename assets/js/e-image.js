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
