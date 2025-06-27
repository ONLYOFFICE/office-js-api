window.Asc.plugin.attachEditorEvent("onEnableMouseEvent", (isEnabled) => {
    let _frames = document.getElementsByTagName("iframe");
    if (_frames && _frames[0]) {
        _frames[0].style.pointerEvents = isEnabled ? "none" : "";
    }
});