// Log the reasons why the editor toolbar is disabled when the plugin starts.

// Find out whether the editor toolbar is already disabled at the moment the plugin starts.

// Request the current reasons once, later changes arrive with the onChangeToolbarDisableReasons event.

window.Asc.plugin.executeMethod("GetToolbarDisableReasons", [], function(reasons) {
    if (reasons.length > 0)
        console.log("The editor toolbar is disabled by: " + reasons.join(", "));
});