window.Asc.plugin.onEnableMouseEvent = function(isEnabled) {
    var _frames = document.getElementsByTagName("iframe");
    if (_frames && _frames[0]) {
        _frames[0].style.pointerEvents = isEnabled ? "none" : "";
    }
};