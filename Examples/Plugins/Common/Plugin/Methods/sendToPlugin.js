function makeConvetration() {
    if (window.Asc.plugin.windowID) {
        window.Asc.plugin.sendToPlugin("onWindowMessage", {config: oConfig});
    } else {
        window.Asc.plugin.executeMethod('ConvertDocument', [oConfig.convertType, oConfig.htmlHeadings, oConfig.base64img, oConfig.demoteHeadings, oConfig.renderHTMLTags], function(sOutput) {
            document.getElementById("text-area").value = sOutput;
        });
    }
};