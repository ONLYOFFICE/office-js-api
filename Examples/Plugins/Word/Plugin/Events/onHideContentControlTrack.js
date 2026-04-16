window.Asc.plugin.attachEditorEvent("onHideContentControlTrack", (ids) => {
    console.log("event: onHideContentControlTrack");
    for (let i = 0; i < ids.length; i++) {
        console.log("Id: " + ids[i]);
    }
});