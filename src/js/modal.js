document.addEventListener("DOMContentLoaded", function(){
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#open-modal"]').addEventListener('click', function() {
      document.body.style.overflow = 'hidden';
      document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click',function(){
      document.body.style.overflow = 'visible';
      document.querySelector('#openModal').style.marginLeft = '0px';
    });
  })
  
  
  
  let onTop = document.getElementById('on-top');
          onTop.addEventListener('click', function() {
              document.body.scrollTop = 0; // For Safari
              document.documentElement.scrollTop = 0;
          });