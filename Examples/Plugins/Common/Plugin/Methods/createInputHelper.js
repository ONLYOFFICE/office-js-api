window.Asc.plugin.init = function(text) {
    if (!window.isInit) {
        window.isInit = true;
        window.Asc.plugin.currentContentControl = null;
        window.Asc.plugin.createInputHelper();
        window.Asc.plugin.getInputHelper().createWindow();
    }
};