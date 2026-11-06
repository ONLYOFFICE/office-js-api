// Log the reasons why the editor toolbar is blocked when the plugin starts.

// How do I find out whether the editor toolbar is already blocked when the plugin starts?

// Request the current reasons once, their later changes come with the onChangeButtonDisableState event.

window.Asc.plugin.executeMethod("GetButtonDisableState", [], function(reasons) {
    if (reasons.length > 0)
        console.log("The editor toolbar is blocked by: " + reasons.join(", "));
});