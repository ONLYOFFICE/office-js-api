window.Asc.plugin.init = function(text) {
    if (!window.isInit) {
        window.isInit = true;
        window.Asc.plugin.currentText = "";
        window.Asc.plugin.createInputHelper();
        window.Asc.plugin.getInputHelper().createWindow();
    }
};