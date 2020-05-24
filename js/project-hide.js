    const hide = document.getElementsByClassName('project__hide');
    hide[0].addEventListener('click', function() {
        const project = document.getElementsByClassName('project');
        if(project[0].classList.contains('hidden')) {
            
        } else {
            project[0].classList.add('hidden');
        }
    });