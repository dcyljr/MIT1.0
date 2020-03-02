window.onload = function () {
    var showCode = document.getElementById('showcode');
    var wxCode = document.getElementById('wx_code');
    var hideCode = document.getElementById('hidecode');
    showCode.onclick = function () {
        wxCode.style.display = 'block';
    }
    hideCode.onclick = function () {
        wxCode.style.display = 'none';
    }

}