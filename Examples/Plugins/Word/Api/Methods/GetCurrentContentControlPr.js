window.Asc.plugin.event_onClick = function (isSelectionUse) {
    window.Asc.plugin.executeMethod("GetCurrentContentControlPr", [], function (obj) {
        window.Asc.plugin.currentContentControl = obj;
        var controlTag = obj && !isSelectionUse ? obj.Tag : "";
        console.log("Current content control tag: " + controlTag);
    });
};