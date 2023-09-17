// document.querySelector('#btnLeft').onclick = () => {
//     document.querySelector('ol').classList.add('left');
// };

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

    // slides.style.marginLeft = slides.children[0].offsetLefxt - slides.children[newIndex].offsetLeft + 'px';
    slides.style.marginLeft = `${newIndex * -100}%`;

    memText.textContent = slides.children[newIndex].firstChild.dataset.memeText;

}
function btnClick_handler(event) {
    const target = event.target.closest('button');
    if (!target) {
        return;
    }
    changeSlide(target);
}
buttons.addEventListener('click', btnClick_handler);

changeSlide(buttons.children[0].children[0]);