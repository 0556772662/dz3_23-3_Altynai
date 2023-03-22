const btns = document.querySelectorAll('button')
const wrapper = document.querySelector('.btn-block')
//console.log(btns[0].classList)
//btns[0].style.background = 'red'

//btns[0].classList.add('red')
//btns[0].classList.remove('red')

/*btns.forEach(btn=> {
    btn.addEventListener('click', event => {
        if (event.target.classList.contains('red')) {
            event.target.classList.remove('red')
        } else {
            event.target.classList.add('red')
        }
    })
})*/
//ДЕЛЕГИРОВАНИЕ СОБЫТИЙ - НАВЕШИВАЕМ ОБРАБОТЧИКИ СОБЫТИЙ ИЗ РОДИТЕЛЬСКОГО ЭЛЕМЕНТА ВЫЛАВЛИВАЕМ ДОЧЕРНИЕ ЭЛЕМЕНТЫ
wrapper.append(document.createElement('button'))
wrapper.addEventListener('click', event => {
    //console.dir(event.target)
    const target = event.target
    if (target.tagName === 'BUTTON'){
        target.addEventListener('click', event => {
            if (event.target.classList.contains('red')) {
                event.target.classList.remove('red')
            } else {
                event.target.classList.add('red')
            }
        })
    }
})

