// This example creates a paragraph copy.

// How to add a duplicate paragraph.

// Copy a paragraph and add it to the shape.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
oDocContent.RemoveAllElements();
var oParagraph = Api.CreateParagraph();
oParagraph.SetJc("left");
oParagraph.AddText("This is just a sample text that was copied.");
oDocContent.Push(oParagraph);
var oCopyParagraph = oParagraph.Copy();
oDocContent.Push(oCopyParagraph);
oSlide.AddObject(oShape);