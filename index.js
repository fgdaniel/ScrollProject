const box = document.querySelector('.box');
const message = document.querySelector('#message');
var lastScrollTop = 0;
let i = 1;
let userHasScrolled = false;  

//Check if the image is in viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('scroll', function () {
    userHasScrolled = true; 
    const messageText = isInViewport(box) ?
        'The box is visible in the viewport' :
        'The box is not visible in the viewport';

    message.textContent = messageText;

    // Get scroll direction
    const scrollDirection = () => {
    
        var st = window.pageYOffset || document.documentElement.scrollTop; 
   
        if (st > lastScrollTop){
            message2.textContent = 'downscroll code';
            ShowNextPicture(userHasScrolled);
        } else {
            message2.textContent = 'upscroll code';
            ShowPreviousPicture(userHasScrolled);
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }

    // Change image if is in the viewport
    isInViewport(box) ? 
        scrollDirection() :
        box.src = `flow_images/${i}.jpg`;
}, { passive: true });

function ShowNextPicture(userScrolled) {
    if(userScrolled) {
        if(i < 6) {
            box.src = `flow_images/${i}.jpg`;
            ++i;
        }        
    }
}

function ShowPreviousPicture(userScrolled) {
    if(userScrolled) {
        if(i > 1) {
            box.src = `flow_images/${i}.jpg`;
            --i;
        }       
    }
}