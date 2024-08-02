window.Asc.plugin.executeMethod ("InstallDeveloperPlugin", ["https://example.com/plugin/config.json"], function (result) {
    postMessage (JSON.stringify (result));
});