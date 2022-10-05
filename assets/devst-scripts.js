$(document).ready( function(){
  

  

  if(window.location.href.indexOf("/nogleskjuler") > -1 || window.location.href.indexOf("/julepynt-hjerter-i-laeder") > -1 || window.location.href.indexOf("/julepynt-stjerner-i-laeder") > -1) {
    console.log("contains url");
    var text = $(".discountamount").text();
    $(".discountamount").text(text.replace('SPAR 15%', 'SPAR 30%')); 
  }

  var timer = setInterval(function(){
    if( $("#infiniteoptions-container").children('div').length > 0 && $(".specialmal-swatch")[0] ){

      $('.swatch-element').each( function(){
        var check_str1 = $(this).data('value').indexOf('Specialm');
        var check_str2 = $(this).data('value').indexOf('Spesialm');
        if( check_str1 > -1 || check_str2 > -1 ){

          $('#infiniteoptions-container').find('div').eq(1).hide();
          $('#infiniteoptions-container').find('span').eq(0).hide();

          $(document).on('click', '.swatch-element', function(e) {
            var indexof1 = $(this).data('value').indexOf('Specialm');
            var indexof2 = $(this).data('value').indexOf('Spesialm');
            if( indexof1 > -1 || indexof2 > -1 ){
              $('#infiniteoptions-container').find('div').eq(1).show();
              $('#infiniteoptions-container').find('span').eq(0).show();
            } else {
              $('#infiniteoptions-container').find('div').eq(1).hide();
              $('#infiniteoptions-container').find('div').eq(1).find('input').val('');
              $('#infiniteoptions-container').find('span').eq(0).hide();
            }
          });

          clearInterval(timer);
        }
      });

    } else {
      return false;
    }
  }, 1);

  
  
  /*
  if($(".med-tekst-pa-forsiden-dkk-50-swatch")[0] || $(".med-tekst-pa-for-og-bagsiden-dkk-100-swatch")[0]) {
    $(document).on('click', '.swatch-element', function(e) {
      var thisElementTryk1 = $(this).data('value').indexOf('forsiden');
      var thisElementTryk2 = $(this).data('value').indexOf('bagsiden');
      var forsideInputElement = $( "input[value*='forside']" );
      var bagsideInputElement = $( "input[value*='bagsiden']" );
      //console.log("value: "+thisElementTryk1);
      

      // Function to check if "tryk/tekst" is chosen and not empty
      var element = document.querySelector('#custom-picker-rawdata-1');
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type == "attributes") {
            //console.log("attributes changed")
            var attributeValue = element.getAttribute("value");
            //console.log(attributeValue);
            if(attributeValue > -1) {
              if(forsideInputElement.hasClass("selected")) {
                //console.log("--- Value is empty but tryk is selected");
                $(".add_to_cart").css("background", "#eee");
                $(".add_to_cart").css("border", "none");
                $(".nottryk").addClass("hastryk");
                document.querySelector(".add_to_cart").disabled = true;
              } else {
                //console.log("--- Value is just empty1");
                $(".add_to_cart").css("background", "#f74f4f");
                $(".nottryk").removeClass("hastryk");
                document.querySelector(".add_to_cart").disabled = false;
              }
            } else if (attributeValue > -1 && thisElementTryk1 > -1) {
              //console.log("--- Value is empty but clicked on tryk");
              $(".add_to_cart").css("background", "#eee");
              $(".add_to_cart").css("border", "none");
              $(".nottryk").addClass("hastryk");
              document.querySelector(".add_to_cart").disabled = true;
            } else if (attributeValue > -1) {
              //console.log("--- Value is just empty");
              $(".add_to_cart").css("background", "#f74f4f");
              $(".nottryk").removeClass("hastryk");
              document.querySelector(".add_to_cart").disabled = false;
            } else {
              //console.log("--- Value is NOT empty");
              $(".add_to_cart").css("background", "#f74f4f");
              $(".nottryk").removeClass("hastryk");
              document.querySelector(".add_to_cart").disabled = false;
            }
          }
        });
      });
      observer.observe(element, {
        attributes: true //configure it to listen to attribute changes
      });
      
      // Function to check if "tryk/tekst" is chosen and not empty
      var elementBaggrund = document.querySelector('#custom-picker-rawdata-2');
      var observerBaggrund = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type == "attributes") {
            //console.log("attributes changed")
            var attributeValueBaggrund = elementBaggrund.getAttribute("value");
            if(attributeValueBaggrund > -1) {
              if(bagsideInputElement.hasClass("selected")) {
                //console.log("--- Value is empty but bagside tryk is selected");
                $(".add_to_cart").css("background", "#eee");
                $(".add_to_cart").css("border", "none");
                $(".nottryk").addClass("hastryk");
                document.querySelector(".add_to_cart").disabled = true;
              }
            }
          }
        });
      });
      observerBaggrund.observe(elementBaggrund, {
        attributes: true //configure it to listen to attribute changes
      });

      var elementOutter = document.querySelector('#custom-picker-rawdata-1');
      var attributeValueOutter = elementOutter.getAttribute("value");
      var elementOutterBaggrund = document.querySelector('#custom-picker-rawdata-2');
      var attributeValueOutterBaggrund = elementOutter.getAttribute("value");
      var customPickerImageChild = $("#custom-picker-image-1").find("img");
      if(attributeValueOutter > -1 && customPickerImageChild.length > 1) {
        //console.log("--- Outter Value is empty but image exists");
        //console.log(attributeValueOutter);
        $("#custom-picker-image-1").find("span").each(function(){
          $(this).remove();
        });
        $("#custom-picker-image-2").find("span").each(function(){
          $(this).remove();
        });
        $(".add_to_cart").css("background", "#eee");
        $(".add_to_cart").css("border", "none");
        $(".nottryk").addClass("hastryk");
        document.querySelector(".add_to_cart").disabled = true;
      } else if (attributeValueOutter > -1){
        if(forsideInputElement.hasClass("selected") || bagsideInputElement.hasClass("selected")) {
          //console.log("--- Outter Value is still empty but selected tryk");
          //console.log(attributeValueOutter);
          $(".add_to_cart").css("background", "#eee");
          $(".add_to_cart").css("border", "none");
          $(".nottryk").addClass("hastryk");
          document.querySelector(".add_to_cart").disabled = true;
        } else if (attributeValueOutter > -1 && thisElementTryk1 > -1 || thisElementTryk2 > -1) {
          //console.log("--- Value is empty but clicked on tryk OUTTER");
          $(".add_to_cart").css("background", "#eee");
          $(".add_to_cart").css("border", "none");
          $(".nottryk").addClass("hastryk");
          setTimeout(function() {
            document.querySelector(".add_to_cart").disabled = true;
          },200)
        } else {
          //console.log("--- Outter Value is just empty OUTTER");
          $(".add_to_cart").css("background", "#f74f4f");
          $(".nottryk").removeClass("hastryk");
          document.querySelector(".add_to_cart").disabled = false;
        }

      } else {
        //console.log("--- Outter Value is NOT empty");
        //console.log(attributeValueOutter);
        $(".add_to_cart").css("background", "#f74f4f");
        $(".nottryk").removeClass("hastryk");
        document.querySelector(".add_to_cart").disabled = false;
      }

    });

  }




// Timer function to ensure that both front- and back print has been configured, if that option has been chosen.  
setInterval(function(){ 
  
  
  // If checkboxes exit.
  if( $('#infiniteoptions-container input[type="checkbox"]').length ){
  	var checkedNum = $('#infiniteoptions-container input[type="checkbox"]:checked').length;
  	// If both front AND back print option has been selected.
    if( $('.swatch_options .swatch:last-of-type input:last-of-type').is(':checked') ){
    
          if ($('#custom-picker-image-2, #custom-picker-image-1').is(':empty') || !checkedNum){
              $(".add_to_cart").css("background", "#eee");
              $(".add_to_cart").css("border", "none");
              $(".nottryk").addClass("hastryk");
              document.querySelector(".add_to_cart").disabled = true;
          } else{
              $(".add_to_cart").css("background", "#f74f4f");
              $(".nottryk").removeClass("hastryk");
              document.querySelector(".add_to_cart").disabled = false;
          }
          
    }
  
  
  } else{
    
    // If both front AND back print option has been selected.
    if( $('.swatch_options .swatch:last-of-type input:last-of-type').is(':checked') ){
    
          if ($('#custom-picker-image-2, #custom-picker-image-1').is(':empty')){
              $(".add_to_cart").css("background", "#eee");
              $(".add_to_cart").css("border", "none");
              $(".nottryk").addClass("hastryk");
              document.querySelector(".add_to_cart").disabled = true;
          } else{
              $(".add_to_cart").css("background", "#f74f4f");
              $(".nottryk").removeClass("hastryk");
              document.querySelector(".add_to_cart").disabled = false;
          }
          
    }
  
  }
  
  

  
  
  
    
  if (window.location.href.indexOf("skrivebordsunderlag") > -1) {}else{
  
  	// If ONLY front print option has been selected.
    if( $('.swatch_options .swatch:last-of-type input:nth-last-of-type(2)').is(':checked') ){
    
          if (!$('#custom-picker-image-1').is(':empty') || checkedNum ){
              $(".add_to_cart").css("background", "#f74f4f");
              $(".nottryk").removeClass("hastryk");
              document.querySelector(".add_to_cart").disabled = false;
          } else{
              $(".add_to_cart").css("background", "#eee");
              $(".add_to_cart").css("border", "none");
              $(".nottryk").addClass("hastryk");
              document.querySelector(".add_to_cart").disabled = true;
          }
          
    }
  
}
  	
  
  
  

  
  
  

}, 200);
// Timer end.  
  */
  
  
  


  
 
  

  
  


  
  

  
// Hvis ikke det er et smykkeprodukt, så skal det normale bare gøres.
  $('.swatch_options .swatch:last-of-type input[type="radio"]').change(function() {

    var selectedOption = $('.swatch_options .swatch:last-of-type input[type="radio"].selected').val();

    if( selectedOption.indexOf('for- og bag') >= 0){

        console.log("Tekst på begge sider er valgt!");
        $(".nottryk").addClass("hastryk");
    } else{
        $(".nottryk").removeClass("hastryk");
    }
    
});
  
  

  
  
  
  
  
   
  
  var ex = $("h1.product_name");

  
  // ARMBÅND
// Er der tale om et smykke? Hvis ordet "Armbånd" indgår i titlen.
if (ex.text().indexOf("Armbånd") !== -1) {
  
  
  // Sæt en timer som hele tiden lytter på hvad brugeren har valgt.
  setInterval(setJewlryOptions, 500);
  
  function setJewlryOptions(){  
    

  	
    if($('input[name=option-1]:checked').val()  == "Uden tekst"){
       //alert("Der er valgt uden tekst");
       $('#infiniteoptions-container > div').hide();  
    }
     
     
    if($('input[name=option-1]:checked').val()  == "Med tekst på ydersiden"){
       $('#infiniteoptions-container > div').show();  
       $('#infiniteoptions-container > div:not(:nth-child(1))').hide();  
       $('#infiniteoptions-container > div:not(:nth-child(1)) input').val('');  
    }
        
     
     
    if($('input[name=option-1]:checked').val()  == "Med tekst på inderside"){
        $('#infiniteoptions-container > div').show();  
       $('#infiniteoptions-container > div:not(:nth-child(2))').hide();  
      
      $('#infiniteoptions-container > div:not(:nth-child(2)) input').val('');  
      
    }
    
     
    if($('input[name=option-1]:checked').val()  == "Med tekst på yder- og indersiden"){
        $('#infiniteoptions-container > div').show();  
       $('#infiniteoptions-container > div:nth-child(1)').hide();  
      $('#infiniteoptions-container > div:nth-child(2)').hide();  
      
      $('#infiniteoptions-container > div:nth-child(1) input').val('');  
      $('#infiniteoptions-container > div:nth-child(2) input').val('');  
      
    }
  
  }
}
 // slut ARMBÅND.
  
  
  
  
  // RUND HALSKLDE 
  // Er der tale om et smykke? Hvis ordet "Armbånd" indgår i titlen.
if (ex.text().indexOf("Rund halskæde") !== -1) {
  
  
  // Sæt en timer som hele tiden lytter på hvad brugeren har valgt.
  setInterval(setJewlryOptions2, 500);
  
  function setJewlryOptions2(){  
    
    if($('input[name=option-1]:checked').val()  == "Uden tekst"){
       $('#infiniteoptions-container > div').hide();  
    }
     
     
    if($('input[name=option-1]:checked').val()  == "Med tekst"){
 //nothing happens.
      $('#infiniteoptions-container > div').show();  
    }
        
     
  
  }
}
 // slut RUND HALSKLDE 
  
  
  
    // HALSKÆDE MED STAV
if (ex.text().indexOf("Halskæde - Stav") !== -1) {
  
  
  // Sæt en timer som hele tiden lytter på hvad brugeren har valgt.
  setInterval(setJewlryOptions3, 500);
  
  function setJewlryOptions3(){  
    
    if($('input[name=option-1]:checked').val()  == "Uden tekst"){
       //alert("Der er valgt uden tekst");
       $('#infiniteoptions-container > div').hide();  
    }
     
     
    if($('input[name=option-1]:checked').val()  == "Med tekst på forsiden"){
       $('#infiniteoptions-container > div').show();  
       $('#infiniteoptions-container > div:not(:nth-child(1))').hide();  
       $('#infiniteoptions-container > div:not(:nth-child(1)) input').val('');  
    }
        
     
     
    if($('input[name=option-1]:checked').val()  == "Med tekst på 2 sider"){
        $('#infiniteoptions-container > div').show();  
        $('#infiniteoptions-container > div:nth-child(3),#infiniteoptions-container > div:nth-child(4)').hide();  
        $('#infiniteoptions-container > div:nth-child(3) input,#infiniteoptions-container > div:nth-child(4) input').val('');  
      
    }
    
     
    if($('input[name=option-1]:checked').val()  == "Med tekst på 3 sider"){
        $('#infiniteoptions-container > div').show();  
      
      
    }
        
     
  
  }
}
 // slut HALSKÆDE MED STAV
  
  
  

});

