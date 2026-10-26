// Decide whether the plugin button must be disabled when the editor toolbar is masked.

// How do I learn why the editor wants to disable the plugin button?

// Log the reasons reported by the editor and apply the resulting state to the plugin button.

window.Asc.plugin.init = function() {
    window.Asc.plugin.attachEditorEvent("onChangeButtonDisableState", function(reasons) {
        if (reasons.length > 0)
            console.log("The plugin button is blocked by: " + reasons.join(", "));

        window.Asc.plugin.executeMethod("SetPluginButtonDisabled", [reasons.length > 0]);
    });
};