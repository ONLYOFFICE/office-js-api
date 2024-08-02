window.Asc.plugin.executeMethod ("UpdatePlugin", {config}, function (result) {
    postMessage (JSON.stringify (result));
});