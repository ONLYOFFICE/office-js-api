// This example shows how to get a collection of image objects from the document content.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, oFill, oStroke);
oParagraph.AddDrawing(oShape);
oParagraph = Api.CreateParagraph();
var oImage = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 95 * 36000, 45 * 36000);
oParagraph.AddDrawing(oImage);
var oDocContent = oShape.GetDocContent();
oDocContent.AddElement(0, oParagraph);
var aImages = oDocContent.GetAllImages();
var sClassType = aImages[0].GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type: " + sClassType);
oDocument.Push(oParagraph);