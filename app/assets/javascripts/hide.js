let hider = document.getElementById('hide_this')
//
function hideWhenClicked(event) {
  $(event.target).hide()
//    hider.click(console.log('clicked!!!'))//.css({'visibility':'hidden'})};
//   // hider.click(hideButton);
//   hider.click(function(){
//     console.log('button was clicked')
//   })
}

// function hideWhenClicked(event) {
//   var $target = $(event.target);
//   $target.hide();
// }

//hider.click(console.log('clicked!!!'))//.css({'visibility':'hidden'})};

$('#hide_this').click(hideWhenClicked)
