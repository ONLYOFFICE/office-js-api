// Disable the plugin toolbar button only when the connection to the server is lost.

// Keep the plugin toolbar button available while the editor toolbar is disabled for other reasons.

// Let the plugin disable its toolbar button only on reconnecting, while the editor still disables it when the document is loading or being refreshed, or the About panel is open.

window.Asc.plugin.init = function() {
    let tab = new Asc.ButtonToolbar(null);
    tab.text = "My plugin";

    let button = new Asc.ButtonToolbar(tab);
    button.text = "Send";
    button.ignoreDisabledToolbar = true;
    button.attachOnClick(function() {
        console.log("The data has been sent");
    });

    Asc.Buttons.registerToolbarMenu();

    window.Asc.plugin.attachEditorEvent("onChangeToolbarDisableReasons", function(reasons) {
        if (reasons.length > 0)
            console.log("The editor toolbar is disabled by: " + reasons.join(", "));

        button.disabled = reasons.includes("reconnect");
        Asc.Buttons.updateToolbarMenu(tab.id, tab.text, [button]);
    });
};