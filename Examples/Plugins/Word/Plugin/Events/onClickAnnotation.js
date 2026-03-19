window.Asc.plugin.attachEditorEvent("onClickAnnotation", (data) => {
    console.log("event: onClickAnnotation");
    console.log("paragraphId: " + data.paragraphId);
    for (let i = 0; i < data.ranges.length; i++) {
        console.log("rangeId: " + data.ranges[i]);
    }
});