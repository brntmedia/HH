var modal = document.getElementById("myModal");
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
}

var form=document.getElementById("modalForm");
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