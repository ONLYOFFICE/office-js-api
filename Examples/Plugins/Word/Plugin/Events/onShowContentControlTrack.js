window.Asc.plugin.attachEditorEvent("onShowContentControlTrack", (ids) => {
    console.log("event: onShowContentControlTrack");
    for (let i = 0; i < ids.length; i++) {
        console.log("Id: " + ids[i]);
    }
});