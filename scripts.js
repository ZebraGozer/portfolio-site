
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {

    $('.burger').click(function(e) {
   
      var x = document.getElementById("menu");
           if (x.style.display === "block") {
             x.style.display = "none";
           } else {
             x.style.display = "block";
           }
    });

    $('.main, .main2, .content, .content2, .content3, .footer').click(function(e) {
      document.getElementById("menu").style.display = "none";
    });

    var formContainer = $('#form-container');

    bindFormClick();

    function bindFormClick(){
      $(formContainer).on('click', function(e) {
        e.preventDefault();
        toggleForm();

        $(this).off();
      });
    }
    
    $('#form-close, .form-overlay').click(function(e) {
      e.stopPropagation();
      e.preventDefault();
      toggleForm();
      bindFormClick();
    });
    
    function toggleForm(){
      $(formContainer).toggleClass('expand');
      $(formContainer).children().toggleClass('expand');
      $('body').toggleClass('show-form-overlay');
      $('.form-submitted').removeClass('form-submitted');
    }
    
    $('form').submit(function() {
      var form = $(this);
      form.find('.form-error').removeClass('form-error');
      var formError = false;
      var user_name = $('#user_name').val();
      var user_email = $('#user_email').val();
      var user_subject = $('#user_subject').val();
      var user_message = $('#user_message').val();

// Send data to the submit file

      $.ajax({
        type: 'post',
        url: 'submit.php',
        data: {
          name: user_name,
          email: user_email,
          subject: user_subject,
          message: user_message				
      },
      cache: false,
        success: function () {
          console.log("Message send");
        }
      });
      
      form.find('.input').each(function() {
        if ($(this).val() == '') {
          $(this).addClass('form-error');
          $(this).select();
          formError = true;
          return false;
        }
        else if ($(this).hasClass('email') && !isValidEmail($(this).val())) {
          $(this).addClass('form-error');
          $(this).select();
          formError = true;
          return false;
        }
      });
      
      if (!formError) {
        $('body').addClass('form-submitted');
        $('#form-head').addClass('form-submitted'); 
        setTimeout(function(){
          $(form).trigger("reset");
        }, 1000);
      }
      return false;
    });
   
    function isValidEmail(email) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(email);
    };

    
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {

// When you scroll -80 pixels the navbar gets darker with a blurry backdrop

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 90) {
    document.getElementById("ul").style.backgroundColor = "rgba(51,51,51,0.5)";
    document.getElementById("ul").style.backdropFilter = "blur(5px)";
  } else {
    document.getElementById("ul").style.backgroundColor = "rgba(51,51,51,0.0)";
    document.getElementById("ul").style.backdropFilter = "blur(0px)";
  }
}

$("#burger").on("click", function(){       
  $(this).addClass("imageRot").one('webkitAnimationEnd mozAnimationEnd oAnimationEnd msAnimationEnd animationend', function () {
      $(this).removeClass("imageRot");        
  });
});

// Custom cursor, hover over link class = scale

var cursor = $(".cursor");

  $(window).mousemove(function(e) {
  cursor.css({
  top: e.clientY - cursor.height() / 2,
  left: e.clientX - cursor.width() / 2
  });
});

  $(window)
  .mouseleave(function() {
  cursor.css({
    opacity: "0"
  });
})
  .mouseenter(function() {
  cursor.css({
    opacity: "1"
  });
});

  $(".link")
  .mouseenter(function() {
  cursor.css({
    transform: "scale(2.9)"
  });
})

  .mouseleave(function() {
  cursor.css({
    transform: "scale(1)"
  });
});

  $(window)
  .mousedown(function() {
  cursor.css({
    transform: "scale(.41)"
  });
})

  .mouseup(function() {
  cursor.css({
    transform: "scale(1)"
  });
});

  }
};
