$(document).ready(function() {
  $('#mygallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: 'Image #could not be loaded.',
      titleSrc: function(item) {
        return '<small>Photo by Domini Lynn Photography</small>';
      }
    }
  });
  $("#mygallery").justifiedGallery();
});