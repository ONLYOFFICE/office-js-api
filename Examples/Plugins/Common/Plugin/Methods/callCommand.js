window.Asc.plugin.init = function () {
    this.callCommand(function() {
        var oDocument = Api.GetDocument();
        var oParagraph = Api.CreateParagraph();
        oParagraph.AddText("Hello world!");
        oDocument.InsertContent([oParagraph]);
    }, true);
};