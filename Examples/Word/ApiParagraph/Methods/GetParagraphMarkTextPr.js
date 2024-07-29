// This example shows how to get the text properties of the paragraph mark which is used to mark the paragraph end.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We set the font size, font color and spacing for the paragraph mark. ");
oParagraph.AddText("You can see it if you download the document, open it and enable the invisible symbols display.");
var oParagraphMarkTextPr = oParagraph.GetParagraphMarkTextPr();
oParagraphMarkTextPr.SetFontSize(52);
oParagraphMarkTextPr.SetColor(255, 255, 0, false);
oParagraphMarkTextPr.SetSpacing(5);