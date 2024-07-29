// This example specifies the border which will be displayed below a set of paragraphs which have the same paragraph border settings.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is the first paragraph. We will add a thin orange border below it.");
oParagraph.SetBottomBorder("single", 8, 0, 255, 111, 61);