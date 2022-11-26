// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
//   })

  $('.unread').toolbar({
    content: '#toolbar-unread',
      position: 'bottom',
      event: 'click',
    hideOnClick: true
  });
  $('.login').toolbar({
    content: '#login',
      position: 'bottom'
  });

  $('.link').toolbar({
    content: '#link',
      position: 'bottom'
  });
  $('.share').toolbar({
    content: '#share',
      position: 'bottom'
  });
  $('.info-icon').toolbar({
    content: '#info',
      position: 'right',
  });
  // $('.icon').toolbar({
  //   content: '#icon',
  //     position: 'top'
  // });


//   $(function() {     
//     $('.nav-mobile').on('click',function(e) {
//         e.preventDefault();
//         $(".navbar").slideToggle();
//     });
// });

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