let menuContainer = document.getElementById('navbarSupportedContent');
let originalMenu = document.querySelector('#navbarSupportedContent>.navbar-nav');
let ellMenu = document.querySelectorAll('#navbarSupportedContent .navbar-nav>li:not(.hidden-ell-menu)');
let lastEllmenu = ellMenu[ellMenu.length-1];
let lastEllmenuHiddenMenu;
let hiddenEllMenu = document.querySelector('#navbarSupportedContent .hidden-ell-menu>.dropdown-menu');
let hiddenChildEllMenu;
let linkHiddenEllMenu = document.querySelector('#navbarSupportedContent .hidden-ell-menu');
let widthEllMenu = linkHiddenEllMenu.getBoundingClientRect().width;
let widthMenuContainer = menuContainer.getBoundingClientRect().width;
let widthWindow = document.documentElement.clientWidth;
let preWidthWindow = document.documentElement.clientWidth;
let flag = 'decrease';

hidden();
window.onresize = function(event) {
	widthWindow = document.documentElement.clientWidth;
	if(preWidthWindow < widthWindow){
		preWidthWindow = widthWindow;
		hiddenChildEllMenu = document.querySelectorAll('#navbarSupportedContent .hidden-ell-menu>.dropdown-menu>li');
		lastEllmenuHiddenMenu = hiddenChildEllMenu[hiddenChildEllMenu.length-1];
		flag = 'increase';
	}
	if(preWidthWindow > widthWindow){
		preWidthWindow = widthWindow;
		flag = 'decrease';
	}
	hidden();
};
function hidden(){
	widthEllMenu = linkHiddenEllMenu.getBoundingClientRect().width;
	widthMenuContainer = menuContainer.getBoundingClientRect().width;
	ellMenu = document.querySelectorAll('#navbarSupportedContent .navbar-nav>li:not(.hidden-ell-menu)');
	for(let i = 0; i < ellMenu.length; i++){
		widthEllMenu = widthEllMenu + ellMenu[i].getBoundingClientRect().width;
	}
	calculatingWidth();
	function calculatingWidth(){
		if(flag == 'decrease'){
			if(widthMenuContainer < widthEllMenu ){
				widthEllMenu = widthEllMenu - lastEllmenu.getBoundingClientRect().width;
				hiddenEllMenu.appendChild(lastEllmenu);
				ellMenu = document.querySelectorAll('#navbarSupportedContent .navbar-nav>li:not(.hidden-ell-menu)');
				lastEllmenu = ellMenu[ellMenu.length-1];
				if(widthMenuContainer < widthEllMenu){
					calculatingWidth();
				}	
			}
		}
		if(flag == 'increase'){
			if(lastEllmenuHiddenMenu !== undefined){
				if(widthMenuContainer > widthEllMenu + lastEllmenuHiddenMenu.getBoundingClientRect().width + 50){
					widthEllMenu = widthEllMenu + lastEllmenu.getBoundingClientRect().width;
					originalMenu.insertBefore(lastEllmenuHiddenMenu, linkHiddenEllMenu);
					hiddenChildEllMenu = document.querySelectorAll('#navbarSupportedContent .hidden-ell-menu>.dropdown-menu>li');
					lastEllmenuHiddenMenu = hiddenChildEllMenu[hiddenChildEllMenu.length-1];
				}
			}	
		}	
	}	
}

//	hide menu items -----------------------------------------------------------------

let showEllMenu = document.querySelectorAll('#navbarSupportedContent .navbar-nav li');
for(let j = 0; j < showEllMenu.length; j++){
	showEllMenu[j].classList.remove('hide-menu-items');
}