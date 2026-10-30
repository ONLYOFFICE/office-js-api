// Disable the plugin toolbar button only when the connection to the server is lost.

// How do I keep the plugin button available while the editor toolbar is blocked for other reasons?

// Let the plugin manage the state of its toolbar button and disable it only when the editor is reconnecting to the server.

window.Asc.plugin.init = function() {
    let tab = new Asc.ButtonToolbar(null);
    tab.text = "My plugin";

    let button = new Asc.ButtonToolbar(tab);
    button.text = "Send";
    button.manageButtonState = true;
    button.attachOnClick(function() {
        console.log("The data has been sent");
    });

    Asc.Buttons.registerToolbarMenu();

    window.Asc.plugin.attachEditorEvent("onChangeButtonDisableState", function(reasons) {
        if (reasons.length > 0)
            console.log("The editor toolbar is blocked by: " + reasons.join(", "));

        button.disabled = reasons.includes("reconnect");
        Asc.Buttons.updateToolbarMenu(tab.id, tab.text, [button]);
    });
};