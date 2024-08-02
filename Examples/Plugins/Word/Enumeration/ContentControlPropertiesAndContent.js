var oControlPrContent = {
    "Props": {
        "Id": 100,
        "Tag": "CC_Tag",
        "Lock": 3
    },
    "Script": "var oParagraph = Api.CreateParagraph();oParagraph.AddText('Hello world!');Api.GetDocument().InsertContent([oParagraph]);"
};
var arrDocuments = [oControlPrContent];
window.Asc.plugin.executeMethod("InsertAndReplaceContentControls", [arrDocuments]);