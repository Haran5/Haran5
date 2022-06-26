/*=========================== MENU SHOW Y HIDDEN ==================*/

const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')


/*================== MENU SHOW ==============*/
/*================== VALIDATION IF CONSTANT EXITS ===========*/

if(navToggle)
{
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*======================= MENU HIDDEN ===========*/
/*======================= Validation if constant exits ===============*/
if(navClose)
{
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*================= REMOVE MENU MOBILE ============*/
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.addEventListener('click', linkAction))


function linkAction()
{
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

/*======================= ACCORDION SKILLS ========================= */
const skillsContent = document.getElementsByClassName('skills_content')
const skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills()
{
    let itemClass = this.parentNode.className

    for( i = 0; i < skillsContent.length; i++)
    {
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close')
    {
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/* ======================= QUALIFICATION TABS ===============================*/

const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

/*========================= SERVICES MODEL =======================*/
const modalViews = document.querySelectorAll('.services_modal')
const modalBtns = document.querySelectorAll('.services_button')
const modalCloses = document.querySelectorAll('.services_modal-close')


let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalViews) =>{
            modalViews.classList.remove('active-modal')
        })
    })
})


/*================================= PORTFOLIO SWIPER ==========================*/





/* ===================================== SCROLL SECTION ACTIVE LINK =============================*/
const section = document.querySelectorAll('section[id]')

function scrollActive()
{
    const scrollY = window.pageYOffset

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 250;
        sectionsId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav_menu a[href*=' + sectionsId + ']').classList.add('active-link')

        }
        else
        {
            document.querySelector('.nav_menu a[href*=' + sectionsId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



/* ========================== CHANGE BACKGROUND HEADER===================*/

function scrollHeader()
{
    const nav = document.getElementById('header')

    //when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80)
    {
        nav.classList.add('scroll-header');
    }    
    else
    {
        nav.classList.remove('scroll-header')
    }    

}
window.addEventListener('scroll', scrollHeader)


/* =============================== SHOW SCROLL UP ========================*/
function scrollUp()
{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 560 viewport height, add the show scroll class to the a tag with the scroll
    if(this.scrollY >= 560)
    {
        scrollUp.classList.add('show-scroll')
    }
    else
    {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)


/*============================== DARK LIGHT THEME =========================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'


//previously selected topic (if user selected)
const selectedtheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


//we obtaining the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'


//we validate if the user previously chose a topic
if(selectedtheme)
{
    //if the validation is fullfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedtheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)

}


//activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
    //add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})







