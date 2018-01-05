
function hideWhenClicked(event) {
  //$(event.target).hide()
  $(event.target).css({'visibility':'hidden'})};
}

$('#hide_this').click(hideWhenClicked)
