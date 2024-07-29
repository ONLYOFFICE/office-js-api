// This example shows how to get the shading applied to the contents of the paragraph.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is an example of setting a shade to a paragraph. ");
oParagraph.SetShd("clear", 255, 111, 61, false);
var oShade = oParagraph.GetShd();
oParagraph = Api.CreateParagraph();
var oFill = Api.CreateSolidFill(oShade);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 10 * 36000, 3 * 36000, oFill, oStroke);
oParagraph.AddText("Shade: ");
oParagraph.AddDrawing(oDrawing);
oDocument.Push(oParagraph);