//SLIDER
const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) =>{
        item.classList.remove("tabheader__item_active");
    });
};

hideTabContent();

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                hideTabContent(i);
                showTabContent(i);
            }
        });
    }
});

let autoSlide = 0
const slidetimer =()=>{
    autoSlide++
    if(autoSlide >3){
        autoSlide=0
    }
    hideTabContent()
    showTabContent(autoSlide)
}

setInterval(slidetimer, 2000)


 /*// МОДАЛЬНЫЕ ОКНА*/

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
     modal.classList.add('show')
     modal.classList.remove('hide')
     document.body.style.overflow = 'hidden'
 }
const closeModal = () => {
  modal.classList.add('hide')
  modal.classList.remove('show')
  document.body.style.overflow = ''
 }


modalTrigger.onclick = () => openModal()
closeModalBtn.onclick = () => closeModal()

modal.onclick = event => event.target === modal ? closeModal() : false
window.addEventListener('keydown', event => event.code === 'Escape' ? closeModal() : false )

// DATA

const deadline = '2023-03-22'
function getTimeRemaining(deadline) {
    const time = new Date(deadline) - new Date()
    const days = Math.floor((time / (1000 * 60 * 60 * 24)))
    const hours = Math.floor((time / (1000 * 60 * 60) % 24))
    const minutes = Math.floor((time / 1000 / 60) % 60)
    const seconds = Math.floor((time / 1000) % 60)

     return {
         'total': time,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
     }
 }

 function setClock(element, deadline) {
     const elem = document.querySelector(element)
     const days = elem.querySelector('#days')
     const hours = elem.querySelector('#hours')
     const minutes = elem.querySelector('#minutes')
     const seconds = elem.querySelector('#seconds')

     setInterval(updateClock, 1000)
     updateClock()

     function updateClock() {
         const time = getTimeRemaining(deadline)
         days.innerHTML = time.days
         hours.innerHTML = time.hours
         minutes.innerHTML = time.minutes
         seconds.innerHTML = time.seconds
     }
 }

 setClock('.timer', deadline)


function openModalScroll () {
    const page = document.documentElement
   if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
        openModal()
        window.removeEventListener('scroll', openModalScroll)
    }
 }

 window.addEventListener('scroll', openModalScroll)
 modalTimeout = setTimeout(openModal, 10000)





