let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onlick = () =>{
    menu.classlist.toggle('fa-times');
    header.classlist.toggle('active');
}

window.onscroll = () =>{
    menu.classlist.remove('fa-times');  
    header.classlist.remove('active');
}

let cursor1 = document.querySelector('.cursor1');
let cursor2 = document.querySelector('.cursor2');

window.onmousemove = () =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pagex + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pagex + 'px';  
}

let links  = document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('acive');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('acive');
    }
});