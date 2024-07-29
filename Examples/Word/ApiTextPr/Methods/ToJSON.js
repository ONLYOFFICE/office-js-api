// This example converts the ApiTextPr object into the JSON object.
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetFontFamily("Comic Sans MS");
var json = oTextPr.ToJSON(true);
var oTextPrFromJSON = Api.FromJSON(json);
oTextPrFromJSON.SetFontSize(30);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text with the font size set to 15 points using the text properties.");
oParagraph.SetTextPr(oTextPrFromJSON);