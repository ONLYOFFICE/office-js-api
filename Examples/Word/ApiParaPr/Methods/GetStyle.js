// This example shows how to get the paragraph style.
var oDocument = Api.GetDocument();
var oHeading6Style = oDocument.GetStyle("Heading 6");
var oParagraph = oDocument.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetJc("center");
oParaPr.SetStyle(oHeading6Style);
oParagraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
var oStyle = oParaPr.GetStyle();
oParagraph.AddLineBreak();
oParagraph.AddText("Style: " + oStyle.GetName());