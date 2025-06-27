window.Asc.plugin.attachEditorEvent("onTargetPositionChanged", () => {
    if (!fClickLabel) {
        window.Asc.plugin.executeMethod("GetCurrentContentControl");
    }
    fClickLabel = false;
});