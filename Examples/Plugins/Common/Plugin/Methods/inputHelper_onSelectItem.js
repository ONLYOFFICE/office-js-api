window.Asc.plugin.inputHelper_onSelectItem = function(item) {
    if (!item)
        return;

    window.Asc.plugin.executeMethod("InputText", [item.text, window.Asc.plugin.currentText]);
    window.Asc.plugin.getInputHelper().unShow();
};