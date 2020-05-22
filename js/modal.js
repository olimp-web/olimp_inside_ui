document.addEventListener("DOMContentLoaded", function(){
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#open-modal"]').addEventListener('click', function() {
      document.body.style.overflow = 'hidden';
      document.querySelector('#open-modal_edit').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click',function(){
      document.body.style.overflow = 'visible';
      document.querySelector('#open-modal_edit').style.marginLeft = '0px';
    });
})
  

document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#open-modal"]').addEventListener('click', function() {
    document.body.style.overflow = 'hidden';
    document.querySelector('#open-modal_rate').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#open-modal_rate').style.marginLeft = '0px';
  });
})
  
for(let i = 0; i < 6; i++) {
  let onTop = document.getElementsByClassName('on-top')[i];
    onTop.addEventListener('click', function() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
    });
}


// const editBtn = document.querySelector('.edit-profile_btn');
// const rateBtn = document.querySelector('.rate-project_btn');

//   editBtn.addEventListener('click', function() {
//     console.log('!');
//     const edit = document.querySelector('.edit-profile');
//     const rate = document.querySelector('.rate-project');
//       if(edit.classList.contains('hidden')) {
//         edit.classList.remove('hidden');
//         rate.classList.add('hidden');
//       }
//       else{
//         rate.classList.add('hidden');
//         }
//         })

//   rateBtn.addEventListener('click', function() {
//     console.log('!');
//     const edit = document.querySelector('.edit-profile');
//     const rate = document.querySelector('.rate-project');
//     if(rate.classList.contains('hidden')) {
//       rate.classList.remove('hidden');
//       edit.classList.add('hidden');
//       }
//     else{
//       edit.classList.add('hidden');
//     }
//   })