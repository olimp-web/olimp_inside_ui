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
const nextLvl1 = document.querySelector('.skill__anim_nom1-1');
        nextLvl1.addEventListener('click', function() {
            const moreInfo1 = document.querySelector('.skill__more-skills_nom1-1');
            const anim1 = document.querySelector('.skill__anim_pic1');
            if(moreInfo1.classList.contains('show')) {
                moreInfo1.classList.remove('show');
                moreInfo1.classList.remove('skill__more-skills_appear');
                anim1.classList.remove('skill__anim_pic1-active');
            } else {
                setTimeout(function () {  
                moreInfo1.classList.add('skill__more-skills_appear'); 
                }, 20);  
                moreInfo1.classList.add('show');
                
                anim1.classList.add('skill__anim_pic1-active');
            }
        });

const nextLvl2 = document.querySelector('.skill__anim_nom1-2');
        nextLvl2.addEventListener('click', function() {
            const moreInfo2 = document.querySelector('.skill__more-skills_nom1-2');
            const anim2 = document.querySelector('.skill__anim_pic2');
            if(moreInfo2.classList.contains('show')) {
                moreInfo2.classList.remove('show');
                moreInfo2.classList.remove('skill__more-skills_appear');
                anim2.classList.remove('skill__anim_pic1-active');
            } else {
                setTimeout(function () {  
                moreInfo2.classList.add('skill__more-skills_appear'); 
                }, 20);  
                moreInfo2.classList.add('show');
                anim2.classList.add('skill__anim_pic1-active');
            }
        })

const nextLvl3 = document.querySelector('.skill__anim_nom1-3');
        nextLvl3.addEventListener('click', function() {
            const moreInfo3 = document.querySelector('.skill__more-skills_nom1-3');
            const anim3 = document.querySelector('.skill__anim_pic3');
            if(moreInfo3.classList.contains('show')) {
                moreInfo3.classList.remove('show');
                moreInfo3.classList.remove('skill__more-skills_appear');
                anim3.classList.remove('skill__anim_pic1-active');
            } else {
                setTimeout(function () {  
                moreInfo3.classList.add('skill__more-skills_appear'); 
                }, 20); 
                moreInfo3.classList.add('show');
                anim3.classList.add('skill__anim_pic1-active');
            }
        })



const nextLvl4 = document.querySelector('.skill__anim_nom2-1');
        nextLvl4.addEventListener('click', function() {
            const moreInfo4 = document.querySelector('.skill__more-skills_nom2-1');
            const anim4 = document.querySelector('.skill__anim_pic4');
            if(moreInfo4.classList.contains('show')) {
                moreInfo4.classList.remove('show');
                moreInfo4.classList.remove('skill__more-skills_appear');
                anim4.classList.remove('skill__anim_pic4-active');
            } else {
                setTimeout(function () {  
                moreInfo4.classList.add('skill__more-skills_appear'); 
                }, 20); 
                moreInfo4.classList.add('show');
                anim4.classList.add('skill__anim_pic4-active');
            }
        });

const nextLvl5 = document.querySelector('.skill__anim_nom2-2');
        nextLvl5.addEventListener('click', function() {
            const moreInfo5 = document.querySelector('.skill__more-skills_nom2-2');
            const anim5 = document.querySelector('.skill__anim_pic5');
            if(moreInfo5.classList.contains('show')) {
                moreInfo5.classList.remove('show');
                moreInfo5.classList.remove('skill__more-skills_appear');
                anim5.classList.remove('skill__anim_pic5-active');
            } else {
                setTimeout(function () {  
                moreInfo5.classList.add('skill__more-skills_appear'); 
                }, 20); 
                moreInfo5.classList.add('show');
                anim5.classList.add('skill__anim_pic5-active');
            }
        })

const nextLvl6 = document.querySelector('.skill__anim_nom2-3');
        nextLvl6.addEventListener('click', function() {
            const moreInfo6 = document.querySelector('.skill__more-skills_nom2-3');
            const anim6 = document.querySelector('.skill__anim_pic6');
            if(moreInfo6.classList.contains('show')) {
                moreInfo6.classList.remove('show');
                moreInfo6.classList.remove('skill__more-skills_appear');
                anim6.classList.remove('skill__anim_pic6-active');
            } else {
                setTimeout(function () {  
                moreInfo6.classList.add('skill__more-skills_appear'); 
                }, 20); 
                moreInfo6.classList.add('show');
                anim6.classList.add('skill__anim_pic6-active');
            }
        })



const nextLvl7 = document.querySelector('.skill__anim_nom3-1');
        nextLvl7.addEventListener('click', function() {
            const moreInfo7 = document.querySelector('.skill__more-skills_nom3-1');
            const anim7 = document.querySelector('.skill__anim_pic7');
            if(moreInfo7.classList.contains('show')) {
                moreInfo7.classList.remove('show');
                moreInfo7.classList.remove('skill__more-skills_appear');
                anim7.classList.remove('skill__anim_pic7-active');
            } else {
                setTimeout(function () {  
                moreInfo7.classList.add('skill__more-skills_appear'); 
                }, 20); 
                moreInfo7.classList.add('show');
                anim7.classList.add('skill__anim_pic7-active');
            }
        });

const nextLvl8 = document.querySelector('.skill__anim_nom3-2');
        nextLvl8.addEventListener('click', function() {
            const moreInfo8 = document.querySelector('.skill__more-skills_nom3-2');
            const anim8 = document.querySelector('.skill__anim_pic8');
            if(moreInfo8.classList.contains('show')) {
                moreInfo8.classList.remove('show');
                moreInfo8.classList.remove('skill__more-skills_appear');
                anim8.classList.remove('skill__anim_pic8-active');
            } else {
                setTimeout(function () {  
                moreInfo8.classList.add('skill__more-skills_appear'); 
                }, 20); 
                moreInfo8.classList.add('show');
                anim8.classList.add('skill__anim_pic8-active');
            }
        })

const nextLvl9 = document.querySelector('.skill__anim_nom3-3');
        nextLvl9.addEventListener('click', function() {
            const moreInfo9 = document.querySelector('.skill__more-skills_nom3-3');
            const anim9 = document.querySelector('.skill__anim_pic9');
            if(moreInfo9.classList.contains('show')) {
                moreInfo9.classList.remove('show');
                moreInfo9.classList.remove('skill__more-skills_appear');
                anim9.classList.remove('skill__anim_pic9-active');
            } else {
                setTimeout(function () {  
                moreInfo9.classList.add('skill__more-skills_appear'); 
                }, 20); 
                moreInfo9.classList.add('show');
                anim9.classList.add('skill__anim_pic9-active');
            }
        })

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

