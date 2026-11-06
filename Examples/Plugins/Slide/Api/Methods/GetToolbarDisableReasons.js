// Log the reasons why the editor toolbar is disabled when the plugin starts.

// How do I find out whether the editor toolbar is already disabled when the plugin starts?

// Request the current reasons once, their later changes come with the onChangeToolbarDisableReasons event.

window.Asc.plugin.executeMethod("GetToolbarDisableReasons", [], function(reasons) {
    if (reasons.length > 0)
        console.log("The editor toolbar is disabled by: " + reasons.join(", "));
});