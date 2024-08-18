document.querySelector('.window__title-bar').addEventListener('mousedown', function (e) {
    const windowElement = document.querySelector('.window');
    let offsetX = e.clientX - windowElement.offsetLeft;
    let offsetY = e.clientY - windowElement.offsetTop;

    function moveAt(e) {
        windowElement.style.left = e.clientX - offsetX + 'px';
        windowElement.style.top = e.clientY - offsetY + 'px';
    }

    document.addEventListener('mousemove', moveAt);

    document.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', moveAt);
    }, { once: true });
});
