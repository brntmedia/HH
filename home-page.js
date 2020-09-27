/*var modal = document.getElementById("myModal");
var btn= document.getElementById('myBtn');
var span=document.getElementsByClassName('close')[0];

btn.onclick = function(){
    modal.style.display = "block";
}

span.onclick=function(){
    modal.style.display='none';
}

window.onclick=function(){
    if(event.target == modal){
        modal.style.display='none';
    }
}*/

var sideMenu=document.getElementById('side-menu');
var openSideMenu=document.getElementById('openSlide');
var closeSideMenu=document.getElementById('closeMenu');

var funMenu=document.getElementById('funMenu');
var openFunMenu=document.getElementById("openFunction");
var closeFunMenu=document.getElementById('closeFun');

openSideMenu.onclick=function(){
    sideMenu.style.width='250px';
}
closeSideMenu.onclick=function(){
    sideMenu.style.width='0px';
}

openFunMenu.onclick=function(){
    funMenu.style.width='250px';
}

closeFunMenu.onclick=function(){
    funMenu.style.width='0px';
}

/*let vh = window.innerHeight*0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`)

window.addEventListener('resize',() => {
    let vh = window.innerHeight*0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
})*/

/*var form=document.getElementById("modalForm");
var button=document.getElementById("button");
var mSpan=document.getElementsByClassName("mClose")[0];

button.onclick=function(){
    form.style.display='flex';
}

mSpan.onclick=function(){
    form.style.display='none';
}

window.onclick=function(){
    if(event.target == form){
        form.style.display='none';
    }
} 
*/
