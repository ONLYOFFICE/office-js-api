window.Asc.plugin.executeMethod("InsertAndReplaceContentControls", [_obj]);
window.Asc.plugin.onMethodReturn = function(returnValue) {
    if (window.Asc.plugin.info.methodName == "InsertAndReplaceContentControls") {
        window.Asc.plugin.executeMethod("GetAllContentControls");
    } else if ("GetAllContentControls") {
        window.Asc.plugin.executeCommand("close", console.log(JSON.stringify(returnValue)));
    }
};