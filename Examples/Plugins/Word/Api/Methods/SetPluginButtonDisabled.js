// Disable the plugin button while the plugin prepares its data.

// How do I control the state of the plugin button from the plugin itself?

// Turn the plugin button off before a long operation and turn it back on when the operation is over.

window.Asc.plugin.init = function() {
    window.Asc.plugin.executeMethod("SetPluginButtonDisabled", [true]);

    setTimeout(function() {
        window.Asc.plugin.executeMethod("SetPluginButtonDisabled", [false]);
    }, 3000);
};