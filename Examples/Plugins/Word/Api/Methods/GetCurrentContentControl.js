document.getElementById ("buttonIDChangeState").onclick = function () {
    var _Control = [];
    window.buttonIDChangeState_click = true;
    window.Asc.plugin.executeMethod("GetCurrentContentControl");
};