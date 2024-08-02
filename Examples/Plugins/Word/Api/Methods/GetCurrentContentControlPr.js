window.Asc.plugin.event_onClick = function (isSelectionUse) {
    window.Asc.plugin.executeMethod ("GetCurrentContentControlPr", [], function (obj) {
        window.Asc.plugin.currentContentControl = obj;
        var controlTag = obj ? obj.Tag : "";
        if (isSelectionUse)
            controlTag = "";
        ... 
    }); 
}; 