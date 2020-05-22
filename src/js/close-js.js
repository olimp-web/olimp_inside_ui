for(let i = 1; i < 6; i++) {
        let close = document.getElementById('tag__' + i + '-close');
        console.log(i);
        close.addEventListener('click', function() {
            const parent = close.parentNode;
            console.log('!');
            if(parent.classList.contains('hidden')) {
                parent.classList.remove('hidden');
            } else { 
                parent.classList.add('hidden');
            }
        });
    }