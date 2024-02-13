const container = document.getElementById('hover-img');
const staticImage = document.getElementById('static-image');
const video = document.getElementById('video');
const acceptBtn = document.getElementById('success-btn');
const openbutton = document.getElementById('openbtn');

openbutton.addEventListener('click', () => {
    document.getElementById('open-wrapper').classList.add('deactivated');
    document.getElementById('glwrapper').classList.add('animate');
});

container.addEventListener('mouseover', () => {
    staticImage.style.display = 'none';
    video.style.display = 'block';
    video.play();
});

container.addEventListener('mouseout', () => {
    staticImage.style.display = 'block';
    video.style.display = 'none';
    video.pause();
});

const redcross = document.getElementById("red-cross");
const failsound = document.getElementById('clickSound');


container.addEventListener('click', () => {
    
    setTimeout(() => {
        container.classList.add('animate-fail');
        redcross.classList.add('blink');
        failsound.play();
        setTimeout(() => {
            if (container.classList.contains('animate-fail')) {
                container.classList.remove('animate-fail');
            }  
        }, 700); 
        setTimeout(() => {
            redcross.classList.remove('blink');
        }, 2000);
    }
    , 500);
});

const greenarr = document.getElementById("success");
const devaizsound = document.getElementById("devaizsound");
const applepaysound = document.getElementById("applepaysound");
const finalvideo = document.getElementById('finvideo');
const finalvideocontainer = document.getElementById('finalvideocontainer');
const finalimage = document.getElementById('success-image-me');

acceptBtn.addEventListener('click', () => {
    acceptBtn.removeEventListener('click', this);
    finalimage.classList.add('active');
    greenarr.classList.add('blink');
    setTimeout(() => {
        applepaysound.play();
    }, 200);
    setTimeout(() => {
        devaizsound.play();
    }, 500);
    setTimeout(() => {
        finalvideocontainer.classList.add('active');
        video.pause();
        finalvideo.play();
    }, 4000);
})
