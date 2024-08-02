window.Asc.plugin.event_onTargetPositionChanged = function() {
    if (!fClickLabel) {
        window.Asc.plugin.executeMethod("GetCurrentContentControl");
    }
    fClickLabel = false;
};