window.onload = function () {
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var moveBox = document.getElementById("move_box_tab");
    var count = moveBox.children.length;
    var clickCount = 1;
    moveBox.innerHTML += moveBox.children[0].outerHTML;
    moveBox.innerHTML = moveBox.children[count - 1].outerHTML + moveBox.innerHTML;
    var width = parseInt(moveBox.children[0].style.width);
    moveBox.style.marginLeft = "-" + width + "px";
    moveBox.style.width = width * moveBox.children.length + "px";
    var flag = true;
    prev.onclick = function () {
        if (flag) {
            flag = false;
            var left = parseFloat(moveBox.style.marginLeft);
            clickCount--;
            var interval = setInterval(function () {
                left += 21;
                if (left >= -(width * clickCount)) {
                    if (clickCount == 0) {
                        clickCount = count;
                        left = -width * count;
                    } else {
                        left = -(width * clickCount);
                    }
                    moveBox.style.marginLeft = left + "px";
                    clearInterval(interval);
                    flag = true;
                } else {
                    moveBox.style.marginLeft = left + "px";
                }
            });
        }
    };
    next.onclick = function () {
        if (flag) {
            flag = false;
            var left = parseFloat(moveBox.style.marginLeft);
            clickCount++;
            var interval = setInterval(function () {
                left -= 21;
                if (left <= -(width * clickCount)) {
                    if (clickCount == count + 1) {
                        clickCount = 1;
                        left = "-" + width;
                    } else {
                        left = -(width * clickCount);
                    }
                    moveBox.style.marginLeft = left + "px";
                    clearInterval(interval);
                    flag = true;
                } else {
                    moveBox.style.marginLeft = left + "px";
                }
            });
        }
    };
    var touch = document.getElementById('touch');
    var cliclBtn = document.getElementById('clibtn');
    var moveBtn = cliclBtn.querySelectorAll('.move_btn');
    touch.onmouseover = function () {
        for (var i = 0; i < moveBtn.length; i++) {
            moveBtn[i].style.display = 'block';
        }
    }
    touch.onmouseout = function () {
        for (var z = 0; z < moveBtn.length; z++) {
            moveBtn[z].style.display = 'none';
        }
    }
}