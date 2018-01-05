
function hideWhenClicked(event) {
  //$(event.target).hide()
  $(event.target).css({'visibility':'hidden'})};

}

// function hideWhenClicked(event) {
//   var $target = $(event.target);
//   $target.hide();
// }

//hider.click(console.log('clicked!!!'))/

$('#hide_this').click(hideWhenClicked)
