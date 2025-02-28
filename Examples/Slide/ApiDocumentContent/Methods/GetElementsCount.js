// This example gets elements count and inserts this value into the presentation.

// How to get how many elements a slide shape contains.

// Get a slide shape's content and display its elements count.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("We got the first paragraph inside the shape.");
oParagraph.AddLineBreak();
oParagraph.AddText("Number of elements inside the shape: " + oDocContent.GetElementsCount());
oParagraph.AddLineBreak();
oParagraph.AddText("Line breaks are NOT counted into the number of elements.");
oSlide.AddObject(oShape);