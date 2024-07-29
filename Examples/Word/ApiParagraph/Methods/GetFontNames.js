// This example shows how to get all font names from all elements inside the paragraph.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text.");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetFontFamily("Calibri Light");
oRun.AddText("This is a text run with the font family set to 'Calibri Light'.");
oParagraph.AddElement(oRun);
var arrFonts = oParagraph.GetFontNames();
var oNewParagraph = Api.CreateParagraph();
oNewParagraph.AddText("Fonts from previous paragraph: " + arrFonts.join(", "));
oDocument.AddElement(1, oNewParagraph);


