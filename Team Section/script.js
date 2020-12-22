

window.addEventListener('load', (event) => {
    let el = document.querySelectorAll(".card");
const height = el[0].clientHeight
const width = el[0].clientWidth
for(let i=0;i<el.length;i++){
    el[i].addEventListener('mousemove', function(e) {
        const xVal = e.layerX
        const yVal = e.layerY
        const yRotation = 25 * ((xVal - width / 2) / width)
        const xRotation = -25 * ((yVal - height / 2) / height)
        const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
        this.style.transform = string
    })
}
for(let i=0;i<el.length;i++){
    el[i].addEventListener('mouseout', function() {
        el[i].style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
    })
}
for(let i=0;i<el.length;i++){
    el[i].addEventListener('mousedown', function() {
        el[i].style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    })
}
for(let i=0;i<el.length;i++){
    el[i].addEventListener('mouseup', function() {
        el[i].style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    })
}
});





