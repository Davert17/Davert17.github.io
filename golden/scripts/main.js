window.addEventListener('load',(e)=>{
    
    document.querySelector('#menu-toggle').addEventListener('click',openMenu);
    document.querySelector('#menu-toggle').addEventListener('touch',openMenu);
    function openMenu(e){
        
        document.querySelector('body').style.height='100%';
        document.querySelector('body').style.position='relavite';
        document.querySelector('body').style.overflow='hidden';
        document.addEventListener("scroll",stopScroll);
        e.currentTarget.style.opacity='0';
        document.querySelector('.hidden-menu').style.top="0";
        // setTimeout(()=>{document.body.style.position='fixed'},1000);

    }
    function closeMenu(e){
        
        document.querySelector('#menu-toggle').style.opacity='1';
        document.querySelector('.hidden-menu').style.top="-100%";
        // document.body.style.position='';
        document.querySelector('body').style.height='';
        document.querySelector('body').style.position='';
        document.querySelector('body').style.overflow='';



    }
    function stopScroll(e){
        e.preventDefault();
    }
    document.querySelector('.hidden-menu>#remove-menu>img').addEventListener('click',closeMenu);
    document.querySelector('.hidden-menu>#remove-menu>img').addEventListener('touch',closeMenu);

    for(let a of document.querySelectorAll('.hidden-menu a')){
        a.addEventListener('touch',closeMenu);
        a.addEventListener('click',closeMenu);
    }
})