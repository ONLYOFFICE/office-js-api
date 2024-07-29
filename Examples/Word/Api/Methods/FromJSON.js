// This example transforms paragraph to JSON then restore it from JSON.
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a new paragraph");
var json = oParagraph.ToJSON(false, true);
var oParagraphFromJSON = Api.FromJSON(json);
oParagraphFromJSON.SetBold(true);
oDocument.AddElement(0, oParagraphFromJSON);