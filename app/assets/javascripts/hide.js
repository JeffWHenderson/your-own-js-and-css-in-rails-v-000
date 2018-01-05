let hider = document.getElementById('hide_this')

function hideWhenClicked(e) {
  // hider.click(hideButton);
  hider.click(function(){
    console.log('button was clicked')
  })
}

// function hideWhenClicked(event) {
//   var $target = $(event.target);
//   $target.hide();
// }

$('#hide_this').click().css({'visibility':'hidden'})};