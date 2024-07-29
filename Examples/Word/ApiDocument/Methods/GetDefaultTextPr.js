// This example shows how to get a set of default properties for the text run in the current document.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetLanguage("en-US");
oTextPr.SetFontFamily("Comic Sans MS");
oParagraph.AddText("This is just a text.");