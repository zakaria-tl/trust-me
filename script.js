window.onload = () => {
    const showBtn = document.getElementById('show'),
    song = document.getElementById('audio');
    const loader = document.querySelector('div.loaderContainer');

    loader.style.opacity = '0';
    setTimeout(() => {
        loader.remove();
    }, 500)


    showBtn.addEventListener('click', function (){
        showBtn.style.display = 'none';
        video.style.transform = 'translate(-50%, -50%) scale(1)';
        song.play();
    })
}