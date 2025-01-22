window.Asc.plugin.executeMethod ("GetSelectionType", [], function(type) {
    switch (type) {
        case "none":
        case "drawing":
            window.Asc.plugin.executeMethod ("PasteText", [$("#txt_shower")[0].innerText]);
            break;
        case "text":
            window.Asc.plugin.callCommand (function() {
                Api.ReplaceTextSmart (Asc.scope.arr);
            });
            break;
    }
});