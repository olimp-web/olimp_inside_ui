let  close = document.getElementsByClassName('tag_profile__close');
for(let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function() {
            const parent = close[i].parentNode;
            if(parent.classList.contains('hidden')) {
                parent.classList.remove('hidden');
            } else { 
                parent.classList.add('hidden');
            }
        });
    }