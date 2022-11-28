// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
//   })

 

$(function() {     
  $('.nav-mobile').on('click',function() {
     $(".navbar").css(
      'display', 'flex'
     ).fadeIn('slow');
  });

  $('.nav-close').on('click',function() {
    $(".navbar").css(
     'display', 'none'
    ).fadeOut();
 });
});

$(document).ready(()=>{
  let isMenuAlreadyOpen = false;
  $('.nav-mobile').on('click',()=>{
        $('body').css("overflow",isMenuAlreadyOpen?"auto":"hidden")
        isMenuAlreadyOpen = !isMenuAlreadyOpen
  })
});






$(document).ready(function(){
  $(".unread").click(function(){
    $(".dropdown-menu-up").toggle();
  });
});
