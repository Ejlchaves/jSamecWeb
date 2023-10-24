const nav = document.querySelector('#nav1');

window.addEventListener('scroll', () => {
if(window.scrollY>70){
    nav.classList.add("bg-dark")
} else {
    nav.classList.remove("bg-dark")
}
})

