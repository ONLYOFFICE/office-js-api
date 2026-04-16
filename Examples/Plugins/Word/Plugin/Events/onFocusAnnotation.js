window.Asc.plugin.attachEditorEvent("onFocusAnnotation", (data) => {
    console.log("event: onFocusAnnotation");
    console.log("paragraphId: " + data.paragraphId);
    console.log("rangeId: " + data.rangeId);
});