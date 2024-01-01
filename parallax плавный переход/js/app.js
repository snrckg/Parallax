// Движения мыши ака паралакс

window.addEventListener("scroll", e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})
// плавная прокрутка (можно взять библиотеки в этом же шаблоне)
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
wrapper: '.wrapper',
content: '.content'
})