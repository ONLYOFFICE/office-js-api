window.Asc.plugin.onExternalPluginMessage = function(data) {
    switch (data.type) {
        case "close": {
            this.executeCommand("close", "");
            break;
        }
        case "insertText": {
            Asc.scope.text = data.text;
            this.callCommand(function() {
                var oDocument = Api.GetDocument();
                var oParagraph = Api.CreateParagraph();
                oParagraph.AddText(Asc.scope.text);
                oDocument.InsertContent([oParagraph]);
            }, false);
            break;
        }
    }
};