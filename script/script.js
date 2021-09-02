// The function toggles more (hidden) text when the user clicks on "Read more". The IF ELSE statement ensures that the text 'read more' and 'read less' changes interchangeably when clicked on.
// $('.moreless-button').click(function() {
//   $('.moretext').slideToggle();
//   if ($('.moreless-button').text() == "Read more") {
//     $(this).text("Read less");
//
//   } else {
//     $(this).text("Read more");
//
//   }
// });

$('.moreless-button').click(function() {
  $(this).prev().slideToggle();
  $(this).siblings('.dots').slideToggle();
  // $('.moretext').slideToggle();

  if ($(this).text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});




// $(document).ready(function(){
//   $(".read").click(function(){
//     $(this).prev().toggle();
//     if($(this).text()=='Read more'){
//       $(this).text('Read less');
//     }
//     else{
//       $(this).text('Read more');
//     }
// });

//
// $(document).ready(function(){
// $("button").click(function(){
// $("p").hide();
// });
// });



// <iframe src="img/4.pdf#toolbar=0" width="100%" height="500px">
// </iframe>
