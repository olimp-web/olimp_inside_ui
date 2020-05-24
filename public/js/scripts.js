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
function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);
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
    const hide = document.getElementsByClassName('project__hide');
    hide[0].addEventListener('click', function() {
        const project = document.getElementsByClassName('project');
        if(project[0].classList.contains('hidden')) {
            
        } else {
            project[0].classList.add('hidden');
        }
    });
        const nextLvl = document.getElementsByClassName('skill__anim_nom1');
        for( let i = 0; i < nextLvl.length; i++){ 
            nextLvl[i].addEventListener('click', function() {
            const moreInfo = document.querySelector('.skill__more-skills_nom1-'+ (i+1));
            const anim = document.querySelector('.skill__anim_pic'+ (i+1));
            if(moreInfo.classList.contains('show')) {
                moreInfo.classList.remove('show');
                moreInfo.classList.remove('skill__more-skills_appear');
                anim.classList.remove('skill__anim_pic1-active');
            } else {
                setTimeout(function () {  
                moreInfo.classList.add('skill__more-skills_appear'); 
                }, 20);  
                moreInfo.classList.add('show');
                anim.classList.add('skill__anim_pic1-active');
            }
        });
    }


        const info = document.querySelector('.edit-profile__info');
        const skills = document.querySelector('.edit-profile__skills');
        const projects = document.querySelector('.edit-profile__projects');

        const info__main = document.querySelector('.main__profile-edit_info');
        const skills__main = document.querySelector('.main__profile-edit_skills');
        const project__main = document.querySelector('.main__profile-edit_projects');

        info.addEventListener('click', function() {
            if(info.classList.contains('nav__item_profile-edit_active')) {
            }
            else{
                info.classList.add('nav__item_profile-edit_active');
                skills.classList.remove('nav__item_profile-edit_active');
                projects.classList.remove('nav__item_profile-edit_active');
                info__main.classList.remove('hidden');
                skills__main.classList.add('hidden');
                project__main.classList.add('hidden');
            }
        })
        skills.addEventListener('click', function() {
            if(skills.classList.contains('nav__item_profile-edit_active')) {
            }
            else{
                skills.classList.add('nav__item_profile-edit_active');
                info.classList.remove('nav__item_profile-edit_active');
                projects.classList.remove('nav__item_profile-edit_active');
                info__main.classList.add('hidden');
                skills__main.classList.remove('hidden');
                project__main.classList.add('hidden');
            }
        })
        projects.addEventListener('click', function() {
            if(projects.classList.contains('nav__item_profile-edit_active')) {
            }
            else{
                skills.classList.remove('nav__item_profile-edit_active');
                info.classList.remove('nav__item_profile-edit_active');
                projects.classList.add('nav__item_profile-edit_active');
                info__main.classList.add('hidden');
                skills__main.classList.add('hidden');
                project__main.classList.remove('hidden');
            }
        })

function sortable(rootEl, onUpdate){
    var dragEl;
    
    // Делаем всех детей перетаскиваемыми
    [].slice.call(rootEl.children).forEach(function (itemEl){
        itemEl.draggable = true;
    });
    
    // Фнукция отвечающая за сортировку
    function _onDragOver(evt){
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'move';
       
        var target = evt.target;
        if( target && target !== dragEl && target.nodeName == 'LI' ){
     // Сортируем
     rootEl.insertBefore(dragEl, rootEl.children[0] !== target && target.nextSibling || target);
		}
    }
    
    // Окончание сортировки
    function _onDragEnd(evt){
        evt.preventDefault();
       
        dragEl.classList.remove('ghost');
        rootEl.removeEventListener('dragover', _onDragOver, false);
        rootEl.removeEventListener('dragend', _onDragEnd, false);

        // Сообщаем об окончании сортировки
        onUpdate(dragEl);
    }
    
    // Начало сортировки
    rootEl.addEventListener('dragstart', function (evt){
        dragEl = evt.target; // Запоминаем элемент который будет перемещать
        
        // Ограничиваем тип перетаскивания
        evt.dataTransfer.effectAllowed = 'move';
        evt.dataTransfer.setData('Text', dragEl.textContent);

        // Пописываемся на события при dnd
        rootEl.addEventListener('dragover', _onDragOver, false);
        rootEl.addEventListener('dragend', _onDragEnd, false);

        setTimeout(function (){
            // Если выполнить данное действие без setTimeout, то
            // перетаскиваемый объект, будет иметь этот класс.
            dragEl.classList.add('ghost');
        }, 0)
    }, false);
}
                        
// Используем                    
sortable( document.getElementById('tag__block'), function (item){
    console.log(item);
});

