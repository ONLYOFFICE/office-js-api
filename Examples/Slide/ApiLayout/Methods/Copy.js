// This example creates a copy of slide layout and apply it for other slide.

// How to create a copy of a layout.

// Copy a layout of a presentation master.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oLayout = oMaster.GetLayout(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oLayout.AddObject(oShape);
oSlide = Api.CreateSlide();
oPresentation.AddSlide(oSlide);
var oCopyLayout = oLayout.Copy();
oMaster.AddLayout(1, oCopyLayout);
oSlide.ApplyLayout(oCopyLayout);