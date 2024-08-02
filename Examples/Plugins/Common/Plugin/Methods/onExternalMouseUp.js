window.Asc.plugin.onExternalMouseUp = function () {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("mouseup", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    document.dispatchEvent(evt);
};