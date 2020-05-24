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
