// This example shows how to get a style by its name.
var oDocument = Api.GetDocument();
var oNoSpacingStyle = oDocument.GetStyle("Heading 6");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oNoSpacingStyle);
oParagraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");