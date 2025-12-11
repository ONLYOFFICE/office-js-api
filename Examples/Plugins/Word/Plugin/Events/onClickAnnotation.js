window.Asc.plugin.attachEditorEvent("onClickAnnotation", (data) => {
    console.log("Annotation clicked:", data.rangeId);
});