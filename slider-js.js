var i1;
var l=1200;
var delta=100;
play();
function play(){
    i1=setInterval("forward()",3000);
}

var slideN=1;
function forward(){
    slideLeftReset();
    document.getElementById('slide'+slideN).style.left=delta+"px";
    slideN++;
    if(slideN>=5) {
        slideN=1;
    }
    slideOpacityReset();
    document.getElementById('slide'+slideN).style.opacity=1;

}

function slideOpacityReset(){
    for(var i=1;i<=4;i++){
        document.getElementById('slide'+i).style.opacity=0;
        // document.getElementById('slide'+i).style.left='0';
    }
}
function slideLeftReset(){
    for(var i=1;i<=4;i++){
        document.getElementById('slide'+i).style.left='0';
    }
}
function next() {
    clearInterval(i1);
    forward();
    play();
}
function backward() {
    slideN--;
    if (slideN <= 0) slideN = 4;
    slideOpacityReset();
    document.getElementById('slide' + slideN).style.opacity = 1;
}
    function prev(){
        clearInterval(i1);
        backward();
        play();
}






