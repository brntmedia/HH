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
var openFunMenu=document.getElementsByClassName("open-function");
var closeFunMenu=document.getElementById('closeFun');

openSideMenu.onclick=function(){
    sideMenu.style.width='250px';
}
closeSideMenu.onclick=function(){
    sideMenu.style.width='0px';
}
window.onclick=function(){
    if(style.width == sideMenu){
        sideMenu.style.width='0px';
    }
}

function openFunctionMenu(){
    document.getElementById('funSideMenu').style.width='250px';
}
function closeFunctionMenu(){
    document.getElementById('funSideMenu').style.width='0'
}

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
