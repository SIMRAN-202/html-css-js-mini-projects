var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn')

for (i of btn){
    i.addEventListener('click',(value)=>{
        btntext= value.target.innerText;
        screen.value+=btntext;
    })
}

function sin()
    {
        screen.value=Math.sin(screen.value);
    }

function cos()
    {
        screen.value=Math.cos(screen.value);
    }

function tan()
    {
        screen.value=Math.tan(screen.value);
    }

function pow()
    {
        screen.value=Math.pow(screen.value,2);
    }

function sqrt()
    {
        screen.value=Math.sqrt(screen.value,2);
    }

function log()
    {
        screen.value=Math.log(screen.value);
    }

function pi()
    {
        screen.value= 3.14159265359;
    }

function e()
    {
        screen.value=2.71828182846;
    }

function backspc()
    {
        screen.value=screen.value.substr(0,screen.value.length-1);
    }

function fact()
    {
        var f=1;
        for(var i=1;i<=screen.value;i++){
            f=f*i;
        }
        screen.value=f;
    }