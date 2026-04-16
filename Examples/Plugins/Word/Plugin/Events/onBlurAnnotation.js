window.Asc.plugin.attachEditorEvent("onBlurAnnotation", (data) => {
    console.log("event: onBlurAnnotation");
    console.log("paragraphId: " + data.paragraphId);
    console.log("rangeId: " + data.rangeId);
});