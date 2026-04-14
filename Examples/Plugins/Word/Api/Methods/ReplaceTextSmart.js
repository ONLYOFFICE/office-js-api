window.Asc.plugin.executeMethod ("ReplaceTextSmart", [Asc.scope.arr, String.fromCharCode(9), String.fromCharCode(13)], function (isDone) {
    if (!isDone)
        window.Asc.plugin.callCommand (function () {
            Api.ReplaceTextSmart (Asc.scope.arr);
        });
});