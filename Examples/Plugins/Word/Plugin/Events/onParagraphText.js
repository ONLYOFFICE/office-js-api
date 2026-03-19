window.Asc.plugin.attachEditorEvent("onParagraphText", (data) => {
    console.log("event: onParagraphText");
    console.log("paragraphId: " + data.paragraphId);
    console.log("recalcId: " + data.recalcId);
    console.log("text: " + data.text);
    if (data.annotations) {
        for (let i = 0; i < data.annotations.length; i++) {
            let a = data.annotations[i];
            console.log("annotation id: " + a.id + ", name: " + a.name + ", start: " + a.start + ", length: " + a.length);
        }
    }
});