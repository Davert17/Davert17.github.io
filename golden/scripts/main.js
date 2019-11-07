window.addEventListener('load',(e)=>{
    
    document.querySelector('#menu-toggle').addEventListener('click',openMenu);
    document.querySelector('#menu-toggle').addEventListener('touch',openMenu);
    function openMenu(e){
        document.querySelector('body').style.height='100%';

        document.querySelector('body').style.overflow='hidden';
        // document.querySelector('body').style.position='relavite';

        // document.querySelector('html').style.height='100%';

        // document.querySelector('html').style.overflow='hidden';
        // document.querySelector('html').style.position='relavite';

        document.addEventListener(
            'touchmove',
            (e)=>{e.preventDefault();}
            );
            // document.addEventListener(
            //     "scroll",
            //     stopScroll
            //     );
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
        // document.querySelector('body').style.position='';
        // document.querySelector('body').style.overflow='';

        // document.querySelector('html').style.height='';

        // document.querySelector('html').style.overflow='';
        // document.querySelector('html').style.position='';


        document.removeEventListener(
            'touchmove',
            stopScroll
            );
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