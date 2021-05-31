$(document).ready(function() {
  $('#lightSlider').lightSlider({
        autoWidth:true,
        loop:true,
        auto:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

