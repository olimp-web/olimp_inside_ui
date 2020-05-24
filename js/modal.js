document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);

  let modals = document.getElementsByClassName('modal');
  for(let j = 0; j < modals.length; j++){
    
    modals[j].addEventListener('click', function() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
      document.body.style.overflow = 'hidden';
      
    })
  }


let  close = document.getElementsByClassName('close')
for(let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function() {
      document.body.style.overflow = 'visible';
    });
}
})