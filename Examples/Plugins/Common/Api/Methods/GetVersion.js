window.Asc.plugin.executeMethod ("GetVersion", [], function (version) {
    if (version === undefined) {
        window.Asc.plugin.executeMethod ("PasteText", [ifr.contentDocument.getElementById ("google_translate_element").outerText], function (result) {
            paste_done = true;
        });
    }
    else {
        window.Asc.plugin.executeMethod ("GetSelectionType", [], function (sType) {
            switch (sType) {
                case "none":
                case "drawing":
                    window.Asc.plugin.executeMethod("PasteText", [ifr.contentDocument.getElementById ("google_translate_element").outerText], function (result) {
                        paste_done = true;
                    });
                    break;
                case "text":
                    window.Asc.plugin.callCommand (function () {
                        Api.ReplaceTextSmart (Asc.scope.arr);
                    }, undefined, undefined, function (result) {
                        paste_done = true;
                    });
                    break;
            }
        });
    }
});