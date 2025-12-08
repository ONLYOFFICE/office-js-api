window.Asc.plugin.attachEditorEvent("onParagraphText", (data) => {
    console.log("Paragraph updated:", data.paragraphId);
    data.annotations.forEach(a => {
        console.log(`Annotation ${a.id}: ${a.name} at ${a.start} (${a.length} chars)`);
    });
});