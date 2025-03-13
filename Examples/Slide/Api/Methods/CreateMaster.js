// This example shows how to create a slide master.

// How to add master to the slide.

// Create new slide master and apply it to the slide.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = Api.CreateMaster();
var nCountBefore = oPresentation.GetMastersCount();
oPresentation.AddMaster(nCountBefore, oMaster);
var nCountAfter = oPresentation.GetMastersCount();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Number of masters before adding new master: " + nCountBefore);
oParagraph.AddLineBreak();
oParagraph.AddText("Number of masters after adding new master: " + nCountAfter);
oSlide.RemoveAllObjects();
oSlide.AddObject(oShape);