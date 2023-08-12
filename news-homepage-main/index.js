 const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('.mobile2') 
 const close = document.querySelector('.close_button')

 const openMenu = function(){
    menuOpen.classList.remove('hidden')
 }

 const closeMenu = function (){
    menuOpen.classList.add('hidden')
 }

 close.addEventListener('click',closeMenu )

 menu.addEventListener('click', openMenu)


document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !menuOpen.classList.contains('hidden')){
            closeMenu()
    }
}) 