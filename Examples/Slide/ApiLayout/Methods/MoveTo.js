// This example shows how to move a layout.

// How to move layout using a position index.

// Move a layout of a slide.

var oPresentation = Api.GetPresentation();
var oSlide1 = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oLayout1 = oMaster.GetLayout(3);
oSlide1.ApplyLayout(oLayout1);
oLayout1.MoveTo(7);
var oLayout2 = oMaster.GetLayout(7);
var oSlide2 = Api.CreateSlide();
oPresentation.AddSlide(oSlide2);
oSlide2.ApplyLayout(oLayout2);
var oSlide3 = Api.CreateSlide();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oSlide3.AddObject(oShape);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("The third layout was moved to the seventh position within the same collection.");
oPresentation.AddSlide(oSlide3);