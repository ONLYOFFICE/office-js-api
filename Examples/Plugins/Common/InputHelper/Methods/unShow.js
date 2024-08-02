window.Asc.plugin.executeMethod ("SelectContentControl", [window.Asc.plugin.currentContentControl.InternalId], function() {
    window.Asc.plugin.executeMethod("InputText", [item.text]);
    window.Asc.plugin.getInputHelper().unShow();
});