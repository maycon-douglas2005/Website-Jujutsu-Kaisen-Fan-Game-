let menu_hbg = document.getElementById("menu");

let opcoes_do_menu = document.getElementById('opcoes_menu');

let menuVisivel = false;


menu_hbg.addEventListener('click', function(){
    if(menuVisivel){
        opcoes_do_menu.style.display = 'none';
        menuVisivel = false;
        
    }
    else {
        opcoes_do_menu.style.display = 'grid';
        menuVisivel = true;
        
    }
})


