// This example adds a layout to the specified slide master.

// Create a layout and add it to the slide master.

// Add layout to the slide master.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var nCountBefore = oMaster.GetLayoutsCount();
var oLayout = Api.CreateLayout();
oMaster.AddLayout(0, oLayout);
var nCountAfter = oMaster.GetLayoutsCount();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Number of layouts before adding new layout: " + nCountBefore);
oParagraph.AddLineBreak();
oParagraph.AddText("Number of layouts after adding new layout: " + nCountAfter);
oSlide.RemoveAllObjects();
oSlide.AddObject(oShape);