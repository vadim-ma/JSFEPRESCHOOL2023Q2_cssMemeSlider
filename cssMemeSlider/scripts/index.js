const buttons = document.querySelector('.slider__btn-list');
const memText = document.querySelector('.slider__meme-text');
const slides = document.querySelector('.slider__image-list');

function getBtnIndex(btn) {
    let index = 0;
    for (let index = 0; buttons.children.length; index++) {
        if (buttons.children[index].children[0] === btn) {
            return index;
        }
    }
    return -1;
}
function changeSlide(btn) {
    const activeBtn = buttons.querySelector('.button.active');
    activeBtn.classList.remove('active');
    btn.classList.add('active');

    const oldInderx = getBtnIndex(activeBtn);
    const newIndex = getBtnIndex(btn);

    slides.style.marginLeft = `${newIndex * -100}%`;

    memText.classList.add('fadein'); //start text change animation
}
function btnClick_handler(event) {
    const target = event.target.closest('button');
    if (!target) {
        return;
    }
    changeSlide(target);
}

function changeMemeText(){
    const activeBtn = buttons.querySelector('.button.active');
    const newIndex = getBtnIndex(activeBtn);
    memText.textContent = slides.children[newIndex].firstChild.dataset.memeText;
}
function animationend_Handler(event){
    switch (event.animationName) {
        case 'fadein':
            memText.classList.remove('fadein');
            changeMemeText();
            memText.classList.add('fadeout');
            
            break;
        case 'fadeout':
            memText.classList.remove('fadeout')
        
        break;
    
        default:
            break;
    }
}
buttons.addEventListener('click', btnClick_handler);
memText.addEventListener("animationend", animationend_Handler);

changeMemeText();