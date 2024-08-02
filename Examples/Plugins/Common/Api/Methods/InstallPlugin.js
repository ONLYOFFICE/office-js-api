window.Asc.plugin.executeMethod ("InstallPlugin", {config}, function (result) {
    postMessage (JSON.stringify (result));
});