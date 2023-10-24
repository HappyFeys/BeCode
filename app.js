let text = document.querySelector('.titrePrincipal')
let code1 = document.querySelector('.code1')
let code2 = document.querySelector('.code2')

window.addEventListener('scroll', () =>{
    let value= window.scrollY;

    text.style.marginTop = value *2.5 + 'px';
    code1.style.top = value *-1.5 + 'px';
    code1.style.left = value *-0.5 + 'px';
    code2.style.marginLeft = value *2.5 + 'px';
})
