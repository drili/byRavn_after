// https://code.tutsplus.com/tutorials/creating-a-keyboard-with-css-and-jquery--net-5774

function attachKeyboard(display_id, keyboard_id, image_id, imagedata_id)
{
  	var display = document.getElementById(display_id);
    var image = document.getElementById(image_id);
    var imageData = document.getElementById(imagedata_id);

	// reset keyboard on attach
  
  	$(display_id).empty();              
  	enableDisableKeys(keyboard_id, 9999, 0);

  	// set click handler for keyboard's close button
  	// this is where we grab the image set's list of sources to apply as a line item property
 
	$("#button-" + keyboard_id).off('click');
    $("#button-" + keyboard_id).on('click', function()
    {      
      var combinedImages = "";
      $("#" + display_id + " span img").each(function() { combinedImages += $(this).attr("src") + "|" });
      
      // update the combined image sources shown to the customer on the product page as well as in the hidden input field
      
      $(image).html($("#" + display_id).html());
      
      imageData.value = combinedImages.slice(0, -1); 

      // close the overlay
      parent.$.fancybox.close(); 
      
    });
      
  	$("#" + keyboard_id + " li").off('click');
    $("#" + keyboard_id + " li").on('click', function()
    {
        var $this = $(this);
      
	    var currentwidth = parseInt(display.getAttribute("data-current-width")) || 0;
		var maxwidth = parseInt(display.getAttribute("data-max-width"));
      
        // Delete last symbol, if any
        if ($this.hasClass('delete')) {
            if (display.lastChild) 
            {
                var keyWidth = parseInt(display.lastChild.getAttribute("data-width"));
                currentwidth -= keyWidth;
	            display.setAttribute("data-current-width", currentwidth.toString());

              	display.removeChild(display.lastChild);                   

                enableDisableKeys(keyboard_id, maxwidth, currentwidth);
            }

          	var combinedImages = "";
      		$("#" + display_id + " span img").each(function() { combinedImages += $(this).attr("src") + "|" });
      
      		// update the combined image sources shown to the customer on the product page as well as in the hidden input field
      
	        $(image).html($("#" + display_id).html());
      
      		imageData.value = combinedImages.slice(0, -1); 
          
            return false;
        }

        var keyWidth = parseInt($this.attr("data-width"));

        if (currentwidth + keyWidth <= maxwidth)
        {
            // Add the key's html inside a span tag
            var span = document.createElement('span');
            span.innerHTML = $this.html();
            span.setAttribute("data-width", keyWidth.toString());
            display.appendChild(span);

            currentwidth += keyWidth;
            display.setAttribute("data-current-width", currentwidth.toString());
          
            //console.log("Last symbol added was:", keyWidth, "left:", maxwidth);

            enableDisableKeys(keyboard_id, maxwidth, currentwidth);
        }

      	var combinedImages = "";
      	$("#" + display_id + " span img").each(function() { combinedImages += $(this).attr("src") + "|" });
      
      	// update the combined image sources shown to the customer on the product page as well as in the hidden input field
      
      	$(image).html($("#" + display_id).html());
      
      	imageData.value = combinedImages.slice(0, -1); 
      
    });
}

function enableDisableKeys(keyboard_id, maxwidth, currentwidth) 
{
  // disable or enable keysdepending on whether they'll will fit within the defined print area

  $("#"+ keyboard_id + " li[data-width]").each(function () {
    if (parseInt($(this).attr("data-width")) <= (maxwidth - currentwidth))
      $(this).removeClass("nodisplay");
    else
      $(this).addClass("nodisplay");
  });

  if (currentwidth == 0)
    $("#"+ keyboard_id + " li.delete").addClass("nodisplay");
  else
    $("#"+ keyboard_id + " li.delete").removeClass("nodisplay");
}


