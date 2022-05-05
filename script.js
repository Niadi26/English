document.body.addEventListener('click', (e) => {
    if(e.target.classList.value === 'img') {
        console.log('aa')
        const src = e.target.dataset.src;
        makePopap(src);
    }
})

function makePopap(src) {
    const popap = document.createElement('div');
    popap.classList.add('popap');
    const popapImg = document.createElement('div');
    popapImg.classList.add('popap__img');
    const img = new Image();
    img.src = `./data/${src}.jpg`;
    img.onload = () => {  
        popapImg.style.backgroundImage = `url('${img.src}')`;
    }
    const popapBtn = document.createElement('div');
    popapBtn.classList.add('popap__btn');
    popapBtn.innerHTML= 'Close';
    popap.append(popapImg);
    popap.append(popapBtn);
    document.body.prepend(popap);
    popap.addEventListener('click', (e) => {
        if(e.target.classList.value !== 'popap__img') {
            popap.remove();
        }
    })
}