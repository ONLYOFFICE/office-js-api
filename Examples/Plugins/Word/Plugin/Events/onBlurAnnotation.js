window.Asc.plugin.attachEditorEvent("onBlurAnnotation", (data) => {
    console.log("Annotation blur:", data.rangeId);
});