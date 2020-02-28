window.onload = function () {
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var multiTab = document.getElementById('multi_tab');
    var circles = document.getElementById('multi_circles').getElementsByTagName('li');
    var moveBox = document.getElementById('movebox');
    var currentIndex = 0;
    var preIndex = 0;
    var timer = null;
    prev.addEventListener('click',preMove);
    next.addEventListener('click',nextMove);
    for(var i=0;i<circles.length;i++){
        circles[i].setAttribute('id',i);
        circles[i].addEventListener('mouseenter',overCircle);
    }
    moveBox.addEventListener('mouseover',function(){
        prev.style.display='block';
        next.style.display='block';
    });
    moveBox.addEventListener('mouseout',function(){
        prev.style.display='none';
        next.style.display='none';
    });
    changeCircleColor(preIndex,currentIndex);
    function overCircle(){
        preIndex=currentIndex;
        currentIndex=parseInt(this.id);
        changeCircleColor(preIndex,currentIndex);
        moveBanner();
    }

    function changeCircleColor(preIndex,currentIndex){
        circles[preIndex].style.border='none';
        circles[currentIndex].style.border='1px solid #bd2238';
    }

    function preMove(){
        preIndex=currentIndex;
        if(currentIndex!=0){
            currentIndex--;
        }else{
            currentIndex=3;
        }
        changeCircleColor(preIndex,currentIndex);
        moveBanner();
    }

    function nextMove(){
        preIndex=currentIndex;
        if(currentIndex!=3){
            currentIndex++;
        }else{
            currentIndex=0;
        }
        changeCircleColor(preIndex,currentIndex);
        moveBanner();
    }

    function moveBanner(){
        multiTab.style.left=-currentIndex*1100+'px';
    }

}