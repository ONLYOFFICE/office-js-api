window.Asc.plugin.attachEditorEvent("onFocusAnnotation", (data) => {
    console.log("Annotation focused:", data.rangeId);
});