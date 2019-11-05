window.addEventListener('load',(e)=>{
    
    document.querySelector('#menu-toggle').addEventListener('click',openMenu);
    document.querySelector('#menu-toggle').addEventListener('touch',openMenu);
    function openMenu(e){
        e.currentTarget.style.opacity='0';
        document.querySelector('.hidden-menu').style.top="0";
        document.body.style.position='fixed';
    }
    function closeMenu(e){
        document.querySelector('#menu-toggle').style.opacity='1';
        document.querySelector('.hidden-menu').style.top="-100%";
        document.body.style.position='';
    }
    document.querySelector('.hidden-menu>#remove-menu>img').addEventListener('click',closeMenu);
    document.querySelector('.hidden-menu>#remove-menu>img').addEventListener('touch',closeMenu);

    for(let a of document.querySelectorAll('.hidden-menu a')){
        a.addEventListener('touch',closeMenu);
        a.addEventListener('click',closeMenu);
    }
})
