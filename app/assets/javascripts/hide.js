function hideWhenClicked() {
  let hider = document.getElementById('hide_this')
  // hider.click(hideButton);
  hider.click(function(){
    console.log('button was clicked')
  })
}

// function hideButton() {
//     {$('#buttonId').css({'visibility':'hidden'})};
// }
